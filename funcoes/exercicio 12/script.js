/*Escreva uma função que calcule e retorne o 
fatorial de um número inteiro fornecido pelo usuário.*/
function fatorial(num){
    if(num == 1){
        return 1
    }

    return num * fatorial(num - 1);
    
}

let numero = Number(prompt('digite um numero: '));

console.log(fatorial(numero));
