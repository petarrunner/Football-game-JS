'use strict';
// function akcijaDriblingSend() {}
function akcijaDribling1() {
    if (poljeVreme.innerText !== 'Final' && listPlayersOut.includes(actionPlayerOne) == false) {
        p = teamsList[indexHome].playerName.indexOf(actionPlayerOne);
        if (p > 0) {
            for (let i = 1; i < 12; i++) {
                document.querySelector('#dribling-ime-oduzimanje').appendChild(document.createElement('option')).innerText =
                    playersList[indexAway][i].playerName;
            }
        } else {
            for (let i = 1; i < 12; i++) {
                document.querySelector('#dribling-ime-oduzimanje').appendChild(document.createElement('option')).innerText =
                    playersList[indexHome][i].playerName;
            }
        }
        document.querySelector('#dribling-ime-oduzimanje').getElementsByTagName('option')[1].selected = 'selected';
    }
}
function akcijaDriblingSend() {
    actionPlayerOne = document.querySelector('#driblingName').value;
    if (
        poljeVreme.innerText !== 'Final' &&
        document.querySelector('#dribling-ime-oduzimanje').value == '' &&
        listPlayersOut.includes(actionPlayerOne) == false
    ) {
        akcijaDribling1();
    } else {
        akcijaDriblingReset();
        akcijaDribling1();
    }
}

function akcijaDribling() {
    actionPlayerTwo = document.querySelector('#dribling-ime-oduzimanje').value;
    // p = teamsList[indexHome].playerName.indexOf(actionPlayerOne);
    r = teamsList[indexAway].playerName.indexOf(actionPlayerTwo);
    p1 = teamsList[indexAway].playerName.indexOf(actionPlayerOne);
    r1 = teamsList[indexHome].playerName.indexOf(actionPlayerTwo);

    kockica = Math.floor(Math.random() * 9 + 1);
    kockica2 = Math.floor(Math.random() * 9 + 1);

    index = indexHome;
    index2 = indexAway;
    if (p > 0) {
        kockica++;
    } else {
        kockica2++;
        p = p1;
        r = r1;
        index = indexAway;
        index2 = indexHome;
    }

    rezultat = playersList[index][p].dribling + kockica - playersList[index2][r].defending - kockica2;

    setTextDribling();
    semafor();
    halfFullTime();
    conLogDribling();
}
function akcijaDriblingReset() {
    let brisanje = document.querySelector('#dribling-ime-oduzimanje').getElementsByTagName('option');
    while (brisanje.length > 0) {
        brisanje[brisanje.length - 1].remove();
    }
}
function setTextDribling() {
    if (rezultat >= 1) {
        text = `Dribling! `;
    } else if (rezultat == 0) {
        text = `Izbio ka autu!`;
    } else if (rezultat == -1) {
        text = `Izbio ka autu!`;
    } else if (rezultat == -2) {
        text = `Izbio ka unutra!`;
    } else if (rezultat >= -7 && rezultat <= -3) {
        text = `Izgubio loptu!`;
    } else if (rezultat <= -8) {
        text = `Faul!)`;
    }
    document.querySelector('#kraj-akcije-dribling').innerText = text;
}
function conLogDribling() {
    console.log('Dribling => ', teamsList[index].clubName);
    console.log(actionPlayerOne, ':', playersList[index][p].dribling, '+', kockica, '=', playersList[index][p].dribling + kockica);
    console.log(actionPlayerTwo, ':', playersList[index2][r].defending, '+', kockica2, '=', playersList[index2][r].defending + kockica2);
    console.log('result: ', rezultat, '=>', text);
    console.log('------------------------');
}
