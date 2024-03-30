// number

// todo numero é tratado como um tipo de dado number

console.log(typeof 10); // number
console.log(typeof 0.34); // number

// numbers: aritméticos

/* os operadores aritméticos são:
    + = soma
    - = subtração
    * = multiplicação
    / = divisão
    % = resto da divisão

*/

// no js também é possivel realizar operações aritméticas com os numbers

console.log(2+2); // = 4 (number)
console.log(2*4-3); // = 5 (number)
console.log(8/4); // = 2 (number)
console.log(5 + (3-1)) // = 7 (number)
console.log(3%2) // = 1 (number)

// number: special numbers

// são considerados numbers mais nao funcionam como numbers

/* sao eles:

   . Infinity
   . -Infinity
   . NaN 

*/

console.log(typeof Infinity); // number
console.log(typeof -Infinity); // number
console.log(typeof NaN); // number



// strings

// tudo que esta entre aspas é tratado como string

// pode ser utilizado aspas simples(''), aspas duplas("") e crase(``).

console.log('ola mundo'); // string
console.log("ola mundo"); // string
console.log(`ola mundo`); // string

// strings: detalhes técnicos

// \n permite uma quebra de linha no meio da string

console.log('olá mundo \n eu programo em js');
/* olá mundo
    eu programo em js
*/

/* para conseguir utilizar aspas no meio do texto da string, basta utilizar uma aspas diferente
da que foi utilizada para a declarçao da string
*/

console.log('eu sou um "grande" metiroso');
// eu sou um "grande" mentiroso

console.log("eu sou um 'grande' mentiroso")
// eu sou um 'grande' mentiroso


// a crase serve para que possamos fazer expressões matemáticas no meio da string e adicionar valores de variáveis

console.log(`a soma de 2 + 2 = ${2 + 2}`);
// a soma de 2 + 2 = 4


// tambem é possível fazer a contatenação de string atravez do simbolo de soma +

console.log('allison ' + 'lopes ' + 'da ' + 'silva ' + 'bosco');
// allison lopes da silva bosco

console.log('suimdara ' + 'laovea '  + 'trivelin ' + 'quevedo');
// suimdara laovea trivelin quevedo




// Booleans

// o perador Boolean serve para fazer a comparação entre True(verdadeiro) ou False(falso)

// Boleans: comparações

/*
    maior que: >
    menor que: <
    maior ou igual que: >=
    menor ou igual que: <=
    igual que: ==
    diferente: !=
    idêntico: ===
*/

console.log(5>2); //True
console.log(3<1); // False
console.log(7>=10); // False
console.log(10<=10); // True
console.log(3==3); // True
console.log(5!=5); // False
console.log(8===8); // True



// Booleans: operadores lógicos

// os operadores lógicos são:

// &&: and

console.log(5>2 && 3>1); // True
console.log(10<5 && 3>1); // False

console.log((1>2 && 5==5) && (7>4 && 10<20)); // false

/* o operador and só retorna True quando as duas comparações forem verdadeiras,
caso ao contrário ele so retorna false
*/


// ||: ou

console.log(2>1 || 6<10); // True
console.log(2>10 || 7<1); // False

console.log((10>3 && 20<30) || (10==8 || 90!= 15)); // true

/* o operador OU so retorna False quando as duas comparações forem falsas
caso ao contrário ele sempre vai retornar verdadeiro
*/


// !: not

console.log(!(true)); // False
console.log(!(false)); // True

// o operador NOT sempre vai retornar o valor oposto do que lhe foi dado



// Booleans: operador ternário

// faz um comparativo em apenas uma linha de codigo

// se true retorne 'verdadeiro' se nao retorne 'falso'
console.log(true ? 'verdadeiro' : 'falso');
// verdeiro

