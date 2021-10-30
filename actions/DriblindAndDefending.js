import Actions from './Actions.js';
import { domacin, gost } from '../controller.js';
import { teamsList } from '../0__teamsBase.js';

export default class DriblingAndDefending extends Actions {
    secondTeamPlayer;
    index__secondTeamPlayer;

    team__ATT = domacin;
    team__GK = gost;

    rating__ATT;
    rating__GK;
    result = 0;
    dice__ATT;
    dice__GK;
    oduzimanje__domacin = document.querySelector('#oduzimanjeDomacin');
    oduzimanje__gost = document.querySelector('#oduzimanjeGost');
    dribling__domacin = document.querySelector('#driblingDomacin');
    dribling__gost = document.querySelector('#driblingGost');

    constructor() {
        super();
    }
    getActivePlayers() {
        this.oduzimanje__domacin.label = domacin.clubName;
        this.dribling__domacin.label = domacin.clubName;
        this.oduzimanje__gost.label = gost.clubName;
        this.dribling__gost.label = gost.clubName;

        for (let i = 1; i < domacin.activeLineUp.length; i++) {
            this.oduzimanje__domacin.appendChild(document.createElement('option')).innerText = domacin.activeLineUp[i];
            this.dribling__domacin.appendChild(document.createElement('option')).innerText = domacin.activeLineUp[i];
        }
        for (let i = 1; i < gost.activeLineUp.length; i++) {
            this.oduzimanje__gost.appendChild(document.createElement('option')).innerText = gost.activeLineUp[i];
            this.dribling__gost.appendChild(document.createElement('option')).innerText = gost.activeLineUp[i];
        }

        document.querySelector('#dribling').getElementsByTagName('option')[
            document.querySelector('#driblingDomacin').getElementsByTagName('option').length - 2
        ].selected = 'selected';

        console.log(domacin.activeLineUp.length - 3);
        console.log(document.querySelector('#driblingDomacin').getElementsByTagName('option').length - 2);
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
    getSecondTeamPlayers() {
        this.clearDefenders();

        if (gost.activeLineUp.includes(this.activePlayer)) {
            for (let i = 1; i < domacin.activeLineUp.length; i++) {
                this.team__ATT = gost;
                this.team__GK = domacin;
                this.noATT = 1;
                this.noGK = 2;
                this.parentEl.querySelector('.secondTeamPlayers').appendChild(document.createElement('option')).innerText = domacin.activeLineUp[i];
            }
        }
        if (domacin.activeLineUp.includes(this.activePlayer)) {
            for (let i = 1; i < gost.activeLineUp.length; i++) {
                this.team__ATT = domacin;
                this.team__GK = gost;
                this.noATT = 2;
                this.noGK = 1;
                this.parentEl.querySelector('.secondTeamPlayers').appendChild(document.createElement('option')).innerText = gost.activeLineUp[i];
            }
        }
    }

    getIndexSecondTeamPlayer() {
        this.secondTeamPlayer = this.parentEl.querySelector('.secondTeamPlayers').value;
        this.index__secondTeamPlayer = teamsList[this.index__teamGK].playerName.indexOf(this.secondTeamPlayer);
    }
    clearActivePlayers() {
        let clear1 = this.oduzimanje__domacin.getElementsByTagName('option');
        let clear2 = this.oduzimanje__gost.getElementsByTagName('option');
        let clear3 = this.dribling__domacin.getElementsByTagName('option');
        let clear4 = this.dribling__gost.getElementsByTagName('option');

        while (clear1.length > 0) {
            clear1[clear1.length - 1].remove();
            clear3[clear3.length - 1].remove();
        }
        while (clear2.length > 0) {
            clear2[clear2.length - 1].remove();
            clear4[clear4.length - 1].remove();
        }
    }
    clearDefenders() {
        let clear = this.parentEl.querySelector('.secondTeamPlayers').getElementsByTagName('option');
        while (clear.length > 0) {
            clear[clear.length - 1].remove();
        }
    }
}
