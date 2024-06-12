import React from 'react'
import Gallery from '../../Components/Gallery/Gallery.jsx'
import Tag from '../../Components/Tag/Tag.jsx'
import User from '../../Components/User/User.jsx'
import Rate from '../../Components/Rate/Rate.jsx'
import Collapse from '../../Components/Collapse/Collapse.jsx'
import useLogement from "../../Hooks/useLogement.js"
import styled from "./logement.module.scss"

const Logement = () => {
    const dataLogement = useLogement()

    //affichage (render)
    return (
        <div className={styled.ficheLogement} >
            <div className={styled.galerieLogement}>
                <Gallery pictures={dataLogement.pictures}></Gallery>
            </div>
            <div className={styled.qqocpLogement} >

                <div className={styled.infosBaseLogement}>
                    <h3 className={styled.titreLogement}>{dataLogement.title}</h3>
                    <p className={styled.locationLogement}>{dataLogement.location}</p>
                    <div className={styled.tagsLogement}>
                        {dataLogement.tags.map((tag, index) =>
                            <Tag key={index} tag={tag}></Tag>
                        )
                        }
                    </div>
                </div>
                <div className={styled.hostRateLogement}>
                    <div className={styled.userLogement}>
                        <User name={dataLogement.host.name} picture={dataLogement.host.picture}></User>
                    </div>
                    <div className={styled.votesLogement}>
                        <Rate note={dataLogement.rating}></Rate>
                    </div>
                </div>
            </div>
            <div className={styled.infosLogement}>
                <div className={styled.descriptionLogement}>
                    <Collapse data={dataLogement.description} title="description"></Collapse>
                </div>
                <div className={styled.equipementsLogement}>
                    <Collapse data={dataLogement.equipments} title="equipements">

                    </Collapse>
                </div>
            </div>

        </div >
    )
}
export default Logement;