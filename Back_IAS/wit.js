const express = require('express');
const axios = require('axios');

const app = express();

const token = 'GWBEYNFXUBX5T443JXATCCH5PTWOJ2NG';

app.post('/create-entity-keyword', async (req, res) => {
  try {
    /* const entity = req.body.entity;
    const keyword = req.body.keyword;
    const synonyms = req.body.synonyms; */

    const entity = 'favorite_city';
    const keyword = 'Paris';
    const synonyms = ['Paris', 'City of Light', 'Capital of France'];

    const data = {
      keyword,
      synonyms,
    };

    const config = {
      method: 'post',
      url: `https://api.wit.ai/entities/${entity}/keywords?v=20230215`,
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      data,
    };

    const response = await axios(config);

    if (response.status === 201) {
      res.status(201).send('Palavra-chave criada com sucesso!');
    } else {
      res.status(500).send('Erro ao criar palavra-chave');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao criar palavra-chave');
  }
});

app.listen(3000, () => {
  console.log('Express app listening on port 3000');
});