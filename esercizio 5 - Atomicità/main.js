/*Riscrivi questa funzione separandola in due funzioni atomiche: 
una che calcola la media e una che verifica se è sufficiente (≥ 6).

function valutaStudente(voto1, voto2, voto3) {
    const media = (voto1 + voto2 + voto3) / 3;
    if (media >= 6) {
        return 'Promosso con media ' + media;
    } else {
        return 'Bocciato con media ' + media;
    }
}


*/


function media(voto1, voto2, voto3) {
    return (voto1 + voto2 + voto3) / 3;
}
const mediaVoti = media(2, 5, 5);

function sufficienza() {
    if (mediaVoti >= 6) {
        return `Promosso con la media  ${mediaVoti} `;
    }
    else {
        return `Bocciato con la media ${mediaVoti}`;
    }
}



console.log(sufficienza(mediaVoti));