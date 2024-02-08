import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Carroussel from "../components/Carroussel";
import Tag from "../components/Tag";
import Host from "../components/Host";
import Rate from "../components/Rate";
import Collapse from "../components/Collapse";

//Condition selon l'id : si l'id n'est pas referencé alors renvoi sur la page error

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

    const tags = logement.tags;
    const equipments = logement.equipments;
    const equipmentsList = equipments.map((item, index) => (
        <li key={index} className="equipmentsList">
            {item}
        </li>
    ));

    return <>
        <div className="logement-container">
            <Carroussel slides={logement.pictures} />
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
                <div className="rate-host-container">
                    <div className="host_container">
                        <Host
                            hostName={logement.host.name}
                            hostPic={logement.host.picture}
                        />
                    </div>
                    <div className="rate-container">
                        <Rate score={logement.rating} />
                    </div>
                </div>
            </section>
            <section className="collapse-container">
                <Collapse titleCollapse="Description" textCollapse={logement.description} />
                <Collapse titleCollapse="Équipements" textCollapse={equipmentsList} />
            </section>
        </div>
    </>

}