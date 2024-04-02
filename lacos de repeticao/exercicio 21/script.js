/* Verifique se o número é primo!
Um número primo, é um número natural, maior que 1 e apenas
divisível por si próprio e por 1.

*/

let numero = 10
let divisao = 0

for (let i = 1; i <= numero; i++){
    if (numero % i == 0){
        divisao++
    }
}

if (divisao == 2){
    console.log(`o número ${numero} é primo`);
} else {
    console.log(`o número ${numero} não é primo`);
}