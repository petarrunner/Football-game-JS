'use strict';
function semafor() {
    if (poljeVreme.innerText <= 40) {
        minutVreme += 5;
        poljeVreme.innerText = minutVreme;
    } else if (poljeVreme.innerText == 45 && poljeApostrof.innerText != '') {
        poljeVreme.innerText = 'HT';
        poljeApostrof.innerText = '';
    } else if (poljeVreme.innerText == 'HT') {
        poljeVreme.innerText = 45;
    } else if (poljeVreme.innerText == 45 && poljeApostrof.innerText == '') {
        minutVreme = 50;
        poljeVreme.innerText = minutVreme;
        poljeApostrof.innerText = "'";
    } else if (poljeVreme.innerText < 90) {
        minutVreme += 5;
        poljeVreme.innerText = minutVreme;
    } else if (poljeVreme.innerText == 90) {
        poljeVreme.innerText = 'FT';
        poljeApostrof.innerText = '';
    }
}
function zapisVremena() {
    let nasumicanBroj = Math.floor(Math.random() * 4 + 1);
    let nasumicanBroj2 = Math.floor(Math.random() * 3 + 1);

    let strelacGoal = document.createElement('P');

    if (Number.isFinite(+poljeVreme.innerText) == true && poljeVreme.innerText != 45 && poljeVreme.innerText != 90) {
        strelacGoal.innerText = `${minutVreme + nasumicanBroj}'`;
    } else if (poljeVreme.innerText == 45 && poljeApostrof.innerText == "'") {
        strelacGoal.innerText = `45+${nasumicanBroj2}'`;
    } else if (poljeVreme.innerText == 'HT') {
    } else if (poljeVreme.innerText == 45 && poljeApostrof.innerText == '') {
        strelacGoal.innerText = `${47 + nasumicanBroj2}'`;
        minutVreme = 50;
    } else if (poljeVreme.innerText >= 90) {
        strelacGoal.innerText = `90+${nasumicanBroj2}'`;
    }
    poljeGoal.appendChild(strelacGoal);
}
function halfFullTime() {
    if (Number.isFinite(+poljeVreme.innerText) == false) {
        // if (poljeVreme.innerText = 'HT' || poljeVreme.innerText == 'FT') {
        let x1 = document.createElement('P');
        let x2 = document.createElement('P');

        polje1.appendChild(x1).innerText = `x`;
        x1.style.visibility = 'hidden';
        polje2.appendChild(x2).innerText = `x`;
        x2.style.visibility = 'hidden';
        if (poljeVreme.innerText == 'HT') {
            poljeGoal.appendChild(document.createElement('P')).innerText = 'HT';
        } else if (poljeVreme.innerText == 'FT') {
            poljeGoal.appendChild(document.createElement('P')).innerText = 'FT';
            poljeVreme.innerText = 'Final';
        }
    }
}
function zapisStrelacDomacin(actionPlayerOne) {
    let x = document.createElement('P');
    polje2.appendChild(x).innerText = 'x';
    x.style.visibility = 'hidden';
    poljeGoal.appendChild(document.createElement('P'));
    poljeRezD.innerText++;

    if (prekid2.checked == true) {
        polje1.appendChild(document.createElement('P')).innerText = `${actionPlayerOne} (P) ⚽`;
    } else {
        polje1.appendChild(document.createElement('P')).innerText = `${actionPlayerOne} ⚽`;
    }
}
function zapisStrelacGost(actionPlayerOne) {
    let x = document.createElement('P');
    polje1.appendChild(x).innerText = 'x';
    x.style.visibility = 'hidden';
    poljeGoal.appendChild(document.createElement('P'));
    poljeRezG.innerText++;
    if (prekid2.checked == true) {
        polje2.appendChild(document.createElement('P')).innerText = `⚽ (P) ${actionPlayerOne}`;
    } else {
        polje2.appendChild(document.createElement('P')).innerText = `⚽ ${actionPlayerOne}`;
    }
}
