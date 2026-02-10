//Verificação de Números Pares
//Crie um código que imprima todos os números pares de 1 a 20.

console.log("2\n4\n6\n8\n10\n12\n14\n16\n18\n20");

for (let i = 1; i <= 20; i++) {
  //imprimir nº pares
  let resto = i % 2; //pega o resto da divisão
  if (resto == 0) {
    console.log(i);
  }
}
