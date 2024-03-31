/*Faça um programa que leia e valide as seguintes informações:
Nome: maior que 3 caracteres;
Idade: entre 0 e 150;
Salário: maior que zero;
Sexo: 'f' ou 'm';
Estado Civil: 's', 'c', 'v', 'd';
Dica: se sua variável é texto, o tamanho dela está armazenado em: texto.length*/

let Nome = prompt('digite seu nome: ');
let Idade = Number(prompt('digite sua idade: '));
let Salario = Number(prompt('digite seu salario: ')); 
let Sexo = prompt('digite seu sexo: [f/m]');
let EstadoCivil = prompt('digite seu estado civil: ');

if ((Nome.length > 3) && (Idade > 0 && Idade < 150) && (Salario > 0) && (Sexo == 'f' || Sexo == 'm') && (EstadoCivil == 's' || EstadoCivil == 'c' || EstadoCivil == 'v') || EstadoCivil == 'd'){
    alert('aprovado');

} else{
    alert('reprovado');
}

// o(1)