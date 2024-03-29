/*11) Desenvolva uma lógica que leia os valores de A, B e C de uma equação do
segundo grau e mostre o valor de Delta. */

let NumeroA = Number(prompt('digite o valor de A: '));
let NumeroB = Number(prompt('digite o valor de B: '));
let NumeroC = Number(prompt('digite o valor de C: '));

let Delta = (Math.pow(NumeroB, 2)) - (4 * NumeroA * NumeroC)

console.log(Delta);

