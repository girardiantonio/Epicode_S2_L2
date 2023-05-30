/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

const a = 20;
const b = 40;
if (a > b) {
  console.log("20 è maggiore di 40");
} else console.log("40 è maggiore di 20");

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

const c = 24;
if (c !== 5) {
  console.log("Not equal");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

const d = 175;
if (d % 5 === 0) {
  console.log("Divisibile per 5");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

const e = 45;
const f = 37;
if (e === 8 || f === 8) {
  console.log("Uno dei due numeri è uguale a 8");
} else if (f + e === 8 || e + f === 8) {
  console.log("L'addizzione è uguale a 8");
} else f - e === 8 || e - f === 8; {
  console.log("La sottrazione è uguale a 8");
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

let totalShoppingCart = 43;
if (totalShoppingCart > 50) {
  console.log("La spedizione è gratuita, totale da pagare", totalShoppingCart);
} else
  console.log(
    "La spedizione ha un costo fisso di 10, totale da pagare",
    totalShoppingCart + 10
  );

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

let blackFriday = totalShoppingCart - (totalShoppingCart * 20/100);
if (blackFriday > 50) {
  console.log("La spedizione è gratuita, totale da pagare", blackFriday);
} else {
  console.log("La spedizione ha un costo fisso di 10, totale da pagare", blackFriday + 10);
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

let var1 = 20
let var2 = 45
let var3 = 59


/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

let num = 23
console.log(typeof num)

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

let pardis = 23
if (pardis %2 == 0) {
  console.log("Il numero è pari")
} else {
  console.log("Il numero è dispari")
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};
me.city="Toronto"
console.log("John",me, me.skills)

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName
console.log("John",me, me.skills)

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

delete me.skills.pop(2)
console.log("John",me, me.skills)

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

let numbers = []
numbers.push (1)
numbers.push (2)
numbers.push (3)
numbers.push (4)
numbers.push (5)
numbers.push (6)
numbers.push (7)
numbers.push (8)
numbers.push (9)
numbers.push (10)
console.log(numbers)

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

numbers.splice[numbers, 10, 100]
console.log(numbers)
