/* Escreva uma função que recebe um número, e o decrementa
de 1 em 1 com um loop. Além disso imprima somente os números
pares no console

*/

function decrementa(x){
    for(let i = x; i >= 0; i --){
        if (i % 2 == 0){
            console.log(i);
        }
    }
}


let numero = Number(prompt('digite um numero: '));

decrementa(numero);