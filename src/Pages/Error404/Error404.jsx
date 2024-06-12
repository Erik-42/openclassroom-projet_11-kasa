import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from "./error404.module.scss"

const Error404 = () => {

    //affichage (render)
    return (
        <main>
            <h1 className={styled.error404}>404</h1>
            <p className={styled.textError}>Oups! La page que vous demandez n'existe pas.</p>
            <NavLink className={styled.errorLink} to="/" label="Retourner sur la page d'accueil">Retourner sur la page d'accueil</NavLink>
        </main>
    )
}
export default Error404;