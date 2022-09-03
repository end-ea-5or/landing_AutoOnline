"use strict";

const countdown = document.querySelector('.countdown');
const hoursVal = countdown.querySelector('.countdown__time--hours');
const minutesVal = countdown.querySelector('.countdown__time--minutes');
const secondsVal = countdown.querySelector('.countdown__time--seconds');
const hoursText = countdown.querySelector('.countdown__text--hours');
const minutesText = countdown.querySelector('.countdown__text--minutes');
const secondsText = countdown.querySelector('.countdown__text--seconds');

//-----------------------------------------------------
// --- этот блок применителен для конкретного сайта ---
let nowDate = new Date();
// получаем завтрашний день 20:00
// отсчет будет вестись до этой даты
let tomorrow = new Date(`${nowDate.getFullYear()}-${nowDate.getMonth() + 1}-${nowDate.getDate() + 1}-${20}:${0}`);
// получаем день и месяц даты марафона на русском языке
let options = {
  month: 'long',
  day: 'numeric',
};
let dateOfMarathon = nowDate.toLocaleString("ru", options);
// вставляем верную дату в блок на сайте
const footerMarathonDay = countdown.querySelector('.date-of-marathon');
const headerMarathonDay = document.querySelector('.header .date-of-marathon');
footerMarathonDay.textContent = dateOfMarathon;
headerMarathonDay.textContent = dateOfMarathon;
//-----------------------------------------------------

// функция для правильного склонения числительных (подсмотрена и честно стырена в интернете)
function declOfNum(number, titles) {
  let cases = [2, 0, 1, 1, 1, 2];
  return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
};

const timeCount = () => {
  let now = new Date();
  let tomorrow = new Date(`${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate() + 1}-${20}:${0}`);
  let differenceOfDays = tomorrow - now;

  let hours = Math.floor(differenceOfDays / 1000 / 60 / 60);
  let minutes = Math.floor(differenceOfDays / 1000 / 60 % 60);
  let seconds = Math.floor(differenceOfDays / 1000 % 60);
  hours < 10 ? hoursVal.textContent = "0" + hours : hoursVal.textContent = hours;
  minutes < 10 ? minutesVal.textContent = "0" + minutes : minutesVal.textContent = minutes;
  seconds < 10 ? secondsVal.textContent = "0" + seconds : secondsVal.textContent = seconds;

  hoursText.textContent = declOfNum(hours, ['час', 'часа', 'часов']);
  minutesText.textContent = declOfNum(minutes, ['минута', 'минуты', 'минут']);
  secondsText.textContent = declOfNum(seconds, ['секунда', 'секунды', 'секунд']);
};

timeCount();
setInterval(timeCount, 1000);
