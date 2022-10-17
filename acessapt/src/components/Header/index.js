import React, { useContext } from 'react';
import "./style.scss";
import logoAcessaPT from '../../images/logo-acessaPT.svg';
import logoEBAC from '../../images/logo-ebac.svg';
import { LocationContext } from '../../contexts/LocationContext';

const Header = () => {
    const {city, country} = useContext(LocationContext);

    function capFirst(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
        <header className="header__container">
            <div className="header__logo header__logo--acessa">
                <img src={logoAcessaPT} alt="Logo Acessa PT" />
                <span className="header__city">/ {capFirst(city)}, {capFirst(country)}</span>
            </div>
            <div className="header__logo header__logo--ebac">
                <span>Apoio:</span>
                <img src={logoEBAC} alt="Logo EBAC" />
            </div>
        </header>
    )
}

export default Header;