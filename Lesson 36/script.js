"use strict";

// Выбор элементов
const form = document.forms["event-time"];
const nowDateEl = document.getElementById("now-date");
const eventDateEl = document.getElementById("event-date");
const periodEl = document.getElementById("period");

// Названия месяцев и дней недели
const months = [
  "JAN",
  "FAB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];
const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

// Обработчик отправки формы
form.onsubmit = function (event) {
  event.preventDefault();
  const date = form.date.value;
  const time = form.time.value;
  console.log(date, time);

  const eventDate = new Date(`${date}T${time}`);
  const nowDate = new Date();

  showDate(nowDate, nowDateEl);
  showDate(eventDate, eventDateEl);
  showPeriod(nowDate, eventDate);

  form.reset();
};

// Функция отображения даты и времени
function showDate(date, element) {
  const year = date.getFullYear();
  const month = months[date.getMonth()];
  const _date = formatNum(date.getDate());

  const hours = formatNum(date.getHours());
  const minutes = formatNum(date.getMinutes());
  const seconds = formatNum(date.getSeconds());
  const milliseconds = date.getMilliseconds();
  const day = days[date.getDay()];

  element.innerText = `${_date} ${month} ${year}, ${day}; ${hours} : ${minutes} : ${seconds} : ${milliseconds}`;
}

function formatNum(num) {
  return ("0" + num).slice(-2);
}

// Функция отображения временного периода
function showPeriod(date1, date2) {
  const periodTS = +date2 - +date1;
  periodEl.innerText = parseTS(periodTS);
}

function parseTS(timestamp) {
  let reminder;

  const dayLength = 24 * 60 * 60 * 1000;
  const hourLength = 60 * 60 * 1000;
  const minuteLength = 60 * 1000;
  const secondLength = 1000;

  const days = Math.floor((reminder = timestamp) / dayLength);
  const hours = Math.floor((reminder %= dayLength) / hourLength);
  const minutes = Math.floor((reminder %= hourLength) / minuteLength);
  const seconds = Math.floor((reminder %= minuteLength) / secondLength);
  const milliseconds = reminder % secondLength;
  return `${formatNum(days)} DAY : ${formatNum(hours)} HRS : ${formatNum(
    minutes
  )} MIN : ${formatNum(seconds)} SEC : ${milliseconds} MSEC`;
}
