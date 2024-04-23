import {Link} from 'react-router-dom'

export function Navegation(){
  //estilos
  const classNav = "flex justify-between py-4"
  const classTitle = "font-bold text-3xl text-teal-900"
  const classButton = "bg-blue-600 px-3 py-2 rounded-lg text-white"

  return(
    <div className={classNav}>
      <Link to="/usuarios"><h1 className={classTitle}>Aplicación de usuarios</h1></Link>
      <Link to="/usuario-crear">
        <button className={classButton}>
          Crear usuario
        </button>
      </Link>
    </div>
  )
}