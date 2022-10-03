import '../scss/styles.scss';

const botao = document.querySelectorAll(".controle__botao");
const indicador = document.querySelectorAll(".controle__indicador");
const banner = document.querySelector(".slides");
const containerBanner = document.querySelector(".banner");
let tamanhoBanner = containerBanner.offsetWidth;

console.log(tamanhoBanner);

let pagina = 1;
desabilita(pagina);
indica(pagina);

function desabilita(pag) {
    botao[0].classList.remove("disabled");
    botao[1].classList.remove("disabled");
    if(pag == 1) botao[0].classList.add("disabled");
    if(pag == 3) botao[1].classList.add("disabled");
}

function indica(pag) {
    indicador[0].classList.remove("active");
    indicador[1].classList.remove("active");
    indicador[2].classList.remove("active");
    indicador[pag-1].classList.add("active");
}

botao[0].addEventListener("click", () => {
    tamanhoBanner = containerBanner.offsetWidth;

    if(!botao[0].classList.contains("disabled")) {
        pagina--;
    }
    // Fazer o translate
    let mover = (pagina - 1) * -tamanhoBanner;
    console.log(mover);
    banner.style.transform = `translate(${mover}px, 0)`;
    desabilita(pagina);
    indica(pagina);
})

botao[1].addEventListener("click", () => {
    tamanhoBanner = containerBanner.offsetWidth;

    if(!botao[1].classList.contains("disabled")) {
        pagina++;
    }
    let mover2 = (pagina - 1) * -tamanhoBanner;
    console.log(mover2);
    banner.style.transform = `translate(${mover2}px, 0)`;
    desabilita(pagina);
    indica(pagina);
})

document.getElementById("logo_header").setAttribute("src", "/assets/logo_gapp.png");
document.getElementById("banner_01").setAttribute("src", "/assets/banner_01.jpg");
document.getElementById("banner_02").setAttribute("src", "/assets/banner_02.jpg");
document.getElementById("banner_03").setAttribute("src", "/assets/banner_03.jpg");
document.getElementById("img_video").setAttribute("src", "/assets/img_video.jpg");
document.getElementById("logo_footer").setAttribute("src", "/assets/logo_gapp_footer.png");
document.getElementById("shadow").setAttribute("src", "/assets/shadow.png");
document.getElementById("icon_location").setAttribute("src", "/assets/icon_location.png");