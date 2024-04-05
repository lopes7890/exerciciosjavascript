/* 03. Crie um script que pergunte 3 números ao usuário, coloque em um array, depois exiba tal array.
Modifique os elementos do array de modo a a sequência de números ficar do contrário.
Ou seja, se digitou: 1,2,3
Vai aparecer: 3,2,1 */

function ordenar(x){
    x.reverse();
    console.log(x)
}

let numero1 = Number(prompt('digite um numero: '));
let numero2 = Number(prompt('digite um numero: '));
let numero3 = Number(prompt('digite um numero: '));
let numeros = [numero1, numero2, numero3];

ordenar(numeros);