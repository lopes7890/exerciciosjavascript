/* Escreva um loop for ou while que exiba qual número é par e qual número 
é ímpar. O contador deve iniciar em 0 e ir até 50.

*/

for (let numero = 0; numero <= 50;numero++){
    if (numero % 2 == 0){
        console.log(`${numero} é par`);
    }
    if (numero % 2 == 1){
        console.log(`${numero} é impar`);
    }
}