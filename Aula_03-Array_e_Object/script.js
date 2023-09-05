//O que são vetores ou arrays

//Como declarar um array

/* let array = ["string", 1, true];
console.log(array); */

/*
let array = ["string", 1, true, ["array1"], ["array2"], ["array3"], ["array4"]];
console.log(array);

//forEach - Itera um array (exibe os indices)

array.forEach(function (item, index) {
  console.log(item, index);
});

//push - add u novo item no final do array
array.push("new item");
console.log(array);

//pop - remove um item no final do array
array.pop();
console.log(array);

//shift - remove um item no inicio do array
array.shift();
console.log(array);

//unshift - add um novo item ao inicio do array
array.unshift("novo item");
console.log(array);

//indexof - retorna o indice de um valor
console.log(array.indexOf(true));

//splice - remove ou substitui um item pelo indice
array.splice(0, 3);
console.log(array);

//slice - retorna uma parde de um array existente
let novoArray = array.slice(0, 3);
console.log(novoArray);
*/

let object = {
  string: "string",
  number: 1,
  boolean: true,
  array: ["array"],
  objectInterno: {
    objectInterno: "objeto interno",
  },
};

console.log(object.boolean);

//desestruturaçao do objeto
var string = object.string;
console.log(string);

var arrayInterno = object.array;
console.log(arrayInterno);

var { string, boolean, objectInterno } = object;
console.log(string, boolean, objectInterno);
