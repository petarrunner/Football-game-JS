import Actions from './Actions.js';
import { domacin, gost } from '../controller.js';
import { teamsList } from '../0__teamsBase.js';
import { BONUS_HOME } from '../config.js';

import { defending__homeTeam, defending__awayTeam, dribling__homeTeam, dribling__awayTeam } from '../fields.js';
export default class DriblingAndDefending extends Actions {
    constructor() {
        super();
    }
    secondTeamPlayer;
    index__secondTeamPlayer;
    secondPlayerSelected = false;
    team__ATT = domacin;
    team__GK = gost;
    noATT = 0;
    noGK = 0;

    setSecondPlayerSelected() {
        this.secondPlayerSelected = true;
    }
    setSecondPlayerSelectedFalse() {
        this.secondPlayerSelected = false;
    }
    getActivePlayers() {
        defending__homeTeam.label = domacin.clubName;
        dribling__homeTeam.label = domacin.clubName;
        defending__awayTeam.label = gost.clubName;
        dribling__awayTeam.label = gost.clubName;

        for (let i = 1; i < domacin.activeLineUp.length; i++) {
            defending__homeTeam.appendChild(document.createElement('option')).innerText = domacin.activeLineUp[i];
            dribling__homeTeam.appendChild(document.createElement('option')).innerText = domacin.activeLineUp[i];
        }
        for (let i = 1; i < gost.activeLineUp.length; i++) {
            defending__awayTeam.appendChild(document.createElement('option')).innerText = gost.activeLineUp[i];
            dribling__awayTeam.appendChild(document.createElement('option')).innerText = gost.activeLineUp[i];
        }

        document.querySelector('#field-dribling').getElementsByTagName('option')[
            document.querySelector('#optgroup-driblingHome').getElementsByTagName('option').length - 2
        ].selected = 'selected';
    }

    getIndexActivePlayer() {
        this.activePlayer = this.parentEl.querySelector('.activePlayer').value;
        this.index__teamATT = this.team__ATT.index;
        this.index__teamGK = this.team__GK.index;
        this.index__activePlayer = teamsList[this.index__teamATT].playerName.indexOf(this.activePlayer);
    }

    getSecondTeamPlayers() {
        this.clearDefenders();

        if (domacin.activeLineUp.includes(this.activePlayer)) {
            for (let i = 1; i < gost.activeLineUp.length; i++) {
                this.team__ATT = domacin;
                this.team__GK = gost;
                this.noATT = BONUS_HOME;
                this.parentEl.querySelector('.secondTeamPlayers').appendChild(document.createElement('option')).innerText = gost.activeLineUp[i];
            }
        }
        if (gost.activeLineUp.includes(this.activePlayer)) {
            for (let i = 1; i < domacin.activeLineUp.length; i++) {
                this.team__ATT = gost;
                this.team__GK = domacin;
                this.noGK = BONUS_HOME;
                this.parentEl.querySelector('.secondTeamPlayers').appendChild(document.createElement('option')).innerText = domacin.activeLineUp[i];
            }
        }
    }

    getIndexSecondTeamPlayer() {
        this.secondTeamPlayer = this.parentEl.querySelector('.secondTeamPlayers').value;
        this.index__secondTeamPlayer = teamsList[this.index__teamGK].playerName.indexOf(this.secondTeamPlayer);
    }
    clearActivePlayers() {
        let clear1 = defending__homeTeam.getElementsByTagName('option');
        let clear2 = defending__awayTeam.getElementsByTagName('option');
        let clear3 = dribling__homeTeam.getElementsByTagName('option');
        let clear4 = dribling__awayTeam.getElementsByTagName('option');

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
