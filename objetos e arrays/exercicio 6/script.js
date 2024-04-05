// crie dois arrays, um com mais de 5 elementos e outro com menos
// faça uma função que verifica o número de elementos
// se possuir menos que 5, imprima "poucos elementos" no console
// se tiver mas, imprima "muitos elementos"

function verificar (x){
    if (x.length <= 5){
        console.log('poucos elementos');
    } else {
        console.log('muitos elementos')
    }
}

let array1 = [1, 2, 5, 7, 8, 9, 10];
let array2 = [1, 3, 5];

verificar(array1);
verificar(array2)

