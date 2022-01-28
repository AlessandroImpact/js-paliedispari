/*Pari e Dispari 
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. 
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). 
Sommiamo i due numeri 
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) 
Dichiariamo chi ha vinto.*/

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

alert(' la somma è : ' + solution);


    


















