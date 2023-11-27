/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

console.log('Per quanto abbiamo visto fin ora, i principali datatype in Javascript sono detti "primitivi", e ci sono 5 tipi di datatype compresi in questa sezione: le stringhe, ovvero una serie di caratteri delimitati da apici o virgolette. I numeri, considerati come dei caratteri numerici per l assenza delle virgolette o degli apici. I valori booleani, che possono essere o "true" o "false", e sono sempre scritti senza virgolette o apici. Il cosiddetto "null", dove il contenuto di questo tipo è nullo, ovvero indica l assenza di valore. Per ultimo abbiamo "undefined", una variabile a cui non è stato assegnato un valore che si differnzia dal "null"')

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let myName = "Filippo"
console.log("valore di myName", myName)

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
let number1 = 12
let number2 = 20
let sum = number1 + number2
console.log("valore di sum", sum)

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12
console.log("valore di x", x)

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

myName = "Borelli"
// const myNamee = "Filippo"
// myNamee = "Borelli"
// console.log("valore di myNamee", myNamee)
// come possiamo vedere non si può assegnare un valore diverso ad una const

/* ESERCIZIO 64.
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

console.log("sottrazione tra 4 e x", 4 - x)

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1 = "john"
let name2 = "John"
console.log(name1 !== name2)

