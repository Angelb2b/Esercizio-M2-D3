/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// let num1 = 12;
// let num2 = 20;

// if (num1 < num2) 

// console.log(num2 + " numero maggiore");

// else console.log (num1 + " è il numero maggiore");

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// let num = 6;

// if (num !== 5) console.log(num + " not equal");

// else console.log ("equal");

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisible by 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// let num = 21;

// if (num % 5 === 0) console.log ("divisible by 5");

// else console.log("not divisible by 5");


/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// let num1 = 81;
// let num2 = 8;

// if (num1 === 8 || num2 === 8 || num1+num2 ===8 || num1-num2===8 || num2-num1===8 ) console.log("una delle due condizioni è vera");

// else console.log ("nessuna condizione è vera");

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// let totalShoppingCart = 50;
// let ship = 10;
// let totale;

// if (totalShoppingCart <= 50){
// totale = totalShoppingCart+ship;
// }
// else {
//   totale = totalShoppingCart;
// }
// console.log (totale);

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// let totalShoppingCart = 51;
// let ship = 10;
// let totale;
// let discount = 0.8

// if (totalShoppingCart <= 50){
// totale = (totalShoppingCart*discount)+ship;
// }
// else {
// totale = totalShoppingCart*discount;
// }
// console.log (totale);

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// let num1 = 200;
// let num2 = 9;
// let num3 = 7000;
// let med, min, max;

// if (num1 > num2 && num1 > num3) {
//   max = num1;
//   if (num2 > num3) {
//     med = num2;
//     min = num3;
//   }
//   else {
//     med = num3;
//     min = num2;
//   }
// } 
// else if (num2 > num1 && num2 > num3){
//   max = num2;
//   if (num1 > num3){
//     med = num1;
//     min = num3;
//   }
//   else {
//     med = num3;
//     min = num1;
//   }
// }
// else {
//   max = num3
//   if (num2 > num1){
//     med = num2;
//     min = num1;
//   }
//   else {
//     med = num1;
//     min = num2;
//   }
// }

// console.log (max, med, min)

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un numero fornito sia un intero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// let num1 = 40;
// let num2 = 50.5;
// let num3 = "ciao";

// console.log(typeof num1)
// console.log(typeof num3)


/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// let num = 4;

// if (num % 2 == 0) {
//   console.log("Pari");
// } else {
//   console.log("Dispari");
// }

// ESERCIZIO 10
// Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.

// let val = 7;
// if (val < 5) {
//    console.log("Meno di 10");
//  } else if (val < 10) {
//    console.log("Meno di 5");
//  } else {
//    console.log("Uguale a 10 o maggiore");
//  }

/* SCRIVI QUI LA TUA RISPOSTA */

// let val = 7;
// if (val < 5) {
//   console.log("Meno di 10");
// } else if (val < 10) {
//   console.log("Meno di 5");
// } else {
//   console.log("Uguale a 10 o maggiore");
// }

/*
ESERCIZIO 11
  Crea un blocco condizionale if/else annidato su più livelli per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// let num = 16;

// if (num < 5) {
//   console.log("Tiny"); //output: num = tra 0.1 e 4.9
// } else if (num < 10) {
//   console.log("Small"); //output: num = tra 5 e 9.9
// } else if (num < 15) {
//   console.log("Medium"); //output: num = tra 10 e 14.9
// } else if (num < 20) {
//   console.log("Large"); //output: num = tra 15 e 19.9
// } else if (num >= 20) {
//   console.log("Huge"); //output: num = 20 o +
// }

/*  ESERCIZIO 12
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile chiamata isMale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// let isMale;
// let gender = "female";

// if (gender === "male") {
//   isMale = true;
// } else {
//   isMale = false;
// }
// console.log(isMale);

/* ESERCIZIO 13
  Mostra i numeri da 0 a 5 (incluso) in ordine ascendente utilizzando un ciclo while.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// let n = 0, x = 5;
// while (n < 6) {
//   console.log(n);
//   n++;
// }

/* ESERCIZIO 14
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente utilizzando un ciclo for.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// for (let step = 1; step <= 10; step++) {
//   console.log(step);
// }

/* ESERCIZIO 15
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// for (let i = 0; i <= 10; i++) {
//   if (i === 3, i=== 8) {
//     continue;
//   }
//   console.log(i);
// }

/* ESERCIZIO 16
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// for (let n = 0; n < 16; n++) {
//      console.log (n);
//      if (n % 2 === 0) {
//        console.log ('pari');
//      } else {
//        console.log ('dispari');
//      }
//   }

/* ESERCIZIO 17
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3, stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let n = 0

for (let n = 0; n < 100; n++) {
  if (n % 15 == 0) {
    console.log("FizzBuzz");
  }
  else if (n % 3 == 0) {
    console.log("Fizz");
  }
  else if (n % 5 == 0){
    console.log("Buzz");
  }
  else {
    console.log(n);
  }
}

/* ESERCIZIO 18
  Scrivi un algoritmo per controllare il giorno della settimana. Usa uno switch-case sulla variabile "day", che può avere un valore da 1 a 7.
  Ad esempio, se il valore di "day" è 1, stampa in console "Lunedì"; se il valore fosse 3, in console dovrebbe comparire "Mercoledì".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// let day = 2

// switch (day) {
//   case 1:
//     // console.log("lunedì");
//     // break;
//   case 2:
//     //console.log("martedì");
//     // break;
//   case 3:
//     console.log("mercoledì");
//     // break;
//   case 4:
//     console.log("giovedì");
//     break;
//   case 5:
//     console.log("venerdì");
//     break;
//   case 6:
//     console.log("sabato");
//     // break;
//   case 7:
//     console.log("domenica");
//     // break;
// }
// con il break interrompo altrimenti vado avanti fino a quando non trova il primo break
//console.log("settimana finita")