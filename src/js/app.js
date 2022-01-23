
import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

/*
import Swiper, { Navigation, Pagination } from 'swiper';
const swiper = new Swiper();
*/

const settingsMenu = document.querySelector('.settings-menu');
const darkBtn = document.getElementById('dark-btn');


function openSettings() {
    settingsMenu.classList.toggle('show');
}

function closeSettings() {
    settingsMenu.classList.remove('show');
}

document.addEventListener('click', (e) => {
    if (e.target.closest('.nav-user-icon')) {
        openSettings()
    }
    if (!e.target.closest('.settings-menu') && !e.target.closest('.nav-user-icon')) {
        closeSettings();
    }
});



darkBtn.addEventListener('click', () => {
    darkBtn.classList.toggle('dark-btn-on');
    document.body.classList.toggle('dark-theme');

    if (localStorage.getItem('theme') == 'light') {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

if (localStorage.getItem('theme') == 'light') {
    darkBtn.classList.remove('dark-btn-on');
    document.body.classList.remove('dark-theme');
} else if (localStorage.getItem('theme') == 'dark') {
    darkBtn.classList.add('dark-btn-on');
    document.body.classList.add('dark-theme');
} else {
    localStorage.setItem('theme', 'light');
}