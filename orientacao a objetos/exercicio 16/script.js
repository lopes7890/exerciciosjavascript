/*Implemente uma classe chamada “Produto” que possua atributos 
para armazenar o nome, o preço e a quantidade em estoque. 
Adicione métodos para calcular o valor total em estoque 
e verificar se o produto está disponível.

*/

class Produto {
    constructor(nome, valor, quantidade){
        this.nome = nome
        this.valor = valor
        this.quantidade = quantidade
    }
    verificar(preco, quantidade){
        let valor = preco * quantidade
        alert(`valor total do produto em estoque R$ ${valor}`);
        alert(`o produto esta disponível em estoque`)
    }
}

let nome = prompt('digite o nome do produto: ');
let preco = Number(prompt('digite o preço do produto R$ '));
let quantidade = Number(prompt('digite a quantidade em estoque: '));

let produto = new Produto(nome, preco, quantidade);

if (quantidade >= 1){
    produto.verificar(preco, quantidade);
} else{
    alert('sem estoque do produto!')
}