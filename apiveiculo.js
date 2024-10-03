const express = require('express');
const app = express();
app.use(express.json());
const port = 3000;

let veiculos = [];

// novo veículo
app.post('/inserir', (req, res) => {
    const { id, marca, modelo, ano, cor, proprietario } = req.body;
    veiculos.push({ id, marca, modelo, ano, cor, proprietario });
    res.send(`Veículo recebido!\n\nID: ${id} \nMarca: ${marca} \nModelo: ${modelo} \nAno: ${ano} \nCor: ${cor} \nProprietário: ${proprietario}`);
});

// atualizar por ID
app.put('/atualizar/:id', (req, res) => {
    const { id } = req.params;
    const { marca, modelo, ano, cor, proprietario } = req.body;
    const veiculoIndex = veiculos.findIndex(v => v.id == id);

    if (veiculoIndex !== -1) {
        veiculos[veiculoIndex] = { id, marca, modelo, ano, cor, proprietario };
        res.send(`Veículo atualizado!\nNovo ID: ${id} \nNova marca: ${marca} \nNovo modelo: ${modelo} \nNovo ano: ${ano} \nNova cor: ${cor} \nNovo proprietário: ${proprietario}`);
    } else {
        res.status(404).send('Veículo não encontrado');
    }
});

// deletar por ID
app.delete('/deletar/id/:id', (req, res) => {
    const { id } = req.params;
    const veiculoIndex = veiculos.findIndex(v => v.id == id);

    if (veiculoIndex !== -1) {
        veiculos.splice(veiculoIndex, 1); // para remover o splice e 1 só
        res.send('Veículo deletado com sucesso');
    } else {
        res.status(404).send('Veículo não encontrado');
    }
});

// deletar por modelo
app.delete('/deletar/modelo/:modelo', (req, res) => {
    const { modelo } = req.params;
    const veiculosAntes = veiculos.length; // lenght ver o tamnaho da array

    veiculos = veiculos.filter(v => v.modelo !== modelo);
    const veiculosDeletados = veiculosAntes - veiculos.length;

    if (veiculosDeletados > 0) {
        res.send(`${veiculosDeletados} veículo(s) deletado(s) com sucesso`);
    } else {
        res.status(404).send('Nenhum veículo encontrado com esse modelo');
    }
});

// selecionar todos os veículos
app.get('/veiculos', (req, res) => {
    res.json(veiculos);
});

// selecionar por ID
app.get('/veiculos/:id', (req, res) => {
    const { id } = req.params;
    const veiculo = veiculos.find(v => v.id == id); // v recebe v.id igual ao id

    if (veiculo) {
        res.json(veiculo);
    } else {
        res.status(404).send('Veículo não encontrado');
    }
});
 
// selecionar por ano
app.get('/veiculos/ano/:ano', (req, res) => {
    const { ano } = req.params;
    const veiculosAno = veiculos.filter(v => v.ano == ano);

    if (veiculosAno.length > 0) {
        res.json(veiculosAno);
    } else {
        res.status(404).send('Nenhum veículo encontrado para o ano especificado');
    }
});

// selecionar todos os veículos da cor AZUL
app.get('/veiculos/cor/azul', (req, res) => {
    const veiculosAzuis = veiculos.filter(v => v.cor.toLowerCase() === 'azul'); // toLowerCase converte p letra minuscula

    if (veiculosAzuis.length > 0) {
        res.json(veiculosAzuis);
    } else {
        res.status(404).send('Nenhum veículo encontrado da cor azul');
    }
});

app.listen(port, () => {
    console.log(`Exemplo de app sendo "escutado" na porta ${port}`);
});
