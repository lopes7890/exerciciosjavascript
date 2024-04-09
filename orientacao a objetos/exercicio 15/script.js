/*Crie uma classe chamada “Funcionário” com atributos 
para armazenar o nome, o salário e o cargo do funcionário. 
Implemente métodos para calcular o salário líquido, 
considerando descontos de impostos e benefícios.

*/

class Funcionario {
    constructor(nome, salario, cargo){
        this.nome = nome
        this.salario = salario
        this.cargo = cargo
    }
    salarioLiquido(){
        return (this.salario - 190) - 350
    }
}

let nome = prompt('digite seu nome: ');
let salario = Number(prompt('digite seu salário: '));
let cargo = prompt('digite seu cargo: ');

let valorFinal = new Funcionario(nome, salario, cargo);

alert(`após os descontos, seu salário é R$ ${valorFinal.salarioLiquido()}`);