import Shooting from './Shooting.js';
import { domacin } from '../controller.js';
export default class Shooting__home extends Shooting {
    imeKluba = document.querySelector('#teamsHome').value;
    constructor() {
        super();
        this.parentEl = document.querySelector('#field-shooting-home');
        this.selectPlayers = this.parentEl.querySelector('.activePlayer');
        this.checkBox__closeShot = this.parentEl.querySelector('#checkboxShooting1');
        this.checkBox__openShot = this.parentEl.querySelector('#checkboxShooting2');
        this.actionText = this.parentEl.querySelector('.finalActionText');
        this.btn__finalAction = this.parentEl.querySelector('.finalButton');
        this.activeLineUp = domacin.activeLineUp;
        this.teamName = document.querySelector('#teamsHome').value;
    }
}
