const express = require('express');
const app = express();
app.use(express.json());
const port = 3000;

let personList = [];

app.get('/', (req, res) => {
    res.send(personList);
});

// Novo usuário
app.post('/cadastrar', (req, res) => {
    const { id, name, age } = req.body;
    personList.push({ id, name, age });
    res.send(`Usuário recebido!\n\nID: ${id} \nNome do usuário: ${name}, \nAge: ${age}`);
});

// Mostra todos
app.get('/visualizar', (req, res) => {
    res.send(personList);
});

// Atualizar por id
app.put('/atualizar/:id', (req, res) => {
    const { id } = req.params;
    const { name, age } = req.body;
    const person = personList[id];
    if (person) {
        personList[id] = { id, name, age };
        res.send(`Usuário atualizado!\nNovo ID: ${id}\nNovo nome: ${name} \nNova idade: ${age}`);
    } else {
        res.status(404).send('Usuário não encontrado');
    }
});

// Deletar por id
app.delete('/deletar/:id', (req, res) => {
    const { id } = req.params;
    if (personList[id]) {
        personList.splice(id, 1);
        res.send('Usuário deletado com sucesso');
    } else {
        res.status(404).send('Usuário não encontrado');
    }
});

app.listen(port, () => {
    console.log(`Exemplo de app sendo "escutado" na porta ${port}`);
});


