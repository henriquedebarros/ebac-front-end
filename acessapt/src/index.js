import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.scss';

import Header from './components/Header';
import Home from './pages/Home';
import Curator from './components/Curator';
import Footer from './components/Footer';
import Places from './components/Places'

const config = {
  city: "Lisboa",
  country: "Portugal"
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <><div className='main__wrapper'>
    <div className="main__container">
      <Header city={config.city} country={config.country} />
      <Home city={config.city} />
      <Places />
      <Curator />
    </div>
  </div><Footer /></>
);