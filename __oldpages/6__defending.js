'use strict';
function zapisKartonaSemafor(actionPlayerOne) {
    let x = document.createElement('P');
    let msg = document.querySelector('#kraj-akcije-odbrana').innerText;
    console.log(p, p1);

    if (msg == 'Foul and a yellow card!') {
        if (p != p1) {
            text = `${actionPlayerOne} 🟨`;
        } else text = `🟨 ${actionPlayerOne}`;
    } else if (msg == 'Foul and a second yellow card!') {
        if (p != p1) {
            text = `${actionPlayerOne} 🟨🟥`;
        } else text = `🟨🟥 ${actionPlayerOne} `;
    } else if (msg == 'Foul and a red card!') {
        if (p != p1) {
            text = `${actionPlayerOne} 🟥`;
        } else text = `🟥 ${actionPlayerOne}`;
    }
    if (p != p1) {
        polje1.appendChild(document.createElement('P')).innerText = text;
        polje2.appendChild(x).innerText = 'x';
    } else {
        polje2.appendChild(document.createElement('P')).innerText = text;
        polje1.appendChild(x).innerText = 'x';
    }
    x.style.visibility = 'hidden';
}
function akcijaUklizavanje() {
    actionPlayerOne = document.querySelector('#odbrana').value;
    if (poljeVreme.innerText !== 'Final' && listPlayersOut.includes(actionPlayerOne) == false) {
        p = teamsList[indexHome].playerName.indexOf(actionPlayerOne);
        if (p > 0) {
            for (let iSut = 1; iSut < 12; iSut++) {
                let izaberiIgracaSut = document.createElement('option');
                izaberiIgracaSut.innerText = playersList[indexAway][iSut].playerName;
                document.querySelector('#odizimanje-igrac-lopta').appendChild(izaberiIgracaSut);
            }
        } else {
            for (let iSut2 = 1; iSut2 < 12; iSut2++) {
                let izaberiIgracaSut2 = document.createElement('option');
                izaberiIgracaSut2.innerText = playersList[indexHome][iSut2].playerName;
                document.querySelector('#odizimanje-igrac-lopta').appendChild(izaberiIgracaSut2);
            }
        }
        document.querySelector('#odizimanje-igrac-lopta').getElementsByTagName('option')[8].selected = 'selected';
    }
}
function akcijaOdbranaSend() {
    if (document.querySelector('#odizimanje-igrac-lopta').value == '') {
        akcijaUklizavanje();
    } else {
        akcijaOduzimanjeLopteReset();
        akcijaUklizavanje();
    }
}
function akcijaOduzimanjeLopte() {
    if (poljeVreme.innerText !== 'Final' && document.querySelector('#odizimanje-igrac-lopta').value != '') {
        actionPlayerTwo = document.querySelector('#odizimanje-igrac-lopta').value;
        if (listPlayersOut.includes(actionPlayerOne) == false && listPlayersOut.includes(actionPlayerTwo) == false) {
            p = teamsList[indexHome].playerName.indexOf(actionPlayerOne);
            r = teamsList[indexAway].playerName.indexOf(actionPlayerTwo);
            p1 = teamsList[indexAway].playerName.indexOf(actionPlayerOne);
            r1 = teamsList[indexHome].playerName.indexOf(actionPlayerTwo);
            kockica = Math.floor(Math.random() * 9 + 1);
            kockica2 = Math.floor(Math.random() * 9 + 1);
            index = indexHome;
            index2 = indexAway;

            let kartonKockica = Math.floor(Math.random() * 3) - 1;
            let kartonText;
            let kartonZbir;

            if (p > 0) {
                kockica++;
            }
            if (p < 0) {
                kockica2++;
                p = p1;
                r = r1;
                index2 = indexHome;
                index = indexAway;
                kartonKockica--;
            }

            rez1 = playersList[index][p].defending + kockica;
            rez2 = playersList[index2][r].dribling + kockica2;
            rezultat = rez1 - rez2;

            changeResultAndCard();

            if (rezultat >= 3) {
                text = `Great tackle!`;
            } else if (rezultat >= 0 && rezultat <= 2) {
                text = `To the rival's goal!`;
            } else if (rezultat >= -2 && rezultat <= -1) {
                text = `To the out line!`;
            } else if (rezultat >= -4 && rezultat <= -3) {
                text = `To the middle!`;
            } else if (rezultat >= -9 && rezultat <= -5) {
                text = `Foul!`;
            } else if (rezultat <= -10) {
                kartonZbir = karton + kartonKockica;
                if (kartonZbir <= 7) {
                    kartonText = 'yellow';
                } else if (kartonZbir >= 8) {
                    kartonText = 'red';
                    listPlayersOut.push(actionPlayerOne);
                }

                if (kartonText === 'yellow' && listBookings.includes(actionPlayerOne) == false) {
                    listBookings.push(actionPlayerOne);
                } else if (kartonText === 'yellow' && listBookings.includes(actionPlayerOne) == true) {
                    kartonText = 'second yellow';
                    listPlayersOut.push(actionPlayerOne);
                }
                text = `Foul and a ${kartonText} card!`;

                console.log('Karton zbir: ', karton, '+', kartonKockica, '=', kartonZbir, ',', kartonText);
            }
            document.querySelector('#kraj-akcije-odbrana').innerText = text;
            if (rezultat <= -10) {
                zapisVremena();
                zapisKartonaSemafor(actionPlayerOne);
            }
            semafor();
            halfFullTime();
            conLogDefending();
            setTimerReset();
        }
    }
}
function changeResultAndCard() {
    if (p >= 1 && p <= 3) {
        karton++;
    }
    if (p >= 7 && p <= 9) {
        karton -= 3;
    }
    if (p >= 10) {
        karton -= 5;
    }

    if (defence1.checked == true) {
        rezultat++;
        karton--;
    }

    if (defence2.checked == true) {
        karton++;
        rezultat--;
    }
    if (defence3.checked == true) {
        karton++;
        rezultat--;
    }

    if (rezultat >= -7 && rezultat <= -6) {
        karton++;
    } else if (rezultat == -9 && rezultat == -8) {
        karton += 2;
    } else if (rezultat >= -11 && rezultat == -10) {
        karton += 3;
    } else if (rezultat <= -12) {
        karton += 5;
    }
}
function akcijaOduzimanjeLopteReset() {
    let brisanje = document.querySelector('#odizimanje-igrac-lopta').getElementsByTagName('option');
    while (brisanje.length > 0) {
        brisanje[brisanje.length - 1].remove();
    }
}
function conLogDefending() {
    console.log('Defending =>', teamsList[index].clubName);
    console.log(actionPlayerOne, ':', playersList[index][p].defending, '+', kockica, '=', rez1);
    console.log(actionPlayerTwo, ':', playersList[index2][r].dribling, '+', kockica2, '=', rez2);
    console.log('Result:', rezultat, '=> ', text);
    console.log('------------------------');
}
