/*44) Crie um algoritmo que leia o valor inicial da contagem, o valor final e o
incremento, mostrando em seguida todos os valores no intervalo:
Ex: Digite o primeiro Valor: 3
Digite o último Valor: 10
Digite o incremento: 2
Contagem: 3 5 7 9 Acabou!*/

let NumeroInicio = Number(prompt('digite o primeiro valor: '));
let NumeroIncremento = Number(prompt('digite o incremento: '));
let NumeroFinal = Number(prompt('digite o ultimo valor: '));

while(NumeroInicio < NumeroFinal){ // o(n)
    NumeroInicio += NumeroIncremento
    console.log(NumeroInicio);
}

console.log('acabou!');


