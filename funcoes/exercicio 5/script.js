/* Escreva uma função que recebe a idade de uma pessoa
se ela tem mais de 18 anos ela pode entrar na auto escola,
imprima uma mensagem informando isso. Se ela tem menos, ela não
pode, imprima outra mensagem com este aviso. Execute a função
nos dois casos.

*/


function verificar(num){
    if (num >= 18){
        console.log('voce pode dirigir');
    } else {
        console.log('voce nao pode dirigir');
    }
}



let idade = Number(prompt('digite um numero: '));

verificar(idade);

