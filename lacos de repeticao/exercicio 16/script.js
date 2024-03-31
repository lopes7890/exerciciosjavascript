/*Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha igual 
ao nome do usuário, mostrando uma mensagem de erro e voltando a pedir as informações.*/

let usuario = prompt('digite seu usuário: ');
let senha = prompt('digite sua senha: ');

while (senha == usuario){ // o(n)
    alert('senha invalida!');
    usuario = prompt('digite seu usuário: ');
    senha = prompt('digite sua senha: ');
}

if (usuario != senha){
    alert('cadastro feito com sucesso!');
}
