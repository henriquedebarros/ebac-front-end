const lista = document.getElementById("listaProd");
const botoes = document.querySelectorAll(".pagina");
const baseURL = "https://dummyjson.com/products/";

const stringToHTML = function (str) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(str, 'text/html');
    return doc.body;
};


botoes.forEach(botao => botao.addEventListener("click", (event) => {
    botoes.forEach(botao => botao.classList.remove("active"));
    event.target.classList.add("active");
    rel = event.target.getAttribute("rel");
    inicio = (rel - 1) * 10;
    buscarProdutos(inicio);
}))

function buscarProdutos(inicio) {
    lista.innerHTML = "";
    let i = inicio + 1;
    let limite = inicio + 10;
    for(i; i <= limite; i++) {
        fetch(baseURL + i)
            .then(resposta => resposta.json())
            .then(dados => montarCard(dados));
    }
}

function montarCard(dados) {
    let objeto = dados;
    card = `
        <div class="col">
            <div class="card text-bg-light mb-3">
                <img src="${objeto.thumbnail}" class="card-img-top ratio ratio-1x1" alt="${objeto.title}">
                <div class="card-body">
                    <h5 class="card-title">${objeto.title}</h5>
                    <p class="card-text">${objeto.description}</p>
                </div>
                <div class="card-footer">
                    <small class="text-muted">${objeto.brand} | ${objeto.category} | ${objeto.rating}</small>
                </div>          
            </div>
        </div>`;
    card = stringToHTML(card);
    lista.append(card);
}

buscarProdutos(0);