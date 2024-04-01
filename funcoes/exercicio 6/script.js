/* Escreva uma função que detecta o tipo de dado passado,
verifique se é um: number, boolean ou string e retorne uma
mensagem para cada tipo, execute uma função para cada caso.

*/

function detectar(dado){
    let detector = typeof(dado);
    if (detector == 'string'){
        texto(dado);
    }

    if (detector ==  'number'){
        numero(dado);
    }

    if (detector == 'boolean'){
         booleano()
    }
}   
    


function texto(dado){
    alert(`o ${dado} é uma string`);
}

function numero(dado){
    alert(`o ${dado} é um número`);
}

function booleano(dado){
    alert(`o dado é um boolean`);
}


detectar(10);
detectar('texto');
detectar(true);