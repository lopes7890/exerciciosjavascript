/*Faça um programa que peça dois números, base e expoente, 
calcule e mostre o primeiro número elevado ao segundo número.
Não utilize a função de potência da linguagem. */

let base = Number(prompt('digite a base: '));
let expoente = Number(prompt('digite o expoente: '));
let calculo = 1

for(let cont = 0; cont <= expoente; cont++){ // o(n)
    calculo *= base
}

alert(`o resultado é ${calculo}`);




