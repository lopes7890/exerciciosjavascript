/*41) Desenvolva um programa que mostre na tela a seguinte contagem:
100 95 90 85 80 ... 0 Acabou!*/

for (let Numero = 100; Numero >= 0; Numero -= 5){ // o(N)
    console.log(Numero);
}

console.log('acabou!');


// o(n)