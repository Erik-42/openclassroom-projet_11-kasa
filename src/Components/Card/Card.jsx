import React from 'react'
import { Link } from 'react-router-dom';
import styled from "./card.module.scss"

const Card = ({ data }) => {

    //affichage (render)
    return (
        <div>
            <Link to={`/Logement/${data.id}`}>
                <article className={styled.cadreCard} key={data.id}>
                    <img className={styled.coverImage} key={"cover" + data.id} src={data.cover} alt={data.title} />
                    <h2 className={styled.locationName} key={"title" + data.id}>{data.title}</h2>
                </article>
            </Link>
        </div >
    )
}

export default Card;