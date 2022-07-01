import { teamsList } from '../0__teamsBase.js';

export default class Info {
    clubName__home;
    clubName__away;
    index__home;
    index__away;
    yellowCardList = [];
    redCardList = [];
    imgStadion;

    setTeamsToChose() {
        for (let tim = 1; tim < teamsList.length; tim++) {
            document.querySelector('#teamsHome').appendChild(document.createElement('option')).innerText = teamsList[tim - 1].clubName;
            document.querySelector('#teamsAway').appendChild(document.createElement('option')).innerText = teamsList[tim - 1].clubName;
        }
        let rndNum1 = Math.floor(Math.random() * 5);
        let rndNum2 = Math.floor(Math.random() * 5);
        while (rndNum1 == rndNum2) {
            rndNum2 = Math.floor(Math.random() * 5);
        }
        document.querySelector('#teamsHome').getElementsByTagName('option')[rndNum1].selected = 'selected';
        document.querySelector('#teamsAway').getElementsByTagName('option')[rndNum2].selected = 'selected';
    }

    getClubNames() {
        this.clubName__home = document.querySelector('#teamsHome').value;
        this.clubName__away = document.querySelector('#teamsAway').value;
    }

    getIndexes() {
        this.index__home = teamsList.findIndex(function (teamsList) {
            return teamsList.clubName === document.querySelector('#teamsHome').value;
        });
        this.index__away = teamsList.findIndex(function (teamsList) {
            return teamsList.clubName === document.querySelector('#teamsAway').value;
        });
    }

    hideInfoField() {
        document.querySelector('.chooseTeamsContainer').classList.add('displayToNone');
    }

    firstAction() {
        this.setTeamsToChose();
    }

    finalAction() {
        this.getClubNames();
        this.getIndexes();
    }
}
