import { Route, Routes } from 'react-router-dom'
import Login from './components/Login/Login.jsx'
import Registro from './components/Login/Registro.jsx'
import Sistema_de_control from './components/Home/Sistema_de_control.jsx'
import Home from './Landing/Home.jsx'

function App() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/registro' element={<Registro />} />
            <Route path='/Sistema_de_control' element={<Sistema_de_control />} />
        </Routes>
    )
}

export default App;