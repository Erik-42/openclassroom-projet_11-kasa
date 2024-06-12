import React from 'react'
import styled from "./troisColonnes.module.scss"

function TroisColonnes({ children }) {
    return (
        <article className={styled.troisColonnes} >
            {children}
        </article >
    )
}
export default TroisColonnes
