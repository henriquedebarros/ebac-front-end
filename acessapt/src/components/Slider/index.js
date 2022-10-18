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
            const result = await api.get(`https://api.jsonbin.io/v3/b/634ea7b52b3499323be2b21d?category=${filteredPlaces ? filteredPlaces : ''}`);

            if(result.status === 200 || result.status === 304) {
                let allData = result.data.record.places;
                let dataFiltered = allData.filter(element => element.category === filteredPlaces);
                if(dataFiltered == "") dataFiltered = allData;
                setPlaces(dataFiltered);
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