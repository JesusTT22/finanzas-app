import './Login.css'

const Login = () => {
    return(
        <div className="">
            <form action="">
                <label htmlFor="" className="">Correo: </label>
                <input type="text" />
                <label htmlFor=""className="">Contraseña: </label>
                <input type="password" />
                <button type="submit" className="bg-green-200">Ingresar</button>
            </form>
        </div>
    )
}

export default Login;