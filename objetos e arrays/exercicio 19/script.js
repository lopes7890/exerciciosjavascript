/* Inversão de Palavras em uma Frase: Escreva uma função para inverter a ordem das palavras em uma frase. */

function invertePalavras(frase){
    let separar = frase.split(" ")
    let fraseInvertida = []
    for(let i = 0; i < separar.length; i++){
        fraseInvertida.push(separar[i].split("").reverse().join(""))
    }

    console.log(fraseInvertida.join(""))
}

let frase = 'ola grande mundo'

invertePalavras(frase)