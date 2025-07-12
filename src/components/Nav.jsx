import {Menu, X} from 'lucide-react'
import {useState} from "react";
import React from 'react'
import logo from '../assets/logo.png'
import {navItems} from "../constants";

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    }

    return (

        <nav className='sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80'>
            <div className='container px-4 mx-auto relative text-sm '>
                <div className='flex justify-between items-center '>
                    <div className=' flex flex-shrink-0'>
                        <img className='h-10 w-10 mr-2' src={logo} alt='logo'/>
                        <span className='bg-gradient-to-r from-pink-600 to-rose-800 bg-clip-text text-transparent text-3xl tracking-tight font-bold'>BackSpace</span>
                    </div>
                    <ul className='hidden lg:flex ml-14 space-x-12'>
                        {navItems.map((item, index) =>
                            <li key={index}>
                                <a href={item.href}
                                   className='hover:text-red-500 text-lg font-bold text-green-700'>{item.label}</a>
                            </li>)}
                    </ul>
                    <div className='hidden lg:flex justify-center space-x-12 items-center '>
                        <a href='#'
                           className='hover:text-shadow-red-500 font-extrabold py-3 border rounded-md px-4'>Login</a>
                        <a href='#' className='bg-gradient-to-r from text-orange-500 to-orange-800
       py-2 px-3 rounded-md'>Create Account</a>
                    </div>

                    <div className='hidden md:flex flex-col justify-end'>
                        <button onClick={toggleNavbar}>
                            {isOpen ? <X/> : <Menu/>}
                        </button>
                    </div>
                </div>
                {isOpen &&(
                    <div className='fixed right-0 z-20 bg-neutral-800 w-full p-12 flex flex-col justify-center items-center lg:hidden'>
                        <ul>
                            {navItems.map((item,index)=>(
                                <li key={index} className='py-4'>
                                    <a href={item.href} className='hover:text-shadow-red-500 font-extrabold'>{item.label}</a>
                                </li>
                            ))}
                        </ul>
                        <div className='flex space-x-7 pt-4'>
                            <a href='#' className='font-bold bg-gradient-to-r from text-orange-500 to-orange-800 py-2  px-3 rounded-md'>Login</a>
                            <a href='#' className='font-bold bg-gradient-to-r from text-orange-500 to-orange-800 py-2  px-3 rounded-md'>Create Account</a>
                        </div>

                    </div>
                )}
            </div>
        </nav>

    )
}

export default Nav