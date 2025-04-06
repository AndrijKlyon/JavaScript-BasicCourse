"use strict";

// ДОБАВЛЕНИЕ ОБРАБОТЧИКОВ СОБЫТИЙ
// DOM-свойство
const btnSecondary = document.querySelector(".btn-secondary");
btnSecondary.onclick = function () {
  alert("Hello from Secondary button!");
};

// HTML-атрибуты связаны с DOM-свойствами
console.log(
  "onclick DOM property :",
  document.querySelector(".btn-primary").onclick
);

// Метод addEventListener
const btnSuccess = document.querySelector(".btn-success");
function btnSuccessHandler() {
  alert("Hello from Success button!");
}

btnSuccess.addEventListener("click", btnSuccessHandler);

// THIS В ФУНКЦИЯХ-ОБРАБОТЧИКАХ - ТЕКУЩИЙ ЭЛЕМЕНТ
btnSuccess.addEventListener("click", function () {
  console.log("this in Event handler :", this);
});

// ОБЪЕКТ СОБЫТИЯ
const btnDanger = document.querySelector(".btn-danger");
function btnDangerHandler(event) {
  alert("Hello from Danger button!");
  console.log("Event type :", event.type);
  console.log("Event currentTarget :", event.currentTarget);
}

btnDanger.addEventListener("click", btnDangerHandler);

// ОТМЕНА ДЕЙСТВИЯ БРАУЗЕРА ПО УМОЛЧАНИЮ
// return false
const btnLink = document.querySelector(".btn-warning");
btnLink.onclick = function (event) {
  alert("Link is blocked!");
  // Не сработает: действие по умолчанию еще не отменено
  console.log("Default prevented :", event.defaultPrevented);
  return false;
};

// Метод preventDafault()
const btnSubmit = document.querySelector("[type='submit']");

function btnSubmitHandler(event) {
  event.preventDefault();
  alert("Form submit is blocked!");
  console.log("Default prevented :", event.defaultPrevented);
}

btnSubmit.addEventListener("click", btnSubmitHandler);
