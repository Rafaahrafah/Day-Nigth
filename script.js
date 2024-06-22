const tglDark = document.querySelector("#toggle--dark");
const body = document.body
const imagem = document.querySelector("img");
let temaPreferido = localStorage.getItem("tema")

tglDark.addEventListener("change", alterarTema);

function carregarTema() {
    if (temaPreferido === "dark") {
        body.classList.add("dark")
        imagem.setAttribute("src", "fundo-noite.jpeg")
    } else {
        body.classList.remove("dark");
        imagem.setAttribute("src", "pexels-photo-1542495.jpeg")
    }
}

function alterarTema() {
    //    Exist a classe DARK no body?

    if (body.classList.contains("dark")) {
        body.classList.remove("dark");
        imagem.setAttribute("src", "pexels-photo-1542495.jpeg")
        localStorage.setItem("tema", "")
    } else {
        body.classList.add("dark")
        imagem.setAttribute("src", "fundo-noite.jpeg")
        localStorage.setItem("tema", "dark")
    }
}

// const resposta = prompt("Qual sua senha?")
// localStorage.setItem("Senha", resposta)
// console.log(localStorage.getItem("senha"))

//  setItem("chave", valor) gravar um valor no localStoragee
//  getItem("chave") resgata um valor do localStorage
//  removeItem ("chave") remove um unico valor do localStorage
//  Clear () limpa tudo do localStorage do seu dominio

carregarTema()