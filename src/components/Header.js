import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';
import {AiOutlineClose} from 'react-icons/ai';

export const Header = () => {

    const [menuOpen, setOpenMenu] = useState(false);

    return (
        <header>{
            menuOpen    ? <AiOutlineClose onClick={()=>setOpenMenu(!menuOpen)} 
                            className="iconHamburguer"/>
                        :  <GiHamburgerMenu 
                            onClick={()=>setOpenMenu(!menuOpen)} 
                                className="iconHamburguer"/>
            }

            <nav className={menuOpen ? "dropMenu" : ""}>
                <a onClick={()=>{setOpenMenu(false)}} href="#home">Home</a>
                <a onClick={()=>{setOpenMenu(false)}} href="#about">Sobre mí</a>
                <a onClick={()=>{setOpenMenu(false)}} href="#projects">Proyectos</a>
                <a onClick={()=>{setOpenMenu(false)}} href="#contact">Contacto</a>
            </nav>
        </header>
    )
}
