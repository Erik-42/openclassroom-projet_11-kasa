import React from 'react'
import useAccueil from "../../Hooks/useAccueil.js"
import Card from '../../Components/Card/Card.jsx'
import TroisColonnes from '../../Layout/TroisColonnes/TroisColonnes.jsx'
import bannerHome from '../../assets/banner/bannerHome.webp'
import styled from "./accueil.module.scss"

const Accueil = () => {
    const dataLogement = useAccueil()

    //affichage (render)
    return (
        <main>
            <div className={styled.bannerHome} >
                <h1 className={styled.titleBanner}>Chez vous,partout et ailleurs</h1>
                <img className={styled.banner} src={bannerHome} alt="Bannière accueil - Chez vous,partout et ailleurs" />
            </div>
            <div className={styled.greySquare}>
                <TroisColonnes>
                    {dataLogement.map((logement) => (
                        <Card key={logement.id} data={logement}></Card>
                    ))
                    }
                </TroisColonnes>
            </div>
        </main >
    )
}

export default Accueil;