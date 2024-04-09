/*Crie uma classe chamada “Triângulo” com atributos para 
armazenar os três lados do triângulo. 
Implemente métodos para verificar se é um triângulo válido e calcular sua área.

*/

class Triangulo{
    constructor(base, lado1, lado2){
        this.base = base
        this.lado1 = lado1
        this.lado2 = lado2
    }

    verificar(){
        if(this.base < this.lado1 || this.base < this.lado2){
            return alert('isso não é um triangulo, pois a base deve ser maior')
        } else {
            return alert('é um triangulo');
        }
    }

    area(){
        let calculo = (this.base * this.lado1) / 2
        return alert(`a área é ${calculo}`);
    }
}

let base = Number(prompt('digite o valor da base: '));
let lado1 = Number(prompt('digite o valor do lado: '));
let lado2 = Number(prompt('digite o valor do outro lado: '));

let triangulo = new Triangulo(base, lado1, lado2);

triangulo.verificar();
triangulo.area()
