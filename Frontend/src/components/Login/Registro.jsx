import './Registro.css'
import React, { useState } from 'react'

const Registro = () => {
    {/*DECLARACION DE VARIABLES A REGISTRAR */}
    const [username, setUsername] = useState();
    const [nombre, setNombre] = useState();
    const [apellido, setApellido] = useState();
    const [correo, setCorreo] = useState();
    const [password, setPassword] = useState();
    const [fecha_nacimiento, setFechaNacimiento] = useState();

    {/*FUNCION PARA DATOS ALMACENADOS AL HACER CLIC EN EL BOTON DE REGISTRO*/}
    const haddleRegistro = (e) => {
        e.preventDefault();
        const data = {
            nombre: nombre,
            apellido: apellido,
            username: username,
            correo: correo,
            password: password,
            fecha_nacimiento: fecha_nacimiento
        };

        {/*HACER LLAMADO A LA URL*/}
        fetch('http://localhost:3000/registro', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(result => {
            console.log(result)
        })
        .catch(error => {
            console.log(error)
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
                        <label htmlFor="email" className="text-lg font-bold text-dark">Username: </label>
                        <input  onChange={(event) => {setUsername(event.target.value)}}
                        type="text"
                        id="username" 
                        className="border-4 border-dark p-3 focus:outline-none" />
                    </div>
                    <div className="flex flex-col mt-10">
                        <label htmlFor="email" className="text-lg font-bold text-dark">Nombre: </label>
                        <input  onChange={(event) => {setNombre(event.target.value)}}
                        type="text"
                        id="nombre" 
                        className="border-4 border-dark p-3 focus:outline-none" />
                    </div>
                    <div className="flex flex-col mt-10">
                        <label htmlFor="email" className="text-lg font-bold text-dark">Apellido: </label>
                        <input  onChange={(event) => {setApellido(event.target.value)}}
                        type="text"
                        id="apellido" 
                        className="border-4 border-dark p-3 focus:outline-none" />
                    </div>
                    <div className="flex flex-col mt-10">
                        <label htmlFor="email" className="text-lg font-bold text-dark">Fecha de Nacimiento: </label>
                        <input  onChange={(event) => {setFechaNacimiento(event.target.value)}}
                        type="date"
                        id="fecha_nacimiento" 
                        className="border-4 border-dark p-3 focus:outline-none" />
                    </div>
                    <div className="flex flex-col mt-10">
                        <label htmlFor="email" className="text-lg font-bold text-dark">Correo: </label>
                        <input  onChange={(event) => {setCorreo(event.target.value)}}
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
                        <button onClick={haddleRegistro} className="mt-3 bg-primary text-white py-3 w-full font-bold text-lg relative z-10 group-hover bg-dark transition-all">Ingresar</button>
                        <div className="w-full h-12 bg-dark absolute -bottom-2 left-2 z-0 transition-all group-hover:bottom-0 group-hover:left-0"></div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Registro;