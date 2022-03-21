import teamsView from './teamsView.js';
import { info } from '../controller.js';

export default class AwayTeam extends teamsView {
    constructor() {
        super();
        this.parentEl = document.querySelector('#line-ups-away');
    }
    setNameAndIndex() {
        this.clubName = info.clubName__away;
        this.index = info.index__away;
    }
}
