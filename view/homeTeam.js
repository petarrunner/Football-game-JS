import { teamsList, playersList } from '../0__teamsBase.js';
import { info } from '../controller.js';
// import Info from './info.js';
import TeamsView from './teamsView.js';

export default class HomeTeam extends TeamsView {
    // img__stadium;
    constructor() {
        super();
        this.parentEl = document.querySelector('#line-ups-home');
    }
    setNameAndIndex() {
        this.clubName = info.clubName__home;
        this.index = info.index__home;
    }
}
