/*26) Escreva um algoritmo que leia dois números inteiros e compare-os, mostrando
na tela uma das mensagens abaixo:
 - O primeiro valor é o maior
 - O segundo valor é o maior
 - Não existe valor maior, os dois são iguais*/

let Numero1 = Number(prompt('digite um numero: '));
let Numero2 = Number(prompt('digite outro numero: '));

if (Numero1 > Numero2){
    console.log(`o ${Numero1} é maior que o ${Numero2}`);
} else if (Numero2 > Numero1){
    console.log(`o ${Numero1} é menor que o ${Numero2}`);
} else if (Numero1 == Numero2){
    console.log(`o numero ${Numero1} e ${Numero2} sao iguais`);
}


