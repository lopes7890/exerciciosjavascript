// 02 Crie uma função que recebe um array de 3 números e coloque eles em ordem crescente. 
// Crie sua própria função para isso.

function ordenar(numeros){
    for(let i = 0; i < 3; i++){
        for(let j = i + 1; j < 3; j++){
            if(numeros[i] > numeros[j]){
                let temp = numeros[i];
                numeros[i] = numeros[j];
                numeros[j] = temp;
            }
        }
    }

    return numeros
}

let numeros = [7, 4, 9]

let ordenado = ordenar(numeros);
console.log(ordenado)