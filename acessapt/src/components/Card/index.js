import React from 'react';
import './style.scss';
import Button from '../Button';
import iconBraile from '../../images/icon-braile.png';
import iconAudio from '../../images/icon-audio-descricao.png';
import iconBanheiro from '../../images/icon-banheiro-acessivel.png';
import iconElevador from '../../images/icon-elevador.png';
import iconEstacionamento from '../../images/icon-estacionamento.png';
import iconCaoGuia from '../../images/icon-caoguia.png';
import iconPisoTatil from '../../images/icon-piso-tatil.png';
import iconPortaLarga from '../../images/icon-porta-larga.png';
import iconRampa from '../../images/icon-rampa.png';
import iconLGP from '../../images/icon-lgp.png';

const Card = () => {
    return(
        <div className="card__container">
            <div className="card__image"></div>
            <div className="card__content">
                <h3>Nome do Local</h3>
                <ul className="card__facilities">
                    <li className="card__facilities__item">
                        <img src={iconBraile} alt="Sinalização em Braile" title="Sinalização em Braile" />
                    </li>
                    <li className="card__facilities__item">
                        <img src={iconAudio} alt="Áudio descrição" title="Áudio descrição" />
                    </li>
                    <li className="card__facilities__item">
                        <img src={iconBanheiro} alt="Banheiro acessível" title="Banheiro acessível" />
                    </li>
                    <li className="card__facilities__item">
                        <img src={iconElevador} alt="Elevador para cadeirantes" title="Elevador para cadeirantes" />
                    </li>
                    <li className="card__facilities__item">
                        <img src={iconEstacionamento} alt="Estacionamento para idosos / PCD" title="Estacionamento para idosos / PCD" />
                    </li>
                    <li className="card__facilities__item">
                        <img src={iconCaoGuia} alt="Permite acesso de cães-guias" title="Permite acesso de cães-guias" />
                    </li>
                    <li className="card__facilities__item">
                        <img src={iconPisoTatil} alt="Piso tátil de alerta" title="Piso tátil de alerta" />
                    </li>
                    <li className="card__facilities__item">
                        <img src={iconPortaLarga} alt="Portas largas" title="Portas largas" />
                    </li>
                    <li className="card__facilities__item">
                        <img src={iconRampa} alt="Rampas de acesso para cadeirante" title="Rampas de acesso para cadeirante" />
                    </li>
                    <li className="card__facilities__item">
                        <img src={iconLGP} alt="Atendimento em Língua Gestual Portuguesa" title="Atendimento em Língua Gestual Portuguesa" />
                    </li>
                </ul>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <Button>Como chegar</Button>
            </div>
        </div>
    )
}

export default Card;