/* Escreva uma função que recebe um parâmetro de idade
e imprima esta mensagem no console com template literals dizendo
"Você tem x anos".*/

function mensagem(x){
    console.log(`você tem ${x} anos`);
}


let idade = Number(prompt('digite sua idade: '));

mensagem(idade);

