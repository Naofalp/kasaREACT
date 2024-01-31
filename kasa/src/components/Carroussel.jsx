import flecheLeft from "../assets/left.svg";
import flecheRight from "../assets/right.svg";


export default function Carroussel() {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1); // condition pour retourne au debut
    };
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);// condition pour retourne au debut
    };

    return <>
        <section className="carroussel_container">
            {length > 1 && (
                <img
                src={flecheLeft} //Affichage des flèches seulement si length > 1
                    alt="image précédente"
                    onClick={prevSlide}
                    className="carroussel_prev"
                />
            )}
            {length > 1 && (
                <img
                    src={flecheRight}
                    alt="image suivante"
                    onClick={nextSlide}
                    className="carroussel_next"
                />
            )}

        </section>
    </>



};