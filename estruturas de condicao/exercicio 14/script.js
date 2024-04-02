/* Faça uma estrutura if/else para verificar se um usuário pode dirigir.
Armazene em variáveis algumas informações sobre o usuário: idade e se tem CNH.
Se a idade for maior que 18 e não possuir CNH, exiba uma mensagem, se a idade 
for maior que 18 e possuir CNH, exiba uma mensagem e se não tiver 18 nem CNH, exiba 
outra mensagem.

*/

let idade = Number(prompt('digite sua idade: '));
let cnh = prompt('tem CNH? [sim/nao] : ');

if ((idade >= 18) && (cnh == 'nao')){
    console.log('voce nao pode dirigir pois nao possui cnh');
} else if ((idade >= 18) && (cnh == 'sim')){
    console.log('voce pode dirigir');
}else{
    console.log('voce nao pode dirigir');
}