'use strict'

// console.log("Arrays!");


//DECLARANDO UM ARRAY (Vetor - uma dimenção)
const alunos = ["Wilian", "Vinícius", "Marly", "Duda", "Gabriel"]

//Exibindo a estrutura do array (somente no console)
console.log(alunos);

//Acessando indicidualmente algum elemento através de sua posição no array([indice])
console.log(`Aluno n° 2 ► ${alunos[1]}`);
console.log(`Aluno n° 5 ► ${alunos[4]}`);

/* ATIVIDADE */

/*- Criar novo array com nome de 7 coisas que gosta*/

let sobremesa = ["Brigadeiro", "Sorvete", "Paçoca", "Mousse", "Goiabada", "Pavê", "Bolo"];

/*- Mostrar uma frase personalizada com o 2° nome, 5° nome e 7° nome do array */
console.log(`Gosto muido de ${sobremesa[1]} misturado com ${sobremesa[4]} e um pedaço de ${sobremesa[6]}!`);



// TRABALHANDO COM MATRIZ (Array com mais de uma dimenções)
 const tecnologias = [
    ["HTML", "CSS3","Javascript"],
    ["PHP","Node.js","SQL", "Python", "Firebase"]
 ];

 console.log(tecnologias[0][1]);
 console.log(tecnologias[1][0]);







