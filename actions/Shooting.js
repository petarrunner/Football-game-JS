import { playersList, teamsList } from '../0__teamsBase.js';
import { domacin, gost, info, semafor } from '../controller.js';
import Actions from './Actions.js';

export default class Shooting extends Actions {
    constructor() {
        super();
    }
    selectPlayers;
    teamName;
    checkBox__closeShot;
    checkBox__openShot;
    team__ATT;
    team__GK;
    rating__ATT;
    rating__GK;
    dice__ATT;
    dice__GK;
    index__teamATT;
    index__teamGK;

    writeClubName() {
        document.querySelector('#field-shooting-home').querySelector('.fieldType').innerText = info.clubName__home;
        document.querySelector('#field-shooting-away').querySelector('.fieldType').innerText = info.clubName__away;
    }

    getActivePlayers() {
        let activeTeam;
        this.parentEl === document.querySelector('#field-shooting-home') ? (activeTeam = domacin.activeLineUp) : (activeTeam = gost.activeLineUp);
        for (let i = 1; i < activeTeam.length; i++) {
            this.selectPlayers.appendChild(document.createElement('option')).innerText = activeTeam[i];
        }
        this.selectPlayers.getElementsByTagName('option')[activeTeam.length - 2].selected = 'selected';
    }

    getIndexActivePlayer() {
        this.activePlayer = this.parentEl.querySelector('.activePlayer').value;

        if (domacin.activeLineUp.includes(this.activePlayer)) {
            this.team__ATT = domacin;
            this.team__GK = gost;
            this.index__teamATT = domacin.index;
            this.index__teamGK = gost.index;
            this.noATT = 2;
            this.noGK = 1;
        }
        if (gost.activeLineUp.includes(this.activePlayer)) {
            this.team__ATT = gost;
            this.team__GK = domacin;
            this.index__teamATT = gost.index;
            this.index__teamGK = domacin.index;
            this.noATT = 1;
            this.noGK = 2;
        }

        this.index__activePlayer = teamsList[this.index__teamATT].playerName.indexOf(this.activePlayer);
    }

    calculateAttackerRating() {
        this.rating__ATT = playersList[this.index__teamATT][this.index__activePlayer].shooting;
        this.rating__GK = playersList[this.index__teamGK][0].ratingGk;

        this.dice__ATT = Math.floor(Math.random() * 9 + this.noATT);
        this.dice__GK = Math.floor(Math.random() * 9 + this.noGK);
        this.result = this.rating__ATT + this.dice__ATT - this.rating__GK - this.dice__GK;
    }

    checkBox() {
        if (this.checkBox__closeShot.checked == true) {
            this.result++;
        }
        if (this.checkBox__openShot.checked == true) {
            this.result++;
        }
    }

    checkResult() {
        let text;
        if (this.result >= 1) {
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

    clearActivePlayers() {
        let clear1 = this.parentEl.getElementsByTagName('option');
        while (clear1.length > 0) {
            clear1[clear1.length - 1].remove();
        }
    }

    writeInConsoleLog() {
        console.log(`Action => Shot on goal!`);
        console.log(`${this.activePlayer} : ${this.rating__ATT} + ${this.dice__ATT} = ${this.rating__ATT + this.dice__ATT}`);
        console.log(`${playersList[this.index__teamGK][0].playerName} : ${this.rating__GK} + ${this.dice__GK} = ${this.rating__GK + this.dice__GK}`);
        console.log('Result: ', this.result, '=>', this.parentEl.querySelector('.finalActionText').innerText);
    }

    finalAction() {
        this.getIndexActivePlayer();
        this.calculateAttackerRating();
        this.checkBox();
        this.checkResult();
        this.writeInConsoleLog();
        console.log('-----------------------------------');
    }
}
