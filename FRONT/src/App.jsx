import Forms from "./Components/Forms/Forms.jsx"
import Tabela from "./Components/Tabela/Tabela.jsx"
import { useState } from "react";
import './global.css'

function App() {
  const dados = [
    { id: 1, nome: 'Marcos', email: 'marcos@gmail.com', fone: 84987507865 },
    { id: 2, nome: 'Francis', email: 'francisco@gmail.com', fone: 84987579865 },
    { id: 3, nome: 'Camila', email: 'camila@gmail.com', fone: 84987304865 },
  ];

  const [dadosTabela, setDadosTabela] = useState(dados);

  return (  
    <div className="container">
      <Forms />
      <Tabela dados={dadosTabela}/>
    </div>
  )
} 

export default App
