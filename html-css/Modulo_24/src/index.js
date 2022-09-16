import "./style.scss";
import img from './carro_audi.jpg';

function titleComponent(){
    const elemH1 = document.createElement('h1');
    elemH1.innerHTML = 'Exercício Webpack';
    elemH1.classList.add('title');
    return elemH1;
}

function bodyComponent(){
    const elemBody = document.createElement('p');
    elemBody.innerHTML = 'Nova forma de gerar conteúdo de forma dinâmica usando html, csss e js auto compilados.';
    return elemBody;
}

function imageComponent(){
    const elemImg = new Image();
    elemImg.src = img;
    return elemImg;
}

document.getElementById('root').appendChild(titleComponent());
document.getElementById('root').appendChild(bodyComponent());
document.getElementById('root').appendChild(imageComponent());