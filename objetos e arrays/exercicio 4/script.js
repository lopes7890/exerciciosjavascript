// adicione a propriedade janelas no onibus com o valor 20;
// delete a propriedade rodas 
// imprima no console a propriedade janelas

const onibus = {

    rodas: 8,
    passageiros: 40,
    portas: 2

};
delete onibus.rodas
onibus.janelas = 20

console.log('rodas:' + onibus.rodas);
console.log('janelas: ' + onibus.janelas);
console.log('limite de passageiros: ' + onibus.passageiros);
console.log('portas: ' + onibus.portas);