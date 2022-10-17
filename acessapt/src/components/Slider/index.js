import React, {useState, useEffect, useContext} from 'react';
import {FilterContext} from '../../contexts/FilterContext';
import SwiperCore, {Pagination} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/swiper-bundle.css';
import api from '../../config/api.js';
import Card from '../Card';

SwiperCore.use(Pagination);

function Slider(){
    const {filteredPlaces, setFilteredPlaces} = useContext(FilterContext);
    const [places, setPlaces] = useState([]);

    useEffect(() => {
        const fetchPlaces = async () => {
            const result = await api.get(`http://localhost:3333/places`);

            if(result.status === 200) {
                setPlaces(result.data);
            }
        }
        fetchPlaces();
    }, [filteredPlaces])

    return(
        <Swiper slidesPerView={places.length > 1 ? 1 : places.length}
            breakpoints={{
                500: {slidesPerView: places.length > 2 ? 2 : places.length},
                768: {slidesPerView: places.length > 3 ? 3 : places.length},
                1024: {slidesPerView: places.length > 4 ? 4 : places.length}
            }}>
            {
                places.map(item => {
                    return(
                    <SwiperSlide key={item.id}>
                        <Card key={item.id} item={item} />
                    </SwiperSlide>)
                })
            }
            
        </Swiper>
    )
}

export default Slider;