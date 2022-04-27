// Chiedi all’utente il suo nome
const nomeUtente = prompt("Ciao, inserisci il tuo nome");

// poi chiedi il suo cognome
const cognomeUtente = prompt("ora inserisci il tuo cognome");

// poi chiedi il suo colore preferito
const coloreUtente = prompt("infine inserisci il tuo colore preferito");

// Infine scrivi sulla pagina nomecognomecolorepreferito21
const password = "Ciao la tua Password è";
document.getElementById("title").innerHTML = password + " " + nomeUtente + cognomeUtente + coloreUtente + 21
