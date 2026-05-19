interface Estudante{
    nome: string;
    notas: number[];
}

function calcularMedia(estudante: Estudante): void{
        const soma = estudante.notas.reduce((acc, nota) => acc + nota, 0);
        const media = soma / estudante.notas.length;
        const status = media >= 7 ? "Aprovado" : "Reprovado";
        console.log(`Aluno: ${estudante.nome}`);
        console.log(`Média: ${media.toFixed(2)}`);
        console.log(`Status: ${status}`);
};

//obj de teste
const estudante1: Estudante ={
    nome: "Evelyn",
    notas: [9, 8, 9.5, 10]
}

calcularMedia(estudante1);
