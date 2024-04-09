/*Implemente uma classe chamada “Aluno” que 
possua atributos para armazenar o nome, 
a matrícula e as notas de um aluno. 
Adicione métodos para calcular a média das notas 
e verificar a situação do aluno (aprovado ou reprovado).

*/

class Aluno {
    constructor(nome, matricula, nota1, nota2){
        this.nome = nome
        this.matricula = matricula
        this.nota1 = nota1
        this.nota2 = nota2
    }
    media(){
        return (nota1 + nota2) / 2
    }
    situacao(media){
        if (media > 5){
            return 'aprovado'
        } else {
            return 'reprovado'
        }
    }
}

let nome = prompt('digite seu nome: ');
let matricula = Number(prompt('digite sua matricula: '));
let nota1 = Number(prompt('digite sua primeira nota: '));
let nota2 = Number(prompt('digite sua segunda nota: '));

let aluno = new Aluno(nome, matricula, nota1, nota2);

let notaFinal = aluno.media(nota1, nota2);

alert(`aluno ${aluno.nome} a sua média foi ${notaFinal} e você está ${aluno.situacao(notaFinal)}`);