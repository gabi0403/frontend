// Crie uma classe Produto com os atributos:
// nome
// preco
// estoque
// E métodos:
// vender(quantidade): reduz o estoque
// repor(quantidade): aumenta o estoque
//exibirInfo(): mostra detalhes do produto



class Produto{
    //atributos
    nome;
    preco;
    estoque;


    // métodos
    constructor(nome, preco, estoque){
        this.nome = nome;
        this.preco = preco;
        this.estoque = estoque;
    }

    //vender reduz o estoque atual
    vender(quantidade){
        if(this.estoque >= quantidade){
            this.estoque -= quantidade;
            console.log(`Venda realizada: ${quantidade} ${this.nome}(s)`);
        } else {
            console.log(`Estoque insuficiente para vender ${quantidade} ${this.nome}(s)`);
        }
    }
    //repor aumenta o estoque
    repor(quantidade){
        this.estoque += quantidade;
        console.log(`Estoque reposto: ${quantidade} ${this.nome}(s)`);
    }
    // mostra os detalhes do produto
    exibirInfo(){
        console.log(`Produto: ${this.nome}\nPreço: R$${this.preco.toFixed(2)}\nEstoque: ${this.estoque} \n`);
    }
}

//declaração dos obj

let prod1 = new Produto("Cimento", 50.00, 100);
let prod2 = new Produto("Massa corrida", 120.00, 90);
let prod3 = new Produto("Apito", 210.00, 20);
let prod4 = new Produto("Cano PVC", 10.00, 30);

console.log("\n--- Informações dos Produtos ---");
prod1.exibirInfo();
prod2.exibirInfo();
prod3.exibirInfo();
prod4.exibirInfo();

console.log("\n--- Realizando Vendas ---");
prod1.vender(20);
prod2.vender(50);
prod3.vender(5);
prod4.vender(15);

console.log("\n--- Informações dos Produtos Após Vendas ---");
prod1.exibirInfo();
prod2.exibirInfo();
prod3.exibirInfo();
prod4.exibirInfo();

console.log("\n--- Repondo Estoque ---");
prod1.repor(10);
prod2.repor(20);
prod3.repor(5);
prod4.repor(10);

console.log("\n--- Informações dos Produtos Após Reposição ---");
prod1.exibirInfo();
prod2.exibirInfo();
prod3.exibirInfo();
prod4.exibirInfo();
