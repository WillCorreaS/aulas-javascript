'use strict'

let cotacaoEmDol = 5.16;
let valorEmDolar = 1000;

function converterEmReais(valor) {
    return valor * cotacaoEmDol;    
}
console.log(converterEmReais(valorEmDolar));


console.log("----------------------------------");
console.log("Desafio");


function formatarMoeda(valor, siglaDaMoeda) {
    const opc = {
        style: "currency",
        currency: siglaDaMoeda
    };

    return new Intl.NumberFormat("pt-br", opc).format(valor);
}

let valorReal = converterEmReais(valorEmDolar);
let valorEmReal = converterEmReais(valorEmDolar);


console.log(formatarMoeda(valorEmDolar, "USD"));

console.log(formatarMoeda(valorEmReal, "BRL"));


