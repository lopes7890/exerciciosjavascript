/* Escreva uma função que receba dois números, o primeiro é 
a base e o segundo a potência, depois faça essa operação e
retorne o resultado.
Por exemplo: 3,2 = 9

*/

function operacao(x, y){
    return alert(`${Math.pow(x, y)}`);
}


let base = Number(prompt('digite a base: '));
let potencia = Number(prompt('digite a potência: '));

operacao(base, potencia);

