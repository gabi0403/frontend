// Crie uma classe ContaBancaria com os atributos:
// titular
// saldo
// E métodos:
// depositar(valor): adiciona saldo.
// sacar(valor): remove saldo se houver saldo suficiente.
// exibirSaldo(): exibe o saldo atual.

class ContaBancaria{

    //atributos

    titular;
    saldo;

    //métodos

    //adicionar saldo na conta bancária
    depositar(valor){
        this.saldo += valor;
    }

    //remove saldo se houver saldo suficiente
    sacar(valor){
        if (this.saldo >= valor) {
            this.saldo -= valor;
        } else {
            console.log("Saldo insuficiente.");
        }
    }

    //exibir saldo atual
    exibirSaldo(){
        console.log(`Saldo atual: R$ ${this.saldo.toFixed(2)}`);
    }

}

// exemplo de uso
const minhaConta = new ContaBancaria();
minhaConta.titular = "Gabi Machadinho";
minhaConta.saldo = 99999999999.80;

console.log("\nInformações da minha conta bancária:\n");
console.log(`Titular: ${minhaConta.titular}`);
minhaConta.exibirSaldo();

//sacar 
minhaConta.sacar(10.99);
console.log("\nApós sacar R$10,99:\n");
minhaConta.exibirSaldo();

//depositar
minhaConta.depositar(1.50);
console.log("\nApós depositar R$1,50:\n");
minhaConta.exibirSaldo();