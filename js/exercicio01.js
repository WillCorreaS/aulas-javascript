'use strict'

let nota1 = 7;
let nota2 = 5;
let media =(nota1+nota2)/2;

// console.log(media);
console.log(`Suas notas são: ${nota1} e ${nota2}.`);
console.log(`Sua média aritimética é: ${media}.`);
console.log(`Seu e Status é:`);

if (media >= 7){
    console.log("APROVADO!");
} else if (media >= 5 & media < 7){
    console.log("RECUPERAÇÃO!");
} else {
    console.log("REPROVADO!");
}

