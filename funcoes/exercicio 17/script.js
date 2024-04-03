/*Escreva uma função que encontre 
a área e o perímetro de um círculo, de acordo com o raio fornecido.*/

function AreaEPerimetro(raio){
    let CalculoArea = Math.pow(raio, 2) * 3.14
    let CalculoPerimetro = (2 * 3.14) * raio
    alert(`a area do circulo é ${CalculoArea} \n o perimetro do circulo é ${CalculoPerimetro}`);
}

let raio  = Number(prompt('digite o raio de um circulo: '));

AreaEPerimetro(raio);

