// RECAP DI IERI
// strutture dati complesse: gli OGGETTI

// invece che memorizzare un frammento di informazione alla volta in una variabile
// (un numero, una parola etc.) è possibile utilizzare delle STRUTTURE DATI
// per memorizzare PIÙ informazioni in un colpo solo! una di queste si chiama OGGETTO

// un oggetto è una struttura dati che memorizza le informazioni sotto forma di
// PROPRIETÀ; una proprietà è una COPPIA chiave:valore

const house = {
  floors: 2,
  color: 'red',
  hasElevator: false,
  'steep-stairs': true,
}

// per leggere/scrivere proprietà in un oggetto ci sono 2 tecniche:
// a) DOT NOTATION -> house.floors // 2
// b) SQUARE BRACKETS NOTATION -> house["color"] // "red"
// si usa quando non si vuole utilizzare letteralmente il nome di una variabile
// per ricercare una proprietà in un oggetto ma quando si vuole utilizzare
// il VALORE di tale variabile come proprietà di un oggetto
const property = 'color'
house['steep-stairs']

// house.property // undefined
// house["color"] // 'red'

delete house.floors // ho eliminato la proprietà "floors" da house

// ARRAY
// un array (detto anche lista) è una struttura dati in grado di memorizzare
// una SERIE DI VALORI (privi di "etichette")
const pets = ['gatto', 'cane', 'cincillà', 'criceto', 'coccodrillo']
// sono identificabili SOLO grazie alla loro posizione
// la prima posizione è indicata con il numero 0
// per recuperare un elemento si fa nomearray[posizione]
pets[0] // 'gatto'
pets[1] // cane
// etc. etc.
// ogni array è dotato di LUNGHEZZA (length), ovvero un numero pari alla quantità
// di elementi che contiene
pets.length // 5
// il primo elemento di un array ha sempre posizione 0
// l'ultimo elemento di un array ha sempre posizione length - 1
// anche gli array si definiscono con CONST perchè ciò non preclude nessun tipo
// di manipolazione della struttura dati
// esistono metodi per aggiungere, eliminare, modificare etc.

// LOGICA CONDIZIONALE
// abbiamo visto come sia possibile CONDIZIONARE l'esecuzione di un determinato
// blocco di istruzioni sulla base di una CONDIZIONE
// se... -> if

const myAge = 55

if (myAge > 50) {
  // solo se la condizione è VERA io eseguirò questo blocco di codice
  console.log('buongiornissimo kaffééééé')
} else {
  // solo se la condizione è FALSA io eseguirò questo blocco di codice
  // la myAge è uguale o inferiore a 50
  console.log('buongiorno')
}

// immaginate di voler controllare un nome: se vi chiamate Alessandro venite
// salutati in un modo, se vi chiamate Stefano in un altro o se vi chiamate
// in qualsiasi altro modo in un altro ancora

const myName = 'Giuseppe'

if (myName === 'Alessandro') {
  console.log('Buongiorno Alessandro')
} else if (myName === 'Stefano') {
  console.log('Buongiorno Stefano')
} else {
  console.log('Buongiorno sconosciuto')
}

if (myAge < 15) {
  console.log('Ciao Fra')
} else if (myAge < 30) {
  console.log('Buongiorno')
} else if (myAge < 50) {
  console.log('Ciao')
} else {
  console.log('buongiornissimo kaffééééé')
}

// ALTERNATIVA ALL'IF-ELSEIF
// COSTRUTTO SWITCH
// uno SWITCH è un modo più elegante di comparare un valore su determinate
// possibilità

const anotherName = 'Giangiorgio'

// se ti chiami Alessio
console.log('Che bel nome Alessio, benvenuto!')

// se ti chiami Giorgio
console.log('Insomma, potevi fare di meglio Giorgio!')

// se ti chiami Stefano
console.log('Ma quando vai a cambiarti il nome, Stefano?')

// se ti chiami Alessia
console.log('Ancora più bello, Alessia!')

// generico
console.log('Non sono in grado di analizzare il tuo nome!')

switch (anotherName) {
  case 'Alessio':
    console.log('Che bel nome Alessio, benvenuto!')
    break
  case 'Giorgio':
    console.log('Insomma, potevi fare di meglio Giorgio!')
    break
  case 'Stefano':
    console.log('Ma quando vai a cambiarti il nome, Stefano?')
    break
  case 'Alessia':
    console.log('Ancora più bello, Alessia!')
    break
  default:
    console.log('Non sono in grado di analizzare il tuo nome!')
}

// la parola "break" alla fine di ogni caso FINISCE l'esecuzione dello switch

// uno SWITCH spesso si definisce un "sugar coating" sugli if/elseif

// TRUTHY / FALSY

if ('') {
  console.log('Messaggio spedito!')
}

// in JS TUTTO è un valore "truthy" (tendente al true) a parte:

// - null
// - undefined
// - ''
// - 0
// - -0
// - NaN
