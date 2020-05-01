// scrivere una funzione per capire se una parola è palindroma. Quindi chiedere una parola all'utente, utilizzare la funzione per sapere se la parola inserita è palindroma e stampare un messaggio appropriato


// chiedo all'utente una parola
var parola_richiesta = prompt ( "inserisca una parola: ");
console.log("la parola inserita dall'utente è: " + parola_richiesta);

//  isolo ogni lettera della parola inserita dall'utente
var singole_lettere = parola_richiesta.split("");
console.log("le lettere della parola inserita dall'utente sono: " + singole_lettere);

// creo un array dove inserirò le lettere messe al contrario
var lettere_inverse =[];
// creo un ciclo for che parte dall'ultima lettera che trova nello split (cioè della parola inserita e suddivisa in lettere singole)
for (var i = singole_lettere.length-1; i >= 0; i--) {
    console.log( "la singola lettera della parola inserita dall'utente, ma messa al contrario, è: " + singole_lettere[i]);
    // delle singole lettere ciclate al contrario, faccio push nell'array
    lettere_inverse.push(singole_lettere[i]);
}

// ed ora unisco le lettere inverse che trovo l'array perchè voglio formare la parola inverssa rispetto a quella inserita
var parola_inversa = lettere_inverse.join("");
console.log( "La parola letta al contrario è: " + parola_inversa);

if (parola_inversa==parola_richiesta) {
    console.log("la parola inserita dall'utente è palindroma");
} else {
    console.log("la parola inserita dall'utente non è palindroma");
}
