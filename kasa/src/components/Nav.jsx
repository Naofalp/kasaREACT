import { NavLink, Outlet } from "react-router-dom";

export default function Nav() {
    return <>
        <nav className="nav-header">
            <NavLink to="/" className="nav-headar_link">
                Acceuil
            </NavLink>
            <NavLink to="/Apropos" className="nav-headar_link">
                A propos
            </NavLink>
        </nav>
        <div>
            <Outlet />
        </div>
    </>
}