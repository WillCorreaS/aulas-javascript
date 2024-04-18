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