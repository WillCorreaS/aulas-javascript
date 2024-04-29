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

console.log(botao);


botao.addEventListener("click", function() {
    if (!divContainer.classList.contains("noturno")){
        divContainer.classList.add("noturno");
        botao.textContent = "Ativar Modo Claro";
    } else {
        (divContainer.classList.remove("noturno"))
        botao.textContent = "Ativar Modo Escuro";
        botao.style.transition = '2s';
    }


    //pagina.classList.toggle("noturno")
    //divContainer.classList.toggle("noturno")
    

    //noturnoCSS.setAttribute("transition", "1s")
    //botao.textContent = "Desativar";

})




////////////////////////////////////////////////////////////////////

/*Desafio
1) Aplicar um efeito de troca de cores suaves

2) Fazer botão mudar de texto (iniciar 'Ativar' e quando ativar 'Desativar' conforme estiver acontecendo)
*/



