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

var numeriPc = [], numeroUtente = [], numeroUtenteProv = 0;

function getRandomNumber(quantitàNumeriInser, numeroMassimoRaggiungibile) {
  var i = 1, numeriFunzione = [], numeroPcProv = 0;
  while (i <= quantitàNumeriInser) {
    numeroPcProv = Math.ceil( Math.random() * numeroMassimoRaggiungibile );
    if (numeriFunzione.indexOf(numeroPcProv) === -1) {
      numeriFunzione.push(numeroPcProv);
      i++;
    }
  }
  return numeriFunzione;
}

numeriPc = getRandomNumber(16, 100);
console.log(numeriPc);

var i = 0;
var possibilità = 100 - 16, numeroMinimo = 1, numeroMassimo = 100;
while (i < possibilità) {
  numeroUtenteProv = Number(prompt("Inserisci un numero tra 1 a 100"));
  if (numeroUtenteProv > numeroMassimo || numeroUtenteProv < numeroMinimo) {
    console.log("Inserisci un numero valido");
  } else if (numeroUtente.indexOf(numeroUtenteProv) !== -1) {
    console.log("Inserisci un numero che non hai già inserito");
  } else {
    if (numeriPc.indexOf(numeroUtenteProv) !== -1) {
      console.log("💣💥");
      break;
    } else {
      numeroUtente.push(numeroUtenteProv);
      console.log(numeroUtente);
      i++;
    }
  }
}

if (i === possibilità) {
  console.log("Hai vinto");
}
console.log("Il tuo punteggio è " + i);
