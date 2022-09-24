const paises = [
    {
        bandeira: "./assets/brasil.svg",
        nome: "Brasil",
        continente: "América",
        populacao: "200000000",
        idioma: "Português"
    },
    {
        bandeira: "./assets/chile.svg",
        nome: "Chile",
        continente: "América",
        populacao: "19000000",
        idioma: "Espanhol"
    },
    {
        bandeira: "./assets/gana.svg",
        nome: "Gana",
        continente: "África",
        populacao: "31000000",
        idioma: "Inglês"
    },
    {
        bandeira: "./assets/eslovaquia.svg",
        nome: "Eslováquia",
        continente: "Europa",
        populacao: "5000000",
        idioma: "Eslovaco"
    },
    {
        bandeira: "./assets/tailandia.svg",
        nome: "Tailândia",
        continente: "Ásia",
        populacao: "68000000",
        idioma: "Tailandês"
    },
    {
        bandeira: "./assets/tailandia.svg",
        nome: "Tanzânia",
        continente: "África",
        populacao: "59000000",
        idioma: "Suahili, Inglês"
    }
]

const stringToHTML = function (str) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(str, 'text/html');
    return doc.body;
};

let pop, popEmMi;
        
function criarCards(listaFinal, local) {
    listaFinal.forEach((element) => {
        let bandeira = element.bandeira;
        let nome = element.nome;
        let continente = element.continente;
        pop = element.populacao;
        popEmMi = pop.slice(0, -6) + "mi";
        let idoma = element.idioma;

        card_string = "<div class='col'><div class='card'><img src='" + bandeira + "' class='card-img-top' alt='...'><div class='card-body'><h5 class='card-title'>" + nome + "</h5><p class='card-text'>" + continente + " | " + popEmMi + " | " + idoma + "</p></div></div></div>";
        card_pronto = stringToHTML(card_string);
        document.getElementById(local).append(card_pronto);
    });
}
criarCards(paises, "cards");

// Filter
let paises_filter = paises.filter(pais => pais.continente == "América");
criarCards(paises_filter, "cards-filter");

// Reduce
let todasPop = [];
paises.forEach(pais => todasPop.push(parseInt(pais.populacao)));
totalPop = todasPop.reduce((acumulador, numero) => {
    return acumulador += parseInt(numero);
});
totalPop += "";
totalPop = "<p class='h3 text-primary'>" + totalPop.slice(0, -6) + "mi</p>";
document.getElementById("cards-reduce").innerHTML = totalPop;

// Map
let paises_map = paises.map((e_atual) => {
    if(e_atual.nome == "Brasil" || e_atual.nome == "Chile") {
        e_atual.continente = "América do Sul";
    }
    return e_atual;
})

criarCards(paises_map, "cards-map");