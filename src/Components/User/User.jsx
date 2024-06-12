import React from 'react';
import styled from "./user.module.scss"

const Host = ({ name, picture }) => {

    //affichage (render)
    return (
        <div className={styled.profilHost}>
            <p className={styled.nameHost}>{name}</p>
            <img className={styled.photoHost} src={picture} alt="Profil utilisateur" />
        </div>
    );
};

export default Host;