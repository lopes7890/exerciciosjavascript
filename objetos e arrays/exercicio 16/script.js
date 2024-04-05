/*Crie uma função que recebe um vetor e um número.
Ela deve mostrar todos os índices onde esse número aparece no vetor, e 
não só apenas o primeiro e/ou  último índice em que o número aparece 
(como nos métodos indexOf e lastIndexOf).
*/

function indices(vet, num){
    let indicesVerificados = []
    for(let i = 0; i <= vet.length; i++){
        if(vet[i] == num){
            indicesVerificados.push(i);
        }
    }

    console.log(indicesVerificados);
}

let vetor = [5, 4, 6, 4, 5, 7, 8, 5, 9, 5];
indices(vetor, 5)

// 4, 7, 9