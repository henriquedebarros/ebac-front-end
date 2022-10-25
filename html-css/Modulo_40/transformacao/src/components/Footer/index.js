import React from 'react'
import './footer.scss'
import logo_ecoilhas_inverse from '../../images/logo-ecoilhas-inverse.svg';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <img className="footer__logo footer__logo--inverse" src={logo_ecoilhas_inverse} alt="Logo Ecoilhas Subterrâneas" />
        <p className="footer__copy">Lisboa 2022 | Desenvolvido por Henrique Barros</p>
      </div>
    </footer>
  )
}

export default Footer