import axios from 'axios'

/**Funciones para conectar a la API */
const usuarioAPI = axios.create({
  baseURL : 'http://127.0.0.1:8000/usuarios/api/v1/usuarios/'
})

export const getAllUsuarios = () =>{
  return usuarioAPI.get("/")
}

export const getUsuarioID = (id) =>{
  return usuarioAPI.get(`/${id}/`)
}

export const createUsuario = (usuario) =>{
  return usuarioAPI.post("/",usuario)
}

export const deleteUsuario = (id) =>{
  return  usuarioAPI.delete(`/${id}`)
}

export const updateUsuario = (id, usuario) =>{
  return usuarioAPI.put(`/${id}/`,usuario)
}
