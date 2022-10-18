import React, {useState, useEffect, useContext} from 'react';
import {FilterContext} from '../../contexts/FilterContext';
import SwiperCore, {Pagination} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/swiper-bundle.css';
import api from '../../config/api.js';
import Card from '../Card';

SwiperCore.use(Pagination);

function Slider(){
    const {filteredPlaces} = useContext(FilterContext);
    const [places, setPlaces] = useState([]);

    useEffect(() => {
        const fetchPlaces = async () => {
            const result = await api.get(`http://localhost:3333/places?category_like=${filteredPlaces}`);

            if(result.status === 200) {
                setPlaces(result.data);
            }
        }
        fetchPlaces();
    }, [filteredPlaces])

    return(
        <Swiper
            breakpoints={{
                500: {slidesPerView: 2},
                768: {slidesPerView: 3},
                1024: {slidesPerView: 4}
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