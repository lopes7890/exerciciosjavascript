/* Cria uma classe que simula um carrinho de compras 
de um e-commerce com as propriedades itens, quantidade total e valor total.
Crie os métodos para adicionar e remover itens. */

class Carrinho {
    constructor(itens, quantidade, valor){
        this.itens = itens
        this.quantidade = quantidade
        this.valor = valor
    }

    adicionar(item){

        let contador = 0

        for(let itensCarrinho in this.itens){
            if(this.itens[itensCarrinho].id == item.id){
                this.itens[itensCarrinho].quantidade += item.quantidade
                contador = 1
            }
        }

        if(contador == 0){
            this.itens.push(item);
        }

        this.quantidade += item.quantidade
        this.valor += item.preco * item.quantidade

    }

    remover(item){

        for(let itensCarrinho in this.itens){
            if(this.itens[itensCarrinho].id == item.id){

                let obj = this.itens[itensCarrinho]
                let index = this.itens.findIndex(function(obj) { return obj.id == item.id})

                this.quantidade -= this.itens[itensCarrinho].quantidade
                this.valor -= this.itens[itensCarrinho].preco * this.itens[itensCarrinho].quantidade

                this.itens.splice(index, 1);

            }
        }
    }
}

let carrinho = new Carrinho([
    {
        id: 1,
        nome: "camisa",
        quantidade: 2,
        preco: 20        
    },
    {
        id: 2,
        nome: "bone",
        quantidade: 1,
        preco: 15
    },
    {
        id: 3,
        nome: "bermuda",
        quantidade: 2,
        preco: 30
    }
], 5, 115)

console.log(carrinho);

carrinho.adicionar({id: 1, nome: "camisa", quantidade: 2, preco: 20});

console.log(carrinho);

carrinho.remover({id: 2, nome: "bone", quantidade: 1, preco: 15});

console.log(carrinho);
