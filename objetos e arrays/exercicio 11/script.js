// 01. Crie uma função que recebe um array de 2 números e coloque eles em ordem crescente. Não use o método sort.

function ordenar(x){
    console.log(x)
    if(x[0] > x[1]){
        x.unshift(x[1])
        x.pop()
        console.log(x)
    }
}
let numeros = [7, 4];

ordenar(numeros);