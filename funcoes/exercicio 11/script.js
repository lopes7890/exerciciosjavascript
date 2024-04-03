/* Faça um programa, com uma função que necessite de três argumentos, 
e que forneça a soma desses três argumentos através de uma função. 
Seu script também deve fornecer a média dos três números, através de uma segunda função que chama a primeira. */
function somar(x, y, z){
    let somador = x + y + z
    console.log(`a soma é ${somador}`);
    media(somador);
}

function media(somador){
    let media = somador / 3
    console.log(`a media é ${media}`)
}


let numero0 = Number(prompt('digite um numero: '));
let numero1 = Number(prompt('digite um numero: '));
let numero2 = Number(prompt('digite um numero: '));

somar(numero0, numero1, numero2);








