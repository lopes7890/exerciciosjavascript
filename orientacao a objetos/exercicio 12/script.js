/*Implemente uma classe chamada “ContaBancária” que possua atributos 
para armazenar o número da conta, nome do titular e saldo. 
Adicione métodos para realizar depósitos e saques.

*/

class ContaBancaria {
    constructor(nome, numero, saldo){
        this.nome = nome,
        this.numero = numero,
        this.saldo = saldo
    }
    deposito(valor){
       return this.saldo + valor
    }
    saque(valor){
        return this.saldo - valor
    }
    get newSaldo(){
        return this.saldo
    }
    set novoSaldo(valor){
        this.saldo = valor
    }
}
let nome = prompt('digite seu nome: ');
let numero = Number(prompt('digite o numero da conta: '));
let saldo = Number(prompt('digite seu saldo: '));
let conta = new ContaBancaria(nome, numero, saldo);

let acao = Number(prompt('digite [1] para sacar, digite [2] para depositar.'));

while (acao > 0 && acao <= 2) {
    if (acao == 1){
        let valor = Number(prompt('digite o valor a ser sacado: '))
        let valorFinal = conta.saque(valor)
        conta.novoSaldo = valorFinal
        console.log(`saque: -${valor}
        saldo: ${conta.saldo}`)
    }
    if (acao == 2){
        let valor = Number(prompt('digite o valor a ser depositado: '))
        let valorFinal = conta.deposito(valor)
        conta.novoSaldo = valorFinal
        console.log(`dapósito: +${valor}
        saldo: ${conta.saldo}`)
    } 
     acao = Number(prompt('digite [1] para sacar, digite [2] para depositar.'));
}
