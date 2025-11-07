import { Route, Routes } from 'react-router-dom'
import Login from './components/Login/Login.jsx'
import Registro from './components/Login/Registro.jsx'
import Sistema_de_control from './components/Home/Sistema_de_control.jsx'

function App() {
    return (
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/registro' element={<Registro />} />
        </Routes>
    )
}

export default App;