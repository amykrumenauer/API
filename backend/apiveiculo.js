const express = require('express');
const cors = require('cors');
const banco = require('./banco');
const app = express();
app.use(express.json());
const port = 3000;

// npm i cors
app.use(cors({
    origin:'*'
}));

// novo veículo
app.post('/inserir', (req, res) => {
    const { id, marca, modelo, ano, cor, proprietario } = req.body;
    console.log("O frontend requisitou uma rota de api")
    banco.query(
        `INSERT INTO Veiculos (id, marca, modelo, ano, cor, proprietario) VALUES (?, ?, ?, ?, ?, ?)`,
        [Number(id), marca, modelo, Number(ano), cor, proprietario],
        (err, results) => {
            if (err) {
                console.error('Erro na inserção', err);
                return res.status(500).send('Erro na inserção');
            }
            res.send(`Veículo recebido!\n\nID: ${id} \nMarca: ${marca} \nModelo: ${modelo} \nAno: ${ano} \nCor: ${cor} \nProprietário: ${proprietario}`);
        }
    );
});

// atualizar por ID
app.put('/atualizar/:id', (req, res) => {
    const { id } = req.params;
    const { marca, modelo, ano, cor, proprietario } = req.body;
    banco.query(
        `UPDATE veiculos SET marca = ?, modelo = ?, ano = ?, cor = ?, proprietario = ? WHERE id = ?`,
        [marca, modelo, Number(ano), cor, proprietario, Number(id)],
        (err, results) => {
            if (err) {
                console.error('Erro na atualização', err);
                return res.status(500).send('Erro na atualização');
            }
            res.send(`Carro atualizado: ${marca}, ${modelo}, ${ano}, ${cor}, ${proprietario}`);
        }
    );
});

// deletar por ID
app.delete('/deletar/id/:id', (req, res) => {
    const { id } = req.params;
    banco.query(
        `DELETE FROM veiculos WHERE id = ?`,
        [Number(id)],
        (err, results) => {
            if (err) {
                console.error('Ops, erro para deletar.', err);
                return res.status(500).send('Erro ao deletar');
            }
            res.send(`Carro deletado com sucesso!`);
        }
    );
});

// deletar por modelo
app.delete('/deletar/modelo/:modelo', (req, res) => {
    const { modelo } = req.params;
    banco.query(
        `DELETE FROM veiculos WHERE modelo = ?`,
        [modelo],
        (err, results) => {
            if (err) {
                console.error('Ops, erro para deletar por modelo.', err);
                return res.status(500).send('Erro ao deletar por modelo');
            }
            res.send(`Carro com modelo ${modelo} deletado com sucesso!`);
        }
    );
});

// selecionar todos os veículos
app.get('/veiculos', (req, res) => {
    banco.query(
        `SELECT * FROM veiculos`,
        (err, results) => {
            if (err) {
                console.error('Erro na consulta:', err);
                return res.status(500).json({ error: 'Erro ao consultar veículos' });
            }
            return res.json(results);
        }
    );
});

// selecionar por ID
app.get('/veiculos/:id', (req, res) => {
    const { id } = req.params;
    banco.query(
        `SELECT * FROM veiculos WHERE id = ?`,
        [Number(id)],
        (err, results) => {
            if (err) {
                console.error('Erro na consulta por id:', err);
                return res.status(500).json({ error: 'Erro ao consultar veículo por id' });
            }
            if (results.length === 0) {
                return res.status(404).send('Veículo não encontrado.');
              }
              return res.json(results[0]); // Retorna o primeiro veículo encontrado
            }
    );
});

// selecionar por ano
app.get('/veiculos/ano/:ano', (req, res) => {
    const { ano } = req.params;
    banco.query(
        `SELECT * FROM veiculos WHERE ano = ?`,
        [Number(ano)],
        (err, results) => {
            if (err) {
                console.error('Erro na consulta por ano:', err);
                return res.status(500).json({ error: 'Erro ao consultar veículos por ano' });
            }
            return res.json(results);
        }
    );
});

// selecionar todos os veículos da cor AZUL
app.get('/veiculos/cor/azul', (req, res) => {
    banco.query(
        `SELECT * FROM veiculos WHERE cor = 'azul'`,
        (err, results) => {
            if (err) {
                console.error('Erro na consulta por cor:', err);
                return res.status(500).json({ error: 'Erro ao consultar veículos por cor' });
            }
            return res.json(results);
        }
    );
});

app.listen(port, () => {
    console.log(`Exemplo de app sendo "escutado" na porta ${port}`);
});
