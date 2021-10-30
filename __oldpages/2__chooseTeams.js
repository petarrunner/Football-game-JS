'use strict';
function izborSastavIgraca() {
    if (document.querySelector('#line-ups-name-home').innerText == 'Home team') {
        indexHome = teamsList.findIndex(function (teamsList) {
            return teamsList.clubName === imeDomacin.value;
        });
        indexAway = teamsList.findIndex(function (teamsList) {
            return teamsList.clubName === imeGost.value;
        });
        let [gk, ...igraci] = [...teamsList[indexHome].playerName];
        let [gk2, ...igraciA] = [...teamsList[indexAway].playerName];
        // Line-ups - home
        for (let [index, ime] of igraci.entries()) {
            document.querySelector('#playerNameNo1').appendChild(document.createElement('option')).innerText =
                document.querySelector('#playerNameNo2').appendChild(document.createElement('option')).innerText =
                document.querySelector('#playerNameNo3').appendChild(document.createElement('option')).innerText =
                document.querySelector('#playerNameNo4').appendChild(document.createElement('option')).innerText =
                document.querySelector('#playerNameNo5').appendChild(document.createElement('option')).innerText =
                document.querySelector('#playerNameNo6').appendChild(document.createElement('option')).innerText =
                    ime;
        }

        // Line-ups - away
        for (let [index, imeA] of igraciA.entries()) {
            document.querySelector('#playerNameNo1-a').appendChild(document.createElement('option')).innerText =
                document.querySelector('#playerNameNo2-a').appendChild(document.createElement('option')).innerText =
                document.querySelector('#playerNameNo3-a').appendChild(document.createElement('option')).innerText =
                document.querySelector('#playerNameNo4-a').appendChild(document.createElement('option')).innerText =
                document.querySelector('#playerNameNo5-a').appendChild(document.createElement('option')).innerText =
                document.querySelector('#playerNameNo6-a').appendChild(document.createElement('option')).innerText =
                    imeA;
        }
        // Rest - home
        document.querySelector('#playerNameNo1').getElementsByTagName('option')[0].selected =
            document.querySelector('#playerNameNo2').getElementsByTagName('option')[4].selected =
            document.querySelector('#playerNameNo3').getElementsByTagName('option')[5].selected =
            document.querySelector('#playerNameNo4').getElementsByTagName('option')[6].selected =
            document.querySelector('#playerNameNo5').getElementsByTagName('option')[8].selected =
            document.querySelector('#playerNameNo6').getElementsByTagName('option')[10].selected =
                'selected';

        document.querySelector('#line-ups-coach-home').innerText = `Coach: \n\ ${teamsList[indexHome].coach}`;
        document.querySelector('#line-ups-name-home').innerText = teamsList[indexHome].clubName;
        document.getElementById('logo-home-img').src = teamsList[indexHome].logo;
        document.getElementById('line-ups-div-name-home').style.backgroundColor = document.getElementById(
            'line-ups-lower-home'
        ).style.backgroundColor = teamsList[indexHome].color1;
        document.getElementById('line-ups-div-name-home').style.color = document.getElementById('line-ups-lower-home').style.color =
            teamsList[indexHome].color2;
        document.getElementById('logo-home').style.backgroundColor = teamsList[indexHome].color3;

        // Rest - away
        document.querySelector('#playerNameNo1-a').getElementsByTagName('option')[0].selected =
            document.querySelector('#playerNameNo2-a').getElementsByTagName('option')[4].selected =
            document.querySelector('#playerNameNo3-a').getElementsByTagName('option')[5].selected =
            document.querySelector('#playerNameNo4-a').getElementsByTagName('option')[6].selected =
            document.querySelector('#playerNameNo5-a').getElementsByTagName('option')[8].selected =
            document.querySelector('#playerNameNo6-a').getElementsByTagName('option')[10].selected =
                'selected';

        document.querySelector('#line-ups-coach-away').innerText = `Coach: \n\ ${teamsList[indexAway].coach}`;
        document.querySelector('#line-ups-name-away').innerText = teamsList[indexAway].clubName;
        document.getElementById('logo-away-img').src = teamsList[indexAway].logo;
        document.getElementById('line-ups-div-name-away').style.backgroundColor = document.getElementById(
            'line-ups-lower-away'
        ).style.backgroundColor = teamsList[indexAway].color1;
        document.getElementById('line-ups-div-name-away').style.color = document.getElementById('line-ups-lower-away').style.color =
            teamsList[indexAway].color2;
        document.getElementById('logo-away').style.backgroundColor = teamsList[indexAway].color3;
    }
}
function ispisivanjeSastavaIgraca() {
    for (let m = 1; m <= 6; m++) {
        //Home team
        let nameH = document.querySelector('#playerNameNo' + [m]).value;
        const h = teamsList[indexHome].playerName.indexOf(nameH);
        document.querySelector('#playerNo' + [m]).innerText = playersList[indexHome][h].kitNumber;
        document.querySelector('#playerNo' + [m]).classList.remove('hiddenLineUps');
        document.querySelector('#playerSpecNo' + [m]).innerText = playersList[indexHome][h].specials;
        if (playersList[indexHome][h].specials != '/') {
            document.querySelector('#playerSpecNo' + [m]).classList.remove('hiddenLineUps');
        }
        document.querySelector('#playerNamePNo' + [m]).classList.add('visibleLineUps');
        document.querySelector('#playerNamePNo' + [m]).innerText = playersList[indexHome][h].playerName;

        // Away team
        let nameA = document.querySelector('#playerNameNo' + [m] + '-a').value;
        const g = teamsList[indexAway].playerName.indexOf(nameA);
        document.querySelector('#playerNo' + [m] + '-a').innerText = playersList[indexAway][g].kitNumber;
        document.querySelector('#playerNo' + [m] + '-a').classList.remove('hiddenLineUps');
        document.querySelector('#playerSpecNo' + [m] + '-a').innerText = playersList[indexAway][g].specials;
        if (playersList[indexAway][g].specials != '/') {
            document.querySelector('#playerSpecNo' + [m] + '-a').classList.remove('hiddenLineUps');
        }
        document.querySelector('#playerNamePNo' + [m] + '-a').classList.add('visibleLineUps');
        document.querySelector('#playerNamePNo' + [m] + '-a').innerText = playersList[indexAway][g].playerName;
    }

    document.querySelector('#form-home').remove();
    document.querySelector('#playerNo').classList.remove('hiddenLineUps');
    document.querySelector('#playerNamePNo').innerText = playersList[indexHome][0].playerName;
    document.querySelector('#playerNamePNo').classList.remove('hiddenLineUps');

    document.querySelector('#form-away').remove();
    document.querySelector('#playerNo-a').classList.remove('hiddenLineUps');
    document.querySelector('#playerNamePNo-a').classList.remove('hiddenLineUps');
    document.querySelector('#playerNamePNo-a').innerText = playersList[indexAway][0].playerName;

    document.querySelector('#buttonLineUps').remove();
    document.querySelector('#buttonConfirmClubs').remove();
}
function izborKlubova() {
    if (document.querySelector('#sut-ime-napadac').value == '' && document.querySelector('#playerNameNo1').value !== '') {
        ispisivanjeSastavaIgraca();
        let [gk, ...igraci] = [...teamsList[indexHome].playerName];
        let [gk2, ...igraci2] = [...teamsList[indexAway].playerName];

        if (document.querySelector('#sut-ime-korner').value == '') {
            for (let [index, ime] of igraci.entries()) {
                document.querySelector('#sut-ime-napadac').appendChild(document.createElement('option')).innerText =
                    document.querySelector('#oduzimanjeDomacin').appendChild(document.createElement('option')).innerText =
                    document.querySelector('#driblingDomacin').appendChild(document.createElement('option')).innerText =
                    document.querySelector('#prekid-ime-domacin').appendChild(document.createElement('option')).innerText =
                    document.querySelector('#korner-ime-domacin').appendChild(document.createElement('option')).innerText =
                        ime;
            }

            for (let [index, ime] of igraci2.entries()) {
                document.querySelector('#sut-ime-napadac2').appendChild(document.createElement('option')).innerText =
                    document.querySelector('#oduzimanjeGost').appendChild(document.createElement('option')).innerText =
                    document.querySelector('#driblingGost').appendChild(document.createElement('option')).innerText =
                    document.querySelector('#prekid-ime-gost').appendChild(document.createElement('option')).innerText =
                    document.querySelector('#korner-ime-gost').appendChild(document.createElement('option')).innerText =
                        ime;
            }
        }

        // Selektovano
        document.querySelector('#sut-ime-napadac').getElementsByTagName('option')[10].selected =
            document.querySelector('#sut-ime-napadac2').getElementsByTagName('option')[10].selected =
            document.querySelector('#dribling').getElementsByTagName('option')[8].selected =
            document.querySelector('#sut-ime-prekid').getElementsByTagName('option')[10].selected =
            document.querySelector('#sut-ime-korner').getElementsByTagName('option')[6].selected =
                'selected';

        document.querySelector('#imeKlubaDomacin').innerText = teamsList[indexHome].clubName;

        // Write club names
        document.querySelector('#prekid-ime-domacin').label =
            document.querySelector('#korner-ime-domacin').label =
            document.querySelector('#oduzimanjeDomacin').label =
            document.querySelector('#t-a').innerText =
            document.querySelector('#driblingDomacin').label =
                teamsList[indexHome].clubName;

        document.querySelector('#imeKlubaDomacin2').innerText =
            document.querySelector('#prekid-ime-gost').label =
            document.querySelector('#korner-ime-gost').label =
            document.querySelector('#oduzimanjeGost').label =
            document.querySelector('#driblingGost').label =
            document.querySelector('#t-c').innerText =
                teamsList[indexAway].clubName;
    }
}

function resetTextAkcija() {
    document.querySelector('#kraj-akcije-sut').innerText =
        document.querySelector('#kraj-akcije-sut2').innerText =
        document.querySelector('#kraj-akcije-dribling').innerText =
        document.querySelector('#kraj-akcije-odbrana').innerText =
        document.querySelector('#kraj-akcije-prekid').innerText =
        document.querySelector('#kraj-akcije-korner').innerText =
            `Action:`;
    document.querySelector('#labelIme1').innerText = `Header: `;
}
function resetChecked() {
    // Shooting
    sutOznake1.checked =
        sutOznake2.checked =
        sutOznake12.checked =
        sutOznake22.checked =
        defence1.checked =
        defence2.checked =
        defence3.checked =
        prekid1.checked =
        prekid2.checked =
            false;
}
function setTimerReset() {
    setTimeout(function () {
        resetChecked();
    }, 100000);
    setTimeout(function () {
        akcijaOduzimanjeLopteReset();
        resetKorner();
        resetTextAkcija();
    }, 300000);
}
// izborSastavIgraca();
// izborKlubova();
