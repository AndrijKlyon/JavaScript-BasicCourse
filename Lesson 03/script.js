"use strict";

// Недопустимые имена переменных
// const 1user = "John";
// const function = "My function";

// Регистр символов в названии переменных имеет значение
let user = "Alex";
// console.log(User);

// Значения констант изменять нельзя
user = "Jane";
console.log(user);
const fruit = "apple";
// fruit = "orange";
console.log(fruit);

// Базовые константы в верхнем регистре
const PI = 3.14;
let radius = 2;
let circleLength = 2 * PI * radius;
console.log("circle length:", circleLength);

// Объявление переменной без присвоения значения
let age;
console.log("age:", age);
age = 18;
console.log("age:", age);

// Объявление нескольких переменных одним ключевым словом
let user1 = "Pete",
  user2 = "Mary",
  user3 = "Dan";
console.log("user names:", user1, user2, user3);

// Переменные var доступны за пределами блоков
{
  var a = 10;
}
console.log("a=", a);
{
  let b = 20;
}
// console.log("b=", b);

// Переменные var допускают повторное объявление
var a = 20;
var a = 40;
console.log("a=", a);

let b = 35;
// let b = 45;
console.log("b=", b);

// Переменные var становятся частью глобального объекта
console.log("global a:", window.a);
console.log("global b:", window.b);
