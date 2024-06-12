import React from 'react';
import redstar from "../../assets/Logo/star_rate-24px 5 red.svg"
import greystar from "../../assets/Logo/star_rate-24px 2 grey.svg"
import styled from "./rate.module.scss"

const Rate = ({ note }) => {
    //state (état et données)
    const stars = [1, 2, 3, 4, 5];

    //affichage (render)
    return (
        <div className={styled.votes}>
            {stars.map((level) => note >= level ?
                (<img key={level.toString()} className={styled.etoiles} src={redstar} alt="Etoiles de vote rouge" />) :
                (<img key={level.toString()} className={styled.etoiles} src={greystar} alt="Etoiles de vote grise" />)
            )}
        </div>
    );
};

export default Rate;