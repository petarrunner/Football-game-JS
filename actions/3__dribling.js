import { playersList } from '../0__teamsBase.js';
import { semafor } from '../controller.js';
import DriblingAndDefending from './DriblindAndDefending.js';

export default class Dribling extends DriblingAndDefending {
    constructor() {
        super();
        this.parentEl = document.querySelector('#field-dribling');
        this.selectPlayers = this.parentEl.querySelector('.activePlayer');
        this.actionText = this.parentEl.querySelector('.finalActionText');
    }

    calculateRatings() {
        this.dice__ATT = this.getRandomNumber(10) + this.noATT;
        this.dice__GK = this.getRandomNumber(10) + this.noGK;

        this.rating__ATT = playersList[this.index__teamATT][this.index__activePlayer].dribling;
        this.rating__GK = playersList[this.index__teamGK][this.index__secondTeamPlayer].defending;

        this.result = this.rating__ATT + this.dice__ATT - this.rating__GK - this.dice__GK;
    }

    checkResult() {
        let text;
        if (this.result >= 1) {
            text = `Dribling! `;
        } else if (this.result == 0) {
            text = `Izbio ka autu!`;
        } else if (this.result == -1) {
            text = `Izbio ka autu!`;
        } else if (this.result == -2) {
            text = `Izbio ka unutra!`;
        } else if (this.result >= -7 && this.result <= -3) {
            text = `Izgubio loptu!`;
        } else if (this.result <= -8) {
            text = `Faul!`;
        }
        document.querySelector('#text-finalAction-dribling').innerText = text;
    }
    writeInConsoleLog() {
        console.log(`Action => Dribling`);
        console.log(`${this.activePlayer} : ${this.rating__ATT} + ${this.dice__ATT} = ${this.rating__ATT + this.dice__ATT}`);
        console.log(`${this.secondTeamPlayer} : ${this.rating__GK} + ${this.dice__GK} = ${this.rating__GK + this.dice__GK}`);
        console.log('Result: ', this.result, '=>', document.querySelector('#text-finalAction-dribling').innerText);
        console.log('-----------------------------------');
    }

    firstAction() {
        this.getIndexActivePlayer();
        this.getSecondTeamPlayers();
        this.setSecondPlayerSelected();
    }
    finalAction() {
        this.getIndexActivePlayer();
        this.getIndexSecondTeamPlayer();
        this.calculateRatings();
        this.checkResult();
        this.clearActivePlayers();
        this.getActivePlayers();
        this.writeInConsoleLog();
        this.clearDefenders();
        semafor.timeChangesAndHTFT();
        this.setSecondPlayerSelectedFalse();
    }
}
