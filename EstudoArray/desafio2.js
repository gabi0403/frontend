var prompt = require("prompt-sync")();

let continuarSistema = true;

let notas = [[], [], []];
let disciplinas = ["Matemática", "Português", "Ciências"];

while (continuarSistema) {
  console.log("===Calculadora de Média===");
  console.log("|1. Adicionar Notas       |");
  console.log("|2. Mostrar Notas         |");
  console.log("|3. Conferir Médias       |");
  console.log("|4. Sair                  |");
  console.log("==========================");

  let operacao = prompt("Escolha a Operação: ");

  switch (operacao) {
    case "1":
      for (let i = 0; i < notas.length; i++) {
        console.log(`\nAluno ${i + 1}`);

        notas[i] = [];

        for (let j = 0; j < disciplinas.length; j++) {
          let nota = parseFloat(prompt(`Digite a nota de ${disciplinas[j]}: `));
          notas[i].push(nota);
        }
      }
      break;

    case "2":
      // Mostrar matriz em formato de tabela
      console.log("\nTabela de Notas:");
      console.log("Aluno | Matemática | Português | Ciências");

        );
      }
      break;

    case "3":
     
      break;

    case "4":
      console.log("Saindo...");
      continuarSistema = false;
      break;

    default:
      console.log("Opção inválida!");
  }
}