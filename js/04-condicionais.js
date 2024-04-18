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
let idade = 63;
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
console.log("-----------USANDO TERNÁRIO----------------");
//Estrutura CONDICIONAL COPOSTA TERNÁRIO
let texto2 = idade >=18 ? "maior" : "menor";
//console.log(texto2);
console.log(`${usuario} tem ${idade} anos e é ${texto2} de idade.`);


//Estrutura CONDICIONAL ENCADEADA/SUCESSIVA
console.log("-----------USANDO Estrutura Encadeada----------------");
let texto3;

if (idade>=60){
    texto3="IDOSO";
} else if(idade>=18) {
    texto3="MAIOR"
} else{
    texto3="MENOR"
}
console.log(`${usuario} tem ${idade} anos e é ${texto3} de idade.`);

console.log("-----------------------------------------------------");
let n1 = 5;
let n2 = 3;

for(let i=0; i<10; i++){
    console.log(`${n1} X ${n2} = ${n1*n2}`);
}

console.log("-----------------------------------------------------");