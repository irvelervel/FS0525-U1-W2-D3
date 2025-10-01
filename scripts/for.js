// a)
// CICLO FOR
// un CICLO FOR è una struttura che serve a ripetere un blocco di istruzioni
// un numero assolutamente PREFISSATO di volte

// un ciclo for viene utilizzato per ripetere 1, 10, 100000 volte determinate
// righe di codice

// for(iniz. variabile; condizione; increm. automatico variabile) { codice da ripetere }
for (let i = 0; i < 10; i++) {
  console.log('SONO NEL CICLO FOR', i)
  // qui avviene l'incremento automatico +1 della i
}

console.log('FINITO IL CICLO FOR')

// ottimo! ma come mai ci hai detto che il ciclo for sarà quello che utilizzeremo
// il 95% delle volte, Stefano?
// i cicli FOR sono PERFETTI per ESPLORARE GLI ARRAY.

// creiamo un array
const arrayOfNames = [
  'Elisa', // 0
  'Gabriele', // 1
  'Nader', // 2
  'Niccolò', // 3
  'Raul', // 4
  'Salvatore', // 5
  'Stefano', // 6
  'Tanjin', // 7
  'Vincenzo', // 8
  'Vittorio', // 9
  'Rossella', // 10
]

// la lunghezza di arrayOfNames si calcolerebbe con arrayOfNames.length // 11

for (let i = 0; i < arrayOfNames.length; i++) {
  console.log(
    'il valore della i ora è',
    i,
    ", mentre l'elemento corrispondente dell'array è",
    arrayOfNames[i]
  )
}

for (let i = 0; i < arrayOfNames.length; i++) {
  console.log(
    'il valore della i ora è',
    i,
    ", mentre l'elemento corrispondente dell'array è",
    arrayOfNames[i]
  )
}
