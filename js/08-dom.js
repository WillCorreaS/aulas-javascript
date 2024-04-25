'use strict'

/* Funções  /Elementos mais COMUNS para seleção de elementos no DOM
- getElementById()
***Seleciona um ELEMENTO através do ATRIBUTO ID

- querySelector()
***Seleciona um ELEMENTO através de seletor baseado na lógica do CSS

- querySelectorAll()
***Seleciona VÁRIOS ELEMENTOS através de seletor(es) baseado na lógica do CSS

*/


//*************** getElementById() ********************
const legenda = document.getElementById("legenda");
console.log(legenda);


//*************** querySelector() **********************
const paragrafo = document.querySelector("h1")
console.log(paragrafo);

const paragrafo2 = document.querySelector("#sobre")
console.log(paragrafo2);

/**************** ECERCÍCIO **********************
 * Faça o acesso do h2 de Back-end e mostre no console
 * 
 * 2)Fazer acesso/seleção apenas do h2 dentro da div com classe "editores" e dar log()
*/
console.log("------------ ecercício --------------");
let parte1 = document.querySelector(".back-end");
console.log(parte1);

let parte2 = document.querySelector(".editores h2");
console.log(parte2);
console.log("--------------------------------------");

//*************** querySelectorAll() **********************
const subtitulos = document.querySelectorAll("h2")
console.log(subtitulos);

//Ele cria um Array com todos os elementos selecionados
console.log(subtitulos[0]);

const seleciondoVariosElementos = document.querySelectorAll("p, a, p b, #teste, .class, ul, li");
console.log(seleciondoVariosElementos);


/*MODIFICANDO O DOM
podemos alterar o conteúdo, tag, títulos, criar elementos ou remover etc.
*/

legenda.textContent = "Imagem do modelo de objetos do documento";




const listaDeEditorres = [
    {
        nome: "Vidual Studio Code",
        finalidade: "Desenvolvimento Web em Geral"
    },
    {
        nome: "Android Studio",
        finalidade: "Desenvolvimento de aplicação mobile"
    },
    {
        nome: "Xcode",
        finalidade: "Desenvolvimento de aplicações iOs"
    }
]

const lista = document.querySelector(".lista");
console.log(lista);

/*Percorrer o array listaDeEditores, criar os itens <li> com o conteúdo do array e adicionálo a lista HTML */

//for ('criar uma variável de acesso (const/let nomeVariável)'  of arrayQueIremosAcessar)

for (const editor of listaDeEditorres) {
    //console.log(editor.nome);

    //ETAPA 1: criar elemento <li>
    const item = document.createElement("li")

    //ETAPA 2: adicionar conteúdo ao nvo elemento
    item.innerHTML = `<b>${editor.nome}</b>: ${editor.finalidade}`;

    //ETAPA 3: adicionar elemento à lista <ol>
    lista.appendChild(item);

}



/*Adicionando ATRIBUTOS no HTML - setAttribute*/
const lisksDeReferencia = document.querySelectorAll(".referencias a");
//console.log(lisksDeReferencia);

for (const link of lisksDeReferencia){
    link.setAttribute("target", "_blank");
    console.log(link);
}