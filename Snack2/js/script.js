/* Creare un array di oggetti di squadre di calcio.Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’ unica proprietà da compilare, le altre saranno tutte settate inizialmente a 0.
Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.
Infine creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console. */
function getRandomNumber() {
    return Math.floor(Math.random() * (50 - 1 + 1)) + 1;
}


var squadreDiCalcio = [{
        nome: "Atalanta",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Crotone",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Juventus",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Parma",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Spezia",
        puntiFatti: 0,
        falliSubiti: 0
    }
];

var nuovoArray = [];

for (var i = 0; i < squadreDiCalcio.length; i++) {
    squadreDiCalcio[i].puntiFatti = getRandomNumber();
    squadreDiCalcio[i].falliSubiti = getRandomNumber();
    nuovoArray.push(squadreDiCalcio[i].nome, squadreDiCalcio[i].falliSubiti);
}


console.log(nuovoArray);