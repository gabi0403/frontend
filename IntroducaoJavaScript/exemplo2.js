// Tipos de operadores em JavaScript

//operadores Aritméticos (+ - * / %)
var a = 10;
var b = 3;
var c;
//soma
c = a+b;
console.log("Soma: "+c);

//subtração
c = a-b;
console.log("Subtração: "+c);

//multiplicação
c = a*b;
console.log("Multiplicação: "+c);

//divisão
c = a/b;
console.log("Divisão: "+c);

//resto da divisão
c = a%b;
console.log("Resto da divisão: "+c);

//Operadores relacionais (== === != !== > < >= <=)
var a = 10;
var b = 20;
var c = "20";


console.log("Relacionais:" + (a>b)); //false
//o que importa
console.log("Igualdade Simples: " + (b==c)); //true
console.log("Igualdade Estrita: " + (b===c)); //false

//Operadores Lógicos (&& - E, || - OU, ! - NÃO)
var nota1 = 5;
var nota2 = 8;

console.log("Aprovação: " + ((nota1 > 7) && (nota2 >=7))); //false
console.log("Aprovação: " + ((nota1 > 7) || (nota2 >=7))); //true
console.log("Negação: " +!true); //false

 //

