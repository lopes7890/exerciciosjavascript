/*Escreva uma função que permita contar o número de vogais contidas 
em uma string fornecida pelo usuário.
Por exemplo, o usuário informa a string “Beterraba”, 
e a função retorna o número 4 (há 4 vogais nessa palavra).*/
function vogal(palavra){     
        let formatar = palavra.toLowerCase()
        let letras = formatar.match(/[a-u]/g);
        let contVogais = 0
        for(let i = 0; i < letras.length; i++){
                if(letras[i] == 'a' || letras[i] == 'e' || letras[i] == 'i' || letras[i] == 'o' || letras[i] == 'u'){
                    contVogais++
                }
        }
        console.log(contVogais);
}

let palavra = prompt('digite uma palavra: ');

vogal(palavra);

