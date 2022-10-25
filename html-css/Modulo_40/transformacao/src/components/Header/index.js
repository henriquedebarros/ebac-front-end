import React from 'react';
import Nav from '../Nav';
import './header.scss';
import logo_ecoilhas from '../../images/logo-ecoilhas.svg';

function Header(props) {
  return (
    <header className="header">
      <img src={logo_ecoilhas} alt="Logo" />
      <Nav links={props} />
    </header>
  )
}

export default Header