// scrivere una funzione per capire se una parola è palindroma. Quindi chiedere una parola all'utente, utilizzare la funzione per sapere se la parola inserita è palindroma e stampare un messaggio appropriato

// chiedo una parola all'utente


// function is_palindromo ( parola_richiesta){
    var parola_richiesta = prompt ( "inserisca una parola: ");
    var singole_lettere = parola_richiesta.split("");
        // creo un array con la parola inserita dall'utente
        console.log(singole_lettere);

        for (var i = 0; i=0 = i++; i++) {
        }if (singole_lettere.charAt(0)=singole_lettere.charAt(singole_lettere.length-1)) {
                console.log("la parola è palindroma");
            } else{
                console.log("la parola non è palindroma");
        }
    // }
