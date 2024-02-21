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
  const [edit, setEdit] = useState(false)

  useEffect(() => {
    carregarDados();

    const intervalId = setInterval(() => {
      window.location.reload();
    }, 40000);
    return () => clearInterval(intervalId);

  }, []);

  const carregarDados = () => {
  axios.get('https://crud-node-mongo.vercel.app/')
    .then(response => setDadosTabela(response.data))
    .catch(error => console.error(error));
  };

  const adicionarDado = () => {
    axios.post('https://crud-node-mongo.vercel.app/', novoDado)
      .then(response => {
        console.log('Dado adicionado com sucesso:', response.data);
        carregarDados();
        toast.success('Cadastro realizado com sucesso!');
      })
      .catch(error => console.error('Erro ao adicionar dado:', error));
  };

  const apagarDados = (id) => {
    axios.delete(`https://crud-node-mongo.vercel.app/${id}`)
      .then(response => {
        console.log('Registro excluído com sucesso:', response.data);
        carregarDados();
        toast.error('Dado apagado com sucesso!');
      })
      .catch(error => console.error('Erro ao excluir registro:', error));
  };

  const editarDado = (id) => {
    axios.put(`https://crud-node-mongo.vercel.app/${id}`, novoDado)
      .then(response => {
        console.log('Dado editado com sucesso!', response.data)
        carregarDados();
        toast.success('Editado com sucesso!');
      })
      .catch(error => console.log('Erro ao editar dado:', error))
      setEdit(false)
      setNovoDado({nome: '', email: '', fone: '', data_nascimento: '' })
  }

  return (  
    <div className="container">
      <ToastContainer position="bottom-right" theme="colored"/>
        <Forms 
          adicionarDado={adicionarDado} 
          editarDado={editarDado}
          setNovoDado={setNovoDado} 
          novoDado={novoDado}
          edit={edit}
        />

        <Tabela 
          dados={dadosTabela} 
          apagarDados={apagarDados} 
          editarDado={editarDado} 
          setNovoDado={setNovoDado}
          setEdit={setEdit}
        />
    </div>
  )
} 

export default App
