// 05. Faça uma função que recebe um array de qualquer tamanho e ordene seus elementos na ordem crescente. 
// Faça sua função na mão, não invoque nenhum método de sorting. Dica: pesquise sobre bubble sort.

function ordenar(numeros){
    let cont = numeros.length
    for(let i = 0; i < cont; i++){
        for(let j = i + 1; j < cont; j++){
            if(numeros[i] > numeros[j]){
                let temp = numeros[i];
                numeros[i] = numeros[j];
                numeros[j] = temp;
            }
        }
    }
    
    return numeros
}


let number = []
let numeros = Number(prompt('digite o tamanho do array: '));

while(numeros > 0){
    let numero = Number(prompt('digite um numero: '));
    number.push(numero);
    numeros--
} 

let ordenado = ordenar(number);
console.log(ordenado);

