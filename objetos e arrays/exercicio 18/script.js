/* Ordenação de Array: 
Escreva uma função para ordenar um array de números em ordem crescente ou decrescente. */

function ordenar(numeros){
    let aux = 0
    let trocou = true
    while(trocou){
        trocou = false
        for(let i = 0; i < numeros.length; i++){
            if(numeros[i] > numeros[i + 1]){
                aux = numeros[i + 1]
                numeros[i + 1] = numeros[i]
                numeros[i] = aux
                trocou = true
            }

        }
    }
    // ordem crescente
    console.log(numeros)
    // ordem decrescente
    console.log(numeros.slice().reverse())
}

let numeros = [5, 7, 9, 8, 4, 3, 2, 6, 1, 5];

ordenar(numeros)
