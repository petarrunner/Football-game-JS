import { playersList } from '../0__teamsBase.js';
import { corner, domacin, gost, info, semafor, setPiece, shootingAway, shootingHome } from '../controller.js';
import DriblingAndDefending from './DriblindAndDefending.js';

export default class Defending extends DriblingAndDefending {
    karton = 0;
    textKarton = '';
    text = '';
    kartonZbir = 0;
    constructor() {
        super();
        this.parentEl = document.querySelector('#field-defending');
        this.selectPlayers = this.parentEl.querySelector('.activePlayer');
        this.actionText = this.parentEl.querySelector('.finalActionText');
    }
    calculateRatings() {
        ////////////////////////////////////
        this.dice__ATT = Math.floor(Math.random() * 9 + this.noATT);
        this.dice__GK = Math.floor(Math.random() * 9 + this.noGK);

        this.rating__ATT = playersList[this.index__teamATT][this.index__activePlayer].defending;
        this.rating__GK = playersList[this.index__teamGK][this.index__secondTeamPlayer].dribling;

        this.result = this.rating__ATT + this.dice__ATT - this.rating__GK - this.dice__GK;
    }
    checkbox() {
        if (document.querySelector('#defence1') == true) {
            this.result++;
        }
        if (document.querySelector('#defence2').checked === true) {
            this.karton += 3;
        }
        if (document.querySelector('#defence3').checked === true) {
            this.karton++;
        }
    }
    foulAndCard() {
        this.karton = 0;

        let kartonKockica = Math.floor(Math.random() * 5);

        if (playersList[this.index__teamATT][this.index__activePlayer].position == 'defender') {
            this.karton += 5;
        }
        if (playersList[this.index__teamATT][this.index__activePlayer].position == 'midfielder') {
            this.karton += 2;
        }
        if (playersList[this.index__teamATT][this.index__activePlayer].position == 'forward') {
            this.karton--;
        }
        this.checkbox();
        this.kartonZbir = this.karton + kartonKockica;
    }
    yellowCard() {
        info.yellowCardList.push(this.activePlayer);
    }
    deletePlayerFromActiveLineUps() {
        if (domacin.activeLineUp.includes(this.activePlayer)) {
            let teamNew = domacin.activeLineUp;
            teamNew = teamNew.filter(p => p !== this.activePlayer);
            domacin.activeLineUp = teamNew;
            // console.log(domacin.activeLineUp);
        }
        if (gost.activeLineUp.includes(this.activePlayer)) {
            let teamNew = gost.activeLineUp;
            teamNew = teamNew.filter(p => p !== this.activePlayer);
            gost.activeLineUp = teamNew;
        }
    }
    redCard() {
        info.redCardList.push(this.activePlayer);
        this.deletePlayerFromActiveLineUps();
        this.clearActivePlayers();

        shootingHome.clearActivePlayers();
        shootingAway.clearActivePlayers();
        setPiece.clearActivePlayers();
        corner.clearActivePlayers();

        this.getActivePlayers();
        shootingHome.getActivePlayers();
        shootingAway.getActivePlayers();
        setPiece.getActivePlayers();
        corner.getActivePlayers();
    }
    checkResult() {
        this.foulAndCard();
        let card;
        if (this.result >= 3) {
            this.text = `Great tackle!`;
        } else if (this.result >= 1 && this.result < 3) {
            this.text = `To the rival's goal!`;
        } else if (this.result >= 0 && this.result < 1) {
            this.text = `To the out line!`;
        } else if (this.result >= -2 && this.result < 0) {
            this.text = `To the middle!`;
        } else if (this.result >= -5 && this.result < -2) {
            this.text = `Foul!`;
        } else if (this.result < -5) {
            if (this.kartonZbir <= 1) {
                this.textKarton = `, but no card`;
            } else if (this.kartonZbir > 1 && this.kartonZbir <= 10 && info.yellowCardList.includes(this.activePlayer) == false) {
                card = 'yellow';
                this.textKarton = `! That's a yellow card`;
                this.yellowCard();
                semafor.writeCardSemafor(this.activePlayer, this.team__ATT, card);
                console.log('zuti karton');
            } else if (this.kartonZbir > 1 && this.kartonZbir <= 10 && info.yellowCardList.includes(this.activePlayer)) {
                card = 'secondYellow';
                this.textKarton = `! That's his second yellow card and red card`;
                this.redCard();
                semafor.writeCardSemafor(this.activePlayer, this.team__ATT, card);
            } else if (this.kartonZbir > 10) {
                card = 'red';
                this.textKarton = `! It's a direct red card`;
                this.redCard();
                semafor.writeCardSemafor(this.activePlayer, this.team__ATT, card);
            }
            this.text = `Foul${this.textKarton}! `;
        }
        this.parentEl.querySelector('.finalActionText').innerText = this.text;
    }
    writeInConsoleLog() {
        console.log(`Action => Defending`);
        console.log(`${this.activePlayer} : ${this.rating__ATT} + ${this.dice__ATT} = ${this.rating__ATT + this.dice__ATT}`);
        console.log(`${this.secondTeamPlayer} : ${this.rating__GK} + ${this.dice__GK} = ${this.rating__GK + this.dice__GK}`);
        console.log('Result: ', this.result, 'kartonZbir:', this.kartonZbir, '=>', this.text);
        // console.log('Result: ', this.result, '=>', this.text);
        console.log('-----------------------------------');
    }
    firstAction() {
        this.getIndexActivePlayer();
        this.getSecondTeamPlayers();
        this.getIndexActivePlayer();
        this.setSecondPlayerSelected();
    }
    finalAction() {
        this.getIndexSecondTeamPlayer();
        this.calculateRatings();
        this.foulAndCard();
        this.checkResult();
        this.getSecondTeamPlayers();
        this.writeInConsoleLog();
        this.clearDefenders();
        semafor.timeChangesAndHTFT();
        this.setSecondPlayerSelectedFalse();
    }
}
