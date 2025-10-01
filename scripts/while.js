// C I C L I
// un ciclo altro non è che la ripetizione in serie di un determinato blocco di istruzioni

// nella programmazione esistono DUE TIPOLOGIE:
// a) i cicli che eseguono delle istruzioni un numero PREDETERMINATO di volte
// b) i cicli che eseguono delle istruzioni un numero NON PREDETERMINATO di volte

// b)
// CICLO WHILE
// un ciclo "while" è una struttura che ripete un blocco di istruzioni fino
// a raggiungere un determinato risultato
// ATTENZIONE -> lo potrebbe ripetere all'infinito

// un ciclo while viene ri-eseguito al termine del blocco fino a che la condizione
// prefissata RIMANE TRUE

// let counter = 5 // alla fine diventa 10

// while (counter < 10) {
//   console.log('DENTRO IL CICLO, VALORE DI COUNTER:', counter)
//   counter = counter + 1 // incrementare la variabile counter di 1
// }

// console.log('CICLO WHILE TERMINATO', counter)

// facciamo un esempio vero...
let anotherCounter = 0
// vogliamo stampare un messaggio una volta che anotherCounter raggiunge il
// valore 10
// però questa volta NON INCREMENTEREMO SEMPRE DELLO STESSO VALORE...
// incrementeremo anotherCounter di un valore compreso tra 0.00001 e 0.99999

while (anotherCounter < 5) {
  console.log('SONO ANCORA NEL CICLO, ANOTHERCOUNTER VALE', anotherCounter)
  anotherCounter = anotherCounter + Math.random()
  // abbiamo questa volta incrementato anotherCounter di un valore "imprevedibile"
}

console.log('CICLO TERMINATO CON', anotherCounter)

// lancio di un dado con Math.random()...
Math.random()
// Math.random() estrae un numero "casuale" tra 0.00000001 e 0.99999999
// in JS esistono anche modi per arrotondare i numeri: Math.floor() e Math.ceil()

Math.random() * 6 // 0.0000001 * 6       0.9999999 * 6

console.log(Math.ceil(Math.random() * 6)) // 1        6
