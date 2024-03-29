/* 5) Faça um programa que leia as duas notas de um aluno em uma matéria e mostre
na tela a sua média na disciplina.
Ex:
Nota 1: 4.5
Nota 2: 8.5
A média entre 4.5 e 8.5 é igual a 6.5 */

let Nota1 = Number(prompt('digite sua nota: '));
let Nota2 = Number(prompt('digite sua segunda nota: '));
media = (Nota1 + Nota2) / 2

console.log(`sua media é ${media}`);
