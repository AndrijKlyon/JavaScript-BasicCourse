"use strict";

// Выбор элементов
const form = document.forms.form;
const alert = document.getElementById("alert-content");

// Определение константы PI
// const PI = 3.14;
const PI = Math.PI;

// Обработчик отправки формы
form.addEventListener("submit", formSubmitHandler);

// Плохой стиль написания кода
// function formSubmitHandler(event) {
//   event.preventDefault();
//   const radius = form.radius.value;
//   alert.innerHTML = "";
//   const circleLength = 2 * PI * radius;
//   const circleArea = PI * radius ** 2;
//   const div1 = document.createElement("div");
//   div1.className = "mb-2";
//   div1.innerText = `Length: ${circleLength}`;
//   alert.append(div1);
//   const div2 = document.createElement("div");
//   div2.className = "mb-2";
//   div2.innerText = `Area: ${circleArea}`;
//   alert.append(div2);
// }

// Хороший стиль написания кода
function formSubmitHandler(event) {
  event.preventDefault();
  const radius = +form.radius.value;
  alert.innerHTML = "";
  addParameter("Length", calcCircleLength(radius, PI));
  addParameter("Area", calcCircleArea(radius, PI));
}

// Добавление характеристик окружности в alert
function addParameter(name, value) {
  const div = document.createElement("div");
  div.className = "mb-2";
  div.innerText = `${name}: ${value}`;
  alert.append(div);
}

// Определение характеристик окружности
function calcCircleLength(radius, pi) {
  return (2 * pi * radius).toFixed(2);
}

function calcCircleArea(radius, pi) {
  return (pi * radius ** 2).toFixed(2);
}

// Именованное функциональное выражение (Named Function Expression)
const calcRandom = function calc(max) {
  if (!max) calc(10);
  else {
    // случайное число от 0 до (max+1)
    const rand = Math.random() * (max + 1);
    console.log("random =", Math.floor(rand));
  }
};

calcRandom();
calcRandom(100);

// Конструктор new Function
const calcPerimeter = new Function("a", "b = a", "return 2*(a + b)");

console.log("perimeter1 = ", calcPerimeter(4));
console.log("perimeter2 = ", calcPerimeter(2, 3));

// Работа с аргументами функции
function calcSum(num1, num2, ...args) {
  // Количество "обычных" аргументов функции
  console.log("common arguments length: ", calcSum.length);
  // Количество дополнительных аргументов
  console.log("rest arguments length: ", args.length);
  // Количество всех переданных функции аргументов
  console.log("all arguments length: ", arguments.length);
  // Расчет суммы всех аргументов
  return num1 + num2 + args.reduce((prev, curr) => prev + curr, 0);
}

console.log("sum1 = ", calcSum(2, 3));
console.log("sum2 = ", calcSum(3, 4, 5, 7));
