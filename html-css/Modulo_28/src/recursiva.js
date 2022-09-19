// Função Recursivas
function contagemRegressiva(numero) {
    console.log(numero);
    numero > 0 ? console.log(contagemRegressiva(numero-1)) : console.log("Fim!");
}
contagemRegressiva(50);