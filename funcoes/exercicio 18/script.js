/*Escreva uma função que mostre na tela um número fornecido pelo usuário, porém invertido. 
Por exemplo,o usuário fornece o número 875 e a função mostra na tela o número 578.*/

function inverso(numero){
    let arrstr = numero.split('');
    let inverso = arrstr.reverse();
    let final = inverso.join('');

    alert(`o inverso é ${final}`);
}

let numero = prompt('digite um numero: ');

inverso(numero);
