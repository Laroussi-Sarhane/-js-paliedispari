//scelta dello User
const sceltaUser = prompt('scegli pari o dispari');

const numeroUser = parseInt(prompt('inserisci un numero da 1 a 5'));

const numeroPc = numeroRandom ;

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



function numeroRandom(numero){

   let giocata = Math.floor(Math.random(1) * 5) + 1;

  return giocata;
}

function pariOdispari(numero){

  return numero % 2 === 0;

}

titolo.innerHTML += `Il giocatore ha giocato ${sceltaUser} con numero : ${numeroUser} <br>
Il pc ha giocato : ${numeroRandom}  <br>
Il risultato e : ${somma}
${messaggio}
`
