// node.js instalar
// vite framework
// npm i express -- Para instalar o express, que é o api
// npm init -y -- para fazer o package.json
// incluir isso no package.json depois de license "dependencies": { "express": "^4.21.0"} e depois executá-lo para assim criar o package-lock.json
// req = requisitar e res = resposta
// quando acessar a url / vai ter a resposta Hello 
// adicionar isso ,"dev": "node api.js" depois de test
// rodar no terminar com npm run dev

const express = require('express')
const app = express();

const port = 3000;

app.get('/', (req,res) => {
    res.send("Hello")
})

app.listen(port, () => {
    console.log(`Exemplo de app sendo "escutado" na porta ${port}`)
})

