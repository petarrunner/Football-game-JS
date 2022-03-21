import Actions from './Actions.js';
import { domacin, gost, semafor } from '../controller.js';
import { teamsList, playersList } from '../0__teamsBase.js';
import { field__time } from '../fields.js';
export default class Corner extends Actions {
    rating__ATT;
    rating__GK;
    secondPlayerSelected = false;
    constructor() {
        super();
        this.parentEl = document.querySelector('#setCorner');
        this.korner__domacin = document.querySelector('#corner-name-home');
        this.korner__gost = document.querySelector('#corner-name-away');
        this.actionText = this.parentEl.querySelector('.finalActionText');
    }
    setSecondPlayerSelected() {
        this.secondPlayerSelected = true;
    }
    setSecondPlayerSelectedFalse() {
        this.secondPlayerSelected = false;
    }
    getActivePlayers() {
        this.korner__domacin.label = domacin.clubName;
        this.korner__gost.label = gost.clubName;

        for (let i = 1; i < domacin.activeLineUp.length; i++) {
            this.korner__domacin.appendChild(document.createElement('option')).innerText = domacin.activeLineUp[i];
        }
        for (let i = 1; i < gost.activeLineUp.length; i++) {
            this.korner__gost.appendChild(document.createElement('option')).innerText = gost.activeLineUp[i];
        }

        if (this.parentEl == document.querySelector('#setCorner')) {
            this.parentEl.querySelector('.activePlayer').getElementsByTagName('option')[3].selected = 'selected';
        }
    }

    clearActivePlayers() {
        let clear1 = this.korner__domacin.getElementsByTagName('option');
        let clear2 = this.korner__gost.getElementsByTagName('option');

        while (clear1.length > 0) {
            clear1[clear1.length - 1].remove();
        }
        while (clear2.length > 0) {
            clear2[clear2.length - 1].remove();
        }
    }
    getIndexActivePlayer() {
        this.activePlayer = this.parentEl.querySelector('.activePlayer').value;

        if (gost.activeLineUp.includes(this.activePlayer)) {
            this.team__ATT = gost;
            this.team__GK = domacin;
            this.noATT = 1;
            this.noGK = 2;
        } else {
            this.team__ATT = domacin;
            this.team__GK = gost;
            this.noATT = 2;
            this.noGK = 1;
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
            for (let i = 1; i < gost.activeLineUp.length; i++) {
                this.team__ATT = domacin;
                this.team__GK = gost;
                this.noATT = 2;
                this.noGK = 1;
                this.parentEl.querySelector('.secondTeamPlayers').appendChild(document.createElement('option')).innerText = gost.activeLineUp[i];
            }
            for (let i = 1; i < domacin.activeLineUp.length; i++) {
                this.parentEl.querySelector('.headerTeamPlayers').appendChild(document.createElement('option')).innerText = domacin.activeLineUp[i];
            }
        }
        if (gost.activeLineUp.includes(this.activePlayer)) {
            for (let i = 1; i < domacin.activeLineUp.length; i++) {
                this.team__ATT = gost;
                this.team__GK = domacin;
                this.noATT = 1;
                this.noGK = 2;
                this.parentEl.querySelector('.secondTeamPlayers').appendChild(document.createElement('option')).innerText = domacin.activeLineUp[i];
            }
            for (let i = 1; i < gost.activeLineUp.length; i++) {
                this.parentEl.querySelector('.headerTeamPlayers').appendChild(document.createElement('option')).innerText = gost.activeLineUp[i];
            }
        }

        document.querySelector('#corner-name1').getElementsByTagName('option')[
            document.querySelector('#corner-name1').getElementsByTagName('option').length - 1
        ].selected = 'selected';
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
        this.dice__ATT = Math.floor(Math.random() * 9 + this.noATT);
        this.dice__GK = Math.floor(Math.random() * 9 + this.noGK);
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
            semafor.semaforGoalScored(this.activePlayer, this.team__ATT);
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
