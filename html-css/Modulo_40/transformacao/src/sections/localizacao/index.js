import React from 'react';
import Ball from '../../components/Ball';
import './localizacao.scss';
import './geolocation.js';

function Localizacao() {
    return (
        <section className="localizacao" id="localizacao">
            <Ball type="full" />
            <h2 className="localizacao__title">Localização</h2>
            <p className="localizacao__text">Confira a localização de todos as Ecoilhas de Lisboa.<br />Você pode permitir que o navegador acesse sua localização para facilitar sua busca.</p>
            <iframe 
                className="localizacao__map" 
                name="mapEcoilhas" 
                title="Mapa das Ecoilhas" 
                src="https://www.google.com/maps/d/u/0/embed?mid=1sYb1zcsa-FV9WV6RKypbLasJWZRhttk&ehbc=2E312F">
            </iframe>
        </section>
    )
}

export default Localizacao;