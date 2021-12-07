import { TIME_CHANGE } from '../config.js';
import { domacin, gost, info } from '../controller.js';
import * as fields from '../fields.js';

export default class SemaforCl {
    constructor() {}
    time = 0;
    score__home = 0;
    score__away = 0;

    writeNames() {
        fields.field__clubName__home.innerText = info.clubName__home;
        fields.field__clubName__Away.innerText = info.clubName__away;
    }
    timeChange() {
        if (fields.field__Time.innerText <= 40) {
            this.time += TIME_CHANGE;
            fields.field__Time.innerText = this.time;
        } else if (fields.field__Time.innerText == 45 && fields.field__Time__apostrof.innerText != '') {
            fields.field__Time.innerText = 'HT';
            fields.field__Time__apostrof.innerText = '';
        } else if (fields.field__Time.innerText == 'HT') {
            fields.field__Time.innerText = 45;
        } else if (fields.field__Time.innerText == 45 && fields.field__Time__apostrof.innerText == '') {
            this.time = 50;
            fields.field__Time.innerText = this.time;
            fields.field__Time__apostrof.innerText = "'";
        } else if (fields.field__Time.innerText < 90) {
            this.time += TIME_CHANGE;
            fields.field__Time.innerText = this.time;
        } else if (fields.field__Time.innerText == 90) {
            fields.field__Time.innerText = 'FT';
            fields.field__Time__apostrof.innerText = '';
        }
    }
    halfFullTime() {
        if (fields.field__Time.innerText == 'HT' || fields.field__Time.innerText == 'FT') {
            let x1 = document.createElement('P');
            let x2 = document.createElement('P');

            fields.field__Scorer__home.appendChild(x1).innerText = `x`;
            x1.style.visibility = 'hidden';
            fields.field__Scorer__away.appendChild(x2).innerText = `x`;
            x2.style.visibility = 'hidden';
            if (fields.field__Time.innerText == 'HT') {
                fields.field__Scorer__time.appendChild(document.createElement('P')).innerText = 'HT';
            }
            if (fields.field__Time.innerText == 'FT') {
                fields.field__Scorer__time.appendChild(document.createElement('P')).innerText = 'FT';
                fields.field__Time.innerText = 'Final';
            }
        }
    }
    timeChangesAndHTFT() {
        this.timeChange();
        this.halfFullTime();
    }
    goalScored(indexTeamGoal) {
        if (indexTeamGoal == domacin) {
            +fields.field__Score__home.innerText++;
        }
        if (indexTeamGoal == gost) {
            +fields.field__Score__away.innerText++;
        }
    }
    writeTimeGoalScored() {
        let randomNo__regTime = Math.floor(Math.random() * 4 + 1);
        let randomNo__extraTime = Math.floor(Math.random() * 3 + 1);
        let timeScored = document.createElement('P');

        if (
            // Number.isFinite(+fields.field__Scorer__time.innerText) == true &&
            fields.field__Time.innerText != 45 &&
            fields.field__Time.innerText != 90 &&
            fields.field__Time.innerText != 'HT' &&
            fields.field__Time.innerText != 'FT'
        ) {
            timeScored.innerText = `${this.time + randomNo__regTime}'`;
        } else if (fields.field__Time.innerText == 45 && fields.field__Time__apostrof.innerText == "'") {
            timeScored.innerText = `45+${randomNo__extraTime}'`;
        } else if (fields.field__Time.innerText == 'HT') {
            timeScored.innerText = `46'`;
        } else if (fields.field__Time.innerText == 45 && fields.field__Time__apostrof.innerText == '') {
            timeScored.innerText = `${47 + randomNo__extraTime}'`;
            this.time = 50;
        } else if (fields.field__Time.innerText >= 90) {
            timeScored.innerText = `90+${randomNo__extraTime}'`;
        } else {
            timeScored.innerText = `GRESKA'`;
        }
        fields.field__Scorer__time.appendChild(timeScored);
    }
    writeScorerName(scorerName, indexTeamGoal) {
        let empty = document.createElement('P');
        if (indexTeamGoal == domacin) {
            fields.field__Scorer__home.appendChild(document.createElement('P')).innerText = `${scorerName} ⚽`;
            fields.field__Scorer__away.appendChild(empty).innerText = 'x';
        }

        if (indexTeamGoal == gost) {
            fields.field__Scorer__away.appendChild(document.createElement('P')).innerText = `⚽${scorerName}`;
            fields.field__Scorer__home.appendChild(empty).innerText = 'x';
        }
        empty.style.visibility = 'hidden';
    }
    writeNameBooked__yellowCard(playerName, indexTeam, card) {
        let empty = document.createElement('P');
        let text;
        // console.log('CARD: ', card);
        if (indexTeam == domacin) {
            if (card == 'yellow') {
                text = `${playerName} 🟨`;
            }
            if (card == 'secondYellow') {
                text = `${playerName} 🟨🟥`;
            }
            if (card == 'red') {
                text = `${playerName} 🟥`;
            }
            fields.field__Scorer__home.appendChild(document.createElement('P')).innerText = text;
            fields.field__Scorer__away.appendChild(empty).innerText = 'x';
        }
        if (indexTeam == gost) {
            if (card == 'yellow') {
                text = `🟨 ${playerName}`;
            }
            if (card == 'secondYellow') {
                text = `🟨🟥 ${playerName}`;
            }
            if (card == 'red') {
                text = `🟥 ${playerName}`;
            }

            fields.field__Scorer__away.appendChild(document.createElement('P')).innerText = text;
            fields.field__Scorer__home.appendChild(empty).innerText = 'x';
        }
        empty.style.visibility = 'hidden';
    }
    writeCardSemafor(playerName, indexTeam, card) {
        this.writeNameBooked__yellowCard(playerName, indexTeam, card);
        this.writeTimeGoalScored();
    }
    semaforGoalScored(scorerName, indexTeamGoal) {
        this.goalScored(indexTeamGoal);
        this.writeTimeGoalScored();
        this.writeScorerName(scorerName, indexTeamGoal);
    }
}
