const url = "http://api.github.com/users";
const main = document.getElementById("main");
const userInput = document.getElementById("username");
// const user = "henriquedebarros"

function getUserInfo(user){
    fetch(`${url}/${user}`)
        .then((response) => response.json())
        .then((data) => {
            main.innerHTML = `${data.name} possui ${data.public_repos} repositórios públicos no GitHub como ${data.login}`
        })
        .catch((error) => console.error("Erro ", error.message || error));
}

userInput.addEventListener("focusout", function(event){
    getUserInfo(event.target.value)
})