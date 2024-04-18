'use strict'

/* Loops mais utilizados 
- while (enquanto)
- for (para)

Normalmente a estrutura é acompanhada por uma variável auxiliar (contadora) para que o laço seja interrompido

O CONTADOR RECEBE NOMENCLATURA DIFERENTE: i, j, k
*/

console.log("olá");

//loop WHILE
let i = 1;

while(i <= 10){
    console.log("Valor do i: "+i);
    i++;
}

console.log("----------------------------------");

//Loop FOR
// for( let i = 1; i <= 10; i++){
//     console.log("Você é nota "+i);
// }

console.log("----------------------------------");

/*Acessando indice de um array com FOR
a variável 'i' acessa o indice do array

*/

const alunos = ["Chaves", "Chapolim", "Seu Madruga", "Kiko", "Jaiminho", "Bruxa do 71"];

for(let i = 0; i < alunos.length; i++){
    console.log(alunos[i]);
}

console.log("----------------------------------");

// LOOP EXCLUSIVO DO JS PARA ARRAYS: for/of:
//Este tem acesso a todos os valores do Array

for (const aluno of alunos){
    console.log(aluno);
}

console.log("----------------------------------");
// LOOP EXCLUSIVO DO JS PARA OBJETOS: for/in

const livro = {
    titulo: "HTML5",
    autor: "Maujor",
    site: "http://www.maujor.com",
    ano: 2016
}

for(const prop in livro){
    console.log(livro[prop]);
}
