/*9) Faça um algoritmo que leia quanto dinheiro uma pessoa tem na carteira (em R$)
e mostre quantos dólares ela pode comprar. Considere US$1,00 = R$3,45.
*/

let Dinheiro = Number(prompt('digite seu valor em R$'));

let convercao = Dinheiro / 3.45

console.log(`voce podera comprar ${convercao} dolares`);
