import { useEffect,useState } from "react"
import { getAllUsuarios } from "../api/usuarios.api"
import { UsuarioCard } from "./UsuarioCard"

export function UsuarioList() {
  const [usuarios,setUsuarios] = useState([])

  useEffect(()=>{
    async function cargarUsuarios(){
      const res = await getAllUsuarios()
      setUsuarios(res.data)
      console.log(res.data)
    }
    cargarUsuarios()
  },[])
  return(
    <>
    <h3>Lista de usuarios</h3>
    <ul>
      {
        usuarios.map(
          (usuario) =>(
            <UsuarioCard key={usuario.id} user={usuario}></UsuarioCard>
          ))
      }
    </ul>
    </>
  )
}