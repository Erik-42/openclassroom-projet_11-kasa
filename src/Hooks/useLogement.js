import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Url = "/data/logements.json"

function useLogement() {
    const { id } = useParams()
    const navigate = useNavigate()

    //state (état et données)
    const [data, setData] = useState({
        id: "",
        title: "",
        cover: "",
        pictures: [],
        description: "",
        host: {
            name: "",
            picture: ""
        },
        rating: "",
        location: "",
        equipments: [],
        tags: []
    })

    //Comportements
    useEffect(() => {
        //requete axios en prevision de l'API
        axios
            .get(Url)
            .then((response) => {
                const logement = response.data.find((element) => element.id === id)
                if (logement === undefined) {
                    navigate("/error")
                } else { setData(logement) }

            });
    }, [id, navigate]);

    return data
}

export default useLogement