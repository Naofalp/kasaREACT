import { Link, NavLink } from "react-router-dom";

export default function Error() {
    return <>
        <div className="error_container">
            <p className="error_number">404</p>
            <p className="error_text">Oups! La page que vous demandez n'existe pas.</p>
            <NavLink to="/" className="error_link">
                Retourner sur la page d’accueil
            </NavLink>
        </div>
    </>
};