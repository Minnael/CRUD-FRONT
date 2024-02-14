import { useState, useEffect } from "react";
import axios from 'axios'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Forms from "./Components/Forms/Forms.jsx"
import Tabela from "./Components/Tabela/Tabela.jsx"
import './global.css'

function App() {
  const [dadosTabela, setDadosTabela] = useState([]);
  const [novoDado, setNovoDado] = useState({nome: '', email: '', fone: '', data_nascimento: ''});

  useEffect(() => {
    carregarDados();
  }, []);

  const carregarDados = () => {
  axios.get('http://localhost:8800/')
    .then(response => setDadosTabela(response.data))
    .catch(error => console.error(error));
  };

  const adicionarDado = () => {
    axios.post('http://localhost:8800/', novoDado)
      .then(response => {
        console.log('Dado adicionado com sucesso:', response.data);
        carregarDados();
        toast.success('Cadastro realizado com sucesso!');
      })
      .catch(error => console.error('Erro ao adicionar dado:', error));
  };

  const apagarDados = (id) => {
    axios.delete(`http://localhost:8800/${id}`)
      .then(response => {
        console.log('Registro excluído com sucesso:', response.data);
        carregarDados();
        toast.error('Dado apagado com sucesso!');
      })
      .catch(error => console.error('Erro ao excluir registro:', error));
  };

  const editarDado = (id) => {
    axios.put('http://localhost:8800/', novoDado)
      .then(response => {
        console.log('Dado editado com sucesso!', response.data)
        carregarDados();
      })
      .catch(error => console.log('Erro ao editar dado:', error))
  }

  return (  
    <div className="container">
      <ToastContainer position="bottom-right" theme="colored"/>
        <Forms adicionarDado={adicionarDado} setNovoDado={setNovoDado} novoDado={novoDado}/>
        <Tabela dados={dadosTabela} apagarDados={apagarDados} editarDado={editarDado}/>
    </div>
  )
} 

export default App
