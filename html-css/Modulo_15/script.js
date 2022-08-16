let allInputs = document.querySelectorAll('input');
let varObriga = [0, 0];
for(let campos of allInputs) {validacaoDeCampo(campos);}

// for(let campoEmFoco of camposObrigatorios) {validaObrigatorios(campoEmFoco);}
// for(let campoEmFoco of camposNumericos) {validaCampoNumerico(campoEmFoco);}
// for(let campoEmFoco of campoEmail) {validaEmail(campoEmFoco);}
// let camposObrigatorios = document.querySelectorAll('input.obrigatorio');
// let campoEmail = document.querySelectorAll('input.email');
// let camposNumericos = document.querySelectorAll('input.numero');
// let campoUF = document.querySelectorAll('input.uf');

function validacaoDeCampo(campoSemFoco){
    campoSemFoco.addEventListener("focusout", function(event) {
        switch (this.classList[0]) {
            case "obrigatorio":
                f_Obrigatorio(this);
                break;

            case "email":
                f_Email(this);
                break;

            case "telefone":
                f_Telefone(this);
                break;

            case "cep":
                f_CEP(this);
                break;

            case "uf":
                f_UF(this);
                break;
        }
    })
}

function f_Obrigatorio(campo){
    if(campo.value == ""){
        document.querySelector('.mensagem').innerHTML = "O preenchimento do campo " + campo.name + " é obrigatório";
        campo.classList.add('erro');
        campo.name == "Nome" ? varObriga[0] = 0: varObriga[1] = 0;
        
    } else {
        document.querySelector('.mensagem').innerHTML = "";
        campo.classList.remove('erro');
        campo.name == "Nome" ? varObriga[0] = 1: varObriga[1] = 1;
        
    }
    if(varObriga[0] == 1 && varObriga[1] == 1) { document.getElementById("btn_enviar").disabled = false }
}

function f_Email(campo){
    const emailValido = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?/i;
    
    if(campo.value.match(emailValido)) {
        document.querySelector('.mensagem').innerHTML = "";
        campo.classList.remove('erro');
        campo.parentNode.classList.remove('erro');
    } else {
        document.querySelector('.mensagem').innerHTML = "Verifique o email";
        campo.classList.add('erro');
        campo.parentNode.classList.add('erro');
    }
}

function f_Telefone(campo){
    const telValido = /^[\d]{2}[\d]{5}[\d]{4}/;
    let numeroTel = campo.value.replace(/-/, "").replace(/ /, "");
    console.log(numeroTel);

    if(numeroTel != "" && numeroTel.match(telValido)) {
        document.querySelector('.mensagem').innerHTML = "";
        campo.classList.remove('erro');
        campo.parentNode.classList.remove('erro');
    } else {
        document.querySelector('.mensagem').innerHTML = "O preenchimento do campo " + campo.name + " deve ser feito com código de área e os 9 números";;
        campo.classList.add('erro');
        campo.parentNode.classList.add('erro');
    }
}

function f_CEP(campo){
    const cepValido = /^[\d]{5}[\d]{3}/;
    let numeroCEP = campo.value.replace(/-/, "");

    if(numeroCEP != "" && numeroCEP.match(cepValido)) {
        document.querySelector('.mensagem').innerHTML = "";
        campo.classList.remove('erro');
        campo.parentNode.classList.remove('erro');
    } else {
        document.querySelector('.mensagem').innerHTML = "O preenchimento do campo " + campo.name + " deve ser feito com 9 números";;
        campo.classList.add('erro');
        campo.parentNode.classList.add('erro');
    }
}

function f_UF(campo){
    const ufValido = /^[A-Z]{2}/;
    let digitoUF = campo.value;

    if(digitoUF != "" && digitoUF.match(ufValido)) {
        document.querySelector('.mensagem').innerHTML = "";
        campo.classList.remove('erro');
        campo.parentNode.classList.remove('erro');
    } else {
        document.querySelector('.mensagem').innerHTML = "O preenchimento do campo " + campo.name + " deve ser feito com 2 caracteres";;
        campo.classList.add('erro');
        campo.parentNode.classList.add('erro');
    }
}