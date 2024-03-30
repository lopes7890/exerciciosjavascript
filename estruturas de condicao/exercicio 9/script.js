/*25) [DESAFIO] Crie um programa que leia o tamanho de três segmentos de reta.
Analise seus comprimentos e diga se é possível formar um triângulo com essas
retas. Matematicamente, para três segmentos formarem um triângulo, o comprimento
de cada lado deve ser menor que a soma dos outros dois.*/

let Segmento1 = Number(prompt('digite o tamanho do primeiro segmento: '));
let Segmento2 = Number(prompt('digite o tamanho do segundo segmento: '));
let Segmento3 = Number(prompt('digite o tamanho do terceiro segmento: '));

if (Segmento1 < Segmento2 + Segmento3 && Segmento2 < Segmento1 + Segmento3 && Segmento3 < Segmento1 + Segmento2){
    console.log(`as retas ${Segmento1}, ${Segmento2} e ${Segmento3} formam um triangulo`);
} else{
    console.log(`as retas ${Segmento1}, ${Segmento2} e ${Segmento3} nao formam um triangulo`);
}