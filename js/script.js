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
    currentStudent += '<li>' + student[key] + '</li>';
}

studentDisplay.innerHTML = currentStudent;






/* ES 2
Creare un array di oggetti di studenti.
Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere
un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età. */

var objectDisplay = document.getElementById('object-student');
var buttonDisplay = document.getElementById('add');
var currentElement = '';

var studentClass = [
    {
        name: 'Giuseppe',
        surname: 'Pisani',
        age: 28,
    },
    {
        name: 'Vincenzo',
        surname: 'Caramia',
        age: 28,
    },
    {
        name: 'Ercole',
        surname: 'Barletta',
        age: 26,
    },
    {
        name: 'Lorenzo',
        surname: 'Mascolo',
        age: 27,
    }
]

for (var i = 0; i < studentClass.length; i++) {
    currentElement += '<li>' + studentClass[i].name + ' ' + studentClass[i].surname + '</li>';
}
objectDisplay.innerHTML = currentElement;


buttonDisplay.addEventListener('click', function () {
    var anotherDisplay = document.getElementById('another-student');
    do {
        var nameStudent = prompt('Inserisci il nome dello studente');
        var surnameStudent = prompt('Inserisci il cognome dello studente');
        var ageStudent = parseInt(prompt('Inserisci l\'età dello studente'));
    } while (!nameStudent || !surnameStudent || !ageStudent);

    var newObject = {
        name: nameStudent,
        surname: surnameStudent,
        age: ageStudent,
    }

    studentClass.push(newObject);
    var appearObject = newObject.name + ' ' + newObject.surname;
    var newElement = anotherDisplay.createElement('li');
    newElement.appendChild(appearObject);

    /* var node = document.createElement("li");
    var textnode = document.createTextNode(appearObject);
    node.appendChild(textnode);
    anotherDisplay.appendChild(node);
    */
    console.log(studentClass);
})