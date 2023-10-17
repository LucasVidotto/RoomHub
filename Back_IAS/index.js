const fastify = require("fastify");
const openai = require("openai");

const configuration = new openai({
  apiKey: "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"
})

const app = fastify();


app.post("/", async (req, res) => {
  const prompt = "A wet on wet oil painting of a dog by Bob Ross.";

  const { data } = await configuration.createImage({
    prompt: prompt,
    n: 1,
    size: "512x512",
  });

  res.status(200).send({ text: data.data[0].url });
});

app.listen(8080, () => {
  console.log("Servidor rodando na porta 8080");
});