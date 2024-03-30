/*22) Escreva um programa que leia o ano de nascimento de um rapaz e mostre a sua
situação em relação ao alistamento militar.
 - Se estiver antes dos 18 anos, mostre em quantos anos faltam para o
alistamento.
 - Se já tiver depois dos 18 anos, mostre quantos anos já se passaram do
alistamento.*/

let AnoNascimento = Number(prompt('digite seu ano de nascimento: '));

let idade = 2023 - AnoNascimento

if (idade < 18){
    let Anos = 18 - idade
    console.log(`voce tem ${idade} anos e ainda falta ${Anos} anos para voce se alistar`);
} else if (idade > 18){
    let Ano = idade - 18
    console.log(`voce tem ${idade} anos e ja faz ${Ano} que voce se alistou`);
}

