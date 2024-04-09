/*Crie uma classe chamada “Retângulo” que possua atributos 
para armazenar a largura e a altura.
Implemente métodos para calcular a área e o perímetro do retângulo.

*/

class Retangulo {
    constructor(largura, altura){
        this.largura = largura
        this.altura = altura
    }
    area(){
        return this.largura * this.altura
    }
    perimetro(){
        return (this.largura * 2) + (this.altura * 2);
    }
}

let largura = Number(prompt('digite a largura do retângulo: '));
let altura = Number(prompt('digite a altura do retângulo: '));

let forma = new Retangulo(largura, altura)

alert(`a area é ${forma.area()} e o perimetro é ${forma.perimetro()}`);

