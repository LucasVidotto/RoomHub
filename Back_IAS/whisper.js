const axios = require('axios');
const fs = require('fs');
const path = require('path');
const FormData = require('form-data');
const { error } = require('console');

const OPENAI_KEY = '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';
const filePath = path.join(__dirname, "Gravando.m4a");
const model = "whisper-1";

const formData = new FormData();
formData.append("model",model);
formData.append("file", fs.createReadStream(filePath));

axios.post("https://api.openai.com/v1/audio/transcriptions", formData, {
    headers:{
        Authorization: `Bearer ${OPENAI_KEY}`,
        "Content-Type" : `multipart/form-data; boundary=${formData._boundary}`,
    }
}).then((response) =>{
     console.log(response.data);
}).catch((error) =>{
    console.log('error: '+error)
})