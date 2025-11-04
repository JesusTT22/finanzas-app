import './Login.css'
import React, { useState } from 'react';


const Login = () => {
    {/*Declaracion de contraseña y correo*/}
    const [password, setPassword] = useState();
    const [username, setUsername] = useState();

    {/*Funcion para Capturar datos almacenados al hacer clic en el boton de login*/}
    const  haddleLogin = (e) => {
        e.preventDefault();
        console.log({
            username: username,
            password: password
        })
    }

    return(
        <nav className=" mx-auto flex  justify-center items-center h-screen max-w-lg">
            <div className="relative mx-5">
                <div className="sm:bg-white sm:p-10 rounded-sm border">
                    <div className="hidden sm:block rounded-sm absolute bg-dark w-full h-full -z-10 left-3 -bottom-3"></div>
                    <h1 className="font-bold text-4xl text-dark">¡Bienvenido!</h1>
                    <p className="text-base">Tus finanzas querían hablar contigo... decidimos intervenir.</p>
                    <div className="flex flex-col mt-10">
                        <label htmlFor="email" className="text-lg font-bold text-dark">Correo: </label>
                        <input  onChange={(event) => {setUsername(event.target.value)}}
                        type="email"
                        id="email" 
                        className="border-4 border-dark p-3 focus:outline-none" />
                    </div>
                    <div className="flex flex-col mt-3">
                        <label htmlFor="password" className="text-lg font-bold text-dark">Contraseña: </label>
                    </div>
                    <div className="relative">
                        <input onChange={(event) => {setPassword(event.target.value)}}
                        type="password"
                        id="password"
                        className="w-full border-4 border-dark p-3 focus:outline-none" />
                        <img src="./eye-slash-solid-full.svg" alt="ojo" id="ojo" className="absolute cursor-pointer top-0 botton-0 right-4 my-auto"/>
                    </div>
                    <a href="#" type="" className="text-base text-right">¿Otra vez sin contraseña?</a>
                    <div className="relative group">
                        <button onClick={haddleLogin} className="mt-3 bg-primary text-white py-3 w-full font-bold text-lg relative z-10 group-hover bg-dark transition-all">Ingresar</button>
                        <div className="w-full h-12 bg-dark absolute -bottom-2 left-2 z-0 transition-all group-hover:bottom-0 group-hover:left-0"></div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Login;