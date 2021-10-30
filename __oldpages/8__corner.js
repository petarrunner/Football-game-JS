'use strict';
function kornerSaljiPodatke() {
    actionPlayerOne = document.querySelector('#sut-ime-korner').value;
    p = teamsList[indexHome].playerName.indexOf(actionPlayerOne);
    r = teamsList[indexAway].playerName.indexOf(actionPlayerOne);

    if (p > 0) {
        for (let i = 5; i < 12; i++) {
            document.querySelector('#korner-ime1').appendChild(document.createElement('option')).innerText = playersList[indexHome][i].playerName;
        }
        //////////Defender header
        for (let i = 1; i < 5; i++) {
            document.querySelector('#korner-ime2').appendChild(document.createElement('option')).innerText = playersList[indexAway][i].playerName;
        }
    } else {
        for (let i = 5; i < 12; i++) {
            document.querySelector('#korner-ime1').appendChild(document.createElement('option')).innerText = playersList[indexAway][i].playerName;
        }
        //////////Defender header
        for (let i = 1; i < 5; i++) {
            document.querySelector('#korner-ime2').appendChild(document.createElement('option')).innerText = playersList[indexHome][i].playerName;
        }
    }
    document.querySelector('#korner-ime1').getElementsByTagName('option')[4].selected = 'selected';
}
function akcijaKornerSend() {
    if (poljeVreme.innerText !== 'Final') {
        if (document.querySelector('#korner-ime1').value == '') {
            kornerSaljiPodatke();
        } else {
            resetKorner();
            kornerSaljiPodatke();
        }
    }
}
function akcijaKorner() {
    if (poljeVreme.innerText !== 'Final' && document.querySelector('#korner-ime1').value != '') {
        actionPlayerTwo = document.querySelector('#korner-ime1').value;
        let actionPlayerThree = document.querySelector('#korner-ime2').value;
        p1 = teamsList[indexHome].playerName.indexOf(actionPlayerTwo);
        r1 = teamsList[indexAway].playerName.indexOf(actionPlayerTwo);
        let p2 = teamsList[indexAway].playerName.indexOf(actionPlayerThree);
        let r2 = teamsList[indexHome].playerName.indexOf(actionPlayerThree);

        kockica = Math.floor(Math.random() * 9 + 1);
        kockica2 = Math.floor(Math.random() * 9 + 1);
        indexGk = indexAway;
        if (p == 11 && r < 0) {
            p1 = 10;
            document.querySelector('#labelIme1').innerText = `Header: ${playersList[indexHome][p1].playerName}`;
            actionPlayerTwo = playersList[indexHome][p1].playerName;
        } else if (p == p1 && r < 0) {
            p1 = p + 1;
            document.querySelector('#labelIme1').innerText = `Header: ${playersList[indexHome][p1].playerName}`;
            actionPlayerTwo = playersList[indexHome][p1].playerName;
        } else if (r == 11 && p < 0) {
            r1 = 10;
            document.querySelector('#labelIme1').innerText = `Header: ${playersList[indexAway][r1].playerName}`;
            actionPlayerTwo = playersList[indexAway][r1].playerName;
        } else if (r == r1 && p < 0) {
            r1 = r + 1;
            document.querySelector('#labelIme1').innerText = `Header: ${playersList[indexAway][r1].playerName}`;
            actionPlayerTwo = playersList[indexAway][r1].playerName;
        }

        if (p > 0) {
            index = indexHome;
            kockica++;
        } else {
            index = indexAway;
            indexGk = indexHome;
            kockica2++;
            p = r;
            p1 = r1;
            p2 = r2;
        }

        let ocenaZaCentarsut = playersList[index][p].corner;
        let ocenaZaSut = playersList[index][p1].shooting;
        let ocenaZaSutGlavom = playersList[index][p1].heading;
        let ocenaZaBranjenje = playersList[indexGk][0].ratingGk;

        let ocenaZaOduzimanjeOdbrana = playersList[indexGk][p2].defending;
        let ocenaZaSutGlavomOdbrana = playersList[indexGk][p2].heading;

        rez1 = Math.floor((ocenaZaCentarsut + ocenaZaSut + ocenaZaSutGlavom) / 3 + kockica);
        rez2 = Math.floor((ocenaZaOduzimanjeOdbrana + ocenaZaSutGlavomOdbrana + ocenaZaBranjenje) / 3 + kockica2);
        rezultat = rez1 - rez2;

        if (rezultat >= 1 && Number.isFinite(+poljeVreme.innerText) == true) {
            text = `Goool !!!`;
            zapisVremena();
            if (p != r) {
                zapisStrelacDomacin(actionPlayerTwo);
            } else zapisStrelacGost(actionPlayerTwo);
        } else if (rezultat > -3 && rezultat <= 0) {
            text = `Corner!`;
        } else if (rezultat > -6 && rezultat <= -3) {
            text = `Goal Kick!`;
        } else if (rezultat <= -6) {
            text = `Great save!`;
        }
        document.querySelector('#kraj-akcije-korner').innerText = text;
        //prettier-ignore
        conLogCorner(ocenaZaCentarsut, ocenaZaSut, ocenaZaSutGlavom,actionPlayerThree,ocenaZaOduzimanjeOdbrana,ocenaZaSutGlavomOdbrana,ocenaZaBranjenje);
        semafor();
        halfFullTime();
    }
    setTimerReset();
}
function resetKorner() {
    let brisanje = document.querySelector('#korner-ime1').getElementsByTagName('option');
    while (brisanje.length > 0) {
        brisanje[brisanje.length - 1].remove();
    }
    let brisanje2 = document.querySelector('#korner-ime2').getElementsByTagName('option');
    while (brisanje2.length > 0) {
        brisanje2[brisanje2.length - 1].remove();
    }
}
//prettier-ignore
function conLogCorner( ocenaZaCentarsut, ocenaZaSut, ocenaZaSutGlavom,actionPlayerThree,ocenaZaOduzimanjeOdbrana,ocenaZaSutGlavomOdbrana,ocenaZaBranjenje) {
    console.log('Corner kick =>', teamsList[index].clubName);
    console.log(actionPlayerOne, '&', actionPlayerTwo);
    console.log('(', ocenaZaCentarsut, '+', ocenaZaSut, '+', ocenaZaSutGlavom, ') / 3 =',Math.floor(( ocenaZaCentarsut+ ocenaZaSut+ ocenaZaSutGlavom) / 3),' +', kockica, '=', rez1);

    console.log(actionPlayerThree, '&', playersList[indexGk][0].playerName);
    console.log('(', ocenaZaOduzimanjeOdbrana, '+', ocenaZaSutGlavomOdbrana, '+', ocenaZaBranjenje, ') / 3 =',Math.floor((ocenaZaOduzimanjeOdbrana + ocenaZaSutGlavomOdbrana + ocenaZaBranjenje) / 3),'+', kockica2, '=', rez2);

    console.log('Result: ', rezultat,' => ',text);
}
