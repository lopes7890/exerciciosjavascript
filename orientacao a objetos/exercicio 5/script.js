/* Crie uma classe conta bancaria com propriedades de
saldo na conta corrente, conta poupança e juros da poupança.
Crie métodos de depósito e saque, também um método para transferir dinheiro da 
popança para a corrente. Além disso crie uma conta especial que 
herda da conta normal. Na conta especial os juros são dobrados da conta normal.*/

class ContaBancaria {
    constructor(saldoCorrente, saldoPoupanca, juros){
       this.saldoCorrente = saldoCorrente
       this.saldoPoupanca = saldoPoupanca
       this.juros = juros
    }

    depositoCorrente(valor){
        return this.saldoCorrente + valor
    }
    saqueCorrente(valor){
        return this.saldoCorrente - valor
    }
    get newSaldoCorrente(){
        return this.saldoCorrente
    }
    set novoSaldoCorrente(valor){
        this.saldoCorrente = valor
    }

    depositoPoupanca(valor){
        return this.saldoPoupanca + valor
    }
    saquePoupanca(valor){
        return this.saldoPoupanca - valor
    }
    get newSaldoPoupanca(){
        return this.saldoPoupanca
    }
    set novoSaldoPoupanca(valor){
        this.saldoPoupanca = valor
    }

    transferencia(valor){
        this.saldoPoupanca -= valor
        this.saldoCorrente += valor
    }

}

class ContaEspecial extends ContaBancaria{
    constructor(saldoCorrente, saldoPoupanca, juros){
        super(saldoCorrente, saldoPoupanca, juros*2)

    }
}



let contas = new ContaBancaria(100, 400, 2);

contas.novoSaldoCorrente = contas.depositoCorrente(100);

contas.novoSaldoCorrente = contas.saqueCorrente(50)

console.log(contas.saldoCorrente)

contas.novoSaldoPoupanca = contas.depositoPoupanca(200)

contas.novoSaldoPoupanca = contas.saquePoupanca(100)

console.log(contas.saldoPoupanca)

contas.transferencia(200);

console.log(contas.saldoCorrente)

console.log(contas.saldoPoupanca)

let conta2 = new ContaEspecial(1000, 2000, 1)

console.log(conta2)

