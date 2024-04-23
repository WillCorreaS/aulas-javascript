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






















