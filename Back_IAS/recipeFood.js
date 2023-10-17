const express = require('express');
const axios = require('axios');

const app = express();

app.get('/recipes', async (req, res) => {
  const options = {
    method: 'GET',
    url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch',
    params: {
      /* ...req.query, */
      query: 'pasta',
      cuisine: 'italian'
    },
    headers: {
      'X-RapidAPI-Key': '266fb779cbmsh82a15fc15e95f93p1a7bd0jsn64085581fe9f',
      'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    res.status(200).json(response.data);
  } catch (error) {
    console.log('error: '+error)
    res.status(500).json({ error });
  }
});

app.listen(3000, () => console.log('Server started on port 3000'));