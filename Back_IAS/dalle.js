const { Configuration, OpenAIApi } = require("openai");
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const configuration = new Configuration({
  /* apiKey: process.env.OPENAI_API_KEY, */
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

// Set up the server
const app = express();
app.use(bodyParser.json());
app.use(cors());

// Set up the DALL-E endpoint
app.post("/image", async (req, res) => {
  // Get the prompt from the request
  /* const { prompt } = req.body; */
  const prompt = 'A prototype of a web contact screen'

  // Generate image from prompt
  const response = await openai.createImage({
    prompt: prompt,
    n: 1,
    size: "1024x1024",
  });
  // Send back image url
  res.send(response.data.data[0].url);
});

// Start the server
const port = 8080;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});