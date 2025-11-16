import React, { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Sidebar from '../vistas/sidebar.jsx'

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
            <div className="w-full h-screen overflow-hidden">
            <Sidebar />
        </div>
    )
}

export default Sistema_de_control;