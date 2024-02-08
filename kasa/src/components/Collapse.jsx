import { useEffect, useRef, useState } from "react";
import flecheBas from "../assets/flecheBas.svg";

export default function Collapse(props) {

    const [toggle, setToggle] = useState(false);
    const [height, setHeight] = useState(); // State à la hauteur du collapse
    const refHeight = useRef();

    const toggleChange = () => {
        setToggle(!toggle);
    };

    useEffect(() => {
        setHeight(`${refHeight.current.scrollHeight}px`);
    }, []);

    return <>
        <div className={"collapse"}>
            <div className="collapse_visible">
                <h2>{props.titleCollapse}</h2>
                <img
                    onClick={toggleChange}
                    className={toggle ? "chevron rotated" : "chevron"}
                    src={flecheBas}
                    alt="chevron"
                />
            </div>
            <div
                ref={refHeight}
                className={toggle ? "collapse_toggle animated" : "collapse_toggle"}
                style={{ height: toggle ? `${height}` : "0px" }}
            >
                <p aria-hidden={toggle ? "true" : "false"}>{props.textCollapse}</p>
            </div>
        </div>


    </>
}