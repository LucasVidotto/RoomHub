const express = require('express');
const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs'); // Módulo para leitura de arquivos
const path = require('path'); // Módulo para lidar com caminhos de arquivos
const app = express();

const YOUR_API_KEY = "8a1d0e047bffde3e7cc66f0c7ab33c3f38cbac97d743402e5d94b924e9209b7b6881ae68f348c37bfc842d6974904b8f";

app.use(express.json());

app.post('/create-image', async (req, res) => {
  try {
    const form = new FormData();

    // Caminho para a imagem de teste
    form.append('prompt', 'a book, full of information, with a nature background, and information coming out of the book');

    const axiosConfig = {
      method: 'post',
      url: 'https://clipdrop-api.co/text-to-image/v1',
      headers: {
        'x-api-key': YOUR_API_KEY,
        ...form.getHeaders(),
      },
      data: form,
      responseType: 'arraybuffer',
    };
    const response = await axios(axiosConfig);
    const buffer = response.data;
    res.contentType('image/png');
    res.end(buffer, 'binary');
  } catch (error) {
    console.error('erro:  ' + error);
    res.status(500).send('Erro ao criar imagem');
  }
});

app.post('/remove-background', async (req, res) => {
  try {
    const form = new FormData();

    // Caminho para a imagem de teste
    const imagePath = path.join(__dirname, 'MariChat.png');

    // Lendo a imagem como um stream e anexando ao formulário
    form.append('image_file', fs.createReadStream(imagePath));

    const axiosConfig = {
      method: 'post',
      url: 'https://clipdrop-api.co/remove-background/v1',
      headers: {
        'x-api-key': YOUR_API_KEY,
        ...form.getHeaders(),
      },
      data: form,
      responseType: 'arraybuffer',
    };

    const response = await axios(axiosConfig);

    const buffer = response.data;
    
    // Envia a imagem resultante sem fundo como resposta
    res.contentType('image/png');
    res.end(buffer, 'binary');
  } catch (error) {
    console.error('erro:  ' + error);
    res.status(500).send('Erro ao remover o fundo da imagem');
  }
});

app.post('/replace-background', async (req, res) => {
  try {
    const form = new FormData();

    // Caminho para a imagem de teste
    const imagePath = path.join(__dirname, 'MariChat.png');

    // Lendo a imagem como um stream e anexando ao formulário
    form.append('image_file', fs.createReadStream(imagePath));
    form.append('prompt', 'a wooden door')
    
    const axiosConfig = {
      method: 'post',
      url: 'https://clipdrop-api.co/replace-background/v1',
      headers: {
        'x-api-key': YOUR_API_KEY,
        ...form.getHeaders(),
      },
      data: form,
      responseType: 'arraybuffer',
    };

    const response = await axios(axiosConfig);

    const buffer = response.data;
    
    // Envia a imagem resultante sem fundo como resposta
    res.contentType('image/png');
    res.end(buffer, 'binary');
  } catch (error) {
    console.error('erro:  ' + error);
    res.status(500).send('Erro ao replicar o fundo da imagem');
  }
});

app.post('/remove-text', async (req, res) => {
  try {
    const form = new FormData();

    // Caminho para a imagem de teste
    const imagePath = path.join(__dirname, 'alone.jpg');

    // Lendo a imagem como um stream e anexando ao formulário
    form.append('image_file', fs.createReadStream(imagePath));
    
    const axiosConfig = {
      method: 'post',
      url: 'https://clipdrop-api.co/remove-text/v1',
      headers: {
        'x-api-key': YOUR_API_KEY,
        ...form.getHeaders(),
      },
      data: form,
      responseType: 'arraybuffer',
    };

    const response = await axios(axiosConfig);

    const buffer = response.data;
    
    // Envia a imagem resultante sem fundo como resposta
    res.contentType('image/png');
    res.end(buffer, 'binary');
  } catch (error) {
    console.error('erro:  ' + error);
    res.status(500).send('Erro ao replicar o fundo da imagem');
  }
});

app.post('/sketch-image', async (req, res) => {
  try {
    const form = new FormData();

    // Caminho para a imagem de teste
    const imagePath = path.join(__dirname, 'MariChat.png');

    // Lendo a imagem como um stream e anexando ao formulário
    form.append('image_file', fs.createReadStream(imagePath));
    form.append('prompt', 'a black woman, afro hair, smiling, cinematic')
    
    const axiosConfig = {
      method: 'post',
      url: 'https://clipdrop-api.co/sketch-to-image/v1/sketch-to-image',
      headers: {
        'x-api-key': YOUR_API_KEY,
        ...form.getHeaders(),
      },
      data: form,
      responseType: 'arraybuffer',
    };

    const response = await axios(axiosConfig);

    const buffer = response.data;
    
    // Envia a imagem resultante sem fundo como resposta
    res.contentType('image/png');
    res.end(buffer, 'binary');
  } catch (error) {
    console.error('erro:  ' + error);
    res.status(500).send('Erro ao aplicar cinematic em imagem');
  }
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
