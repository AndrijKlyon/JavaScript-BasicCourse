"use strict";

// Выбор элементов
const userForm = document.forms["user-form"];
const formStatus = document.getElementById("form-status");
const warnAlert = document.querySelector(".alert-warning");
const contextAlert = document.getElementById("this-context");

// АСИНХРОННАЯ ФУНКЦИЯ
// Функция загрузки скрипта
function loadScript(src) {
  const script = document.createElement("script");
  script.src = src;
  document.head.append(script);
}

// Не сработает, функция загрузки скрипта - асинхронная
// loadScript("myscript.js");
// console.log("Num1 from myscript.js:", num1);

// Решение - использование callback-функции
function loadScript2(src, callback) {
  const script = document.createElement("script");
  script.src = src;

  script.onload = () => callback(null, script);
  script.onerror = () => callback(new Error(`Failed to load script: ${src}`));

  document.head.append(script);
}

loadScript2("myscript.js", function (error, script) {
  if (error) {
    // обработка ошибки
    console.warn(error.message);
  } else {
    console.log("Num1 from myscript.js:", num1);
  }
});

// ФУНКЦИИ ПЛАНИРОВАНИЯ
// Отправка формы
userForm.addEventListener("submit", formSubmitHandler);

function formSubmitHandler(event) {
  event.preventDefault();
  const name = userForm.name.value;
  const age = userForm.age.value;
  if (name && age) {
    warnAlert.style.display = "none";
    userForm.style.display = "none";
    showResult("success");
  } else {
    showResult("danger");
  }
}

function showResult(result) {
  formStatus.classList.remove("alert-success", "alert-danger");
  formStatus.classList.add(`alert-${result}`);
  formStatus.innerText =
    result == "success"
      ? "Form has been successfully sent"
      : "Please, enter the correct data!";
  formStatus.style.opacity = 1;
  setTimeout(hideResult, 2500);
}

function hideResult() {
  formStatus.style.opacity = 0;
}

// Мигание предупреждения
const timerId = setInterval(blinkWarning, 3000);

function blinkWarning() {
  warnAlert.style.opacity = 0;
  setTimeout(() => (warnAlert.style.opacity = 1), 1500);
}

// Отключение мигания предупреждения
userForm["stop-blink"].onclick = () => clearInterval(timerId);

// Вложенный setTimeout
let delay = 1000;

let loopTimerId = setTimeout(function request() {
  if (!userForm.name.value) {
    // увеличить интервал для следующего запроса
    delay += 1000;
    console.log("delay time:", delay);
  }
  showFormData();
  loopTimerId = setTimeout(request, delay);
}, delay);

function showFormData() {
  console.log(`Name: ${userForm.name.value}`);
  console.log(`Age: ${userForm.age.value}`);
}

// setTimeout с нулевой задержкой
setTimeout(() => console.log("After"));
console.log("Before");

// Контекст this в функциях планирования
contextAlert.classList.add("alert-info");
const user = {
  name: "Alex",
  printName() {
    contextAlert.innerText = this.name;
  },
};

user.printName();

// Не сработает, this = window
// setTimeout(user.printName, 2000);

// Решение 1. Оборачивание callback-функции в анонимную функцию
setTimeout(() => user.printName(), 2000);

// Решение 2. Привязка контекста методом bind()
const printName = user.printName.bind(user);
setTimeout(printName, 4000);
