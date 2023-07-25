import Fastify from "fastify";
import routes from "./routes";
import fastifyCors from "@fastify/cors"; // Importe o pacote @fastify/cors

const app = Fastify();

// Registra as rotas
app.register(routes);

// Configurações do CORS
app.register(fastifyCors, {
  origin: "http://localhost:3000", // Troque para o endereço correto da sua aplicação React
});

// Inicia o servidor
app.listen(3333, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
