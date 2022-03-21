import { TIME_CHANGE } from '../config.js';
import { domacin, gost, info, semafor } from '../controller.js';
import * as fields from '../fields.js';

export default class ScoreboardCl {
    constructor() {}
    time = 0;
    score__home = 0;
    score__away = 0;
    firstHalf = false;
    secondHalf = false;
    halfTime = false;
    isPlaying = false;
    // teamsSelected = false;

    writeNames() {
        fields.field__clubName__home.innerText = info.clubName__home;
        fields.field__clubName__away.innerText = info.clubName__away;
    }
    // setTeamsSelected() {
    //     this.teamsSelected = true;
    // }

    setStartMatch() {
        this.isPlaying = true;
        this.firstHalf = true;
    }
    setChangeTime() {
        this.time += TIME_CHANGE;
        fields.field__time.innerText = `${this.time}'`;
    }
    setHalfTime() {
        fields.field__time.innerText = `${this.time}'`;
        this.firstHalf = false;
        this.halfTime = true;
    }
    setSecondHalfStart() {
        this.time += TIME_CHANGE;
        fields.field__time.innerText = `${this.time}'`;
        this.halfTime = false;
        this.secondHalf = true;
    }
    setFullTime() {
        this.time += TIME_CHANGE;
        this.isPlaying = false;
        this.secondHalf = false;
    }
    timeChange() {
        if (this.firstHalf) {
            if (this.time < 45) {
                this.setChangeTime();
            } else if (this.time === 45) {
                this.setHalfTime();
            }
        } else if (this.halfTime) {
            this.setSecondHalfStart();
        } else if (this.secondHalf) {
            if (this.time <= 85) {
                this.setChangeTime();
            } else if (this.time === 90) {
                this.setFullTime();
            }
        }
    }

    halfFullTime() {
        if (this.halfTime || this.isPlaying === false) {
            let x1 = document.createElement('P');
            let x2 = document.createElement('P');

            fields.field__scorer__home.appendChild(x1).innerText = `x`;
            x1.style.visibility = 'hidden';
            fields.field__scorer__away.appendChild(x2).innerText = `x`;
            x2.style.visibility = 'hidden';

            if (this.halfTime) {
                fields.field__scorer__time.appendChild(document.createElement('P')).innerText = 'HT';
            }
            if (this.isPlaying == false) {
                fields.field__scorer__time.appendChild(document.createElement('P')).innerText = 'FT';
                fields.field__time.innerText = 'Final';
            }
        }
    }

    timeChangesAndHTFT() {
        this.timeChange();
        this.halfFullTime();
    }

    goalScored(indexTeamGoal) {
        if (indexTeamGoal == domacin) this.score__home++;
        if (indexTeamGoal == gost) this.score__away++;
        fields.field__score.innerText = `${this.score__home} : ${this.score__away}`;
    }

    writeTimeGoalScored() {
        let randomNo__regTime = Math.floor(Math.random() * 4 + 1);
        let randomNo__extraTime = Math.floor(Math.random() * 3 + 1);
        let timeScored = document.createElement('P');

        //FIRST HALF
        if (this.firstHalf && semafor.time <= 40) {
            timeScored.innerText = `${this.time + randomNo__regTime}'`;
        } else if (semafor.time == 45) {
            timeScored.innerText = `45+${randomNo__extraTime}'`;
        }

        // HALF TIME
        if (this.halfTime) {
            timeScored.innerText = `${this.time + randomNo__regTime}'`;
        }

        // SECOND HALF
        if (this.secondHalf) {
            if (semafor.time < 90) {
                timeScored.innerText = `${this.time + randomNo__regTime}'`;
            } else if (semafor.time >= 90) {
                timeScored.innerText = `90+${randomNo__extraTime}'`;
            } else {
                timeScored.innerText = `GRESKA`;
            }
        }

        fields.field__scorer__time.appendChild(timeScored);
    }

    writeScorerName(scorerName, indexTeamGoal) {
        let empty = document.createElement('P');
        if (indexTeamGoal == domacin) {
            fields.field__scorer__home.appendChild(document.createElement('P')).innerText = `${scorerName} ⚽`;
            fields.field__scorer__away.appendChild(empty).innerText = 'x';
        }

        if (indexTeamGoal == gost) {
            fields.field__scorer__away.appendChild(document.createElement('P')).innerText = `⚽${scorerName}`;
            fields.field__scorer__home.appendChild(empty).innerText = 'x';
        }
        empty.style.visibility = 'hidden';
    }

    writeNameBooked__yellowCard(playerName, indexTeam, card) {
        let empty = document.createElement('P');
        let text;

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
            fields.field__scorer__home.appendChild(document.createElement('P')).innerText = text;
            fields.field__scorer__away.appendChild(empty).innerText = 'x';
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

            fields.field__scorer__away.appendChild(document.createElement('P')).innerText = text;
            fields.field__scorer__home.appendChild(empty).innerText = 'x';
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
