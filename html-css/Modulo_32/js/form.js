const form = document.getElementById('form');
const nome = document.getElementById('nome');
const email = document.getElementById('email');
const cpf = document.getElementById('cpf');
const cep = document.getElementById('cep');
const rua = document.getElementById('rua');
const numero = document.getElementById('numero');
const bairro = document.getElementById('bairro');
const complemento = document.getElementById('complemento');
const cidade = document.getElementById('cidade');
const uf = document.getElementById('uf');
const mensagem = document.querySelector('#mensagem');
const notNull = document.getElementsByClassName('not-null');
let isCEP = '';
let msg = [];
let markup = '';

form.reset();

function isEmpty(elem){
    return elem.value.length < 1 ? `O campo <strong>${elem.name}</strong> não pode ser vazio.` : ''; 
}

function validaEmail(elem){
    return elem.value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) ? '' : `Digite um <strong>E-mail</strong> válido`;
}

function validaCPF(elem){
    return elem.value.match(/[0-9]{11}/) ? '' : `Digite um <strong>CPF</strong> válido`;
}

function validaCEP(elem){
    rua.value = "";
    numero.value = "";
    bairro.value = "";
    complemento.value = "";
    cidade.value = "";
    uf.value = "";

    rua.classList.remove("valid");
    rua.classList.add("disabled");
    bairro.classList.remove("valid");
    bairro.classList.add("disabled");
    cidade.classList.remove("valid");
    cidade.classList.add("disabled");
    uf.classList.remove("valid");
    uf.classList.add("disabled");

    numero.classList.add("disabled");
    numero.disabled = true;
    complemento.classList.add("disabled");
    complemento.disabled = true;

    if(!elem.value.match(/^[0-9]{8}/)) return `Digite um <strong>CEP</strong> válido.`;
    else return '';
}

function updateAdress(data) {
    if( !('erro' in data)) {
        cep.classList.add("valid");
        rua.value=(data.logradouro);
        rua.classList.remove("disabled");
        rua.classList.add("valid");
        numero.classList.remove("disabled");
        numero.disabled = false;
        bairro.value=(data.bairro);
        bairro.classList.remove("disabled");
        bairro.classList.add("valid");
        complemento.classList.remove("disabled");
        complemento.disabled = false;
        cidade.value=(data.localidade);
        cidade.classList.remove("disabled");
        cidade.classList.add("valid");
        uf.value=(data.uf);
        uf.classList.remove("disabled");
        uf.classList.add("valid");
    } else {
        mensagem.innerHTML = `CEP não encontrado`;
    }
}

cep.addEventListener("focusout", function(event) {
    mensagem.innerHTML = "";
    markup = '';
    msg = [];

    if(this.value.length > 0) isCEP = validaCEP(cep);
    if(this.value.length == 0) isCEP = ' ';

    if(isCEP.length > 0) {
        msg.push(isCEP);
    } else {
        const script = document.createElement('script');
        script.src = 'https://viacep.com.br/ws/' + cep.value + '/json?callback=updateAdress';
        document.body.appendChild(script);
    }

    msg.forEach(item => {
        markup += `<p>${item}</p>` 
    });

    mensagem.innerHTML = markup;
})

form.addEventListener('submit', function(event){
    event.preventDefault();
    let isEmail = 0;
    let isCPF = 0;
    mensagem.innerHTML = '';
    markup = '';
    msg = [];
   
    Array.from(notNull).forEach(field => {
        let fieldState = isEmpty(field);
        if(fieldState) 
            msg.push(fieldState);
    });

    if(email.value.length > 0) {
        isEmail = validaEmail(email);
        if(isEmail) {
            email.classList.remove("valid");
            email.classList.add("invalid");
            msg.push(isEmail);
        }
        else {
            email.classList.add("valid");
            email.classList.remove("invalid");
        }
    }

    if(cpf.value.length > 0) {
        isCPF = validaCPF(cpf);
        if(isCPF) {
            cpf.classList.remove("valid");
            cpf.classList.add("invalid");
            msg.push(isCPF)
        }
        else {
            cpf.classList.add("valid");
            cpf.classList.remove("invalid");
        }
    }

    if(cep.value.length > 0) isCEP = validaCEP(cep);
    if(cep.value.length == 0) isCEP = ' ';

    if(isCEP.length > 0) {
        msg.push(isCEP);
    } else {
        const script = document.createElement('script');
        script.src = 'https://viacep.com.br/ws/' + cep.value + '/json?callback=updateAdress';
        document.body.appendChild(script);
    }

    msg.forEach(item => {
        markup += `<p>${item}</p>` 
    });

    mensagem.innerHTML = markup;

    if(msg.length == 0) {
        setTimeout(window.alert("Cadastro feito!"), 5000)
        form[0].reset();
    }
});