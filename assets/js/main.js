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

var numeroPc = [];
var numeroPcProv = 0;
var numeroUtente = [];

var i = 1;

while (i < 17) {
  numeroPcProv = Math.ceil( Math.random() * 100 );

  for (var y = 0; y < i; y++) {

    if (numeroPc.indexOf(numeroPcProv) === -1) {
      numeroPc.push(numeroPcProv);
      i++;
    }

  }

}


console.log(numeroPc);

for (var i = 0; i < 5; i++) {
  numeroUtente[i] = Number(prompt("Inserisci numero"));
  console.log(numeroUtente[i]);

  for (var x = 0; x < 16; x++) {

    if (numeroPc[x] === numeroUtente[i]) {
      console.log("Hai perso");
      broke;
    }

  }

}
