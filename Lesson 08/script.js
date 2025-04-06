"use strict";

console.log("*** Условие if...else ***");
const str = "by";
if (str == "hello") console.log("Hello!");
else console.log("By!");

console.log("*** Несколько условий if...else ***");
const num = 10;
if (num < 10) {
  console.log("num < 10");
} else if (num == 10) {
  console.log("num = 10");
} else {
  console.log("num > 10");
}

console.log("*** Условный оператор ? ***");
const logic = true;
console.log(logic ? true : false);

console.log("*** Несколько условных операторов ? ***");
console.log(num < 10 ? "num < 10" : num == 10 ? "num = 10" : "num > 10");

console.log("*** Инструкция switch ***");
const fruit = "apple";
switch (fruit) {
  case "orange":
    console.log("orange");
    break;
  case "pear":
    console.log("pear");
    break;
  case "apple":
    console.log("apple");
    break;
  default:
    console.log("unknown fruit");
}

console.log("*** Инструкция switch без ключевого слова break ***");
const numVar = 2;
switch (numVar) {
  case 0:
    console.log(0);
  case 1:
    console.log(1);
  case 2:
    console.log(2);
  case 3:
    console.log(3);
  case 4:
    console.log(4);
  case 5:
    console.log(5);
}

console.log("*** Инструкция switch - группировка вариантов ***");
const numCheck = 4;
switch (numCheck) {
  case 2:
  case 4:
  case 6:
  case 8:
    console.log("Четное!");
    break;
  case 1:
  case 3:
  case 5:
  case 7:
  case 9:
    console.log("Нечетное!");
    break;
  default:
    console.log("Неизвестно");
}

console.log("*** Инструкция switch через if ... else ***");
if (numCheck == 2 || numCheck == 4 || numCheck == 6 || numCheck == 8) {
  console.log("Четное!");
} else if (
  numCheck == 1 ||
  numCheck == 3 ||
  numCheck == 5 ||
  numCheck == 7 ||
  numCheck == 9
) {
  console.log("Нечетное!");
} else {
  console.log("Неизвестно");
}
