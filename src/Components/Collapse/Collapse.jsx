import React, { useState } from 'react'
import vectorWhiteUp from '../../assets/Logo/Vector.svg'
import "./collapse.scss"

const Collapse = ({ data, title }) => {
    //state (état et données)
    const [toggle, setToggle] = useState(false);
    const toggleCollapse = () => {
        setToggle(!toggle);
    }

    //affichage (render)
    return (
        <div>
            <div className="collapse"  >
                <div className="barreCollapse" onClick={toggleCollapse}>
                    <div className="titreCollapse" >{title}</div>
                    <img className={toggle ? "vector rotation" : "vector"} src={vectorWhiteUp} alt="Déployer / Réduire" />
                </div>
                <div >
                    {toggle &&
                        <div className="collapseToggle animated" >
                            {Array.isArray(data) ?
                                <ul> {data.map((elm, key) => <li key={key}>{elm}</li>)}</ul> :
                                <p className="textCollapse">{data} </p>
                            }
                        </div>}
                </div>
            </div >

        </div >
    )
}
export default Collapse;