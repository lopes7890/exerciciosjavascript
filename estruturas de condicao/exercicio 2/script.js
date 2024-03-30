/*18) Faça um programa que leia o ano de nascimento de uma pessoa, calcule a idade
dela e depois mostre se ela pode ou não votar.*/

let Ano = Number(prompt('digite seu ano de nascimento: '));

if(2023-Ano >= 16) {
    console.log(`voce tem ${2023-Ano} anos e pode votar!! `);
} else {
    console.log('voce nao pode votar!');
}
