import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import {Navegation} from './components/Navegation'
import UsuarioPage from './pages/UsuarioPage'
import UsuarioFormPage from './pages/UsuarioForm'
import {Toaster} from 'react-hot-toast'

function App() {
  //estilos
  const classMain = "container mx-auto"

  return (
    <BrowserRouter>
    <div className={classMain}>
      <Navegation/>
      <Routes>
        <Route path='/' element={<Navigate to="/usuarios"></Navigate>}></Route>
        <Route path='/usuarios' element={<UsuarioPage></UsuarioPage>}></Route>
        <Route path='/usuario-crear' element={<UsuarioFormPage></UsuarioFormPage>}></Route>
        <Route path='/usuario/:id' element={<UsuarioFormPage></UsuarioFormPage>}></Route>
      </Routes>
      <Toaster/>
    </div>
    </BrowserRouter>
  )
}

export default App
