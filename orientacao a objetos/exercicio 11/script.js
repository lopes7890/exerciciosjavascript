class Circulo {
    constructor(raio){
        this.raio = raio
    }
    area(){
        return 3,14 * (this.raio * this.raio)//Math.pow(this.raio, 2);
    }
    perimetro(){
        return 2 * (3,14 * (this.raio * this.raio));
    }
}

let valor = Number(prompt('digite o raio do circulo: '));

let raio = new Circulo(valor);

console.log(raio.area())
console.log(raio.perimetro())