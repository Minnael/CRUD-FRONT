import './styles.css'

function Input({name, type}){
   return (
      <div className="input">
         <label>{name}:</label>
         <input type={type} placeholder={name}/>
      </div>
   )
}

export default Input