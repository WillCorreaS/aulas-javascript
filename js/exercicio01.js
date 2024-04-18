'use strict'

let nota1 = 1;
let nota2 = 3;
const media =(nota1+nota2)/2;//não vai mudar sua forma apenas os valores das variáveis

// console.log(media);
console.log(`Suas notas são: ${nota1} e ${nota2}.`);
console.log(`Sua média aritimética é: ${media}.`);
console.log(`Seu Status é:`);

if (media >= 7){
    console.log("APROVADO!");
} else if (media >= 5){
    console.log("RECUPERAÇÃO!");
} else {
    console.log("REPROVADO!");
}
