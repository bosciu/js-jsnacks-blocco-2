/* Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore. */

var bicicletteDaCorsa = [{
        nome: "Bici da città",
        peso: 15
    },
    {
        nome: "Mountain bike",
        peso: 16
    },
    {
        nome: "Bici da corsa",
        peso: 12
    },
    {
        nome: "Bici da cicloturismo",
        peso: 11
    },
    {
        nome: "Bici ibrida",
        peso: 19
    },

];

var biciLeggera = bicicletteDaCorsa[0];

for (var i = 0; i < bicicletteDaCorsa.length; i++) {
    if (bicicletteDaCorsa[i].peso < biciLeggera.peso) {
        biciLeggera = bicicletteDaCorsa[i];
    }
}
console.log("La bicicletta più leggerà è: ", biciLeggera);