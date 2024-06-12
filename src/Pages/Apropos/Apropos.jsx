import React from 'react'
import useApropos from '../../Hooks/useApropos.js';
import Collapse from '../../Components/Collapse/Collapse.jsx'
import bannerAbout from '../../assets/banner/bannerAbout.webp'
import styled from "./apropos.module.scss"

const Apropos = () => {
    const texteApropos = useApropos()

    //affichage (render)
    return (
        <main>
            <div className={styled.bannerAbout}>
                <img className={styled.banner} src={bannerAbout} alt="Bannière A propos" />
            </div>
            <div className={styled.infosApropos}>
                {texteApropos.map((element) => (
                    <Collapse key={element.id} data={element.texte} title={element.title}></Collapse>
                ))
                }
            </div>
        </main>
    )
}
export default Apropos;