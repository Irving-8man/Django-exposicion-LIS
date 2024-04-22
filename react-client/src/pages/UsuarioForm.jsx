import { useForm } from 'react-hook-form'
import {crearUsuarios} from '../api/usuarios.api'
import {useNavigate} from 'react-router-dom'

export default function UsuarioFormPage(){
  const {register,handleSubmit, formState :{errors}} = useForm()
  const navigate = useNavigate()

  //Que se mande al back
  const onSubmit = handleSubmit(async (data) =>{
    await crearUsuarios(data)
    navigate("/usuarios")
  })

  return(
    <>
    <h2>Crear usuarios</h2>

    <form onSubmit={onSubmit}>
      <input type="text" name="" id="" placeholder="Nombre"
        {...register("nombre",{required:true})}
      />
      {errors.nombre && <span>Campo requerido</span>}

      <input type="text" name="" id="" placeholder="Apellido" 
      {...register("apellido",{required:true})}/>
      {errors.apellido && <span>Campo requerido</span>}

      <input type="number" name="" id="" placeholder="Edad"
        {...register("edad",{required:true})}
      />
      {errors.edad && <span>Campo requerido</span>}
      <button>Guardar</button>
    </form>
    </>
  )
}