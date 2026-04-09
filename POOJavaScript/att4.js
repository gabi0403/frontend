// Crie uma classe Funcionario com os atributos:
// nome
// salario
// cargo
// E métodos:
// aumentarSalario(percentual): aumenta o salário com base no percentual passado.
// exibirInfo(): exibe os detalhes do funcionário

class Funcionario{

    //atributos
    nome;
    salario;
    cargo;

    //métodos
    aumentarSalario(percentual){
        this.salario += this.salario * (percentual / 100);
    }

    exibirInfo(){
        console.log(`Nome: ${this.nome}`);
        console.log(`Salário: R$ ${this.salario.toFixed(2)}`);
        console.log(`Cargo: ${this.cargo}`);
    }
}

// Exemplo de uso
const funcionario1 = new Funcionario();
funcionario1.nome = "João Silva";
funcionario1.salario = 3000;
funcionario1.cargo = "Analista de Sistemas";

console.log("Antes do aumento:");
funcionario1.exibirInfo();
funcionario1.aumentarSalario(10);

console.log("\nDepois do aumento:");
funcionario1.exibirInfo();

