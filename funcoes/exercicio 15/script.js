/*Escreva uma função em JavaScript que realize a conversão de uma temperatura 
fornecida em graus Fahrenheit (F) para Celsius (C).

Dica: para converter uma temperatura em F para C, 
subtraia 32 da temperatura e multiplique o resultado por 0,5556 (ou 5/9).*/

function conversor(temperaturaF){
        let celcius = (temperaturaF - 32) * 0.5556
        alert(`a temperatura F${temperaturaF} é C${celcius.toFixed(0)}`);
}

let temperaturaF = Number(prompt('digite um temperatura em Fahrenheit: '));

conversor(temperaturaF);

