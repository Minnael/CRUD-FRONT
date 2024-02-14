import './styles.css'

function Tabela({dados}){
   return (
      <div className="container-tabela">
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
                  <td>teste</td>
                  <td>teste2</td>
               </tr>
            ))}
            </tbody>
         </table>
      </div>
   )
}

export default Tabela