import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Carroussel from "../components/Carroussel";

//Mettre ici la condition selon l'id : si l'id n'est pas referencer alors renvoi sur la page error

export default function Logement() {
    const { id } = useParams();
    const [logement, setLogement] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchLogementData = async () => {
            try {
                const response = await fetch('/logements.json');
                const data = await response.json();
                const logementData = data.find(item => item.id === id);
                if (!logementData) {
                    navigate("/Error");
                } else {
                    setLogement(logementData);
                }
            } catch (error) {
                console.error("Error fetching logement data:", error);
                navigate("/Error");
            }
        };

        fetchLogementData();
    }, [id, navigate]);


    if (logement === null) {
        return <div>Chargement en cours...</div>;
    }

    const slidesIMG = logement && logement.pictures;

    {/*console.log(logement)*/}

    return <>
        <h1>logement id : {id}</h1>
        <Carroussel slides={slidesIMG} />
        <section className="hostInfo-container">
            <div className="title-tags-container">
                <div className="title-container redFont">
                    <h1>{logement.title}</h1>
                    <h3>{logement.location}</h3>
                </div>
                <div className="tags-container">
                    {tags.map((tag) => (
                        <Tag key={tag} tag={tag} />
                    ))}
                </div>
            </div>
        </section>

    </>

}