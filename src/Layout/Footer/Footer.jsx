import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../../assets/Logo/LOGO-White.svg"
import Styled from "./footer.module.scss"

const Footer = () => {

    //affichage (render)
    return (
        <footer className={Styled.footer}>
            <div className={Styled.pied}>
                <Link to="/">
                    <img className={Styled.footerLogo} src={Logo} alt="Logo Kasa" />
                </Link>
                <p>©2020 Kasa. All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer;
