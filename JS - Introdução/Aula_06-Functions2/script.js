// TIPOS DE FUNÇÃO

// Funções declarativas
function funcao() {
  console.log("Sou uma mensagem de uma função declarativa");
}

funcao();

// Expressões de função
// Com nomeação

var funcao = function funcao() {
  console.log("Sou uma mensagem de função de expressão");
};

// Sem nomeação
funcao();

var funcao = function () {
  console.log("Sou uma mensagem de função de expressão");
};

funcao();

// Arrow function
var funcao = () => {
  console.log("Sou uma arrow function");
};

funcao();
