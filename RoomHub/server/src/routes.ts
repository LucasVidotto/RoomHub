// routes.ts
import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { LoginSchema } from "./schemas";
import jwt from "jsonwebtoken";
import { findUserByEmail } from "./functions";
import { prisma } from "./lib/prisma";
import { z } from "zod"

const routes = (app: FastifyInstance, opts: any, done: () => void) => {
  app.post("/login", async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const { email, password } = LoginSchema.parse(request.body);

      // Buscar o usuário no banco de dados com base no email fornecido
      const user = await findUserByEmail(email);

      if (!user) {
        reply.code(401).send({ message: "Credenciais inválidas" });
        return;
      }

      // Verificar se a senha fornecida corresponde à senha do usuário
      if (user.password !== password) {
        reply.code(401).send({ message: "Credenciais inválidas" });
        return;
      }

      // Gera um token JWT
      const secretKey = "SEU_SEGREDO_AQUI"; // Pode ser uma string aleatória e segura
      const token = jwt.sign({ userId: user.id }, secretKey, { expiresIn: "1h" });

      return { token };
    } catch (error) {
      console.error(error);
      reply.code(400).send({ message: "Erro ao fazer login" });
    }
  });

  app.get("/users", async (request: FastifyRequest, reply: FastifyReply) => {
    const { email } = request.query; // Obtém o email da query string

    try {
      const user = await findUserByEmail(email);

      if (!user) {
        return reply.status(404).send({ error: "Usuário não encontrado." });
      }

      return reply.send(user);
    } catch (error) {
      console.error("Erro ao buscar usuário:", error);
      return reply.status(500).send({ error: "Erro ao buscar usuário." });
    }
  });

  app.get('/statusrooms', async (request, reply)=>{
    try {
      const acc = await prisma.acceptance.findMany()
    
      reply.send(acc);
    } catch (error) {
      console.error("Erro ao buscar reservas:", error);
      reply.status(500).send({ error: "Erro ao buscar reservas." });

    }
  })

  app.post("/acceptance-to-reserve", async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      // Buscar os dados da tabela Acceptance
      const acceptances = await prisma.acceptance.findMany();

      // Inserir os dados na tabela Reserve
      const insertPromises = acceptances.map(async (acceptance) => {
        await prisma.reserve.create({
          data: {
            title: acceptance.title,
            author: acceptance.author,
            status: acceptance.status,
          },
        });
      });

      await Promise.all(insertPromises);

      reply.send({ message: "Dados da tabela Acceptance inseridos na tabela Reserve com sucesso." });
    } catch (error) {
      console.error("Erro ao inserir dados na tabela Reserve:", error);
      reply.status(500).send({ error: "Erro ao inserir dados na tabela Reserve." });
    }
  });

  app.put('/updateAccept/:id', async (request: FastifyRequest, reply: FastifyReply) => {
    const { id } = request.params;
    console.log('id : '+id);
    const updateReserve = z.object({
      title: z.string(),
      author: z.string(),
      status: z.boolean(),
    });
  
    try {
      const { title, author, status } = updateReserve.parse(request.body);
      console.log(status)
  
      await prisma.acceptance.update({
        where: { id: parseInt(id) },
        data: {
          title,
          author,
          status,
        },
      });
  
      reply.send({ message: "Dados da tabela Acceptance Modificados com sucesso." });
    } catch (error) {
      console.error("Erro ao atualizar dados na tabela Reserve:", error);
      reply.status(500).send({ error: "Erro ao atualizar dados na tabela Reserve." });
    }
  });

  done();
};

export default routes;
