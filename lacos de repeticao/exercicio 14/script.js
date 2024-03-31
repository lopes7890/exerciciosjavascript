//Faça um programa que leia 5 números e informe o maior número.
MaiorNumero = 0
for (Contador = 1; Contador <= 5; Contador ++){ // o(n)
    let Numero = Number(prompt('digite um numero: '));
    if (Numero > MaiorNumero){
        MaiorNumero = Numero
    }
}

alert(`o maior numero é ${MaiorNumero}`);

// o(n)


