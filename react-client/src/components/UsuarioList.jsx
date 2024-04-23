import { useEffect,useState } from 'react'
import { getAllUsuarios } from '../api/usuarios.api'
import { UsuarioCard } from './UsuarioCard'

export function UsuarioList() {
  const [usuarios,setUsuarios] = useState([])

  //estilos
  const classList = "grid grid-cols-3 gap-3"

  //Esperar de la api los usuarios
  useEffect(()=>{
    async function cargarUsuarios(){
      const res = await getAllUsuarios()
      setUsuarios(res.data)
    }
    cargarUsuarios()
  },[])


  return(
    <>
    <ul className={classList}>
      {
        usuarios.map(
          (usuarioBack) =>(
            <UsuarioCard key={usuarioBack.id} usuario={usuarioBack}></UsuarioCard>
          ))
      }
    </ul>
    </>
  )
}