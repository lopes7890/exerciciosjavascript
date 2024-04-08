/* Crie um objeto que simula um endereço de um cliente
com propriedades rua, bairro, cidade, estado
no constructor o endereço ja deve ser definido
crie métodos para atualizar todas as propriedades */

class Endereco {
    constructor(rua, bairro, cidade, estado){
        this.rua = rua
        this.bairro = bairro
        this.cidade = cidade
        this.estado = estado
    }

    set novaRua(rua){
        this.rua = rua
    }

    set novoBairro(bairro){
        this.bairro = bairro
    }

    set novaCidade(cidade){
        this.cidade = cidade
    }

    set novoEstado(estado){
        this.estado = estado
    }

}

let endereco = new Endereco('rua 1', 'Bela Montana', 'Vila Mandubeba', 'São Paulo');

console.log(endereco);

endereco.novoBairro = 'Interlagos'

endereco.novaCidade = 'São Paulo'

endereco.novaRua = 'rua da verdade'

console.log(endereco);

