/*Escreva uma função que valide se uma matriz 9x9 
representa uma solução válida de Sudoku. 
Uma solução de Sudoku é considerada válida se cada linha, coluna e 
subgrade 3x3 contém todos os números de 1 a 9 sem repetição.

*/

function verificarSudoku(matriz){
    let obj = {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0,
        7: 0,
        8: 0,
        9: 0
    }

    for(let i = 1; i<=9; i++){
        matriz.forEach(l => {
            if(l.includes(i)){
                obj[i]++
            }
        });
    }

    let valido = true;
    for (let i = 1; i <= 9; i++) {
        if (obj[i] !== 9) {
            valido = false;
            break;
        }
    }

    if (valido) {
        console.log('Válido');
    } else {
        console.log('Inválido');
    }

    console.log(obj)


}

const sudoku = [
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]
];

verificarSudoku(sudoku);

