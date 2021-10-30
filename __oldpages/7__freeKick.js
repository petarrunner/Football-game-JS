'use strict';
function akcijaPrekid() {
    if (poljeVreme.innerText !== 'Final') {
        actionPlayerOne = document.querySelector('#sut-ime-prekid').value;
        p = teamsList[indexHome].playerName.indexOf(actionPlayerOne);
        r = teamsList[indexAway].playerName.indexOf(actionPlayerOne);
        indexGk = indexAway;
        kockica = Math.floor(Math.random() * 9 + 1);
        kockica2 = Math.floor(Math.random() * 7 + 3);

        // let kockicaPrekid = Math.floor(Math.random() * 9 + 1);
        // let kockicaPrekidGk = Math.floor(Math.random() * 7 + 3);
        // let kockicaPrekidPenal = Math.floor(Math.random() * 13 + 3);
        // let kockicaPrekidPenalGk = Math.floor(Math.random() * 15 + 1);

        if (p > 0) {
            index = indexHome;
            kockica++;
            kockica++;
        }
        if (p < 0) {
            p = r;
            indexGk = indexHome;
            index = indexAway;
            kockica2++;
            kockica2++;
        }

        // let ocenaZaPrekid = playersList[index][p].freekicks;
        // let ocenaZaSut = playersList[index][p].shooting;
        // let ocenaZaBranjenjePrekid = playersList[indexGk][0].ratingGk;
        rez1 = Math.floor((2 * playersList[index][p].freekicks + playersList[index][p].shooting) / 3) + kockica;
        rez2 = playersList[indexGk][0].ratingGk + kockica2;

        if (prekid2.checked == true) {
            kockica = Math.floor(Math.random() * 13 + 3);
            kockica2 = Math.floor(Math.random() * 15 + 1);
            rez1 = Math.floor((playersList[index][p].freekicks + 2 * playersList[index][p].shooting) / 3) + kockica;
            rez2 = playersList[indexGk][0].ratingGk + kockica2;
        }
        rezultat = rez1 - rez2;
        changeResult();
        if (rezultat >= 1 && Number.isFinite(+poljeVreme.innerText) == true) {
            text = `Goool !!!`;
            zapisVremena();

            if (p != r) {
                zapisStrelacDomacin(actionPlayerOne);
            } else {
                zapisStrelacGost(actionPlayerOne);
            }
        } else if (rezultat > -3 && rezultat <= 0) {
            text = `Corner!`;
        } else if (rezultat > -6 && rezultat <= -3) {
            text = `Goal Kick!`;
        } else if (rezultat <= -6) {
            text = `Great save!`;
        }
        document.querySelector('#kraj-akcije-prekid').innerText = text;
        //prettier-ignore
        conLogFreeKick();
        semafor();
        halfFullTime();
        setTimerReset();
    }
}
//prettier-ignore
function conLogFreeKick() {
    if (prekid2.checked == false) {
        console.log('Freekick =>', teamsList[index].clubName);
        console.log(actionPlayerOne, ': (2 *', playersList[index][p].freekicks, '+', playersList[index][p].shooting, ') / 3 = ', Math.floor((2 *playersList[index][p].freekicks + playersList[index][p].shooting) / 3),'+', kockica, '=', rez1);
        console.log(playersList[indexGk][0].playerName, ':', playersList[indexGk][0].ratingGk, '+', kockica2, '=', rez2);
        
    } else {
        console.log('Penalty =>', teamsList[index].clubName);
        console.log(actionPlayerOne, ': (', playersList[index][p].freekicks, '+ 2 *', playersList[index][p].shooting, ' ) / 3 = ', Math.floor((playersList[index][p].freekicks + 2*playersList[index][p].shooting) / 3),'+', kockica, '=', rez1);
        console.log(playersList[indexGk][0].playerName, ':', playersList[indexGk][0].ratingGk, '+', kockica2, '=', rez2);
    }

    console.log('Result: ', rezultat,'=>', text);
    console.log('....................');
}
function changeResult() {
    if (prekid1.checked == true && prekid2.checked == true) {
        rezultat += 3;
    } else if (prekid1.checked == true) {
        rezultat++;
    } else if (prekid2.checked == true) {
        rezultat += 3;
    }
}
