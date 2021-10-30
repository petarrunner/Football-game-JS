import SemaforCl from './view/semaforView.js';
import HomeTeam from './view/homeTeam.js';
import AwayTeam from './view/awayTeam.js';
import Info from './view/info.js';
import Shooting__home from './actions/1__shooting__home.js';
import Shooting__away from './actions/2__shooting__away.js';
import Dribling from './actions/3__dribling.js';
import Defending from './actions/4__defending.js';
import SetPieces from './actions/5__setPieces.js';
import Corner from './actions/6__corner.js';

export const semafor = new SemaforCl('Borussia Dortmund', 'Juventus');
export const gost = new AwayTeam();
export const domacin = new HomeTeam();
export const info = new Info();
export const shot1 = new Shooting__home();
export const shot2 = new Shooting__away();
export const dribling = new Dribling();
export const defending = new Defending();
export const corner = new Corner();
export const setPiece = new SetPieces();

window.addEventListener('keyup', function (event) {
    if (event.keyCode === 9) {
        this.location.reload();
        loadStart();
    }

    if (event.keyCode !== 9) {
        // 1.
        info.finalAction();
        domacin.firstAction();
        gost.firstAction();
        shot1.writeClubName();
        shot2.writeClubName();
        semafor.writeNames();
        // 2.
        domacin.finalAction();
        gost.finalAction();
        shot1.getActivePlayers();
        shot2.getActivePlayers();
        dribling.getActivePlayers();
        setPiece.getActivePlayers();
        corner.getActivePlayers();
    }
});

const loadStart = function () {
    info.firstAction();
};
window.addEventListener('load', loadStart());

let btn__selectTeams = document.querySelector('#buttonLineUps');
btn__selectTeams.addEventListener('click', function () {
    if (document.querySelector('#t-b').innerText != 'Final') {
        info.finalAction();
        domacin.firstAction();
        gost.firstAction();
        shot1.writeClubName();
        shot2.writeClubName();
        semafor.writeNames();
    }
});
let btn__confirmTeams = document.querySelector('#buttonConfirmClubs');
btn__confirmTeams.addEventListener('click', function () {
    if (document.querySelector('#t-b').innerText != 'Final') {
        domacin.finalAction();
        gost.finalAction();
        shot1.getActivePlayers();
        shot2.getActivePlayers();
        dribling.getActivePlayers();
        setPiece.getActivePlayers();
        corner.getActivePlayers();
    }
});
let btn__shooting = document.querySelector('#btn__shooting');
btn__shooting.addEventListener('click', function () {
    if (document.querySelector('#t-b').innerText != 'Final' && document.querySelector('#sut-ime-napadac').value !== '') {
        shot1.finalAction();
    }
});
let btn__shooting2 = document.querySelector('#btn__shooting2');
btn__shooting2.addEventListener('click', function () {
    if (document.querySelector('#t-b').innerText != 'Final' && document.querySelector('#sut-ime-napadac2').value !== '') {
        shot2.finalAction();
    }
});
let btn__dribling1 = document.querySelector('#btn__dribling1');
btn__dribling1.addEventListener('click', function () {
    if (document.querySelector('#t-b').innerText != 'Final' && document.querySelector('#driblingName').value !== '') {
        dribling.firstAction();
    }
});
let btn__dribling2 = document.querySelector('#btn__dribling2');
btn__dribling2.addEventListener('click', function () {
    if (document.querySelector('#t-b').innerText != 'Final' && document.querySelector('#dribling-ime-oduzimanje').value !== '') {
        dribling.finalAction();
    }
});
let btn__defending1 = document.querySelector('#btn__defending1');
btn__defending1.addEventListener('click', function () {
    if (document.querySelector('#t-b').innerText != 'Final') {
        defending.firstAction();
    }
});
let btn__defending2 = document.querySelector('#btn__defending2');
btn__defending2.addEventListener('click', function () {
    if (document.querySelector('#t-b').innerText != 'Final' && document.querySelector('#odizimanje-igrac-lopta').value !== '') {
        defending.finalAction();
    }
});
let btn__freekick = document.querySelector('#btn__freekick');
btn__freekick.addEventListener('click', function () {
    if (document.querySelector('#t-b').innerText != 'Final' && document.querySelector('#sut-ime-prekid').value !== '') {
        // setPiece.getActivePlayersAfterRedCard();
        setPiece.finalAction();
    }
});
let btn__corner1 = document.querySelector('#btn__corner1');
btn__corner1.addEventListener('click', function () {
    if (document.querySelector('#t-b').innerText != 'Final' && document.querySelector('#sut-ime-korner').value !== '') {
        corner.firstAction();
    }
});
let btn__corner2 = document.querySelector('#btn__corner2');
btn__corner2.addEventListener('click', function () {
    if (
        document.querySelector('#t-b').innerText != 'Final' &&
        document.querySelector('#sut-ime-korner').value !== '' &&
        document.querySelector('#korner-ime1').value !== ''
    ) {
        corner.finalAction();
    }
});
