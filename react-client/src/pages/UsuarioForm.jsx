import { useForm } from 'react-hook-form'
import {createUsuario, deleteUsuario,updateUsuario, getUsuarioID} from '../api/usuarios.api'
import {useNavigate,useParams} from 'react-router-dom'
import { useEffect } from 'react'
import { toast } from 'react-hot-toast'

export default function UsuarioFormPage(){
  //hooks
  const {register,handleSubmit, formState :{errors},setValue} = useForm()
  const navigate = useNavigate()
  const params = useParams()

  //estilos
  const classContForm = "max-w-xl mx-auto"
  const classForm = "flex flex-col"
  const classInput = "p-3 my-5 bg-zinc-200 rounded-lg"
  const classButtonCrear ="bg-blue-400 px-3 py-2 rounded-lg text-white"
  const classButtonBorrar = "bg-red-500 px-3 py-2 rounded-lg text-white w-full mt-3"


  /***Logica */
  //Que se mande al back
  const onSubmit = handleSubmit(async (data) =>{
    if(params.id){
      await updateUsuario(params.id,data)
      toast.success('Usuario Actulizado',{
        position:'bottom-right',
      })
    }else{
      await createUsuario(data)
      toast.success('Usuario Creado',{
        position:'bottom-right',
      })
    }
    navigate("/usuarios")
  })
  
  useEffect(() =>{
    async function cargarUsuario(){
      if(params.id){
        const {data} = await getUsuarioID(params.id)
        setValue('nombre', data.nombre)
        setValue('apellido', data.apellido)
        setValue('edad',data.edad)
      }
    }
    cargarUsuario();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[ ])


  return(
    <div className={classContForm}>
      <form onSubmit={onSubmit} className={classForm}>
        <label>Ingresar nombre:</label>
        <input type="text" name="nombre" id="nombre" placeholder="Nombre" className={classInput}
          {...register("nombre",{required:true})}
        />
        {errors.nombre && <span>Campo requerido</span>}

        <label>Ingresar apellido:</label>
        <input type="text" name="apellido" id="apellido" placeholder="Apellido" className={classInput} 
        {...register("apellido",{required:true})}/>
        {errors.apellido && <span>Campo requerido</span>}
        
        <label>Ingresar edad:</label>
        <input type="number" name="edad" id="edad" placeholder="Edad" min="1" className={classInput}
          {...register("edad",{required:true})}
        />
        {errors.edad && <span>Campo requerido</span>}
        <button className={classButtonCrear}>Guardar</button>
      </form>

    {params.id && <button className={classButtonBorrar} onClick={async ()=>{
      const acept = window.confirm("¿Quieres eliminar este usuario?")
      if(acept){
        await deleteUsuario(params.id)
        toast.success('Usuario Eliminado',{
          position:'bottom-right',
        })
        navigate("/usuarios")
      } 
    }}>Borrar</button>}
    </div>
  )
}