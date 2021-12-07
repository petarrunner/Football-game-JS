import { teamsList, playersList } from '../0__teamsBase.js';

export default class TeamsView {
    index;
    clubName;
    activeLineUp = [];
    allPlayers = [];
    imgLogo;

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
    addPlayersToSelectLineUps() {
        let [gk, ...igraci] = [...teamsList[this.index].playerName];

        for (let [index, ime] of igraci.entries()) {
            document.querySelector('#playerNameNo1').appendChild(document.createElement('option')).innerText =
                document.querySelector('#playerNameNo2').appendChild(document.createElement('option')).innerText =
                document.querySelector('#playerNameNo3').appendChild(document.createElement('option')).innerText =
                document.querySelector('#playerNameNo4').appendChild(document.createElement('option')).innerText =
                document.querySelector('#playerNameNo5').appendChild(document.createElement('option')).innerText =
                document.querySelector('#playerNameNo6').appendChild(document.createElement('option')).innerText =
                    ime;
        }
        document.querySelector('#playerNameNo1').getElementsByTagName('option')[0].selected =
            document.querySelector('#playerNameNo2').getElementsByTagName('option')[4].selected =
            document.querySelector('#playerNameNo3').getElementsByTagName('option')[5].selected =
            document.querySelector('#playerNameNo4').getElementsByTagName('option')[6].selected =
            document.querySelector('#playerNameNo5').getElementsByTagName('option')[8].selected =
            document.querySelector('#playerNameNo6').getElementsByTagName('option')[10].selected =
                'selected';
    }
    addPlayersToSelectLineUpsAWAY() {
        let [gk, ...igraci] = [...teamsList[this.index].playerName];

        for (let [index, ime] of igraci.entries()) {
            document.querySelector('#playerNameNo1-a').appendChild(document.createElement('option')).innerText =
                document.querySelector('#playerNameNo2-a').appendChild(document.createElement('option')).innerText =
                document.querySelector('#playerNameNo3-a').appendChild(document.createElement('option')).innerText =
                document.querySelector('#playerNameNo4-a').appendChild(document.createElement('option')).innerText =
                document.querySelector('#playerNameNo5-a').appendChild(document.createElement('option')).innerText =
                document.querySelector('#playerNameNo6-a').appendChild(document.createElement('option')).innerText =
                    ime;
        }
        document.querySelector('#playerNameNo1-a').getElementsByTagName('option')[0].selected =
            document.querySelector('#playerNameNo2-a').getElementsByTagName('option')[4].selected =
            document.querySelector('#playerNameNo3-a').getElementsByTagName('option')[5].selected =
            document.querySelector('#playerNameNo4-a').getElementsByTagName('option')[6].selected =
            document.querySelector('#playerNameNo5-a').getElementsByTagName('option')[8].selected =
            document.querySelector('#playerNameNo6-a').getElementsByTagName('option')[10].selected =
                'selected';
    }
    changeLowerField() {
        this.activeLineUp.push(playersList[this.index][0].playerName);
        for (let m = 1; m <= 6; m++) {
            let name = document.querySelector('#playerNameNo' + [m]).value;
            const h = teamsList[this.index].playerName.indexOf(name);
            this.activeLineUp.push(name);
            document.querySelector('#playerNo' + [m]).innerText = playersList[this.index][h].kitNumber;
            document.querySelector('#playerNo' + [m]).classList.remove('hiddenLineUps');
            document.querySelector('#playerSpecNo' + [m]).innerText = playersList[this.index][h].specials;
            if (playersList[this.index][h].specials != '/') {
                document.querySelector('#playerSpecNo' + [m]).classList.remove('hiddenLineUps');
            }
            document.querySelector('#playerNamePNo' + [m]).classList.add('visibleLineUps');
            document.querySelector('#playerNamePNo' + [m]).innerText = playersList[this.index][h].playerName;
        }

        document.querySelector('#form-home').remove();
        document.querySelector('#playerNo').classList.remove('hiddenLineUps');
        document.querySelector('#playerNamePNo').innerText = playersList[this.index][0].playerName;
        document.querySelector('#playerNamePNo').classList.remove('hiddenLineUps');
    }
    changeLowerFieldAWAY() {
        this.activeLineUp.push(playersList[this.index][0].playerName);
        for (let m = 1; m <= 6; m++) {
            let name = document.querySelector('#playerNameNo' + [m] + '-a').value;
            const h = teamsList[this.index].playerName.indexOf(name);
            this.activeLineUp.push(name);
            document.querySelector('#playerNo' + [m] + '-a').innerText = playersList[this.index][h].kitNumber;
            document.querySelector('#playerNo' + [m] + '-a').classList.remove('hiddenLineUps');
            document.querySelector('#playerSpecNo' + [m] + '-a').innerText = playersList[this.index][h].specials;
            if (playersList[this.index][h].specials != '/') {
                document.querySelector('#playerSpecNo' + [m] + '-a').classList.remove('hiddenLineUps');
            }
            document.querySelector('#playerNamePNo' + [m] + '-a').classList.add('visibleLineUps');
            document.querySelector('#playerNamePNo' + [m] + '-a').innerText = playersList[this.index][h].playerName;
        }

        document.querySelector('#form-away').remove();
        document.querySelector('#playerNo-a').classList.remove('hiddenLineUps');
        document.querySelector('#playerNamePNo-a').innerText = playersList[this.index][0].playerName;
        document.querySelector('#playerNamePNo-a').classList.remove('hiddenLineUps');
    }

    firstAction() {
        this.setNameAndIndex();
        this.writeClubName();
        this.writeCoachName();
        this.writeAllPlayers();
        this.changeClubLogo();
        this.changeBackgroudColor();

        this.parentEl == document.querySelector('#line-ups-home') ? this.addPlayersToSelectLineUps() : this.addPlayersToSelectLineUpsAWAY();
    }
    finalAction() {
        this.parentEl == document.querySelector('#line-ups-home') ? this.changeLowerField() : this.changeLowerFieldAWAY();
    }
}
