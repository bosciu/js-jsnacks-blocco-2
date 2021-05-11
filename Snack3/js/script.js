/* Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b). 
La funzione restituirà un nuovo array con i valori che hanno la posizione compresa tra i due numeri. */
var arrayProva = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function Prova(array, num1, num2) {
    var nuovoArray = [];
    for (i = num1 + 1; i < num2; i++) {
        nuovoArray.push(array[i]);
    }
    return nuovoArray;
};

console.log(Prova(arrayProva, 2, 5));