import React from 'react';
import './style.scss';
import curatorPhoto from '../../images/curator-photo.JPEG'

function CuratorItem(){
    return(
        <div className="curator__container">
            <div className="curator__photo">
                <img src={curatorPhoto} alt="Foto do curador Henrique Barros" />
            </div>
            <div className="curator__details">
                <div>
                    <h3>Henrique Barros</h3>
                    <h4>Curadoria</h4>
                </div>
                <p>Designer com formação e experiência em Audiovisual e pós-graduação em Experiência do Usuário. Estudando desenvolvimento Front-End para desenhar melhores soluções para web.</p>
            </div>
        </div>
    )
}

export default CuratorItem;