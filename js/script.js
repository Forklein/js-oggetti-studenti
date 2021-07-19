console.log('Ciao Peppe!');

/* ES 1
Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
Stampare a schermo (in pagina) attraverso un ciclo for-in tutte le proprietà dell'oggetto. */

var studentDisplay = document.getElementById('list-student');
var currentStudent = '';

var student = {
    name: 'Giuseppe',
    surname: 'Pisani',
    age: 28,
}

for (var key in student) {
    console.log(student[key]);
    currentStudent += '<li>' + student[key] + '</li>';
}

studentDisplay.innerHTML = currentStudent;






/* ES 2
Creare un array di oggetti di studenti.
Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere
un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età. */