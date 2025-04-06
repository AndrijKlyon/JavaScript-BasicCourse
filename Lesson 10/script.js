"use strict";

console.log("*** Функция без параметров ***");
function showHelloMessage() {
  console.log("Hello!");
}

showHelloMessage();

console.log("*** Функция c параметрами ***");
function showUserInfo(name, age) {
  console.log(`Hello! My name is ${name}. I am ${age} years old.`);
}

showUserInfo("Alex", 22);
showUserInfo("Mary", 20);

console.log("*** Функция без return ***");
console.log(showUserInfo("Jane", 24));

console.log("*** Функция c return ***");
function calcSum(num1, num2) {
  return num1 + num2;
}

let sum = calcSum(4, 5);
console.log("sum=", sum);

console.log("*** Функция c несколькими return ***");
function checkParity(num) {
  if (num % 2 == 0) return "Четное";
  return "Нечетное";
}

console.log(checkParity(2));
console.log(checkParity(3));

console.log("*** Функция c параметрами по умолчанию ***");
function showMessage(text = "empty text") {
  return `Message: ${text}`;
}

console.log(showMessage("example text"));
console.log(showMessage());

console.log(
  "*** Внешний код не имеет доступа к локальным переменным функции ***"
);
function calcTotal(price, quantity) {
  let total = price * quantity;
  return total;
}

let total;
console.log(calcTotal(10, 3));
console.log(total);

console.log("*** Функция имеет доступ к внешним переменным ***");
let userName = "Pete";
function showHelloUser() {
  console.log(`Hello, ${userName}!`);
}

showHelloUser();

console.log(
  "*** Функция c параметром вместо использования внешних переменных ***"
);
function showHelloUser2(userName) {
  console.log(`Hello, ${userName}!`);
}

showHelloUser2(userName);
