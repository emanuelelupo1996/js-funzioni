/*Scrivi una funzione calcolaEta che effettua la sottrazione tra l'anno attuale e l'anno di nascita.
Poi, fuori la funzione, salva il risultato in una variabile e stampalo in console. */

const anno = 2026;
const annoDiNascita = 1996

function calcolaEta() {
    return anno - annoDiNascita;
}

const eta = calcolaEta();
console.log(eta);

