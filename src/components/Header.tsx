import { NavLink } from "react-router-dom";
import logo from '../assets/logo.svg';
import './Header.css';

export function Header() {
    return(
        <header className="header">
            <img src={logo} className="logo" alt="logo"/>            

            <nav className="main-navigation">
                <NavLink to="/">
                    <span>Empresa</span>
                </NavLink>
                <NavLink to="/portfolio">
                    <span>Portfólio</span>
                </NavLink>
                <a href="#">Áreas de atuação</a>
                <a href="#">Contato</a>
                <a href="#">Como chegar</a>
            </nav>
        </header>
    )
}