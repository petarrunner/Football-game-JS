import Actions from './Actions.js';
import { domacin, gost, semafor } from '../controller.js';
import { teamsList, playersList } from '../0__teamsBase.js';
import { field__corner__header, corner__names__home, corner__names__away, field__corner } from '../fields.js';
import { BONUS_HOME } from '../config.js';

export default class Corner extends Actions {
    constructor() {
        super();
        this.parentEl = field__corner;
        this.actionText = this.parentEl.querySelector('.finalActionText');
    }

    secondPlayerSelected = false;

    setSecondPlayerSelected() {
        this.secondPlayerSelected = true;
    }
    setSecondPlayerSelectedFalse() {
        this.secondPlayerSelected = false;
    }
    getActivePlayers() {
        corner__names__home.label = domacin.clubName;
        corner__names__away.label = gost.clubName;

        for (let i = 1; i < domacin.activeLineUp.length; i++) {
            corner__names__home.appendChild(document.createElement('option')).innerText = domacin.activeLineUp[i];
        }
        for (let i = 1; i < gost.activeLineUp.length; i++) {
            corner__names__away.appendChild(document.createElement('option')).innerText = gost.activeLineUp[i];
        }
        if (this.parentEl == document.querySelector('#field__corner')) {
            this.parentEl.querySelector('.activePlayer').getElementsByTagName('option')[3].selected = 'selected';
        }
    }

    clearActivePlayers() {
        let clear1 = corner__names__home.getElementsByTagName('option');
        let clear2 = corner__names__away.getElementsByTagName('option');

        while (clear1.length > 0) {
            clear1[clear1.length - 1].remove();
        }
        while (clear2.length > 0) {
            clear2[clear2.length - 1].remove();
        }
    }
    getIndexActivePlayer() {
        this.activePlayer = this.parentEl.querySelector('.activePlayer').value;

        if (domacin.activeLineUp.includes(this.activePlayer)) {
            this.team__ATT = domacin;
            this.team__GK = gost;
            this.noATT = BONUS_HOME;
        } else {
            this.team__ATT = gost;
            this.team__GK = domacin;
            this.noGK = BONUS_HOME;
        }
        this.index__teamATT = this.team__ATT.index;
        this.index__teamGK = this.team__GK.index;
        this.index__activePlayer = teamsList[this.index__teamATT].playerName.indexOf(this.activePlayer);
    }
    clearDefenders() {
        let clear1 = this.parentEl.querySelector('.headerTeamPlayers').getElementsByTagName('option');
        while (clear1.length > 0) {
            clear1[clear1.length - 1].remove();
        }
        let clear2 = this.parentEl.querySelector('.secondTeamPlayers').getElementsByTagName('option');
        while (clear2.length > 0) {
            clear2[clear2.length - 1].remove();
        }
    }
    getHeadersAndSecondTeamPlayers() {
        this.clearDefenders();

        if (domacin.activeLineUp.includes(this.activePlayer)) {
            for (let i = 1; i < domacin.activeLineUp.length; i++) {
                if (domacin.activeLineUp[i] != this.activePlayer)
                    this.parentEl.querySelector('.headerTeamPlayers').appendChild(document.createElement('option')).innerText =
                        domacin.activeLineUp[i];
            }
            for (let i = 1; i < gost.activeLineUp.length; i++) {
                this.parentEl.querySelector('.secondTeamPlayers').appendChild(document.createElement('option')).innerText = gost.activeLineUp[i];
            }
        }
        if (gost.activeLineUp.includes(this.activePlayer)) {
            for (let i = 1; i < gost.activeLineUp.length; i++) {
                if (gost.activeLineUp[i] != this.activePlayer) {
                    this.parentEl.querySelector('.headerTeamPlayers').appendChild(document.createElement('option')).innerText = gost.activeLineUp[i];
                }
            }
            for (let i = 1; i < domacin.activeLineUp.length; i++) {
                this.parentEl.querySelector('.secondTeamPlayers').appendChild(document.createElement('option')).innerText = domacin.activeLineUp[i];
            }
        }

        field__corner__header.getElementsByTagName('option')[field__corner__header.getElementsByTagName('option').length - 1].selected = 'selected';
    }
    getIndexHeaderPlayer() {
        this.headerPlayer = this.parentEl.querySelector('.headerTeamPlayers').value;
        this.index__headerPlayer = teamsList[this.index__teamATT].playerName.indexOf(this.headerPlayer);
    }
    getIndexSecondTeamPlayer() {
        this.secondTeamPlayers = this.parentEl.querySelector('.secondTeamPlayers').value;
        this.index__secondTeamPlayers = teamsList[this.index__teamGK].playerName.indexOf(this.secondTeamPlayers);
    }
    calculateRatings() {
        this.dice__ATT = this.getRandomNumber(10) + this.noATT;
        this.dice__GK = this.getRandomNumber(10) + this.noGK;
        this.rating__ATT = Math.floor(
            (playersList[this.index__teamATT][this.index__activePlayer].corner +
                playersList[this.index__teamATT][this.index__headerPlayer].heading +
                playersList[this.index__teamATT][this.index__headerPlayer].shooting) /
                3
        );
        this.rating__GK = Math.floor(
            (playersList[this.index__teamGK][this.index__secondTeamPlayers].defending +
                playersList[this.index__teamGK][this.index__secondTeamPlayers].heading +
                playersList[this.index__teamGK][0].ratingGk) /
                3
        );

        this.result = this.rating__ATT + this.dice__ATT - this.rating__GK - this.dice__GK;
    }
    checkResult() {
        let text;
        if (this.result >= 1 && semafor.isPlaying) {
            text = `Goool !!!`;
            semafor.semaforGoalScored(this.headerPlayer, this.team__ATT);
        } else if (this.result > -3 && this.result <= 0) {
            text = `Corner!`;
        } else if (this.result > -6 && this.result <= -3) {
            text = `Goal Kick!`;
        } else if (this.result <= -6) {
            text = `Great save!`;
        }
        this.actionText.innerText = text;
        semafor.timeChangesAndHTFT();
    }
    writeInConsoleLog() {
        console.log(`Action => Corner kick!`);
        console.log(`${this.activePlayer} and ${this.headerPlayer} : ${this.rating__ATT} + ${this.dice__ATT} = ${this.rating__ATT + this.dice__ATT}`);
        console.log(
            `${playersList[this.index__teamGK][0].playerName} and ${this.secondTeamPlayers} : ${this.rating__GK} + ${this.dice__GK} = ${
                this.rating__GK + this.dice__GK
            }`
        );
        console.log('Result: ', this.result, '=>', this.parentEl.querySelector('.finalActionText').innerText);
        console.log('-----------------------------------');
    }
    firstAction() {
        this.getIndexActivePlayer();
        this.getHeadersAndSecondTeamPlayers();
        this.setSecondPlayerSelected();
    }

    finalAction() {
        this.getIndexHeaderPlayer();
        this.getIndexSecondTeamPlayer();
        this.calculateRatings();
        this.checkResult();
        this.clearDefenders();
        this.writeInConsoleLog();
        this.setSecondPlayerSelectedFalse();
    }
}
