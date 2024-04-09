/*Crie uma classe chamada “Paciente” que possua atributos 
para armazenar o nome, a idade e o histórico de consultas de um paciente. 
Implemente métodos para adicionar uma nova consulta ao histórico
e exibir as consultas realizadas.

*/

class Paciente {
    constructor(nome, idade, historico){
        this.nome = nome
        this.idade = idade
        this.historico = []
    }

    adicionar(consulta){
        this.historico.push(consulta)
        console.log(this.historico);
    }
}
let consulta = 'consulta 1'
let paciente = new Paciente('allison', 16, consulta);

paciente.adicionar(consulta)






