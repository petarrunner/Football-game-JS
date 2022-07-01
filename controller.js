import Shooting__home from './actions/1__shooting__home.js';
import Shooting__away from './actions/2__shooting__away.js';
import Dribling from './actions/3__dribling.js';
import Defending from './actions/4__defending.js';
import SetPieces from './actions/5__setPieces.js';
import Corner from './actions/6__corner.js';
import { field__clubName__home } from './fields.js';
import AwayTeam from './viewFields/AwayTeam.js';
import HomeTeam from './viewFields/HomeTeam.js';
import Info from './viewFields/Info.js';
import ScoreboardCl from './viewFields/ScoreboardView.js';
import StadiumCl from './viewFields/Stadium.js';

export const info = new Info();
export const stadium = new StadiumCl();
export const semafor = new ScoreboardCl();
export const gost = new AwayTeam();
export const domacin = new HomeTeam();
export const shootingHome = new Shooting__home();
export const shootingAway = new Shooting__away();
export const dribling = new Dribling();
export const defending = new Defending();
export const corner = new Corner();
export const setPiece = new SetPieces();

window.addEventListener('load', function () {
    info.firstAction();

    // ///////
    // actionSelectTeams();
    // actionConfirmTeams();
});

window.addEventListener('keyup', function (event) {
    if (event.keyCode === 9) {
        // "TAB" RESET GAME
        this.location.reload();
        loadStart();
    }
    // "A" SELECT TEAMS
    if (event.keyCode === 65 && !semafor.isPlaying) {
        actionSelectTeams();
    }
    // "S" CONFIRM TEAMS
    if (event.keyCode === 83 && !semafor.isPlaying) {
        // if (event.keyCode === 83 && !semafor.isPlaying && semafor.teamsSelected) {
        actionConfirmTeams();
    }
    // "D" / "num7" - SHOOTING HOME TEAM
    if ((event.keyCode === 68 || event.keyCode === 103) && semafor.isPlaying) {
        shootingHome.finalAction();
    }
    // "F" & "num8" - SHOOTING AWAT TEAM
    if ((event.keyCode === 70 || event.keyCode === 104) && semafor.isPlaying) {
        shootingAway.finalAction();
    }
    // "T" & "num4" - DRIBLING 1
    if ((event.keyCode === 84 || event.keyCode === 100) && semafor.isPlaying) {
        dribling.firstAction();
    }
    // "G" & "num1" - DRIBLING 2
    if ((event.keyCode === 71 || event.keyCode === 97) && semafor.isPlaying && document.querySelector('#dribling-defenderName').value !== '') {
        dribling.finalAction();
    }
});

let btn__selectTeams = document.querySelector('#buttonLineUps');
btn__selectTeams.addEventListener('click', function () {
    actionSelectTeams();
});
let btn__confirmTeams = document.querySelector('#buttonConfirmClubs');
btn__confirmTeams.addEventListener('click', function () {
    actionConfirmTeams();
});

function actionSelectTeams() {
    info.finalAction();
    if (info.clubName__home !== info.clubName__away && field__clubName__home.innerText === 'Home Team') {
        domacin.firstAction();
        gost.firstAction();
        shootingHome.writeClubName();
        shootingAway.writeClubName();
        semafor.writeNames();
    }
}
function actionConfirmTeams() {
    domacin.checkStartingLineups();
    gost.checkStartingLineups();

    if (domacin.firstTeamCompleted && gost.secondTeamCompleted) {
        domacin.finalAction();
        gost.finalAction();
        shootingHome.getActivePlayers();
        shootingAway.getActivePlayers();
        dribling.getActivePlayers();
        setPiece.getActivePlayers();
        corner.getActivePlayers();
        info.hideInfoField();
        stadium.finalActionStadium();
        semafor.setStartMatch();
    }
}

let btn__shooting = document.querySelector('#btn__shooting');
btn__shooting.addEventListener('click', function () {
    if (semafor.isPlaying) {
        shootingHome.finalAction();
    }
});
let btn__shooting2 = document.querySelector('#btn__shooting2');
btn__shooting2.addEventListener('click', function () {
    if (semafor.isPlaying) {
        shootingAway.finalAction();
    }
});
let btn__dribling1 = document.querySelector('#btn__dribling1');
btn__dribling1.addEventListener('click', function () {
    if (semafor.isPlaying) {
        dribling.firstAction();
    }
});
let btn__dribling2 = document.querySelector('#btn__dribling2');
btn__dribling2.addEventListener('click', function () {
    if (semafor.isPlaying && dribling.secondPlayerSelected) {
        dribling.finalAction();
    }
});
let btn__defending1 = document.querySelector('#btn__defending1');
btn__defending1.addEventListener('click', function () {
    if (semafor.isPlaying) {
        defending.firstAction();
    }
});
let btn__defending2 = document.querySelector('#btn__defending2');
btn__defending2.addEventListener('click', function () {
    if (semafor.isPlaying && defending.secondPlayerSelected) {
        defending.finalAction();
    }
});
let btn__freekick = document.querySelector('#btn__freekick');
btn__freekick.addEventListener('click', function () {
    if (semafor.isPlaying) {
        setPiece.finalAction();
    }
});
let btn__corner1 = document.querySelector('#btn__corner1');
btn__corner1.addEventListener('click', function () {
    if (semafor.isPlaying) {
        corner.firstAction();
    }
});
let btn__corner2 = document.querySelector('#btn__corner2');
btn__corner2.addEventListener('click', function () {
    if (semafor.isPlaying && corner.secondPlayerSelected) {
        corner.finalAction();
    }
});
