/*17) Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse
80Km/h, exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba
o valor da multa, cobrando R$5 por cada Km acima da velocidade permitida.*/

let Velocidade = Number(prompt('digite a sua velocidade: '));

if(Velocidade > 80){
    console.log('voce foi multado!')
    let total = Velocidade - 80
    console.log(`voce pagara R$ ${total * 5}`);
} else {
    console.log('parabens voce nao foi multado!')
}

