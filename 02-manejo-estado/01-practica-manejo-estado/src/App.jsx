import { useState } from "react"

function App() {

  const [usuario, setUsuario] = useState("")
  const [usuarios, setusUarios] = useState([])

  const agregarUser = (e) => {
    e.preventDefault()
    setusUarios( [...usuarios, usuario] )
    setUsuario("")
  }

  const eliminarUser = (index) => {
     //const nuevoArray = usuarios.filter( (item, key) => /*condición*/ )
     //setusUarios(nuevoArray)
  } 

  return (
    <>
        <form>
          <input 
            type="text"
            value={usuario} 
            onChange={ (e) => setUsuario(e.target.value) }
          />
          <button 
            type="submit"
            onClick={agregarUser}
          >Registrar</button>
        </form>
        <ul>
          {
            usuarios.map( (user, index) => {
              return (
                <li 
                  key={index}>  
                  {user} 
                  <button 
                    onClick={ () => eliminarUser(index) }
                  >✖️</button>
                </li>
              )
            } )
          }
        </ul>
    </>
  )
}

export default App