import Shooting from './Shooting.js';
import { gost } from '../controller.js';
export default class Shooting__away extends Shooting {
    imeKluba = document.querySelector('#teamsAway').value;
    constructor() {
        super();
        this.parentEl = document.querySelector('#field-shooting-away');
        this.selectPlayers = this.parentEl.querySelector('.activePlayer');
        this.checkBox__closeShot = this.parentEl.querySelector('#checkboxShooting12');
        this.checkBox__openShot = this.parentEl.querySelector('#checkboxShooting22');
        this.actionText = this.parentEl.querySelector('.finalActionText');
        this.btn__finalAction = this.parentEl.querySelector('.finalButton');
        this.activeLineUp = gost.activeLineUp;
        this.teamName = document.querySelector('#teamsAway').value;
    }
}
