// Escreva uma função que retorne o cubo de um número fornecido pelo usuário.

function cubo(num){
    let calculo = Math.pow(num, 3);
    alert(`o cubo de ${num} é ${calculo}`);
}

let num = Number(prompt('digite um numero: '));

cubo(num);

