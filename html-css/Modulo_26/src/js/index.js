import '../scss/styles.scss';

const elemRoot = document.getElementById('root');
elemRoot.classList.add('container');

document.querySelector(".header_hero").setAttribute("src", "./assets/header_hero.jpg");

for (let i = 1; i < 7; i++) {
    let seletor = "vitrine__image-" + i;
    console.log(seletor);
    document.querySelector("." + seletor).setAttribute("src", "./assets/" + seletor + ".jpg");
}

const btnEnviar = document.querySelector(".contato__button");
const inpNome = document.getElementById("nome");
const inpEmail = document.getElementById("email");

btnEnviar.addEventListener("click", (e) => {
    e.preventDefault();

    if(inpNome.value == "" || inpEmail.value == "") {
        if(inpNome.value == "")
            alert("Preencha o campo Nome");
        if(inpEmail.value == "")
            alert("Preencha o campo E-mail");
    }
    else {
        inpNome.value = "";
        inpEmail.value = "";
        alert("Cadastro feito");
    }
})