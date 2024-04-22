import axios from 'axios'

const usuarioAPI = axios.create({
  baseURL : 'http://127.0.0.1:8000/usuarios/api/v1/usuarios/'
})
export const getAllUsuarios = () =>{
  return usuarioAPI.get("/")
}

export const crearUsuarios = (usuario) =>{
  return usuarioAPI.post("/",usuario)
}