// eslint-disable-next-line react/prop-types
export function UsuarioCard({ user }){
  return(
    <li>
    <p>{user.nombre}</p>
    <p>{user.apellido}</p>
    <p>{user.edad}</p>
  </li>
  )
}