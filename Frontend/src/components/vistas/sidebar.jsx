import React, { useState } from 'react'
import { TbLayoutSidebarLeftCollapse, TbLayoutSidebarLeftExpand } from 'react-icons/tb'
import { MdSpaceDashboard } from 'react-icons/md'
import { BiChat } from 'react-icons/bi'
import { TiCalendar } from 'react-icons/ti'
import { FiTable } from 'react-icons/fi'
import { GoGraph } from 'react-icons/go'
import { MdOutlineHeadsetMic } from 'react-icons/md'
import { FaChevronDown, FaChevronRight, FaSearch, FaBell } from 'react-icons/fa'

export default function sidebar() {

    const [open, setOpen] = useState(true)
    const [subMenus, setSubmenus] = useState({
        Inicio: false,
        Ingresos: false,
        Gastos: false,
        Presupuesto: false,
        Deudas: false,
        Reportes: false
    })

    const toggleSubMenu = (menu) => {
        setSubMenus ((prev) => ({
            ...prev, [menu]: !prev[menu],
        }))
    }

    const Menus = [
        {title: "Inicio", icon: <MdSpaceDashboard /> },
        {title: "Ingresos", icon: <BiChat /> },
        {title: "Gastos", icon: <TiCalendar /> },
        {title: "Presupuesto", icon: <FiTable />},
        {title: "Deudas", icon: <GoGraph />},
        {title: "Reportes", icon: <MdOutlineHeadsetMic />},
    ]

    const [Dropdown, setDropdown] = useState({
        Perfil: false,
        Configuracion: false,
        Cerrar_Sesion: false
    })

    const [isPerfilOpen, setIsPerfilOpen] = useState(false)
    const [isNotificacionOpen, setIsNotificacionOpen] = useState(false)

    const togglePerfil = () => {
        setIsPerfilOpen(!isPerfilOpen)
    }

    const toggleNotificacion = () => {
        setIsNotificacionOpen(!isNotificacionOpen)
    }
    

    const MenusDrop = [
        {title: "Perfil"},
        {title: "Configuración"},
        {title: "Cerrar Sesión"},
     ]

    const Notificacion = [
        {title: "Mensaje"}
    ] 

    return(
        <section>
            <div className='w-full flex'>
            {/* Seccion del Sidebar */}
            <div className={`${open ? 'w-72 p-5' : 'w-20 p-4'} bg-zinc-900 h-screen pt-8 relative duration-300 ease-in-out`}>

            {/*Toggle de Botones */}
            <div className={`absolute cursor-pointer -right-4 top-9 w-8 h-8 p-0.5 bg-zinc-50 border border-zinc-50 border border-zinc-50 border-2 rounded-full text-xl flex items-center justify-center ${!open && 'rotate-180'} transition-all ease-in-out duration-300`}
            onClick={()=>setOpen(!open)}>

            {open ? 
            <TbLayoutSidebarLeftExpand /> :
            <TbLayoutSidebarLeftCollapse />}
            </div>

            {/*Seccion del Logo y Titulo */}
            <div className="flex gap-x-4 items-center">
                <img src="https://fcb-abj-pre.s3.amazonaws.com/img/jugadors/603_neymar.jpg" alt="logo" className={`w-10 h-10 rounded-full object-cover object-center cursor-pointer ease in out duration-3 ${open && "rotate[360deg]"}`} />
            <h1 className={`text-zinc-50 origin-left font-semibold text-xl duration-200 ease-in-out ${!open && "scale-0"}`}>
                Admin Dashboard
            </h1>
            </div>
            

            {/*Items del Navbar */}
            <ul className="pt-6 space-y-0 5">
                {Menus.map((Menu, index) => (
                    <li key={index} className={`flex flex-col rounded-md py-3 px-4 cursor-pointer hover:text-white text-zinc-50 hover:bg-zinc-800/50 transition-all ease-in-out duration-300 ${Menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-zinc-800/40"}`}>
                        <div className="flex items-center gap-x-4" onClick={() => toggleSubMenu(Menu.key)}>
                            <div className="flex items-center gap-2">
                                <span className="text-lg">
                                {Menu.icon}
                                </span>
                                <span className={`${!open && 'hidden'} origin-left ease-in-out duration-300`}>
                                    {Menu.title}
                                </span>
                                </div>
                            {Menu.subMenu && (
                                <span className={`ml-auto cursor-pointer text-sm ${subMenus[Menu.key] ? "rotate-360" : ""} transition-transform ease-in-out duration-300 ${!open ? "hidden" : ""}`}>
                                    {subMenus[Menu.key] ? 
                                    <FaChevronDown /> : <FaChevronRight />}
                                </span>
                            )}
                        </div>
                        {/*Sidebar SubMenus */}
                        {Menu.SubMenu && subMenus[Menu.key] && (
                            <ul className="pl-3 pt-4 text-zinc-300">
                                {Menu.subMenus.map((subMenu, subIndex) => (
                                    <li key={subIndex} className="text-sm flex items-center gap-x-2 py-3 px-2 hover:bg-zinc-800 rounded-lg">
                                        <span className="text-zinc-4">
                                            <FaChevronRight className="text-xs" />
                                        </span>
                                        {subMenu}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
            </div>

            {/* Seccion del Dashboard */}
            <div className="h-screen flex-1 bg-zinc-100 space-y-6">
                {/*Seccion del Navbar */}
                <div className="w-full h-[8ch] px-12 bg-zinc-50 shadow-md flex items-center justify-between">

                    <div className="w-96 border border-zinc-300 rounded-full h-11 flex items-center justify-center">
                        <input type="text" placeholder='Buscar...' className="flex-1 h-full rounded full outline-none border-none bg-zinc-50 px-4" />
                        <button className="px-4 h-full flex items-center justify-center text-base text-zinc-600 border-l border-zinc-300">
                            <FaSearch />
                        </button>
                    </div>

                    {/*Notificaciones */}
                        <div className='flex items-center gap-4'>
                            <button className="relative" onClick={toggleNotificacion}>
                                <div className="w-5 h-5 bg-zinc-50 flex items-center justify-center absolute -top-1.5 -right-2.5 rounded-full p-0.5 border border-zinc-200">
                                    <span className="bg-red-600 text-white rounded-full w-full h-full flex items-center justify-center text-[10px] font-semibold">3</span>
                                </div>
                                <FaBell className="w-5 h-5 text-slate-600 cursor-pointer" />
                            </button>

                        {isNotificacionOpen && (
                            <div className="absolute right-66 mt-36 w-64 bg-white rounded-xl shadow-2xl border border-gray-200 z-50">
                                <div className="px-6 py-5 bg-gradient-to-r from-violet-50/80 via-transparent to-pink-50/80 border-b border-gray-100/60">
                                    <div className="flex items-center justify-between">
                                    <h3 className="text-lg font-bold text-gray-900">Notificaciones</h3>
                                    <span className="text-xs font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                                        3 nuevas
                                    </span>
                                    </div>
                                </div>
                            </div>
                        )}
                       
                    <button onClick={togglePerfil} className='relative border border-zinc-300 bg-zinc-150 rounded-full py-1 px-1 relative cursor-pointer'>
                        <div className="flex items-center gap-x-3">

                            {/*Imagen de Usuario */}
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/20180610_FIFA_Friendly_Match_Austria_vs._Brazil_Neymar_850_1705.jpg/960px-20180610_FIFA_Friendly_Match_Austria_vs._Brazil_Neymar_850_1705.jpg" alt="imagen de perfil" className="w-9 h-9 rounded-full object-cover object-cover object-center cursor-pointer" />
                            
                            {/*Nombre y Cargo del Usuario */}
                            <div className='flex flex-col items-start'>
                            <span className='text-sm font-semibold text-slate-700 leading-tight'>Jesus Torrealba</span>
                            <span className='text-sm font-medium leading-tight'>Administrador</span>
                            </div>
                            <FaChevronDown
                            className={`w-3.5 h-3.5 text-slate-600 transition-transform ${isPerfilOpen ? 'rotate-180' : ''}`} />
                            </div>
                    </button>
                    {isPerfilOpen && (
                    <div className='absolute right-8 mt-50 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50'>
                        {MenusDrop.map((Menu, index) => (
                        <button key={index} className="w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 transition-colors font-medium">
                            {Menu.title}
                        </button>
                        ))}
                    </div>
                    )}
                </div>
                </div>

                {/*Contenido del Dashboard */}
                <div className="w-full px-12">
                    <h1 className="text-xl text-zinc-800 font-medium">
                        Este es el Dashboard
                    </h1>
                </div>
            </div>
            </div>
        </section>
    )
}
