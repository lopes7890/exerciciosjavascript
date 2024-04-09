/*Implemente uma classe chamada “Carro” com 
atributos para armazenar a marca, o modelo e a velocidade atual do carro.
Adicione métodos para acelerar, frear e exibir a velocidade atual.

*/

class Carro {
    constructor(marca, modelo, velocidade){
        this.marca = marca
        this.modelo = modelo
        this.velocidadeAtual = velocidade
    }

    get velocidade() {
        return this.velocidadeAtual
    }

    set newVelocidade(velocidade){
        this.velocidadeAtual = velocidade
    }

    acelerar(velocidade){
        return this.velocidadeAtual + velocidade
    }

    freiar(velocidade){
        return this.velocidadeAtual - velocidade
    }

}

let marca = prompt('digite a marca do seu carro: ');
let modelo = prompt('digite o modelo do seu carro: ');
let velocidade = Number(prompt('digite sua velocidade atual: '));

let carro = new Carro(marca, modelo, velocidade);

let acao = Number(prompt('digite [1] para acelerar e [2] para freiar.'));


while (acao > 0 && acao < 3){
    
    if(acao == 1){

        let acelerar = Number(prompt('digite quanto deseja acelerar: '));
        let novaVelocidade = carro.acelerar(acelerar);
        carro.newVelocidade = novaVelocidade
        alert(`sua velocidade agora é de ${carro.velocidadeAtual}`);

    } else {
        let freiar = Number(prompt('quanto voce deseja reduzir: '));
        let novaVelocidade = carro.freiar(freiar);
        carro.newVelocidade = novaVelocidade;
        alert(`sua velocidade agora é de ${carro.velocidadeAtual}`);
    }

    acao = Number(prompt('digite [1] para acelerar e [2] para freiar.'));
}






