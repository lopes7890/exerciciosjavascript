/*Crie um programa que leia 6 números inteiros e no final mostre quantos deles 
são pares e quantos são ímpares.*/
Contador = 1
ContPar = 0
ContImpar = 0
while(Contador <= 6){ // o(n)
    let Numero = Number(prompt('digite um numero: '));
    Contador ++
    if (Numero % 2 == 0){
        ContPar ++
    } else{
        ContImpar ++
    }
}
alert(`temos ${ContPar} pares`);
alert(`temos ${ContImpar} impares`);
