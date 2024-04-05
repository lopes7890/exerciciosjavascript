// crie um objeto calculadora
// que tem os seguintes métodos: somar, subtrair, multiplicar e dividir
// os métodos só devem aceitar dois parametros
// utilize cada um dos métodos e imprima os valores no console;
let num1 = Number(prompt('digite um numero: '));
let num2 = Number(prompt('digite um numero: '));

const obj = {
    soma: num1 + num2,
    subtracao: num1 - num2,
    multiplicacao: num1 * num2,
    divisao: num1 / num2
}



console.log('soma:' + obj.soma)
console.log('subtração:' + obj.subtracao)
console.log('multiplicação:' + obj.multiplicacao)
console.log('divisão:' + obj.divisao)