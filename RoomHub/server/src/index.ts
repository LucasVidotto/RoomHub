import { FastifyInstance } from "fastify"
import { prisma } from "./lib/prisma"
import { z } from "zod"
/* import dayjs from "dayjs" */

export async function appRoutes(app: FastifyInstance){
    app.get('/first', async ()=>{
        const reserve = await prisma.reserve.findMany({
            where: {
                title: {
                    startsWith: 'Sala'
                }   
            }
        })
        return reserve
    })

    app.post('/second', async(request)=>{
        const createReserve = z.object({
            id : z.number(),
            title : z.string(),
            author: z.string(),
            status: z.boolean(),
        })

        const {id, title, author, status} = createReserve.parse(request.body)

        await prisma.reserve.create({
            data:{
                id,
                title,
                author,
                status,
            }
        })
    })

    app.put('/update/:id', async (request) => {
        const { id } = request.params;
      
        const updateReserve = z.object({
          title: z.string(),
          author: z.string(),
          status: z.boolean(),
        });
        
        const { title, author, status } = updateReserve.parse(request.body);
        
        await prisma.reserve.update({
          where: { id: parseInt(id) },
          data: {
            title,
            author,
            status,
          },
        });
        return { message: 'Reserva atualizada com sucesso.' };
      });

      app.get('/users', async (request, reply) => {
        const { email } = request.query; // Obtém o email da query string
      
        try {
          const user = await prisma.user.findUnique({
            where: {
              email: email,
            },
          });
      
          if (!user) {
            return reply.status(404).send({ error: 'Usuário não encontrado.' });
          }
      
          return reply.send(user);
        } catch (error) {
          console.error('Erro ao buscar usuário:', error);
          return reply.status(500).send({ error: 'Erro ao buscar usuário.' });
        }
      });
}