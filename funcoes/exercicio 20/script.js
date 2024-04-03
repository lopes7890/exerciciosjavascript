/*Escreva uma função que informe o retorno de um investimento (montante) 
com base nos valores do capital inicial, tempo em meses e taxa de juros mensal, 
fornecidos pelo usuário.

Use a fórmula: M = C * (1+i)t
Onde:

C = Capital inicial investido
i = Taxa de juros, em percentual
t = Tempo do investimento, em meses
Exiba o resultado com duas casas decimais.*/

function investimento(CapitalInicial, meses, TaxaDeJuros){
    let M = CapitalInicial * Math.pow(1 + (TaxaDeJuros/100), meses);
    alert(`seu retorno sera de ${M.toFixed(2)}`);
}

let CapitalInicial = Number(prompt('digite seu capital iniciar: R$'));
let meses = Number(prompt('digite o tempe em meses desse investimento: '));
let TaxaDeJuros = Number(prompt('digite a taxa de juros em %: '));

investimento(CapitalInicial, meses, TaxaDeJuros);