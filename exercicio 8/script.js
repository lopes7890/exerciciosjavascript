/*8) Desenvolva um programa que leia uma distância em metros e mostre os valores
relativos em outras medidas.
Ex:
Digite uma distância em metros: 185.72
A distância de 85.7m corresponde a:
0.18572Km
1.8572Hm
18.572Dam
1857.2dm
18572.0cm
185720.0mm */

let Distancia = Number(prompt('digite um numero: '));

let km = Distancia / Math.pow(10, 3)
let hm = Distancia / Math.pow(10, 2)
let dam = Distancia / Math.pow(10, 1)
let dm = Distancia * Math.pow(10, 1)
let cm = Distancia * Math.pow(10, 2)
let mm = Distancia * Math.pow(10, 3)

console.log(km);
console.log(hm);
console.log(dm);
console.log(cm);
console.log(mm);
console.log(dam);
