import { useState, useEffect } from "react";
import axios from 'axios'

import './global.css'
import Forms from "./Components/Forms/Forms.jsx"
import Tabela from "./Components/Tabela/Tabela.jsx"

function App() {
  const [dadosTabela, setDadosTabela] = useState([]);

  useEffect (() => {
    axios
      .get('http://localhost:8800/')
      .then((response) => setDadosTabela(response.data))
      .catch((error) => console.log(error))
      .finally(console.log('dentro do finally'))
  }, [])

  return (  
    <div className="container">
      <Forms />
      {dadosTabela.length > 0 ? (
        <>
          <Tabela dados={dadosTabela} />
        </>
      ) : (
        <p>Aguarde, estamos carregando os dados...</p>
      )}
    </div>
  )
} 

export default App
