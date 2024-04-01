/* Escreva uma função que retorne um número aleatório
o número máximo retornado deve ser passado via parâmetro;
Dica: utilize Math.random()

*/

function aleatorio(x){
        return Math.floor(Math.random() * x) + 1;
    
}

let numeroMaximo = Number(prompt('digite o maior numero: '));

console.log(aleatorio(numeroMaximo));



