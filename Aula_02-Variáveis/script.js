//Tipos primitivos

//boolean
var bool = false;
"Info:", console.log("Tipo:", typeof bool, "| Info:", bool);

//number
var num = 10;
console.log("Tipo:", typeof num, "| Info:", num);

//string
var nome = "Mateus";
console.log("Tipo:", typeof nome, "| Info:", nome);

//Como declarar variaveis

var var01 = "Mateus";
var01 = "CP";
console.log(var01);

let var02 = "Mateus";
var02 = "CP";
console.log(var02);

const var03 = "Mateus";
/* var03 = "CP"; */
console.log(var03);

//Escopo local e global
var escopoGlobal = "Global";
console.log(escopoGlobal);

function escopoLocal() {
  let escopoLocalInterno = "Local";
  console.log(escopoLocalInterno);
}

escopoLocal();

//Atribuição
var atribuicao = "Mateus CP";

//Comparação
var comparacao = "0" == 0;
console.log(comparacao);

//Comparação identica
var comparacaoIdentica = "0" === 0;
console.log(comparacaoIdentica);

//Operadores aritiméticos
//Adição
var adicao = 1 + 1;
console.log(adicao);

//Subtração
var subtrcao = 2 - 1;
console.log(subtrcao);

//Multiplicação
var multiplicacao = 3 * 5;
console.log(multiplicacao);

//Divisão
var divisao = 10 / 2;
console.log(divisao);

//Divisão inteira
var divInt = 10 % 2;
console.log(divInt);

//Potenciação
var potencicacao = 2 * 5;
console.log(potencicacao);

//Operadores relacionais
//Maior que
var maiorQue = 5 > 2;
console.log(maiorQue);

//Menor que
var menorQue = 5 < 2;
console.log(menorQue);

//Maior ou igual
var maiorIgual = 5 >= 5;
console.log(maiorIgual);

//Menor ou igual
var menorIgual = 5 <= 7;
console.log(menorIgual);
