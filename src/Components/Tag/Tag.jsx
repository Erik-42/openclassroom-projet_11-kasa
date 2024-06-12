import React from 'react'
import styled from "./tag.module.scss"

const Tag = ({ tag }) => {

    //affichage (render)
    return (
        <div className={styled.tag}>
            <span className={styled.texteTag}>{tag}</span>
        </div>
    )
}

export default Tag;