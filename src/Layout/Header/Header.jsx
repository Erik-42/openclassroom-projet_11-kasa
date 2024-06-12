import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from "../../assets/Logo/LOGO-Red.svg"
import styled from "./header.module.scss"

const Header = () => {

    //affichage (render)
    return (
        <header className={styled.header}>
            <Link to="/">
                <img className={styled.headerLogo} src={Logo} alt="Logo Kasa" />
            </Link>
            <nav className={styled.nav}>
                <NavLink className={styled.navLink} to="/">Accueil</NavLink>
                <NavLink className={styled.navLink} to="/Apropos">A Propos</NavLink>
            </nav>
        </header>
    )
}

export default Header;