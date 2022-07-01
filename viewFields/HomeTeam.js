import { info } from '../controller.js';
import teamsView from './teamsView.js';

export default class HomeTeam extends teamsView {
    constructor() {
        super();
        this.parentEl = document.querySelector('#line-ups-home');
    }
    setNameAndIndex() {
        this.clubName = info.clubName__home;
        this.index = info.index__home;
    }
}
