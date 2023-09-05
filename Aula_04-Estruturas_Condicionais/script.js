var jogador1 = 0;
var jogador2 = 0;
var placar;

//usando if ternário

jogador1 != -1 && jogador2 != -1
  ? console.log("Os jogadores são validos")
  : console.log("Jogadores inválidos");

/* if (jogador1 != -1) { */
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
