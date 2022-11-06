let arrayCasual = [];
let casuali = document.getElementById("numCasual");
let arrayPlayer = [];

for( let i = 0; i < 5; i++){
  let numPc = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
  if( arrayCasual.includes(numPc)){
      i--;
  }else{
      arrayCasual.push(numPc);
  }
}

console.log(arrayCasual);

casuali.append(`I numeri da ricordare sono: ${arrayCasual}`);

setTimeout(nascondino, 3000);
function nascondino(){
  casuali.classList.add("d-none");
}

setTimeout(numsUtente, 4000);
function numsUtente(){
  for (let k = 0; k < 5; k++){
    let numPlayer = parseInt(prompt("Inserisci un numero"));
    arrayPlayer.push(numPlayer);
  }
  console.log(arrayPlayer);
}
