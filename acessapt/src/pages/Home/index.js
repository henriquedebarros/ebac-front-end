import React, { useState } from 'react';
import './style.scss';
import imagemDestaque from '../../images/imagem-destaque.png';
import Pills from '../../components/Pills';

const Places = [
    'Praça', 'Parque', 'Igreja', 'Hotel', 'Restaurante', 'Zoológico', 'Farmácia', 'Loja', 'Aquário'
]

const Home = props => {
    const [selectedPill, setSelectedPill] = useState('');
    return(
        <main id="main-content" className="home__container">
            <div className="home__col">
                <h1 className="home__title">{props.city} para toda a gente!</h1>
                <p className="home__text">Nossa missão é facilitar o encontro entre lugares inclusivos e pessoas que buscam alternativas culturais para sair de casa, com a mobilidade que todo cidadão precisa.</p>
                <p className="home__text">Checamos 10 itens essenciais de acessibilidade para pessoas com deficiência em diversos pontos da cidade.</p>
                <div className="home__pills">
                    {
                        Places.map((item) => (
                            <Pills 
                                local = {item}
                                selected = {selectedPill === item}
                                onClick = {() => setSelectedPill(item)}
                            />
                        ))
                    }
                </div>
            </div>
            <div className="home__col">
                <div className="home__image home__image--destaque">
                    <img src={imagemDestaque} alt="" />
                </div>
            </div>
        </main>
    )
}

export default Home;