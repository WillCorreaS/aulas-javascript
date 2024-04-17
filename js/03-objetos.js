'use strict'
console.log("Hello objeto!");

//Declarando um objeto
const livro = {
    titulo: "Senhor dos Aneis",
    autor: "J.R.R. Tolkien",
    volumes: 3,
    ano: 1954
};

console.log(livro);
console.log(`O livro ${livro.titulo}, que é dividido em ${livro.volumes} volumes, foi criado pelo escritor ${livro.autor} no ano de ${livro.ano}.`);

/* Tarefa 

O fiat uno fabricado no ano de 1999 com 2 portas e com vidros eletricos, foi um famoso carro no Brasil*/

const carro = {
    marca: "Ecosport",
    modelo: "Sportage",
    ano: 2016,
    qtdPortas: 5,
    cor: "Vermelho",
    listaOpc: ["ar-condicionado", "vidros-elétricos", "alarme"]
}

console.log(`A ${carro.marca} ${carro.modelo} fabricado em ${carro.ano} com ${carro.qtdPortas} portas e com ${carro.listaOpc[1]}, foi um famoso carro no Brasil.`);

