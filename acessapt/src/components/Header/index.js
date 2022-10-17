import React from 'react';
import "./style.scss";
import logoAcessaPT from '../../images/logo-acessaPT.svg';
import logoEBAC from '../../images/logo-ebac.svg';

const Header = props => {
    return (
        <header className="header__container">
            <div className="header__logo header__logo--acessa">
                <img src={logoAcessaPT} alt="Logo Acessa PT" />
                <span className="header__city">/ {props.city}, {props.country}</span>
            </div>
            <div className="header__logo header__logo--ebac">
                <span>Apoio:</span>
                <img src={logoEBAC} alt="Logo EBAC" />
            </div>
        </header>
    )
}

export default Header;