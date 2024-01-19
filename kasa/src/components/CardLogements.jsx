import { Link } from "react-router-dom";
import Home from "../Pages/Home";


export default function CardLogements({lien, cover, title}) {

// J'ai passé 1H30 a chercher pq "data" de home me renvoyait des objet au lieu de string : javais oublié
// de mettre les {} dans les proprietes de la fonction...

    return<>
    <Link to={lien} className="card_link">
        <article className="card_article">
            <img src={cover} alt={title}/>
            <p className="card_title">{title}</p>
        </article>
    </Link>
    </>
}