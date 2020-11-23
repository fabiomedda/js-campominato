/*
Descrizione
Il computer deve generare 16 numeri casuali tra 1 e 100.
I numeri non possono essere duplicati
In seguito deve chiedere all’utente (100 - 16)
volte di inserire un numero alla volta, sempre compreso
tra 1 e 100.
L’utente non può inserire più volte lo stesso numero.
Se il numero è presente nella lista dei numeri generati,
la partita termina, altrimenti si continua chiedendo all’utente
un altro numero.
La partita termina quando il giocatore inserisce un numero “vietato”
o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio,
cioè il numero di volte che l’utente ha inserito un numero consentito.
BONUS: (da fare solo se funziona tutto il resto)
all’inizio il software richiede anche una difficoltà all’utente che cambia il range
di numeri casuali:
con difficoltà 0 => tra 1 e 100
con difficoltà 1 =>  tra 1 e 80
con difficoltà 2 => tra 1 e 50
*/

var numeriPc = [];
var numeroPcProv = 0;
var numeroUtente = [];
var numeroUtenteProv = 0;


var i = 1;

while (i < 17) {
  numeroPcProv = Math.ceil( Math.random() * 100 );

  for (var y = 0; y < i; y++) {

    if (numeriPc.indexOf(numeroPcProv) === -1) {
      numeriPc.push(numeroPcProv);
      i++;
    }

  }

}

console.log(numeriPc);

i = 0;
while (i < 86) {

  numeroUtenteProv = Number(prompt("Inserisci numero"));

  if (numeroUtente.indexOf(numeroUtenteProv) !== -1) {
    console.log("Inserisci un numero che non hai già inserito");
  } else {
    if (numeriPc.indexOf(numeroUtenteProv) !== -1) {
      console.log("Hai perso");
      break;
    } else {
      numeroUtente.push(numeroUtenteProv);
      console.log(numeroUtente);
      i++;
    }
  }

}

if (i === 86) {
  console.log("Hai vinto");
}
console.log("Il tuo punteggio è " + i);
