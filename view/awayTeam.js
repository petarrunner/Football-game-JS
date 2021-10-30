import { teamsList, playersList } from '../0__teamsBase.js';
import TeamsView from './teamsView.js';
import { info } from '../controller.js';
// import { info } from './info.js';

export default class AwayTeam extends TeamsView {
    constructor() {
        super();
        this.parentEl = document.querySelector('#line-ups-away');
    }
    setNameAndIndex() {
        this.clubName = info.clubName__away;
        this.index = info.index__away;
    }
}
