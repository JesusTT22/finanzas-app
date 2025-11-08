import React, { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Sistema_de_control = () => {
    {/*Control de Autorizacion de Sesiones */}
    const navegar = useNavigate()
    const fetchUser = async () => {
        try{
            const token = localStorage.getItem('token')
            if (!token) {
                navegar('/login');
                return;
            }
            const respuesta = await axios.get('http://localhost:3000/Sistema_de_control', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            if(respuesta.status !== 200) {
                navegar('/login')
            }
        } catch (err){
            console.log(err)
            navegar('/login')
        }
    }
    
        useEffect(() => {
            fetchUser()
        }, [])
    return(
        <nav>
            <h1>Se ha Logeado Correctamente</h1>
        </nav>
    )
}

export default Sistema_de_control;