import Shooting from './Shooting.js';
import { domacin, gost } from '../controller.js';
import { info } from '../controller.js';
export default class Shooting__home extends Shooting {
    imeKluba = document.querySelector('#teamsHome').value;
    constructor() {
        super();
        this.parentEl = document.querySelector('#sutNaGol');
        this.selectPlayers = this.parentEl.querySelector('.activePlayer');

        this.checkBox__closeShot = this.parentEl.querySelector('#sutOznake1');
        this.checkBox__openShot = this.parentEl.querySelector('#sutOznake2');
        this.actionText = this.parentEl.querySelector('.finalActionText');
        this.btn__finalAction = this.parentEl.querySelector('.finalButton');
        this.activeLineUp = domacin.activeLineUp;
        // this.team__GK = gost;
        // this.team__ATT = domacin;
        this.teamName = document.querySelector('#teamsHome').value;
    }
}
