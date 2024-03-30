/*24) Faça um algoritmo que pergunte a distância que um passageiro deseja
percorrer em Km. Calcule o preço da passagem, cobrando R$0.50 por Km para
viagens até 200Km e R$0.45 para viagens mais longas.*/

let Distancia = Number(prompt('digite a distancia em kms percorrida: '));

if (Distancia <= 200){
    Total = Distancia * 0.50
    console.log(`voce percorreu ${Distancia} kms e pagara um total de R$ ${Total}`);
} else if (Distancia > 200){
    Total = Distancia * 0.45
    console.log(`voce percorreu ${Distancia} kms e pagara R$ ${Total}`);
}