/*Escreva uma função que retorne a área de um triângulo,
a partir dos valores de base e altura fornecidos.*/

function area(base, altura){
    let calculo = (base*altura) / 2
    alert(`a área do triângulo é ${calculo}`);
}

let base = Number(prompt('digite a base do triangulo: '));
let altura = Number(prompt('digite a altura do triangulo: '));

area(base,altura);