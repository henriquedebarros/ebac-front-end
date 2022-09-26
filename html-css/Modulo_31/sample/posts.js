// import fetch from "node-fetch";

let samplePost = {
    title: "Teste de envio",
    body: "Exemplo de corpo de texto para post",
    userId: 5
};

fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(samplePost),
    headers: {
        "Content-Type": "application/json; charset = UTF-8"
    }
})
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => console.error(error));