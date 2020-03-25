// 1 - Richiesta nome
var name = prompt('Qual è il tuo nome di battesimo?');
console.log(name);

// 2 - Richiesta cognome
var surname = prompt('Qual è il tuo cognome?');
console.log(surname);

// 3 - Richiesta colore preferito
var color = prompt('Qual è il tuo colore preferito?');
console.log(color);

// 4 - Generare password
document.getElementById('your-pw-is').innerHTML = 'La tua password: ';
document.getElementById('password').innerHTML =  name + surname + color + '20';


// 5 - Copy to clipboard
document.getElementById('copy-clipboard').innerHTML = 'Copia negli appunti!';
