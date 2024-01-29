import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Carroussel } from "../components/Carroussel";

export default function Logement() {
    const { id } = useParams();
    const [logement, setLogement] = useState ([]);

    useEffect(() => {
        fetch('/logements.json')
            .then(response => { return response.json(); })
            .then(data => {
                // Trouver le logement correspondant à l'ID
                const logementData = data.find(item => item.id === id);
                setLogement(logementData);
            })
    }, [id]);


    return <>
        <h1>logement id : {id}</h1>
        <img src={logement.cover} />

        <Carroussel />


    </>
}