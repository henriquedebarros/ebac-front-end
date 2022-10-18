import {Routes as Switch, Route} from 'react-router-dom';
import { LocationContext } from '../contexts/LocationContext';
import { Fragment, useState } from 'react';
import { FilterContext } from '../contexts/FilterContext';
import Home from '../pages/Home';
import Header from '../components/Header';
import Places from '../components/Places';
import Curator from '../components/Curator';

const Routes = () => {
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [filteredPlaces, setFilteredPlaces] = useState('');

    return(
        <FilterContext.Provider value={{filteredPlaces, setFilteredPlaces}}>
            <LocationContext.Provider value={{city, setCity, country, setCountry}}>
                <Header />
                <Switch>
                    <Route path="/:country/:city" element={
                        <Fragment>
                            <Home />
                            <Places />
                            <Curator />
                        </Fragment>
                    }/>
                </Switch>
            </LocationContext.Provider>
        </FilterContext.Provider>
    )
}

export default Routes;