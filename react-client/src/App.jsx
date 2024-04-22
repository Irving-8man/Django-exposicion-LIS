import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import {Navegation} from './components/Navegation'
import UsuarioPage from './pages/UsuarioPage'
import UsuarioFormPage from './pages/UsuarioForm'

function App() {
  return (
    <BrowserRouter>
      <Navegation/>
      <Routes>
        <Route path='/' element={<Navigate to="/usuarios"></Navigate>}></Route>
        <Route path='/usuarios' element={<UsuarioPage></UsuarioPage>}></Route>
        <Route path='/usuarios-crear' element={<UsuarioFormPage></UsuarioFormPage>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
