import Shooting from './Shooting.js';
import { gost, domacin } from '../controller.js';
import { info } from '../controller.js';
export default class Shooting__away extends Shooting {
    imeKluba = document.querySelector('#teamsAway').value;
    constructor() {
        super();
        this.parentEl = document.querySelector('#sutNaGol2');
        this.selectPlayers = this.parentEl.querySelector('.activePlayer');
        // this.teamName = this.parentEl.querySelector('.odabranKlub').innerText;
        this.checkBox__closeShot = this.parentEl.querySelector('#sutOznake12');
        this.checkBox__openShot = this.parentEl.querySelector('#sutOznake22');
        this.actionText = this.parentEl.querySelector('.finalActionText');
        this.btn__finalAction = this.parentEl.querySelector('.finalButton');
        this.activeLineUp = gost.activeLineUp;
        // this.team__GK = domacin;
        // this.team__ATT = gost;
        // this.team__ATT = domacin;
        this.teamName = document.querySelector('#teamsAway').value;
    }
}
