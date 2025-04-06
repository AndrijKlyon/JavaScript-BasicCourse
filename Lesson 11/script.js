"use strict";

console.log("*** СПОСОБЫ ОБЪЯВЛЕНИЯ ФУНКЦИЙ ***");
console.log("*** Function Declaration ***");
function showHelloUser(name) {
  console.log(`Hello, ${name}!`);
}

showHelloUser("Alex");

console.log("*** Function Expression ***");
const showHelloUser2 = function (name) {
  console.log(`Hello, ${name}!`);
};

showHelloUser2("Mary");

console.log("*** Arrow Function Expression ***");
const showHelloUser3 = (name) => console.log(`Hello, ${name}!`);

showHelloUser3("Pete");

console.log("*** HOISTING ***");
console.log("*** Функции Function Declaration всплывают ***");
console.log("Result =", calcTwice(2));

function calcTwice(num) {
  return num * 2;
}

console.log("*** Переменные var всплывают без значения ***");
console.log("var до объявления, до присвоения значения :", num1);
num1 = 10;
console.log("var до объявления, после присвоения значения :", num1);
var num1;

console.log("*** Функции Function Expression HE всплывают ***");
// Функция присвоена переменной const, let
// ERROR: Cannot access 'calcTwice2' before initialization
// console.log("Result =", calcTwice2(2));

const calcTwice2 = function (num) {
  return num * 2;
};

// Функция присвоена переменной var
// ERROR: calcTwice3 is not a function
// console.log("Result =", calcTwice3(2));

var calcTwice3 = function (num) {
  return num * 2;
};

console.log("IIFE");
var K = 3.5;

// Сторонний скрипт
(function () {
  var K = 10;
  console.log(2 * K);
})();

console.log("K =", K);

console.log("*** CALLBACK FUNCTION***");
function getResult(expression, callback) {
  if (expression) callback();
}

function showTrueResult() {
  console.log(true);
}

getResult(2 > 1, showTrueResult);
