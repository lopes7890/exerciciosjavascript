//Faça um programa que peça uma nota, entre zero e dez. Mostre uma mensagem caso o 
//valor seja inválido e continue pedindo até que o usuário informe um valor válido. 

let nota = Number(prompt('digite uma nota de 0 a 10: '));

while((nota > 10) || (nota < 0)){ //o(n)
    alert('nota invalida!');
    nota = Number(prompt('digite novamente: '));
}

if (nota <= 10){
    alert('nota valida!');
}
