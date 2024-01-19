import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import BannerHome from "../components/BannerHome";
import CardLogements from "../components/CardLogements";


export default function Home() {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('/logements.json')
            .then(response => { return response.json(); })
            .then(data => { setData(data); }),
            []
    });

    return <>
        <BannerHome />
        <section className="card_container">
            {data.map((loc) => (
                < CardLogements
                    key={loc.id}
                    lien={`/logement/${loc.id}`}
                    cover={loc.cover}
                    title={loc.title}
                    />
                    ))}
        </section>
    </>
}

// quand je garde que la fonction et je console.log (loc.quelquechos) ca apparait mais sinon ca renvoi un objet