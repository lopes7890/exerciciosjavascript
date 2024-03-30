/*21) Faça um algoritmo que leia um determinado ano e mostre se ele é ou não
BISSEXTO.*/

let AnoBissexto = Number(prompt('digite um ano: '));

if(AnoBissexto % 4 == 0 && AnoBissexto % 100 != 0 || AnoBissexto % 400 == 0){
    console.log(`o ano ${AnoBissexto} é Bissexto`);
} else {
    console.log(`o ano ${AnoBissexto} não é Bissexto`);
}