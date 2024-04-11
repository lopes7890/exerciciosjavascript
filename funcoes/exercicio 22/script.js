/*Escreva uma função que verifica se uma palavra é um palíndromo, 
ou seja, se pode ser lida da mesma forma da esquerda para a direita e vice-versa.

*/
function verificarPalindromo(palavra){
    return palavra.split("").reverse().join("") == palavra
}


let palavra = 'ana';

console.log(verificarPalindromo(palavra));
