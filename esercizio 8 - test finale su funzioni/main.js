/*
Crea una pagina con tre pulsanti: uno per calcolare l'area di un rettangolo (base 12, altezza 7), 
uno per tirare un dado da 6 facce, 
uno per calcolare il prezzo con IVA al 22% di 85 euro. 
Per ogni pulsante scrivi due funzioni: una atomica che fa solo il calcolo e una che la usa e mostra il risultato con alert.
 Collega le funzioni ai pulsanti tramite attributo onclick.

 */

//area rettangolo

let base = 55;
let altezza = 7;

function areaRettangolo(base, altezza) {    //Funzione atomica
    return base * altezza
}

function calcoloArea() {
    const area = areaRettangolo(base, altezza);
    alert(`l'area del rettangolo è ${area}`);  //Funzione che usa allert per stampare in console il risultato
}


//dado con 6 facce

function tiraDado() {                     //Funzione atomica
    return Math.floor(Math.random() * 6) + 1
}

function dado() {                       //Funzione che usa allert per stampare in console il risultato
    const numeroEstratto = tiraDado();
    alert(`il numero estratto dal dado è ${numeroEstratto}`);
}


//prezzo con IVA

let prezzo = 85;
const iva = 22;

function prezzoIva(prezzo, iva) {               //Funzione atomica
    return prezzo + (prezzo * iva / 100);
}

function calcoloIva() {                       //Funzione che usa allert per stampare in console il risultato
    const prezzoIvato = prezzoIva(prezzo, iva);
    alert(`il prezzo compreso di IVA e di ${prezzoIvato}€`);
}
