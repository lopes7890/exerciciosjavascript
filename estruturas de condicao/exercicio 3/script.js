/*19) Crie um algoritmo que leia o nome e as duas notas de um aluno, calcule a sua
média e mostre na tela. No final, analise a média e mostre se o aluno teve ou
não um bom aproveitamento (se ficou acima da média 7.0).*/

let Nome = prompt('digite seu nome: ');
let Nota1 = Number(prompt('digite sua primeira nota: '));
let Nota2 = Number(prompt('digite sua segunda nota: '));

media = (Nota1 + Nota2) / 2

if (media >= 7){
    console.log(`${Nome} teve media ${media} e foi aprovado!`);
} else if (media < 7){
    console.log(`${Nome} sua media foi ${media} e voce nao foi aprovado!`);
}
