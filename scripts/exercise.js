const agg = [
  {
    personaggio: 'Pdor', // agg[0].personaggio
    attore: 'Giovanni',
    anno: 1997,
    comparsa: 'Tel chi el telùn',
    citazione: 'Io sono Pdor, figlio di Kmer, della tribù di Istar!',
    caratteristiche: ['epico', 'serio', 'grottesco', 'immaginario'],
  },
  {
    personaggio: 'Dottor Pivetta', // agg[1].personaggio
    attore: 'Giacomo',
    anno: 1999,
    comparsa: 'Così è la vita',
    citazione: 'Guanti? 10 professore.',
    caratteristiche: ['psichiatra', 'freddo', 'ironico', 'inquietante'],
  },
  {
    personaggio: 'Nico', // agg[2].personaggio
    attore: 'Giovanni',
    anno: 1997,
    comparsa: 'Mai dire gol',
    citazione: "Mi suono l'adagio di Albinoni!",
    caratteristiche: ['rustici', 'esagerati', 'aggressivi', 'stereotipati'],
  },
  {
    personaggio: 'I bulgari',
    attore: 'Aldo, Giovanni e Giacomo',
    anno: 1999,
    comparsa: 'Tel chi el telùn!',
    citazione: '',
    caratteristiche: ['slavi', 'esilaranti', 'atleti', 'macchiette'],
  },
  {
    personaggio: 'Johnny Glamour',
    attore: 'Giovanni',
    anno: 1996,
    comparsa: 'I corti',
    citazione: 'Fa fa fa fa fa, Johnny Glamour!',
    caratteristiche: ['vanitoso', 'stravagante', 'grottesco', 'dj'],
  },
  {
    personaggio: 'Flanagan',
    attore: 'Giacomo',
    anno: 1996,
    comparsa: 'Mai dire gol',
    citazione: 'The pen is on the table!',
    caratteristiche: ['professore', 'inglese', 'sarcastico', 'ironico'],
  },
  {
    personaggio: 'Rolando',
    attore: 'Aldo',
    anno: 1999,
    comparsa: 'Mai dire gol',
    citazione: 'Miiii, non ci posso credereeee!',
    caratteristiche: ['entusiasta', 'ingenuo', 'istrionico'],
  },
  {
    personaggio: 'I chirurghi',
    attore: 'Aldo, Giovanni e Giacomo',
    anno: 1997,
    comparsa: 'Tel chi el telùn',
    citazione: "Doctor, c'ho sotto un cannone!",
    caratteristiche: ['surreali', 'maldestri', 'comici', 'nonsense'],
  },
]

// cerchiamo tramite un ciclo for di estrapolare una lista di TUTTI i nomi
// dei personaggi
// "Pdor Dottor Pivetta Nico I bulgari etc."
let tuttiIPersonaggi = ''

for (let i = 0; i < agg.length; i++) {
  // per 8 volte...
  tuttiIPersonaggi = tuttiIPersonaggi + agg[i].personaggio + ' '
}

console.log('TUTTI I PERSONAGGI', tuttiIPersonaggi)

const just1997 = []
// questo array dovrà riempirsi SOLAMENTE di tutti i personaggi nati nel 1997

for (let i = 0; i < agg.length; i++) {
  // questo array avrà 8 "iterazioni"
  // la i varrà da 0 a 7
  // agg[i] è uno dei personaggi, dal primo all'ultimo
  // devo inserire SOLO QUELLI NATI NEL 1997
  if (agg[i].anno === 1997) {
    just1997.push(agg[i])
  }
}

console.log('1997', just1997)

// nuovo array in cui finiranno SOLO i personaggi interpretati ESCLUSIVAMENTE da Giovanni
const justGiovanni = []

for (let i = 0; i < agg.length; i++) {
  if (agg[i].attore === 'Giovanni') {
    // questa riga si "attiverà" solo per i personaggi giusti!
    justGiovanni.push(agg[i].personaggio)
  }
}

// facciamo un array di solo gli oggetti con indice PARI
const soloPari = []

console.log('justGiovanni', justGiovanni)
for (let i = 0; i < agg.length; i++) {
  if (i % 2 === 0) {
    soloPari.push(agg[i])
  }
}

// FINAL BOSS
// creiamo un array in cui pusheremo solamente l'ULTIMA caratteristica di ogni personaggio
const ultimeCaratteristiche = []

for (let i = 0; i < agg.length; i++) {
  ultimeCaratteristiche.push(
    // prendo per ogni array "caratteristiche" l'ultimo elemento,
    // grazie alla regoletta che l'ultimo elemento di un array ha sempre
    // indice lunghezza-1
    agg[i].caratteristiche[agg[i].caratteristiche.length - 1]
  )
}

console.log('ULTIMECARATTERISTICHE', ultimeCaratteristiche)
