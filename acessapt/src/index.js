import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.scss';
import Footer from './components/Footer';
import Routes from './routes';
import {BrowserRouter} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
    <div className='main__wrapper'>
      <div className="main__container">
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </div>
    </div><Footer />
  </React.Fragment>
);