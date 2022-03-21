import { teamsList, playersList } from '../0__teamsBase.js';
import { semafor } from '../controller.js';

export default class TeamsView {
    index;
    clubName;
    activeLineUp = [];
    allPlayers = [];
    imgLogo;
    firstTeamCompleted = false;
    secondTeamCompleted = false;
    writeClubName() {
        this.parentEl.querySelector('.line-ups-name-class').innerText = this.clubName;
    }
    writeCoachName() {
        this.parentEl.querySelector('.line-ups-coach-class').innerText = teamsList[this.index].coach;
    }
    writeAllPlayers() {
        this.allPlayers = teamsList[this.index].playerName;
    }
    changeClubLogo() {
        this.imgLogo = this.parentEl.querySelector('.logo-class-img');
        this.imgLogo.src = teamsList[this.index].logo;
    }
    changeBackgroudColor() {
        this.parentEl.style.backgroundColor = teamsList[this.index].color1;
        this.parentEl.style.color = teamsList[this.index].color2;
        this.imgLogo.style.backgroundColor = teamsList[this.index].color3;
    }
    sortDefenders(a, b) {
        if (a.defending > b.defending) {
            return -1;
        }
        if (a.defending < b.defending) {
            return 1;
        }
        return 0;
    }
    sortMidlfielders(a, b) {
        if (a.dribling > b.dribling) {
            return -1;
        }
        if (a.dribling < b.dribling) {
            return 1;
        }
        return 0;
    }
    sortAttackers(a, b) {
        if (a.shooting > b.shooting) {
            return -1;
        }
        if (a.shooting < b.shooting) {
            return 1;
        }
        return 0;
    }
    addPlayersToSelectLineUps() {
        let addedText = '';
        if (this.parentEl == document.querySelector('#line-ups-away')) {
            addedText = '-a';
        }
        let defenders = playersList[this.index]
            .filter(n => n.position === 'defender')
            .sort(this.sortDefenders)
            .map(m => m.playerName);

        defenders.forEach(function (player) {
            document.querySelector(`#playerNameNo1${addedText}`).appendChild(document.createElement('option')).innerText = document
                .querySelector(`#playerNameNo2${addedText}`)
                .appendChild(document.createElement('option')).innerText = player;
        });

        document.querySelector(`#playerNameNo2${addedText}`).getElementsByTagName('option')[1].selected = 'selected';

        let midlfielders = playersList[this.index]
            .filter(n => n.position == 'midfielder')
            .sort(this.sortMidlfielders)
            .map(m => m.playerName);

        midlfielders.forEach(function (player) {
            document.querySelector(`#playerNameNo3${addedText}`).appendChild(document.createElement('option')).innerText =
                document.querySelector(`#playerNameNo4${addedText}`).appendChild(document.createElement('option')).innerText =
                document.querySelector(`#playerNameNo5${addedText}`).appendChild(document.createElement('option')).innerText =
                    player;
        });
        document.querySelector(`#playerNameNo3${addedText}`).getElementsByTagName('option')[2].selected = 'selected';
        document.querySelector(`#playerNameNo4${addedText}`).getElementsByTagName('option')[1].selected = 'selected';

        let attackers = playersList[this.index]
            .filter(n => n.position == 'forward')
            .sort(this.sortAttackers)
            .map(m => m.playerName);

        attackers.forEach(function (player) {
            document.querySelector(`#playerNameNo5${addedText}`).appendChild(document.createElement('option')).innerText = document
                .querySelector(`#playerNameNo6${addedText}`)
                .appendChild(document.createElement('option')).innerText = player;
        });
    }
    changeLowerField() {
        this.activeLineUp.push(playersList[this.index][0].playerName);

        for (let m = 1; m <= 6; m++) {
            let name = document.querySelector('#playerNameNo' + [m]).value;
            const h = teamsList[this.index].playerName.indexOf(name);
            this.activeLineUp.push(name);
            document.querySelector('#playerNo' + [m]).innerText = playersList[this.index][h].kitNumber;
            document.querySelector('#playerNo' + [m]).classList.remove('visibilityToHidden');
            document.querySelector('#playerSpecNo' + [m]).innerText = playersList[this.index][h].specials;
            if (playersList[this.index][h].specials != '/') {
                document.querySelector('#playerSpecNo' + [m]).classList.remove('visibilityToHidden');
            }
            document.querySelector('#playerNamePNo' + [m]).classList.add('visibleLineUps');
            document.querySelector('#playerNamePNo' + [m]).innerText = playersList[this.index][h].playerName;
        }

        document.querySelector('#form-home').remove();
        document.querySelector('#playerNo').classList.remove('visibilityToHidden');
        document.querySelector('#playerNamePNo').innerText = playersList[this.index][0].playerName;
        document.querySelector('#playerNamePNo').classList.remove('visibilityToHidden');
    }
    changeLowerFieldAWAY() {
        this.activeLineUp.push(playersList[this.index][0].playerName);
        for (let m = 1; m <= 6; m++) {
            let name = document.querySelector('#playerNameNo' + [m] + '-a').value;
            const h = teamsList[this.index].playerName.indexOf(name);
            this.activeLineUp.push(name);
            document.querySelector('#playerNo' + [m] + '-a').innerText = playersList[this.index][h].kitNumber;
            document.querySelector('#playerNo' + [m] + '-a').classList.remove('visibilityToHidden');
            document.querySelector('#playerSpecNo' + [m] + '-a').innerText = playersList[this.index][h].specials;
            if (playersList[this.index][h].specials != '/') {
                document.querySelector('#playerSpecNo' + [m] + '-a').classList.remove('visibilityToHidden');
            }
            document.querySelector('#playerNamePNo' + [m] + '-a').classList.add('visibleLineUps');
            document.querySelector('#playerNamePNo' + [m] + '-a').innerText = playersList[this.index][h].playerName;
        }

        document.querySelector('#form-away').remove();
        document.querySelector('#playerNo-a').classList.remove('visibilityToHidden');
        document.querySelector('#playerNamePNo-a').innerText = playersList[this.index][0].playerName;
        document.querySelector('#playerNamePNo-a').classList.remove('visibilityToHidden');
    }
    checkStartingLineups() {
        let addedText = '';
        let secondList = [];

        if (this.parentEl == document.querySelector('#line-ups-away')) {
            addedText = '-a';
        }

        for (let i = 1; i < 7; i++) {
            let name = document.querySelector(`#playerNameNo${i}${addedText}`).value;

            if (!secondList.includes(name)) {
                secondList.push(name);
            }
        }

        if (secondList.length == 6 && addedText == '') {
            this.firstTeamCompleted = true;
        }

        if (secondList.length == 6 && addedText == '-a') {
            this.secondTeamCompleted = true;
        }
    }

    firstAction() {
        this.setNameAndIndex();
        this.writeClubName();
        this.writeCoachName();
        this.writeAllPlayers();
        this.changeClubLogo();
        this.changeBackgroudColor();
        this.addPlayersToSelectLineUps();
    }
    finalAction() {
        this.parentEl == document.querySelector('#line-ups-home') ? this.changeLowerField() : this.changeLowerFieldAWAY();
    }
}
