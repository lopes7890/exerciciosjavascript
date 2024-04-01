/* Escreva uma função que recebe uma string e se o
texto conter mais de 10 caracteres imprima "Texto muito longo" e
se conter menos, imprima "Texto dentro do limite".

*/

function contaCaracter(frs){
    let contador = frs.length;
    if (contador <= 10){
        alert(`frase curta possui ${contador} caracteres`);
    } else {
        alert(`frase longa possui ${contador} caracteres`);
    }

}


let frase = prompt('digite uma frase: ');

contaCaracter(frase);

