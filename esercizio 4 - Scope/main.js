/*Scrivi una funzione convertiInEuro che riceve un importo in dollari e un tasso di cambio e restituisce l'equivalente in euro. 
Usa solo parametri, senza leggere variabili esterne. Invocala e salva il risultato. */

function convertiInEuro(dollari, tasso) {
    return dollari / tasso;
}

const euro = convertiInEuro(100, 1.10);

console.log(`Il cambio tra i dollari e gli euro, equivale a ${euro} euro`);

