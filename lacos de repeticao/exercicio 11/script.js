/*Faça um programa que leia 7 números inteiros e no final mostre o somatório 
entre eles.*/
Contador = 1
Soma = 0
while (Contador <= 7){ // o(n)
    let Numero = Number(prompt('digite um numero: ')); // o(1)
    Contador ++
    Soma = Soma + Numero
}

alert(`a soma dos numeros é ${Soma}`);// o(1)

