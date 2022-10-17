import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.scss';

//import Header from './components/Header';
//import Home from './pages/Home';
import Curator from './components/Curator';
import Footer from './components/Footer';
import Places from './components/Places'
import Routes from './routes';
import {BrowserRouter} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
    <div className='main__wrapper'>
      <div className="main__container">
        <BrowserRouter>
          <Routes />
          <Places />
          <Curator />
        </BrowserRouter>
      </div>
    </div><Footer />
  </React.Fragment>
);