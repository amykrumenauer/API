Este aplicativo React é um sistema simples para gerenciar veículos, permitindo a inserção, atualização, remoção e consulta de dados.

// node.js instalar
// vite framework de frontend 
id do localhost 127.0.0.1

GIT:
Para puxar o código do git para o vs code:
cd dow + tab
git clone + link do git 
acessar o dow e pegar a pasta

Para atualizar o código do git:
certifique-se estar na pasta: git status
para selecionar tudo o que está no vs code: git add .
para modificar e adicionar no repositório: git commit -m "algo que quiser escrever"
git push

Comandos básicos:
// npm i express -- Para instalar o express, framework de gerenciamento das rotas
// npm init -y -- para fazer o package.json
// incluir isso no package.json depois de license "dependencies": { "express": "^4.21.0"} e depois executá-lo para assim criar o package-lock.json
// adicionar isso ,"dev": "node api.js" depois de test
// ctrl + j abre o terminal
npm i axios 
npm i cors

Explicações do código:
// req = requisitar = body ou params
// res = resposta 
// quando acessar a url / vai ter a resposta Hello 

Para rodar:
// rodar no terminal com npm run dev

Protocolos https:
// http - sem certificação
// https - com certificação
// https protocolos: post, put, get e delete

HTTP
Protocolo de transferência
GET: Utilizado para obter dados e informações do servidor.
POST: Utilizado para enviar ou criar dados no servidor.
PUT: Utilizado para atualizar dados completamente.
PATCH: Utilizado para atualizar dados parcialmente.
DELETE: Utilizado para excluir dados do servidor.

Protocolo de rede
é um conjunto de regras e padrões que compõe uma espécie de “linguagem universal” entre computadores e dispositivos

Diferença de framework e biblioteca
bibliotecas oferecem funcionalidades específicas para tarefas isoladas, ex: React
frameworks fornecem uma estrutura mais abrangente para o desenvolvimento de aplicativos, ex: Angular

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

Banco de dados
npm i mysql2 - instala o protocolo 
porta: 3306

Comandos DQL
SELECT

Comandos DML
INSERT
UPDATE
DELETE

Comandos DDL
ALTER
DROP
CREATE

Dois tipos de bd
Relacional
Não relacional

Dois tipos de memória
Volátil: que se perde, ex: memória ram
Não volátil: não se perde, ex: pen drive. hd. banco de dados

// Meu banco de dados Veiculos

CREATE DATABASE Veiculos;

USE Veiculos;

CREATE TABLE Veiculos (
	id INT NOT NULL, 
    marca VARCHAR(50),
    modelo VARCHAR(50),
    ano INT,
	cor VARCHAR(15),
    proprietario VARCHAR(50)
)