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

for(let i=0; i<clientes.length; i++){
    console.log(`► Cliente: ${clientes[i].nome} id: ${clientes[i].id}`);  
}

console.log(" ");

console.log("Utilizando FOR OF:");
console.log("- - - - - - - - §§§ - - - - - - - -");

for (let cliente of clientes){
    console.log(`► Cliente: ${cliente.nome} id: ${cliente.id}`);
}
console.log(" ");

console.log("Utilizando WHILE:");
console.log("- - - - - - - - §§§ - - - - - - - -");
let j = 0;

while (j<clientes.length) {
    console.log(`► Cliente: ${clientes[j].nome} id: ${clientes[j].id}`);
    j++;
}


