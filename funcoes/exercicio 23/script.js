/*Escreva uma função que receba uma string como entrada e 
retorne um objeto contendo a contagem de cada vogal 
(a, e, i, o, u) presente na string. 
Ignore maiúsculas e minúsculas, 
ou seja, considere que "A" é igual a "a".
*/

function contVogal(palavra){
    let min = palavra.toLowerCase();
    let separar = min.split("")
    let obj = {
        a: 0,
        e: 0,
        i: 0,
        o: 0,
        u: 0
    }

    separar.forEach(l => {
        if(l == 'a'){
            obj.a = obj.a + 1
        }

        if(l == 'e'){
            obj.e = obj.e + 1
        }

        if(l == 'i'){
            obj.i = obj.i + 1
        }

        if(l == 'o'){
            obj.o = obj.o + 1
        }

        if(l == 'u'){
            obj.u = obj.u + 1
        }
    });

    return obj
}

let palavra = "ola mundo";

console.log(contVogal(palavra));