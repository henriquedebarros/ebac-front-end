import React, {useContext} from 'react';
import Slider from '../Slider';
import { FilterContext } from '../../contexts/FilterContext';
import './style.scss';

const Places = () => {
    const {filteredPlaces} = useContext(FilterContext);

    return(
        <section className="places">
            <div className="places__header">
                <h2 className="places__title">{filteredPlaces ? filteredPlaces + ' ' : 'Locais '} <span>Acessíveis</span></h2>
                <div className="places__select">
                    <h3>Ordenar por:</h3>
                    <select>
                        <option>distância</option>
                        <option>alfabeto</option>
                    </select>
                </div>
            </div>
            <div className="places__content">
                <Slider />
            </div>
        </section>
    )
}

export default Places;