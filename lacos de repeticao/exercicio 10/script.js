/*Desenvolva um programa que mostre na tela o resultado da expressão 500 +
450 + 400 + 350 + 300 + ... + 50 + 0*/
let Soma = 0;
for (let Numero = 500; Numero > 0; Numero -= 50){ // o(n)
    Soma += Numero;
}
console.log(Soma);
