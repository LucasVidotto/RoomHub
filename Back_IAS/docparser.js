const express = require('express');
const fs = require('fs');
const PDFParser = require('pdf-parse');
const app = express();

app.get('/', async (req, res) => {
  try {
    // Ler o arquivo PDF do disco
    const fileContents = fs.readFileSync('este.pdf');

    // Usar a biblioteca pdf-parse para extrair o texto do PDF
    const pdfParser = new PDFParser();
    pdfParser.parseBuffer(fileContents);

    // Quando o parsing estiver completo, tratar os resultados
    pdfParser.on('pdfParser_dataReady', (data) => {
      // O conteúdo do PDF estará em data.text
      const pdfText = data.text;

      // Retornar o texto ao cliente
      res.send(pdfText);
    });
  } catch (error) {
    // Lidar com o erro
    res.send(error);
  }
});

app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});
