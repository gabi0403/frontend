"use strict";
//exemplo de aplicação de typescript
//Criar Funções Tipadas (exercício 2)
//função para calcular o desconto aplicado a um produto
function calcularDesconto(preco, percentual) {
    return preco - (preco * (percentual / 100));
}
//Função para exibir informações do produto
function exibirInfo(p, desconto = 0) {
    console.log(`Produto: ${p.nome.toUpperCase()}`);
    console.log("Categoria: " + p.categoria);
    console.log(`Status: ${p.emEstoque ? "Disponível" : "Indisponível"}`);
    if (desconto > 0) {
        const precoFinal = calcularDesconto(p.preco, desconto);
        console.log(`Preço: R$ ${precoFinal.toFixed(2)}`);
    }
    else {
        console.log(`Preço: R$ ${p.preco.toFixed(2)}`);
    }
    console.log("=============================");
}
//Criando uma lista de produtos baseada na interface
const listaProdutos = [
    {
        nome: "Notebook Gamer",
        preco: 4500.00,
        categoria: "Eletrônicos",
        emEstoque: true
    },
    {
        nome: "Camiseta Algodão",
        preco: 89.90,
        categoria: "Vestuário",
        emEstoque: true
    },
    {
        nome: "Teclado Mecânico",
        preco: 350.00,
        categoria: "Eletrônicos",
        emEstoque: false
    }
];
// Percorrer a Lista e aplicar desconto para Produtos  de Eletrônicos
listaProdutos.forEach((produto) => {
    // se cartegoria eletrônicos, aplicar 10% de desconto
    if (produto.categoria === "Eletrônicos" && produto.emEstoque) {
        exibirInfo(produto, 10);
    }
    else {
        exibirInfo(produto);
    }
});
