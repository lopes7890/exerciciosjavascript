/*Refaça o script anterior, mas agora pergunte ao usuário quantos números ele deseja inserir no array.
Depois, o usuário vai preenchendo elemento por elemento do vetor.
Ao final, exiba o array e o array ao contrário (generalização do script anterior).*/

let number = []
let numeros = Number(prompt('digite o tamanho do array: '));

while (numeros > 0){
    let numero = Number(prompt('digite um numero: '));
    number.push(numero);
    numeros--
}

console.log(number);
console.log(number.reverse());