import { useState } from "react";
import flecheLeft from "../assets/left.svg";
import flecheRight from "../assets/right.svg";


export default function Carroussel({ slides }) {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    // condition pour retourne au debut
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
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
			{slides.map((slide, index) => (
				<div
					key={index} // mise en place du slider avec affichage conditionnel et opacity=1 quand le slide en cours vaut l'index
					className={
						current === index
							? "slider bl-msk wh-msk active-anim"
							: "slider bl-msk wh-msk"
					}
				>
					{index === current && <img src={slide} alt="appartement à louer" />}
					{index === current && (
						<span className="slider_number">
							{current + 1}/{length}
						</span>
					)}
				</div>
			))}
        </section>
    </>



};