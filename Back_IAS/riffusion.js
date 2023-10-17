const express = require("express");
const rifffusion = require("riffusion");

const app = express();

// Criar um roteador para gerar música
app.post("/generate", async (req, res) => {
  // Obter o prompt de texto do corpo da solicitação
  /* const prompt = req.body.prompt; */
  const prompt = "Uma música que soa como o mar"

  // Gerar música
  const music = await rifffusion.generate(prompt);

  // Retornar a música como uma resposta
  res.send(music);
});

// Iniciar o servidor
app.listen(3000, () => {
  console.log("Servidor iniciado na porta 3000");
});