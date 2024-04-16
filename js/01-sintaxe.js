'use strict' //HABILITANDO MODO ESTRITO DA LINGUAGEM - fazendo isso a linguagem dispara erros que poder ser conflitantes futuramente além de erros comuns




// ctrl+; = adicona comentário de apenas 1 linha
/* SHIFT+alt+A = adiciona comentário de várias linhas*/

//Manda imprimir algo na tela
console.log("Hello World");

//Manipulação de DADOS

//Variáveis - seus valores podem ser alterados
let curso = "HTML e CSS3 e Javascript"; //string, literal (entre aspas)
let ano = 2024; // números (inteiro / real), sem aspas

//Constantes (valores que não pode ser alterado)
const escola = "Senac Penha";

//variáveis precisam sempre ser criadas e ter conteúdo definido
//const materia;

//Criando variável sem valor
let disciplina;
disciplina = "Programação Web";
console.log(disciplina);

//Saída de dados CONCATENAÇÂO - TRADICIONAL
console.log("*Concatenação:");
console.log("Estudando " + disciplina + " (" + curso + ")" + " no " + escola + " em " + ano + ".");

//Saida de dados moderna (TEMPLATE LITERAL/STRING)
console.log("**Template String:");
console.log(`Estudando ${disciplina} (${curso}) no ${escola} em ${ano}.`);

//OU Armazenando dados de SAÍDA em uma variável
console.log("***Armazenando em uma variável:");
let mensagem = `Estudando ${disciplina} (${curso}) no ${escola} em ${ano}.`;
console.log(mensagem);

// Criando variáveis sem declarar seu tipo
//nomeVariavel="Algum Valor";
//console.log(nomeVariavel);

/* Palavras chaves de uso reservado */
//let public= "Palavra Reservada";
//console.log(public);

/* OPERAÇÕES MATEMÁTICAS */

let valor1 = 10;       //número inteiro
let valor2 = 5;       //número inteiro
let valor3 = 1200.55; //número flutuante

let soma = valor1 + valor2;
let subtracao = valor1 - valor2;
let multiplicacao = valor1 * valor2;
let divisao = valor1 / valor2;

console.log(`Soma: ${soma}`);
console.log(`Subtrção: ${subtracao}`);
console.log(`Multiplicação: ${multiplicacao}`);
console.log(`Divisão: ${divisao}`);









