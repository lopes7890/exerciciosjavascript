/* Crie uma classe que simule um carro com as propriedades: marca, cor e gasolina restante.
Crie um método de dirigir o carro, que vá diminuindo a gasolina
gradativamente e um de abastecer para aumentar a gasolina quando necessário. */

class Carro {
    constructor(marca, cor, gasolina, consumo){
        this.marca = marca
        this.cor = cor
        this.gasolina = gasolina
        this.consumo = consumo
    }

    dirigir(km){

        let consumido = km / this.consumo
        this.gasolina -= consumido
    }

    abastecer(litros){
        this.gasolina += litros
    }
}

let carro = new Carro('tesla', 'preto', 50, 10);

carro.dirigir(100);

console.log(carro);

carro.abastecer(30);

console.log(carro)