'use strict'
console.log("eventos");

//Elecinando Elemento
const evento01 = document.querySelector("#exemplo01")
const mensagem = document.querySelector("#mensagem");
const pagina = document.querySelector("body");
const video = document.querySelector("video")


//Criando um evento de áudio referenciando o arquivo
const efeitoDeAudio = new Audio();
efeitoDeAudio.src = "wow.wav";

//Criando um evento de imagem referenciando o arquivo
const imagem = new Image();
imagem.src = "wow.gif"


//Criando MONITOR/OUVINTE de EVENTO
evento01.addEventListener("click", function(){mensagem.textContent = "Você Clicou Aqui.";

 /* .classList.add("classe a se adicionada")*/
mensagem.classList.add("destaque")

pagina.style.fontFamily = "Georgia";
pagina.style.backgroundColor = "#a0ff1f";

efeitoDeAudio.play();
mensagem.insertAdjacentElement("afterend", imagem);

video.removeAttribute("hidden");
video.play();
});



//CRIANDO O MODO NOTURNO
const divContainer = document.querySelector(".container");
const botao = document.querySelector("#noturno");

botao.addEventListener("click", function() {

/*"toggle" é utilizado para alternar o estado da classe:
- caso esteja ativo ele desativa.
- caso esteja desativado ele ativa*/
    pagina.classList.toggle("noturno")
    divContainer.classList.toggle("noturno")
})


