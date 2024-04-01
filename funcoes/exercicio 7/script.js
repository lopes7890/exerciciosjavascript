/* Escreva uma função que recebe um número negativo
e retorne um número positivo.
Dica: utilize a função Math.abs

*/

function verificar(x){
    if (x > 0){
        erro(x);
    }

    if (x < 0){
        alert(`${Math.abs(x)}`);
    }
    
}

function erro(x){
    alert('numero inválido!');
}



let numeroNegativo = Number(prompt('digite um numero negativo: '));

verificar(numeroNegativo);

