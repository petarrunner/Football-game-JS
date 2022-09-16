export default class Actions {
    parentEl;
    activePlayer;
    index__activePlayer;
    index__teamATT;
    index__teamGK;
    selectPlayers;
    activeLineUp = [];
    result;
    actionText;
    result = 0;
    noATT = 0;
    noGK = 0;

    getRandomNumber(max) {
        return Math.floor(Math.random() * max) + 1;
    }
}
