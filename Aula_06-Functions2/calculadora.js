function calculadora() {
  const operacao = Number(
    prompt(
      "Escolha uma operação : \n 1- dição (+) \n 2- Subtração (-) \n 3- Multiplicação (*) \n 4- Divisão Real (/) \n 5 - Divisão Inteira (%) \n 6 - Potenciação (**)"
    )
  );

  // Valida se a opção digitada é correta/existe
  if (operacao > 0 && operacao < 7) {
    let n1 = Number(prompt("Insira o primeiro número:"));
    let n2 = Number(prompt("Insira o segundo número:"));
    let resultado;

    // Valida se o parâmetro digitado é do tipo nuber
    if (!n1 || !n2) {
      alert("Erro - Parametro inválido ");
    } else {
      function soma() {
        resultado = n1 + n2;
        alert(`${n1} + ${n2} = ${resultado}`);
        novaOperacao();
      }

      function subtracao() {
        resultado = n1 - n2;
        alert(`${n1} - ${n2} = ${resultado}`);
        novaOperacao();
      }

      function multiplicacao() {
        resultado = n1 * n2;
        alert(`${n1} * ${n2} = ${resultado}`);
        novaOperacao();
      }

      function divrel() {
        resultado = n1 / n2;
        alert(`${n1} / ${n2} = ${resultado}`);
        novaOperacao();
      }

      function divint() {
        resultado = n1 % n2;
        alert(`${n1} % ${n2} = ${resultado}`);
        novaOperacao();
      }

      function potenciacao() {
        resultado = n1 ** n2;
        alert(`${n1} ** ${n2} = ${resultado}`);
        novaOperacao();
      }

      function novaOperacao() {
        let opcao = prompt("Deseja fazer outra operação? 1 - Sim  2 - Não");

        if ((opcao = 1)) {
          calculadora();
        } else if ((opcao = 2)) {
          alert("Até mais!");
        } else {
          alert("Erro - Opção Invalida");
          novaOperacao();
        }
      }
    }

    /* if (operacao == 1) {
      soma();
    } else if (operacao == 2) {
      subtracao();
    } else if (operacao == 3) {
      multiplicacao();
    } else if (operacao == 4) {
      divrel();
    } else if (operacao == 5) {
      divint();
    } else if (operacao == 6) {
      potenciacao();
    }
     */

    switch (operacao) {
      case 1:
        soma();
        break;
      case 2:
        subtracao();
        break;
      case 3:
        multiplicacao();
        break;
      case 4:
        divrel();
        break;
      case 5:
        divint();
        break;
      case 6:
        potenciacao();
        break;
    }
  } else {
    alert("Erro - Operação invalida, digite outra!");
    calculadora();
  }
}
calculadora();
