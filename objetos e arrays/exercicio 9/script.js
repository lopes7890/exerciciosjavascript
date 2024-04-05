// crie um array a partir de uma frase;
// imprima cada palavra do array no console por meio de um for;

let frase = 'olá mundo eu programo em JavaScript';

let palavras = frase.split(" ");

palavras.forEach(p => {
    console.log(p);
});