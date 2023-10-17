import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const response = await openai.chat.completions.create({
  model: "gpt-3.5-turbo",
  messages: [],
  temperature: 0.8,
  max_tokens: 256,
});

app.post('/api/call', async (req, res) =>{

  const runPrompt = async () =>{
      const response = await openai.createCompletion({
          model: "text-davinci-003",
          messages: [],
          prompt: req.body.prompt,
          max_tokens: 200,
          temperature: 0.8,
        });
        return response.data;
  };

  const responseFromAPI = await runPrompt();

  console.log(responseFromAPI.choices[0].text);
  res.send(responseFromAPI.choices[0].text);

} );