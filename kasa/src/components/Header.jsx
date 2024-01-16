import { NavLink, Outlet } from "react-router-dom";

export function Header () {
    return <>
    <header>
        <nav>
            <NavLink to ="/">Acceuil</NavLink>
            <NavLink to ="/Apropos">A propos</NavLink>
        </nav>
    </header>
    <div>
        <Outlet/>
    </div>
    </>
}

export default Header
