/*42) Faça um algoritmo que pergunte ao usuário um número inteiro e positivo
qualquer e mostre uma contagem até esse valor:
Ex: Digite um valor: 35
Contagem: 1 2 3 4 5 6 7 ... 33 34 35 Acabou!*/

let Contagem = Number(prompt('digite um numero: ')); // o(1)

for (let Numero = 0; Numero <= Contagem; Numero += 1){ // o(n)
    console.log(Numero);
}

console.log('acabou!');

// o(n)

