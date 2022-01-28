/*Palidroma 
Chiedere all’utente di inserire una parola 
Creare una funzione per capire se la parola inserita è palindroma */



//chiedo all'utente di inserire una parola
let parola = prompt('inserisci una parola e io ti diro se è palindroma : ');



let parolaInversa = invertiParola(parola);

if(parola == parolaInversa){
    alert('la parola è palindroma');
  } else {
    alert('la parola non è palindroma');
  }
  




  //dichiaro e configuro la funzione per ritornare la parola al contrario
function invertiParola(str){        

    /* creo una variabile strInversa utilizzando prima il metodo split per separare
     ogni lettera con uno spazio.
     Utilizzo poi il metodo reverse per invertire l'ordine delle lettere
     riunisco le lettere tramite il metodo join che riconosce gli elementi separati dallo spazio */

  let strInversa = str.split('').reverse().join(''); 
  
  //ritorno la parola invertita
  return strInversa;
}