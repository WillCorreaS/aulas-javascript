'use strict'

console.log("Olá mundo!");
function separar() {
    console.log(" ");
    console.log("- - - - - - - - §§§ - - - - - - - -");
    console.log(" ");  
}


//SINTAXE 1: função anônima
const exemplo1= function () {
    console.log("Função Anônima!");
}

//CHAMANDO/INVOCANDO UMA FUNÇÃO
exemplo1();
separar();

//SINTAXE 2: função nomeada/declarada
function exemplo2() {
    console.log("Função Declarada!");
}
separar();
//CHAMANDO/INVOCANDO UMA FUNÇÃO
exemplo2();
separar();
//SINTAXE 3: Arrow Function (função de seta/flecha)
const exemplo3 = () => {
    console.log("Arrow Function!");
}

//CHAMANDO/INVOCANDO UMA FUNÇÃO
exemplo3();

separar();

/*OBS: funções(em qualquer sintaxe) também podem trabalhar com parâmetros/arquumentos.

Quando uma função precisa de valores/dados para algum tipo de processamento, ela recebe parâmetros/arquimentos entre os parênteses.

Geralmente, ao termino do processamento dos parênteses, a função "retorna" para fora um resultado 
*/

/*Exemplo diversos*/

//FUNÇÃO com parâmetros:
function somar(valor1, valor2) {
    return valor1+valor2;
}
//Ao ser chamada forneça os parâmetros necessários
console.log(somar(5, 20));
console.log(somar(15, 18));
console.log(somar(32, 28));
console.log(somar(53, 47));

separar();

//formatação de valores monetários reais
let preco = 7000;
let desconto = preco * 0.10 // 10%
let precoFinal = preco - desconto;

function valorFormatado(valor){
const opcoes = {
        style: "currency",
        currency: "BRL"
    }

    return new Intl.NumberFormat("pt-br", opcoes).format(valor);
}

console.log(`Preço : ${valorFormatado(preco)}`);
console.log(`Preço : ${valorFormatado(desconto)}`);
console.log(`Preço : ${valorFormatado(precoFinal)}`);

separar();

/*A Sintaxe "ARROW FUNCTION" é uma sintaxe moderna para FUNÇÕES no Javascript, muito utilizada em bibliotecas/frameworks como React, React Native, Angular, Vue e etc.

A sintaxe GERAL é:

const nome = ( ) => {};

Ela també pode ser simplificada em alguns casos.
EXEMPLO: */

//Versão 1:
// function dobra(valor) {
//     return valor*2;
// }

//Versão 2 - com Arrow Function
// const dobra = (valor) => {
//     return valor*2
// }

/*Versão 3 - com Arrow Function
Qando há apenas a passagem de um único ARQUMENTO/PARÂMETRO pode ser usada da seguinte forma*/
const dobra = valor => valor*2;

//chamada da função
console.log(dobra(10));
console.log(dobra(25));
console.log(dobra(35));

separar();
//funções como métodos/comportamentos de Objetos
let pessoa = {
    nome: "Piccolo",
    idade: 25,
    verificaIdade(){
        if (idade <= 18){
            return "Maior"
        } else {
            return "Menor"
        }
    }
};
console.log(pessoa.nome);
console.log(`Ele é ${pessoa.verificaIdade()}`);




















