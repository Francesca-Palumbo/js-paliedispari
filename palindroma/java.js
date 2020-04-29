// scrivere una funzione per capire se una parola è palindroma. Quindi chiedere una parola all'utente, utilizzare la funzione per sapere se la parola inserita è palindroma e stampare un messaggio appropriato


// chiedo all'utente una parola
var parola_richiesta = prompt ( "inserisca una parola: ");

// voglio isolare ogni lettera della parola inserita dall'utente
var singole_lettere = parola_richiesta.split("");

// creo un array dove inserirò le lettere messe al contrario
var lettere_inverse =[];
// una volta che ho isolato le singole lettere della parola inseirta dall'utente creo un ciclo for che parte dall'ultima lettera dell 
for (var i = singole_lettere.length-1; i >= 0; i--) {
    console.log(singole_lettere[i]);
    lettere_inverse.push(singole_lettere[i]);
}


var parola_inversa = lettere_inverse.join("");
console.log(parola_inversa);

if (parola_inversa==parola_richiesta) {
    console.log("la parola inserita dall'utente è palindroma");
} else {
    console.log("la parola inserita dall'utente non è palindroma");
}
