import './styles.css'

function Input({ name, type, value, onChange}){
   return (
      <div className="input">
         <label>{name}:</label>
         <input type={type} value={value} placeholder={name} onChange={onChange} />
      </div>
   )
}

export default Input