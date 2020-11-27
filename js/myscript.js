// Obiettivi dell'esercizio:
// Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà;
// Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome;
// Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

// PRIMO ESERCIZIO
// CREO OGGETTO
console.log("PRIMO ESERCIZIO");
var studente = {
  nome: "emilio",
  cognome: "furnari",
  eta: 33,
}
// UTILIZZO UN CICLO FOR PER STAMPARE TUTTO IL CONTENUTO DELL'OGGETTO
for (var i in studente) {
  console.log(studente[i]);
}

console.log("SECONDO ESERCIZIO");
// CREO ARRAY DI OGGETTI
var studenti =[
  {
    nome: "emilio",
    cognome: "furnari",
    eta: 33,
  },
  {
    nome: "pippo",
    cognome: "rossi",
    eta: 33,
  },
  {
    nome: "topolino",
    cognome: "bianchi",
    eta: 85,
  },
  {
    nome: "paperino",
    cognome: "duck",
    eta: 80,
  },
  {
    nome: "pietro",
    cognome: "gambadilegno",
    eta: 80,
  },
];
// CERCO NELL'ARRAY

for (var i in studenti) {
 console.log(studenti[i].nome + " " + studenti[i].cognome);
}

var nome = prompt("Scrivi il tuo nome?");
var cognome = prompt("qual'è il tuo cognome?");
var eta = parseInt(prompt("quanti anni hai?"));


studenti.push(nome);
studenti.push(cognome);
studenti.push(eta);

console.log(studenti);
