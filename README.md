# aulas-javascript
 atividades de programação js- uc3
 - https://www.construct.net/en (games 2d com JS)
 - Normalmente a TAG "< script >" está localizada no final do arquivo html (ates do fechamento da TAG '< /body >')
 - 'use strict' //HABILITANDO MODO ESTRITO DA LINGUAGEM - fazendo isso a linguagem dispara erros que poder ser conflitantes futuramente além de erros comuns



## Sobre a Linguagem:

- Javascript não é Java.
- É uma linguagem voltada para Front-end mas pode ser usada no Back-end através de outras plataformas como Node.Js por exemplo.
- Com JS podemos criar recursos interativos nos sites como:
    ► Galeria de fotos
    ► Carrolsel/Slider de conteúdo
    ► Funcionalidade de navegação
    ► Validações mais avançadas de formulário
    ► Aplicativos e games

- 

### COMANDOS JAVASCRIPT:

- console.log = comando para imprimir algo na tela
- let = Cria uma variável que pode ser alterada
- const = Cria uma variável que não pode ser alterada

### Implementação
- Pode ser feita diretamente na página  como o css quando for um script pequeno usando a tag "< scrip >".

- Pode ser feita em um arquivo com extenção **.js** e conectados à página HTML usando a tag `script` som atributo `src` - **É a forma mais recomandada**

## Manipulação de dados
-Feita através de dados de diferentes tipos, armazenados em memória RAM com uso de **variáveis** e/ou **constantes**.

## Tipos de dados mais comuns

- **String** textos em geral;
- **Number** números inteiros, decimais etc;
- **Array** vetor/matriz - dados indexados;
- **Object** objeto - dados baseados em propriedades e valores;
- **Boolean** booleano - valores True/False ou Verdadeiro/Falso;

**Type off nomeDaVariavelOuConstante;** verifica o tipo da variável


### Sobre Objetos
- Para criar uma proteção para um objeto use o seguinte código:
**Object.freeze(obj);**

**Exemplo**
const obj = {
  prop: 42,
};

Object.freeze(obj);

<!-- tentando alterar o objeto -->
obj.prop = 33;
// Throws an error in strict mode

console.log(obj.prop);
// Expected output: 42


#### SOBRE OPERADORES LÓGICOS:

# Operador && (and):
Todas as condições devem ser verdadeiras para que o resultado seja verdadeiro.

# Operador || (ou):
Apenas uma condição precisa ser verdadeira para que o resultado seja verdadeiro.

# Operador ! (not):
Com este operador ocorre a inverção de lógica. Ele verifica se a condição **NÃO É VERDADEIRA** ou **NÃO É FALSO**