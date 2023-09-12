var jogador1 = 0;
var jogador2 = 0;
var placar;

//usando if ternário

jogador1 != -1 && jogador2 != -1
  ? console.log("Os jogadores são validos")
  : console.log("Jogadores inválidos");

//usadno if
if (jogador1 > 0 && jogador2 == 0) {
  console.log("Jogador 1 marcou um ponto.", jogador1);
  placar = jogador1 > jogador2;
}
//usadno else if
else if (jogador2 > 0 && jogador1 == 0) {
  console.log("Jogador 2 marcou um ponto.", jogador2);
  placar = jogador2 > jogador1;
}
//usando else
else {
  console.log("Ninguém marcou ponto.");
}

// switch case
switch (placar) {
  case (placar = jogador1 > jogador2):
    console.log("O jogador 1 ganhou!");
    break;
  case (placar = jogador2 > jogador1):
    console.log("O jogador 2 ganhou!");
    break;
  default:
    console.log("Ninguém ganhou!");
}

// EXTRUTURAS DE REPETIÇÃO

let array = ["valor1", "valor2", "valor3", "valor4", "valor5"];

let object = {
  propriedade1: "valor1",
  propriedade2: "valor2",
  propriedade3: "valor3",
};

// For - Executa uma intrução até que ela seja falsa
for (let i = 0; i < array.length; i++) {
  console.log(i);
}

// For/in - Executa repetição apartir de uma propriedade
// Com array
for (i in array) {
  console.log(i);
}

// Com object
for (i in object) {
  console.log(i);
}

// For/of - Executa repetição a partir de um valor
// Com array
for (i of array) {
  console.log(i);
}

// Com object
for (i of object.propriedade1) {
  console.log(i);
}

//While
var a = 0;

while (a < 10) {
  a++;
  console.log(a);
}

// Do/While
do {
  a++;
  console.log(a);
} while (a < 12);
