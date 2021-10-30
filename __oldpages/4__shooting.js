'use strict';
function akcijaSut() {
    if (poljeVreme.innerText != 'Final') {
        actionPlayerOne = document.querySelector('#sut-ime-napadac').value;
        p = teamsList[indexHome].playerName.indexOf(actionPlayerOne);
        kockica = Math.floor(Math.random() * 9 + 2);
        kockica2 = Math.floor(Math.random() * 9 + 1);
        rezultat = playersList[indexHome][p].shooting + kockica - playersList[indexAway][0].ratingGk - kockica2;

        changeResultShot();

        if (rezultat >= 1 && Number.isFinite(+poljeVreme.innerText) == true) {
            text = `Goool !!!`;
            zapisVremena();
            zapisStrelacDomacin(actionPlayerOne);
        } else if (rezultat > -3 && rezultat <= 0) {
            text = `Corner!`;
        } else if (rezultat > -6 && rezultat <= -3) {
            text = `Goal Kick!`;
        } else if (rezultat <= -6) {
            text = `Great save!`;
        }
        document.querySelector('#kraj-akcije-sut').innerText = text;
        conLogShooting();
        semafor();
        halfFullTime();
        setTimerReset();
    }
}
function akcijaSut2() {
    if (poljeVreme.innerText !== 'Final') {
        actionPlayerOne = document.querySelector('#sut-ime-napadac2').value;
        p = teamsList[indexAway].playerName.indexOf(actionPlayerOne);
        kockica = Math.floor(Math.random() * 9 + 1);
        kockica2 = Math.floor(Math.random() * 9 + 2);
        rezultat = playersList[indexAway][p].shooting + kockica - playersList[indexHome][0].ratingGk - kockica2;

        if (sutOznake12.checked == true) {
            rezultat++;
        }
        if (sutOznake22.checked == true) {
            rezultat++;
        }

        if (rezultat >= 1 && Number.isFinite(+poljeVreme.innerText) == true) {
            text = `Goool !!!`;
            zapisVremena();
            zapisStrelacGost(actionPlayerOne);
        } else if (rezultat > -3 && rezultat <= 0) {
            text = `Corner!`;
        } else if (rezultat > -6 && rezultat <= -3) {
            text = `Goal Kick!`;
        } else if (rezultat <= -6) {
            text = `Great save!`;
        }
        document.querySelector('#kraj-akcije-sut2').innerText = text;
        conLogShooting();
        semafor();
        halfFullTime();
        setTimerReset();
    }
}
function changeResultShot() {
    if (sutOznake1.checked == true) {
        rezultat++;
    }
    if (sutOznake2.checked == true) {
        rezultat++;
    }
}
function conLogShooting() {
    if (teamsList[indexHome].playerName.indexOf(actionPlayerOne) > 0) {
        console.log('Shot on goal =>', teamsList[indexHome].clubName);
        console.log(actionPlayerOne, ':', playersList[indexHome][p].shooting, '+', kockica, '=', playersList[indexHome][p].shooting + kockica);
        //prettier-ignore
        console.log(playersList[indexAway][0].playerName,':',playersList[indexAway][0].ratingGk,'+',kockica2,'=',playersList[indexAway][0].ratingGk + kockica2);
    } else {
        console.log('Shot on goal =>', teamsList[indexAway].clubName);
        console.log(actionPlayerOne, ':', playersList[indexAway][p].shooting, '+', kockica, '=', playersList[indexAway][p].shooting + kockica);
        //prettier-ignore
        console.log(playersList[indexHome][0].playerName,':',playersList[indexHome][0].ratingGk,'+',kockica2,'=',playersList[indexHome][0].ratingGk + kockica2);
    }
    console.log('Result:', rezultat, '=>', text);
    console.log('....................');
}
