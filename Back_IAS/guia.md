const fastify = require("fastify");
const openai = require("openai");

const apiKey = "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";

const openaiClient = new openai({
apiKey,
});

const app = fastify();

app.get("/", async (req, res) => {
const completions = await openaiClient.chat.completions.create({
prompt: "man stepping on asphalt with boot",
n: 1,
size: "1024x1024",
model: "davinci-instruct-beta",
messages: [
{
text: "I'm sorry, I don't understand.",
},
],
});

res.send(completions.choices);
});

app.listen(8080, () => {
console.log("Servidor rodando na porta 8080");
});

//http://localhost:8080
