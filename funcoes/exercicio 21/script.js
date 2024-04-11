 /* Escreva uma função que recebe um número inteiro N como 
 entrada e retorna a soma de todos os números pares de 1 até N.

 */

 function somarPares(num){
    let soma = 0
    for(let i  = 1; i <= num; i++){
        if(i%2 == 0){
            soma = soma + i
        }
    }

    return soma
 }

 let n = 10;

 console.log(somarPares(n));

