import {Routes as Switch, Route} from 'react-router-dom';
import { LocationContext } from '../contexts/LocationContext';
import { useState } from 'react';
import Home from '../pages/Home';
import Header from '../components/Header';

const Routes = () => {
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');

    return(
        <LocationContext.Provider value={{city, setCity, country, setCountry}}>
            <Header />
            <Switch>
                <Route path="/:country/:city" element={<Home />} />
            </Switch>
        </LocationContext.Provider>
    )
}

export default Routes;