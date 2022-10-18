import React from 'react';
import './style.scss';
//import Button from '../Button';
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

const Card = ({item}) => {
    const imagePath = require('../../images/' + item.image);
    console.log(imagePath);
    return(
        <div className="card__container">
            <div className="card__image">
                <img src={imagePath} alt={item.name} title={item.name} />
            </div>
            <div className="card__content">
                <h3>{item.name}</h3>
                <ul className="card__facilities">
                    <li className={`card__facilities__item ${!item.facilities[0].status ? 'card__facilities__item--unchecked' : ''}`}>
                        <img src={iconBraile} alt="Sinalização em Braile" title="Sinalização em Braile" />
                    </li>
                    <li className={`card__facilities__item ${!item.facilities[1].status ? 'card__facilities__item--unchecked' : ''}`}>
                        <img src={iconAudio} alt="Áudio descrição" title="Áudio descrição" />
                    </li>
                    <li className={`card__facilities__item ${!item.facilities[2].status ? 'card__facilities__item--unchecked' : ''}`}>
                        <img src={iconBanheiro} alt="Banheiro acessível" title="Banheiro acessível" />
                    </li>
                    <li className={`card__facilities__item ${!item.facilities[3].status ? 'card__facilities__item--unchecked' : ''}`}>
                        <img src={iconElevador} alt="Elevador para cadeirantes" title="Elevador para cadeirantes" />
                    </li>
                    <li className={`card__facilities__item ${!item.facilities[4].status ? 'card__facilities__item--unchecked' : ''}`}>
                        <img src={iconEstacionamento} alt="Estacionamento para idosos / PCD" title="Estacionamento para idosos / PCD" />
                    </li>
                    <li className={`card__facilities__item ${!item.facilities[5].status ? 'card__facilities__item--unchecked' : ''}`}>
                        <img src={iconCaoGuia} alt="Permite acesso de cães-guias" title="Permite acesso de cães-guias" />
                    </li>
                    <li className={`card__facilities__item ${!item.facilities[6].status ? 'card__facilities__item--unchecked' : ''}`}>
                        <img src={iconPisoTatil} alt="Piso tátil de alerta" title="Piso tátil de alerta" />
                    </li>
                    <li className={`card__facilities__item ${!item.facilities[7].status ? 'card__facilities__item--unchecked' : ''}`}>
                        <img src={iconPortaLarga} alt="Portas largas" title="Portas largas" />
                    </li>
                    <li className={`card__facilities__item ${!item.facilities[8].status ? 'card__facilities__item--unchecked' : ''}`}>
                        <img src={iconRampa} alt="Rampas de acesso para cadeirante" title="Rampas de acesso para cadeirante" />
                    </li>
                    <li className={`card__facilities__item ${!item.facilities[9].status ? 'card__facilities__item--unchecked' : ''}`}>
                        <img src={iconLGP} alt="Atendimento em Língua Gestual Portuguesa" title="Atendimento em Língua Gestual Portuguesa" />
                    </li>
                </ul>
                <p>{item.description}</p>
                <a className="button" href={item.link} target="_blank" rel="noreferrer">Como chegar</a>
                {/* <Button>Como chegar</Button> */}
            </div>
        </div>
    )
}

export default Card;