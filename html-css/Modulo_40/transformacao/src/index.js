import React from 'react';
import ReactDOM from 'react-dom/client';

import Header from './components/Header';
import Hero from './components/Hero';
import Localizacao from './sections/localizacao';
import Residuos from './sections/residuos';
import Servicos from './sections/servicos';
import Footer from './components/Footer';
import "./styles/global.scss";

const topNavigation = [
  {id: "INI", name: "Início", link: "top"},
  {id: "LOC", name: "Localização", link: "localizacao"},
  {id: "SER", name: "Serviços", link: "servicos"},
  {id: "SEG", name: "Resíduos", link: "residuos"}
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
    <div className="container">
      <Header links={topNavigation} />
      <Hero />
      <Localizacao />
      <Servicos />
      <Residuos />
    </div>
    <Footer />
  </React.Fragment>
);