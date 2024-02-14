import './styles.css'
import Input from './Input/Input.jsx'
import Button from './Button/Button.jsx'

function Forms(){
   return (
      <div className="container-forms">
         <h1>LEARN CRUD</h1>
         <Input name="NOME" type="name"/>
         <Input name="E-MAIL" type="e-mail"/>
         <Input name="TELEFONE" type="fone"/>
         <Input name="DATA" type="date"/>
         <Button/>
      </div>
   )
}

export default Forms