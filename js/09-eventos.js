'use strict'
console.log("eventos");

//Elecinando Elemento
const evento01 = document.querySelector("#exemplo01")
const mensagem = document.querySelector("#mensagem");
const pagina = document.querySelector("body");


//Criando um evento de áudio referenciando o arquivo
const efeitoDeAudio = new Audio();
efeitoDeAudio.src = "wow.wav";


//Criando MONITOR/OUVINTE de EVENTO
evento01.addEventListener("click", function(){mensagem.textContent = "Você Clicou Aqui.";

 /* .classList.add("classe a se adicionada")*/
mensagem.classList.add("destaque")

pagina.style.fontFamily = "Georgia";

efeitoDeAudio.play();

});



