/*Crie um programa que calcule e mostre na tela o resultado da soma entre 6 +
8 + 10 + 12 + 14 + ... + 98 + 100.*/
let Soma = 0
for (let Numero = 6; Numero <= 100; Numero += 2){ // o(n)
    Soma += Numero
}
console.log(Soma);
