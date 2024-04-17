'use strict'

console.log("Condicionais!")

/* Comandos utilizados nas estruturas condicionais 
-if     (se)
-else   (senão)
else if (senão se)

switch/case     (escolha/caso)*/

/*OPERADORES CONDICIONAIS:
>   Maior que
<   Menor que
>=  Maior ou igual
<=  Menor ou igual
!=  diferente
==  IGUALDADE
*/

//Estrutura CONDICIONAL SIMPLES
let num = 10;

if (num > 8){
    console.log("Verdadeiro");
}

//Estrutura CONDICIONAL COPOSTA
let usuario = "Lobsomen";
let idade = 53;
let maioridade;

if (idade >= 18){
    maioridade = "maior";

} else {
    maioridade = "menor";
}

console.log(`${usuario} tem ${idade} anos e é ${maioridade} de idade.`);



/* A refatoração é uma forma disciplinada de reestruturar o código quando pequenas mudanças são feitas nele para melhorar o design. 
Reestruturar, melhorar, simplificar.
*/




