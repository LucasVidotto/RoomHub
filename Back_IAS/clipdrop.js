const express = require('express');
const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs'); // Módulo para leitura de arquivos
const path = require('path'); // Módulo para lidar com caminhos de arquivos
const app = express();

const YOUR_API_KEY = '8a1d0e047bffde3e7cc66f0c7ab33c3f38cbac97d743402e5d94b924e9209b7b6881ae68f348c37bfc842d6974904b8f';

app.use(express.json());
// ************************ remover back ground***********/
app.post('/remove-background', async (req, res) => {
  try {
    const form = new FormData();

    // Caminho para a imagem de teste
    const imagePath = path.join(__dirname, 'images.png');

    // Lendo a imagem como um stream e anexando ao formulário
    form.append('image_file', fs.createReadStream(imagePath));

    const axiosConfig = {
      method: 'post',
      url: 'https://clipdrop-api.co/remove-background/v1',
      headers: {
        'x-api-key': YOUR_API_KEY,
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
    const imagePath = path.join(__dirname, 'images.png');

    // Lendo a imagem como um stream e anexando ao formulário
    form.append('image_file', fs.createReadStream(imagePath));
    // prompet para novo background
    form.append('prompt', 'espelhos refletindo a lua')

    const axiosConfig = {
      method: 'post',
      url: 'https://clipdrop-api.co/replace-background/v1',
      headers: {
        'x-api-key': YOUR_API_KEY,
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

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});