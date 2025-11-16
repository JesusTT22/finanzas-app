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

                    <div className="flex items-center gap-x-8">
                    {/*Notificaciones */}
                    <button className="relative">
                        <div className="w-5 h-5 bg-zinc-50 flex items-center justify-center absolute -top-1.5 -right-2.5 rounded-full p-0.5">
                            <span className="bg-red-600 text-white rounded-full w-full h-full flex items-center justify-center text-xs">3</span>
                        </div>
                        <FaBell className="text-xl" />
                    </button>

                    {/*Imagen de Usuario */}
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/20180610_FIFA_Friendly_Match_Austria_vs._Brazil_Neymar_850_1705.jpg/960px-20180610_FIFA_Friendly_Match_Austria_vs._Brazil_Neymar_850_1705.jpg" alt="imagen de perfil" className="w-11 h-11 rounded-full object-cover object-center cursor-pointer" />
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
