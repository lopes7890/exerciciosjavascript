/*23) Numa promoção exclusiva para o Dia da Mulher, uma loja quer dar descontos
para todos, mas especialmente para mulheres. Faça um programa que leia nome,
sexo e o valor das compras do cliente e calcule o preço com desconto. Sabendo
que:
 - Homens ganham 5% de desconto
 - Mulheres ganham 13% de desconto*/

 let Nome = prompt('digite seu nome: ');
 let Sexo = prompt('digite seu sexo: ');
 let ValorDasCompras = Number(prompt('digite o valor total das compras: '));

 if (Sexo == 'masculino'){
    let Total = (ValorDasCompras * 5) / 100
    console.log(`voce tera desconto de 5% pagando R$ ${ValorDasCompras - Total}`);
 } else if (Sexo == 'feminino'){
    let Total = (ValorDasCompras * 13) / 100
    console.log(`voce tera uma desconto de 13% e pagara R$ ${ValorDasCompras - Total}`);
 }