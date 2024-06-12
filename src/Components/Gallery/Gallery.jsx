import React, { useState } from 'react'
import vectorWhite from '../../assets/Logo/Vector.svg'
import styled from "./gallery.module.scss"

const Gallery = ({ pictures }) => {

    //state (état et données) UseState
    const [pictureIndex, setPictureIndex] = useState(0)

    // nombre de photos
    const nombrePictures = (pictures) ? pictures.length : 0

    // navigation image suivante
    const nextPicture = () => {
        if (pictureIndex < nombrePictures - 1) { setPictureIndex(pictureIndex + 1) } else { setPictureIndex(0) }
    }

    // navigation image précédente
    const previousPicture = () => {
        if (pictureIndex > 0) { setPictureIndex(pictureIndex - 1) } else {
            setPictureIndex(nombrePictures - 1)
        }
    }

    //affichage (render) return
    return (
        <div className={styled.gallery}>
            <img className={styled.imageGallery} src={pictures[pictureIndex]} alt="logement" />
            <div className={styled.indexGallery}>{pictureIndex + 1}/{nombrePictures}</div>
            {
                nombrePictures > 1 && <div className={styled.controlsGallery}>
                    <img className={styled.previousVector} src={vectorWhite} alt="Previous" onClick={() => previousPicture()} />
                    < img className={styled.nextVector} src={vectorWhite} alt="Next" onClick={() => nextPicture()} />
                </div>}
        </div>
    )
}

export default Gallery