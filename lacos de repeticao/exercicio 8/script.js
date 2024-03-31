/*45) O programa 7 vai ter um problema quando digitarmos o primeiro valor
maior que o último. Resolva esse problema com um código que funcione em qualquer
situação.*/

let NumeroInicio = Number(prompt('digite o primeiro valor: '));
let NumeroIncremento = Number(prompt('digite o incremento: '));
let NumeroFinal = Number(prompt('digite o ultimo valor: '));

if (NumeroInicio < NumeroFinal){ // o(1)
    while(NumeroInicio < NumeroFinal) { // o(n)
        NumeroInicio += NumeroIncremento
        console.log(NumeroInicio);
    }
} 

if (NumeroInicio > NumeroFinal) { // o(1)
    while(NumeroFinal < NumeroInicio) { // o(n)
        NumeroInicio -= NumeroIncremento
        console.log(NumeroInicio);
    }
}
console.log('acabou!');

// o(n) + o(n)
// 2o(n)
// o(n)




