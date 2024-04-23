import { UsuarioList } from '../components/UsuarioList'

export default function UsuarioPage(){
  //estilos
  const classTitle = "text-xl font-semibold mb-9"

  return(
    <>
      <h2 className={classTitle} >Lista de usuarios</h2>
      <UsuarioList></UsuarioList>
    </>
  )
}