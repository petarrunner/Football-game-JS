import DriblingAndDefending from './DriblindAndDefending.js';
import { semafor, dribling, defending } from '../controller.js';
import { teamsList, playersList } from '../0__teamsBase.js';
import { info } from '../controller.js';
import { shot1, shot2, domacin, gost, setPiece, corner } from '../controller.js';
import Corner from './6__corner.js';

export default class Defending extends DriblingAndDefending {
    karton = 0;
    textKarton = '';
    text = '';
    kartonZbir = 0;
    constructor() {
        super();
        this.parentEl = document.querySelector('#oduzimanje');
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

        ///////////////////////////
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
        // console.log('karton', this.karton);
        // console.log('kartonKockica', kartonKockica);
        // console.log('kartonZbir', this.kartonZbir);
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
        shot1.clearActivePlayers();
        shot2.clearActivePlayers();
        setPiece.clearActivePlayers();
        corner.clearActivePlayers();
        // dribling.clearActivePlayers();

        // defending.getActivePlayers();
        // dribling.getActivePlayers();
        this.getActivePlayers();
        // shot1.getActivePlayersAfterRedCard(domacin.activeLineUp);
        shot1.getActivePlayers();
        shot2.getActivePlayers();
        // shot2.getActivePlayersAfterRedCard(gost.activeLineUp);
        setPiece.getActivePlayers();
        corner.getActivePlayers();
    }
    checkResult() {
        // console.log('---before:---');
        // console.log('YellowList:', info.yellowCardList);
        // console.log('YellowList:', info.yellowCardList.length);
        // console.log(info.yellowCardList.includes(this.activePlayer));
        this.foulAndCard();
        let card;
        this.result = -10;
        this.kartonZbir = 20;
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
                /////////////////////
                // console.log('---during:---');
                // console.log('YellowList:', info.yellowCardList);
                // console.log('YellowList:', info.yellowCardList.length);
                // console.log('RedList:', info.redCardList);
                // console.log('RedList:', info.redCardList.length);
            } else if (this.kartonZbir > 10) {
                card = 'red';
                this.textKarton = `! It's a direct red card`;
                this.redCard();
                semafor.writeCardSemafor(this.activePlayer, this.team__ATT, card);
            }
            this.text = `Foul${this.textKarton}! `;
        }
        // console.log('---after:---');
        // console.log('YellowList:', info.yellowCardList);
        // console.log('YellowList:', info.yellowCardList.length);
        // console.log(info.yellowCardList.includes(this.activePlayer));
        // console.log(this.karton);
        // console.log(this.textKarton);
        this.parentEl.querySelector('.finalActionText').innerText = this.text;
        // console.log(this.text);
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
    }
    finalAction() {
        this.getIndexSecondTeamPlayer();
        this.calculateRatings();
        this.foulAndCard();
        this.checkResult();
        this.clearDefenders();
        this.getSecondTeamPlayers();

        this.writeInConsoleLog();
        semafor.timeChangesAndHTFT();
    }
}
