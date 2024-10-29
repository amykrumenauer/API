import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [id, setId] = useState(0);
  const [marca, setMarca] = useState('');
  const [modelo, setModelo] = useState('');
  const [ano, setAno] = useState(0);
  const [cor, setCor] = useState('');
  const [proprietario, setProprietario] = useState('');
  const [veiculos, setVeiculos] = useState([]);

useEffect(() => {
  console.log(id, marca, modelo, ano, cor, proprietario);
}, [id, marca, modelo, ano, cor, proprietario]);

// Função para registrar um veículo
  async function registrarVeiculo() {
    await axios.post("http://localhost:3000/inserir", {
      id, marca, modelo, ano, cor, proprietario
    });
    buscarTodosVeiculos();
  }

// Função para atualizar um veículo
  async function atualizarVeiculo() {
    await axios.put(`http://localhost:3000/atualizar/${id}`, {
      marca, modelo, ano, cor, proprietario
    });
    buscarTodosVeiculos();
  }

// Função para deletar veículo por ID
  async function deletarPorId() {
    await axios.delete(`http://localhost:3000/deletar/id/${id}`);
    buscarTodosVeiculos();
  }

// Função para deletar veículo por modelo
  async function deletarPorModelo() {
    await axios.delete(`http://localhost:3000/deletar/modelo/${modelo}`);
    buscarTodosVeiculos();
  }

// Função para buscar todos os veículos
  async function buscarTodosVeiculos() {
    const response = await axios.get('http://localhost:3000/veiculos');
    setVeiculos(response.data);
  }

// Função para buscar veículo por ID
  async function buscarPorId() {
    const response = await axios.get(`http://localhost:3000/veiculos/${id}`);
    setVeiculos([response.data]); // response.data é a propriedade onde encontramos os dados que foram retornados pela API
  }

// Função para buscar veículos por ano
  async function buscarPorAno() {
    const response = await axios.get(`http://localhost:3000/veiculos/ano/${ano}`);
    setVeiculos(response.data);
  }

// Função para buscar veículos da cor azul
  async function buscarVeiculosAzuis() {
    const response = await axios.get('http://localhost:3000/veiculos/cor/azul');
    setVeiculos(response.data);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    registrarVeiculo();
  };

  return (
    <>
      <div className='card'>
        <form onSubmit={handleSubmit}>
          <label htmlFor="id">ID:</label>
          <br />
          <input type="number" id='id' onChange={(e) => { setId(e.target.value) }} />
          <br />

          <label htmlFor="marca">Marca:</label>
          <br />
          <input type="text" id='marca' onChange={(e) => { setMarca(e.target.value) }} />
          <br />

          <label htmlFor="modelo">Modelo:</label>
          <br />
          <input type="text" id='modelo' onChange={(e) => { setModelo(e.target.value) }} />
          <br />

          <label htmlFor="ano">Ano:</label>
          <br />
          <input type="number" id='ano' onChange={(e) => { setAno(e.target.value) }} />
          <br />

          <label htmlFor="cor">Cor:</label>
          <br />
          <input type="text" id='cor' onChange={(e) => { setCor(e.target.value) }} />
          <br />

          <label htmlFor="proprietario">Proprietário:</label>
          <br />
          <input type="text" id='proprietario' onChange={(e) => { setProprietario(e.target.value) }} />
          <br />

          <br />
          <button type='submit'>Registrar veículo</button>
        </form>

        <button onClick={atualizarVeiculo}>Atualizar por ID</button>
        <br />
        <br />
        <button onClick={buscarTodosVeiculos}>Buscar todos os veículos</button>
        <br />
        <button onClick={buscarPorId}>Buscar por ID</button>
        <br />
        <button onClick={buscarPorAno}>Buscar por ano</button>
        <br />
        <button onClick={buscarVeiculosAzuis}>Buscar veículos azuis</button>
        <br />
        <br />
        <button onClick={deletarPorId}>Deletar por ID</button>
        <br />
        <button onClick={deletarPorModelo}>Deletar por modelo</button>
        <br />

        <div>
          <h3>Veículos:</h3>
          {veiculos.map(veiculo => (
            <div key={veiculo.id}>
              <p>ID: {veiculo.id}, Marca: {veiculo.marca}, Modelo: {veiculo.modelo}, Ano: {veiculo.ano}, Cor: {veiculo.cor}, Proprietário: {veiculo.proprietario}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;


