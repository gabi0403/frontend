//Estrutura de Dados

//Condicionais (If Else // Switch Case)

//IF - ELSE

var precoProduto = 150;
//se preço do produto > 100 - desconto de 10%
if (precoProduto > 100) {
    console.log("Valor a Pagar:"+ (precoProduto*0.9));
} else {
    console.log("Valor a Pagar:"+ precoProduto);
    
}

//Condicional Intermediária - ELSE IF
// preco > 200 15% desc// preço >100 10% desc //

if (precoProduto >= 200){
    console.log("Valor do produto: "+(precoProduto*0.85))
}
if (precoProduto >= 100){
    console.log("Valor do produto: "+(precoProduto*0.90))
} else {
    console.log("Valor do produto: "+precoProduto)
}

//Switch Case
var mes = 4;
switch (mes){
    case 1:
        console.log("Janeiro");
        break;
    case 2:
        console.log("Favereiro");
        break; 
    case 3: 
        console.log("Março");
        break;
    case 4:
        console.log("Abril");
        break;
    default:
        console.log("Outro Mês");
        break;
}

//Estrutura de Repetição (For While)

//For ()
for(let i=0; i<=100; i++){
    console.log(i);
}

//while (Incontáveis)
var continuar = true;
var numEscolhido = 3;
var contador = 0;
while (continuar){ //enquanto continuar for verdadeiro, continua no loop
  contador++; //incremento do contador
  let numeroSorteado = Math.round(Math.random() * 10);
  if (numeroSorteado == numEscolhido) {
    continuar = false;
    console.log("Acertou!");
    console.log("Tentativas = " + contador);
  }
}

//funções (function)
//ações específicas - podem ser chamadas a qualquer momento dentro do código

function ola (nome){ // função com retorno
    return "Olá,"+nome;
}

function hello (nome){ // function void - sem retorno
    console.log("Hello,"+nome);
}

//chamando as funções
console.log(ola("Diogo"));
hello("Diogo");

//explicando o Math
//random ( sortear um numero entre 0 e 1)
//exemplo: 0.954321 / 0.23456 / 0.65432
//Math Round - Arredonda para o número para um inteiro

