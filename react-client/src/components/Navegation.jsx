import {Link} from 'react-router-dom'

export function Navegation(){
  return(
    <div>
      <Link to="/usuarios"><h1>Aplicación de usuarios</h1></Link>
      <Link to="/usuarios-crear">Crear usuario</Link>
    </div>
  )
}