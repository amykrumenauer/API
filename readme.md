// node.js instalar
// vite framework

GIT:
Para puxar o código do git para o vs code:
cd dow + tab
git commit + link do git 
acessar o dow e pegar a pasta

Para atualizar o código do git:
certifique-se estar na pasta: git status
para selecionar tudo o que está no vs code: git add .
para modificar e adicionar no repositório: git commit -m

Comandos básicos:
// npm i express -- Para instalar o express, que é o api
// npm init -y -- para fazer o package.json
// incluir isso no package.json depois de license "dependencies": { "express": "^4.21.0"} e depois executá-lo para assim criar o package-lock.json
// adicionar isso ,"dev": "node api.js" depois de test
// ctrl + j abre o terminal

Explicações do código:
// req = requisitar e res = resposta
// quando acessar a url / vai ter a resposta Hello 

Para rodar:
// rodar no terminal com npm run dev

Protocolos https:
// http - sem certificação
// https - com certificação
// https protocolos: post, put, get e delete

A P I 
// API significa Application Programming Interface (Interface de Programação de Aplicação).
// APIs são mecanismos que permitem que dois componentes de software se comuniquem usando um conjunto de definições e protocolos.
// Postman - app para testar API
// API soap - trabalha com xml
// API rest - trabalha com json

Postman
- Entrar e criar uma conta
- Criar uma new collection
- get
- Clicar em new e colocar em http
- Digitar http://localhost:3000
- Vai aparecer o hello
- post, json

Nodemon
// npm i nodemon - atualiza o server toda hora que salva o código
// mudar depois de test no package.json "dev": "nodemon api.js"

Função anônima ou arrow:
- Com flexinha =>

Método da pilha
push - coloca na lista
pop - tira o último da lista