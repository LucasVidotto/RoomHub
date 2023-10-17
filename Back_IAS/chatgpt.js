// EXPRESS
require('dotenv').config();
const express = require('express');
const app = express();
app.use(express.json())


//CORS
const cors = require('cors');
app.use(cors());
app.options('*', cors());

// OPEN-AI
const {Configuration, OpenAIApi} = require("openai");
const config = new Configuration({
  apiKey: process.env.KEY_CHAT_GPT,
});
const openai = new OpenAIApi(config);


// GET DE TESTE
app.get('/api/call', (request,response) => {
    return response.send({'message': 'Hello World'});
});

/* const messages = [{"role": "user", "content": "What's the weather like in Boston?"}]; */
// POST
app.post('/api/call', async (req, res) =>{
    try {
        const runPrompt = async () =>{
            const response = await openai.createCompletion({
                /* model: "text-davinci-003", */
                model: "gpt-3.5-turbo-instruct",
                prompt: req.body.prompt,
                /* messages: messages, */
                max_tokens: 400,
                temperature: 0.4,
              });
              return response.data;
        };
        const responseFromAPI = await runPrompt();

        console.log(responseFromAPI.choices[0].text);
        res.send(responseFromAPI.choices[0].text);
      } catch (error) {
        console.error("error : " + error);
        res.status(500).send('Erro ao criar palavra-chave');
      }
} );

app.listen(process.env.PORT || 3000, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at http://localhost:3000`);
});