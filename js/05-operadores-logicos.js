'use strict'

// console.log("Olá");

// Escola - Requisitos para aprovação (media 7 e presença)

const mediaMinima = 7;
const limiteDeFaltas = 10;

//Aluno
let aluno= "Dayane";
let mediaFinal= 8;
let faltas= 7;
let redultado;

/*  UTILIZANDO OPERADOR LÓGICO && (AND) - resultado verdadeiro apenas se contemplar os dois requisitos */

if (mediaFinal >= mediaMinima && faltas <= limiteDeFaltas){
    console.log("Aprovada!");
} else {
    console.log("Reprovada!");
}

console.log("--------------------------------------");

/* UTILIZANDO OPERADOR LÓGICO || (OU) - resultado verdadeiro se contemplar um/ou os dois requisitos*/

let idade =15;

if (idade >= 18 || idade < 12){
    console.log("Você é adulto ou criança");
} else {
    console.log("você é um adolescente");
}

console.log("----------------------------------------");

let onibus = 2203;     //2203 ou 2019

if (onibus == 2203 || onibus == 2019){
    console.log("Embarque");
}




console.log("----------------------------------------");
/* UTILIZANDO OPERADOR LÓGICO ! (NOT) - resultado depende da afirmação negativa de um requisito*/

let blackFriday = false;


//Se blackFriday não for verdadeira
if (!blackFriday){
    console.log("Preços normais.");
} else{
    console.log("BlackFriday em vigor, super-descontos.");
}