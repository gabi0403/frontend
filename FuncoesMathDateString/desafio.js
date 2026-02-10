var prompt = require("prompt-sync")();

// Desafio
//Criar um jogo de nº aleatório de 0 a 100, tem que ser numero inteiro,
// quando errar dizer se é maior ou menor, até acertar,
// quando acertar dizer que acertou e mostrar o número de tentativas
// depois perguntar se quer jogar novamente ou sair
function jogar() {
  const numeroAleatorio = Math.floor(Math.random() * 101);
  let tentativas = 0;
  let acertou = false;
  while (!acertou) {
    const chute = parseInt(prompt("Digite um número entre 0 e 100: "));
    tentativas++;
    if (chute === numeroAleatorio) {
      console.log(
        `Parabéns! Você acertou o número ${numeroAleatorio} em ${tentativas} tentativas.`,
      );
      acertou = true;
    } else if (chute < numeroAleatorio) {
      console.log("O número é maior. Tente novamente.");
    } else {
      console.log("O número é menor. Tente novamente.");
    }
  }
  const jogarNovamente = prompt("Deseja jogar novamente? (s/n): ");
  if (jogarNovamente.toLowerCase() === "s") {
    jogar();
  }
}

jogar();
