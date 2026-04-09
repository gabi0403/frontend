// Crie uma classe Veiculo com os seguintes atributos:
// marca
// modelo
// ano
// E métodos:
// exibirInfo(): exibe os detalhes do veículo.

class Veiculo{
    // atributos
    marca;
    modelo;
    ano;

    //métodos
    exibirInfo(){
        console.log(`Marca: ${this.marca}`);
        console.log(`Modelo: ${this.modelo}`);
        console.log(`Ano: ${this.ano}`);
    }
}

// exemplo de uso
const meuCarro = new Veiculo();
meuCarro.marca = "Toyota";
meuCarro.modelo = "Corolla";
meuCarro.ano = 2020;

console.log("\nInformações do meu carro:\n");
meuCarro.exibirInfo();

