/*Pari e Dispari 
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. 
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). 
Sommiamo i due numeri 
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) 
Dichiariamo chi ha vinto.

//FUNZIONI

//funzione per verificare se la somma dei numeri inseriti dai gg è pari o disp
function winner(x,y) {
    
    let ris;

    let somma = x+y;

    if(somma % 2 == 0) {
        ris = 'pari'; 
    }else {
        ris = 'dispari';
    }

    return ris;

}

// Creo funzione per generare numero random tra 1 e 5 per il Pc

function randomPcNumber() {
    
    return Math.floor(Math.random() * 5 + 1 );

}








//richiesta pari o dispari all'utente
let scelta = prompt('scegli pari o dispari,scommettiamo che ti batto?');

//richiesta numero utente

let userNum = parseInt(prompt('scegli un numero da 1 a 5'));

//generazione numero casuale del pc

let pcNum = randomPcNumber();

//funzione per decidere il vincitore

let solution = winner(userNum, pcNum);

//stampa a video della soluzione

alert(' ha vinto chi ha scelto ' + solution);

*/







//SOLUZIONE ALTERNATIVA


function getRandomNumber(min, max) {

    return Math.floor(Math.random() * (max - min +1)) + min;

}


function checkPariDispari (numero) {

let ritorno;

if(numero%2==0){
    ritorno = 'PARI';
}else {
    ritorno= 'DISPARI';
}

return ritorno;

}



let pariDispari = prompt('Scegli pari o dispari').toUpperCase();

if (pariDispari == 'PARI' || pariDispari == 'DISPARI') {

    let numeroUtente = parseInt(prompt('Inserisci un numero tra 1 e 5'));

    if(numeroUtente >= 1 && numeroUtente<=5 || !isNaN(numeroUtente)){

        let numeroComputer = getRandomNumber(1,5);
        let somma = numeroComputer + numeroUtente;
        let verificaSomma = checkPariDispari(somma);

        if(verificaSomma == pariDispari){
            alert('HAI VINTO');
        }else {
            alert('I COMPUTER VINCONO ANCORA');
        }


    }else {
        alert('Hai inserito un valore non valido');
    }
}else {
    alert('hai inserito un valore non valido');
}





    


















