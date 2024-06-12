import { useEffect, useState } from "react";
import axios from "axios";
const Datas = "/data/logements.json"

function useAccueil() {
    //state (état et données)
    const [data, setData] = useState([])

    //Comportements
    useEffect(() => {
        //requete axios en prevision de l'API
        axios
            .get(Datas)
            .then((response) => {
                setData(response.data)
            });
    }, []);

    return data
}

export default useAccueil