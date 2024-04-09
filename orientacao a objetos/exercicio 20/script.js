/*Implemente uma classe chamada “Livro” com atributos para armazenar o título, 
o autor e o número de páginas do livro. 
Adicione métodos para emprestar o livro, devolvê-lo e verificar se está disponível.

*/

class Livro {
    constructor(titulo, autor, paginas, estante){
        this.titulo = titulo
        this.autor = autor
        this.paginas = paginas
        this.estante = [titulo]
    }

    emprestar(){
        this.estante.pop(this.titulo)
    }

    devolver(){
        this.estante.push(this.titulo)
    }

    disponivel(titulo){
        return this.estante.includes(titulo);
    }
}


let livro = new Livro('João preste atenção', 'Paulo', 70);

console.log(livro.estante)
livro.emprestar()
console.log(livro.estante)
livro.devolver()
console.log(livro.estante)
console.log(livro.disponivel('João preste atenção'))





