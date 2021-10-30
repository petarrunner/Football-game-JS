'use strict';
const imeDomacin = document.querySelector('#teamsHome');
const imeGost = document.querySelector('#teamsAway');

// Semafor
export let minutVreme = 0;
export let poljeVreme = document.querySelector('#t-b');
export let poljeApostrof = document.querySelector('#t-j');
let poljeRezD = document.querySelector('#t-d');
let poljeRezG = document.querySelector('#t-f');

// Players
let playerScored = '';
let actionPlayerOne = '';
let actionPlayerTwo = '';

// Fields
const polje1 = document.querySelector('#t-g');
const poljeGoal = document.querySelector('#t-h');
const polje2 = document.querySelector('#t-i');

// INDEX KLUBOVI
let indexHome = 0;
let indexAway = 0;
let index = 0;
let indexGk;
let index2;
let p;
let p1;
let r;
let r1;

let kockica;
let kockica2;
// Rest
let listBookings = [];
let listPlayersOut = [];
let text;
let text2;
let rez1;
let rez2;
let rezultat;
let karton = 0;
/////// B I R A NJ E    K L U B O V A ///////
/* for (let tim = 1; tim < teamsList.length; tim++) {
    let izaberiTimD = document.createElement('option');
    imeDomacin.appendChild(izaberiTimD).innerText = teamsList[tim - 1].clubName;

    let izaberiTimG = document.createElement('option');
    imeGost.appendChild(izaberiTimG).innerText = teamsList[tim - 1].clubName;
}
let rndNum1 = Math.floor(Math.random() * 4 + 1);
let rndNum2 = Math.floor(Math.random() * 4 + 1);
while (rndNum1 == rndNum2) {
    rndNum2 = Math.floor(Math.random() * 4 + 1);
}
imeDomacin.getElementsByTagName('option')[rndNum1].selected = 'selected';
imeGost.getElementsByTagName('option')[rndNum2].selected = 'selected'; */
