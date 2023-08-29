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
