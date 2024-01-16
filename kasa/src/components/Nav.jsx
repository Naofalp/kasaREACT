import { NavLink, Outlet } from "react-router-dom";

export default function Header() {
    return <>
        <nav>
            <NavLink to="/">
                Acceuil
            </NavLink>
            <NavLink to="/Apropos">
                A propos
            </NavLink>
        </nav>
        <div>
            <Outlet />
        </div>
    </>
}