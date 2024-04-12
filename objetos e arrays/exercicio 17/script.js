/*Dada uma matriz de números inteiros e um número alvo, 
escreva uma função que conte o número de pares de números 
na matriz que somam o número alvo. 
Você pode assumir que cada entrada tem exatamente uma 
solução e que o mesmo elemento não pode ser usado duas vezes.

*/

function verificarPares(num, alvo){
    let contPares = 0
    for(let i = 0; i < num.length; i++){
        for (let j = i + 1; j < num.length; j++) {
            if (num[i] + num[j] === alvo) {
                contPares++;
                console.log(num[i], num[j]);
            } 
        }
    }
    if(contPares == 0){
        console.log('nao foram encontrados pares')
    }
    console.log(contPares)
}

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const alvo = 100;
// A função deve retornar 4, pois há 4 pares que somam 10: (1, 9), (2, 8), (3, 7) e (4, 6).

verificarPares(numeros, alvo);
