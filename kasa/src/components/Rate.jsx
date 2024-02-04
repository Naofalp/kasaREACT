import etoilePleine from "../assets/etoilePleine.svg";
import etoileVide from "../assets/etoileVide.svg";

export default function Rate({ score }) {
    const stars = [1, 2, 3, 4, 5];
    return <>
        <div className="rate-comp">
            {stars.map((level) =>
                score >= level ? (
                    <img
                        key={level.toString()}
                        className="star"
                        src={etoilePleine}
                        alt="rating star"
                    />
                ) : ( 
                    <img
                        key={level.toString()}
                        className="star"
                        src={etoileVide}
                        alt="rating star"
                    />
                )
            )}
        </div>
    </>
}
