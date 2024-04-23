'use strict'

console.log("Olá Mundo!");

const clientes = [
    {
        id: 1,
        nome: "Nirvana",
    },
    {
        id: 2,
        nome: "Metalica",
    },
    {
        id: 3,
        nome: "Ramistain",
    }
]

console.log("Utilizando FOR:");
console.log("- - - - - - - - §§§ - - - - - - - -");

let qtdClientes = clientes.length;
for(let i=0; i<qtdClientes; i++){
    console.log(`► Cliente: ${clientes[i].nome} (id: ${clientes[i].id})`);  
}



console.log(" ");
console.log("Utilizando FOR OF:");
console.log("- - - - - - - - §§§ - - - - - - - -");



for (let cliente of clientes){
    //Acessando cada **cliente**(objeto) dentro de um Array **clientes**
    console.log(`► Cliente: ${cliente.nome} (id: ${cliente.id})`);
}



console.log(" ");
console.log("Utilizando WHILE:");
console.log("- - - - - - - - §§§ - - - - - - - -");



let j = 0;
while (j<qtdClientes) {
    console.log(`► Cliente: ${clientes[j].nome} (id: ${clientes[j].id})`);
    j++;
}


