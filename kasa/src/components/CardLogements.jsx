import { Link } from "react-router-dom";

export default function CardLogements(lien, cover, title) {
    <Link to={lien} className="card_link">
        <article className="card_article">
            <img src={cover} />
            <p className="card_title">{title}</p>
        </article>
    </Link>

}