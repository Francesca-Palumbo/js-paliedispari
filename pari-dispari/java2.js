// gioco pari o dispari contro il pc: chiedere all'utente un numero tra 1 e 5 e generare un numero random tra 1 e 5. Chiedere all'utente se sceglie pari o dispari, quindi fare la somma dei due numeri (giocata utente + giocata pc), quindi valutare se il risultato è pari o dispari e comunicare all'utente se ha vinto o meno

    // chiedere all'utente un numero tra 1 e 5
var numero_scelto = prompt( "inserisci un numero da 1 a 5" );
    console.log("il numero inserito dall'utente è: " + numero_scelto);
    // generare un numero random tra 1 e 5
var pari_vs_dispari = prompt( "scelga tra pari e dispari" );
    console.log("l'utente ha scelto: " + pari_vs_dispari);
var numero_generato = generaRandom( 1 , 5 );
    console.log("il numero generato dal PC è: " + numero_generato);
    // fare la somma dei due numeri (giocata utente + giocata pc)
var somma = numero_scelto+numero_generato;{
    var resto = somma %2;
    if (resto==0) {
        console.log("il numero è pari");
    } else {
        console.log("il numero è dispari");
    }
}
