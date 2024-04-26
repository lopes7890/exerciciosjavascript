/* Geração de Números Aleatórios Únicos: Escreva uma função para gerar uma lista de números aleatórios únicos dentro 
de um intervalo especificado. */

function numeroUnicos(num){
    let min = 0
    let max = 10
    for(let i = 0; i < max; i++){
        let aleatorio = Math.floor(Math.random() * (max - min) + min)
        if(num.indexOf(aleatorio) == -1){
            num.push(aleatorio)
        }
    }
    console.log(num)
}

let numeros = []
numeroUnicos(numeros)