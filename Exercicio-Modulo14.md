# Curso Front-End | EBAC

## Exercícios - Módulo 14

1. Resolva as operações:

- 10 + 15 **= 25 (number)**
- “10” + 2 **= "102" (string)**
- “10” * 2 **= "1010" (string)**
- “10” / 3 **= 3,3333 (number)**
- “10” % 3 **= 1 (number)**
- 10 + true **= 11 (number)**
- 10 == ”10” **= true (boolean)**
- 10 === “10” **= false (boolean)**
- 10 < 11 **= true (boolean)**
- 10 > 12 **= false (boolean)**
- 10 <= 10.1 **= true (boolean)**
- 10 > 9.99 **= true (boolean)**
- 10 != “dez” **= true (boolean)**
- 10 + true **= 11 (number)**
- “dez” + true **= "deztrue" (string)**
- 10 + false **= 10 (number)**
- 10 * false **= 0 (number)**
- true + true **= 2 (number)**
- 10++ **= Erro**
- 10-- **= Erro**
- 1 & 1 **= 1 (number)**
- 1 & 0 **= 0 (number)**
- 0 & 0 **= 0 (number)**
- 1 & 0 **= 0 (number)**
- 0 / 1 **= 0 (number)**
- 5 + 5 == 10 **= true (boolean)**
- “5” + ”5” == 10 **= false (boolean)**
- “5” * 2 > 9 **= true (boolean)**
- (10 + 10) * 2 **= 40 (number)**
- 10 + 10 * 2 **= 30 (number)**

---

2. Responda as perguntas de acordo com as variáveis.

```js
var branco = "preto";
var preto = "cinza";
var cinza = "branco";
var carro = "preto";
var valor = 30000;
var prestacao = 750;
```

- branco == "branco" **= false (boolean)**
- branco == cinza **= false (boolean)**
- carro === branco **= true (boolean)**
- var cavalo = carro == "preto" ? "cinza" : "marron";   
    **cavalo = "cinza" (string)**

Quantas prestações são necessárias para pagar o valor do carro com uma entrada
de 3.000? Demonstre a operação.

```js
var numero = valor / prestacao;
console.log(numero);
40
```

Somando as variáveis de cores é formada uma string de quantos caracteres?

```js
soma = branco + preto + cinza;
console.log(soma);
"pretocinzabranco"
console.log(soma.length);
16
```