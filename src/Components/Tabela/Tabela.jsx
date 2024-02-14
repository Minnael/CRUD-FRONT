import { FaTrash, FaEdit } from "react-icons/fa"
import Forms from "../Forms/Forms.jsx"
import './styles.css'

function Tabela({dados, apagarDados}){

   const [dadosDoFormulario, setDadosDoFormulario] = useState({ id: '', nome: '', email: '' });

   const handleEditarClick = (item) => {
    setDadosDoFormulario(item);
   };

   return (
      <div className="container-tabela">
         <h1>USUÁRIOS CADASTRADOS</h1>
         {dados.length > 0 ? (
            <>
               <table>
                  <thead>
                     <tr>
                        <th>NOME</th>
                        <th>EMAIL</th>
                        <th>FONE</th>
                        <th></th>
                        <th></th>
                     </tr>
                  </thead>
                  <tbody>
                     {dados.map((item) => (
                     <tr key={item.id}>
                        <td>{item.nome}</td>
                        <td>{item.email}</td>
                        <td>{item.fone}</td>
                        <td><FaEdit onClick={() => Forms(novoDado={item})}/></td>
                        <td><FaTrash onClick={() => apagarDados(item.id)}/></td>
                     </tr>
                     ))}
                  </tbody>
               </table>  
            </>
         ) : (
            <p>Aguarde, estamos carregando os dados...</p>
         )}         
      </div>
   )
}

export default Tabela