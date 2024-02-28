//scelta dello User
const sceltaUser = prompt('scegli pari o dispari');

const numeroUser = parseInt(prompt('inserisci un numero da 1 a 5'));

const numeroPc = numeroRandom;

const somma = numeroUser + numeroPc;

const risultato = pariOdispari(somma);

const titolo = document.getElementById('output');

let messaggio ;

if(sceltaUser.toLowerCase() === 'pari' ||

sceltaUser.toLowerCase() === 'dispari'){
  
  messaggio = 'vince il giocatore'
 
}else{
  
  messaggio = 'vince il pc'
}



function numeroRandom(){

  return Math.round(Math.random() * 5);

}

function pariOdispari(numero){

  return numero % 2 === 0;

}

// document.getElementById('output').innerHTML = `
// Il giocatore ha giocato ${pariOdispari} con numero ${numeroUser} <br>
// Il pc ha giocato ${numeroPc}  <br>
// ${messaggio}
// `