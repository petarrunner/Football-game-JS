import DriblingAndDefending from './DriblindAndDefending.js';
import { domacin, gost, semafor } from '../controller.js';
import { teamsList, playersList } from '../0__teamsBase.js';
import { field__Time } from '../fields.js';

export default class SetPieces extends DriblingAndDefending {
    prekid__domacin = document.querySelector('#prekid-ime-domacin');
    prekid__gost = document.querySelector('#prekid-ime-gost');
    rez1;
    rez2;
    constructor() {
        super();
        this.parentEl = document.querySelector('#setPiece');
        this.selectPlayers = this.parentEl.querySelector('.activePlayer');
        // this.activeLineUp = domacin.activeLineUp;
        this.prekid__domacin.label = domacin.clubName;
        this.prekid__gost.label = gost.clubName;
    }
    getActivePlayers() {
        this.prekid__domacin.label = domacin.clubName;
        this.prekid__gost.label = gost.clubName;
        for (let i = 1; i < domacin.activeLineUp.length; i++) {
            this.prekid__domacin.appendChild(document.createElement('option')).innerText = domacin.activeLineUp[i];
            this.prekid__gost.appendChild(document.createElement('option')).innerText = gost.activeLineUp[i];
        }

        if (this.parentEl == document.querySelector('#setPiece')) {
            this.selectPlayers.getElementsByTagName('option')[4].selected = 'selected';
        }
    }
    clearActivePlayers() {
        let clear1 = this.prekid__domacin.getElementsByTagName('option');
        let clear2 = this.prekid__gost.getElementsByTagName('option');
        console.log(clear1);
        console.log(clear1.length);
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
    checkHomeAway() {
        if (domacin.activeLineUp.includes(this.activePlayer)) {
            this.index__teamATT = domacin.index;
            this.index__teamGK = gost.index;
        }
        if (gost.activeLineUp.includes(this.activePlayer)) {
            this.index__teamATT = gost.index;
            this.index__teamGK = domacin.index;
        }
    }

    checkBox() {
        this.dice__ATT = Math.floor(Math.random() * 9 + 1);
        this.dice__GK = Math.floor(Math.random() * 7 + 3);
        if (document.querySelector('#prekid1') == true) {
            this.dice__ATT = Math.floor(Math.random() * 8 + 2);
            this.dice__GK = Math.floor(Math.random() * 8 + 2);
        }
        if (document.querySelector('#prekid2').checked == true) {
            this.dice__ATT = Math.floor(Math.random() * 10 + 5);
            this.dice__GK = Math.floor(Math.random() * 15 + 1);
            this.rez1 =
                Math.floor(
                    playersList[this.index__teamATT][this.index__activePlayer].freekicks +
                        (2 * playersList[this.index__teamATT][this.index__activePlayer].shooting) / 3
                ) + this.dice__ATT;
        }
    }

    calculateAttackerRating() {
        this.rez1 = Math.floor(
            (2 * playersList[this.index__teamATT][this.index__activePlayer].freekicks +
                playersList[this.index__teamATT][this.index__activePlayer].shooting) /
                3
        );

        this.rez2 = playersList[this.index__teamGK][0].ratingGk;
        this.result = this.rez1 + this.dice__ATT - this.rez2 - this.dice__GK;
    }
    checkResult() {
        let text;

        if (this.result >= 1 && Number.isFinite(+field__Time.innerText) == true) {
            text = `Goool !!!`;
            semafor.semaforGoalScored(this.activePlayer, this.team__ATT);
        } else if (this.result > -3 && this.result <= 0) {
            text = `Corner!`;
        } else if (this.result > -6 && this.result <= -3) {
            text = `Goal Kick!`;
        } else if (this.result <= -6) {
            text = `Great save!`;
        }
        document.querySelector('#kraj-akcije-prekid').innerText = text;
        semafor.timeChangesAndHTFT();
    }

    clearActivePlayers() {
        let clear1 = this.parentEl.getElementsByTagName('option');
        while (clear1.length > 0) {
            clear1[clear1.length - 1].remove();
        }
    }
    writeInConsoleLog() {
        console.log(`Action => Set piece!`);
        console.log(`${this.activePlayer} : ${this.rez1} + ${this.dice__ATT} = ${this.rez1 + this.dice__ATT}`);
        console.log(`${playersList[this.index__teamGK][0].playerName} : ${this.rez2} + ${this.dice__GK} = ${this.rez2 + this.dice__GK}`);
        console.log('Result: ', this.result, '=>', this.parentEl.querySelector('.finalActionText').innerText);
        console.log('-----------------------------------');
    }
    finalAction() {
        this.getIndexActivePlayer();
        this.checkHomeAway();
        this.checkBox();
        this.calculateAttackerRating();
        this.checkResult();
        this.writeInConsoleLog();
    }
}
