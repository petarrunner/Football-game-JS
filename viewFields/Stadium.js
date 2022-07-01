import { info } from '../controller.js';

import { teamsList } from '../0__teamsBase.js';

export default class StadiumCl {
    attendance;
    maxAttendance;
    index;
    setIndexHomeTeam() {
        this.index = info.index__home;
    }

    setStadiumImageAsBackground() {
        document.querySelector('.stadiumPhoto').src = teamsList[this.index].stadium.stadiumSrc;
    }

    setMaxAttendance() {
        this.maxAttendance = teamsList[this.index].stadium.stadiumCapacitet;
    }
    setNumberOfSpectacors() {
        let randomNumber = Math.random() * this.maxAttendance * 0.2;
        this.attendance = Math.floor(this.maxAttendance * 1.1 - randomNumber);
        if (this.attendance >= this.maxAttendance) {
            this.attendance = this.maxAttendance;
            this.maxAttendance = 'full';
        }
    }

    setAttendance() {
        document.querySelector('.attendance').innerText = `Attendance: ${this.attendance} (${this.maxAttendance})`;
    }
    setStadiumName() {
        document.querySelector('.stadiumName').innerText = `Stadium: ${teamsList[this.index].stadium.stadiumName}, ${
            teamsList[this.index].stadium.city
        }`;
    }

    setWeather() {
        const listWeathers = ['Sunny', 'Rainy', 'Windy', 'Cloudy', 'Dry'];
        let randomNumber = Math.floor(Math.random() * listWeathers.length);
        let randomWeather = listWeathers[randomNumber];
        document.querySelector('.weather').innerText = `Weather: ${randomWeather}`;
    }
    setTime() {
        document.querySelector('.time').innerText = 'Time: 20:45';
    }
    setTimeStartMatch() {
        document.querySelector('.time').innerText = 'Time: 21:00';
    }
    setVisible() {
        document.querySelector('.stadiumContainer').classList.remove('displayToNone');
    }

    finalActionStadium() {
        this.setIndexHomeTeam();
        this.setStadiumImageAsBackground();
        this.setMaxAttendance();
        this.setNumberOfSpectacors();
        this.setAttendance();
        this.setStadiumName();
        this.setWeather();
        this.setTimeStartMatch();
        this.setVisible();
    }
}
