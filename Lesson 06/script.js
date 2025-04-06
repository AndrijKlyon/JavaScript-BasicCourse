"use strict";

console.log("*** Арифметические операторы ***");
// сложение
console.log("2 + 4 =", 2 + 4);
// вычитание
console.log("5 - 3 =", 5 - 3);
// умножение
console.log("2 * 4 =", 2 * 4);
// деление
console.log("5 / 2 =", 5 / 2);
// взятие остатка от деления
console.log("5 % 2 =", 5 % 2);
// возведение в степень
console.log("2 ** 4 =", 2 ** 4);

console.log("*** Строчный оператор конкатенации ***");
console.log('2 + "4"=', 2 + "4");

console.log("*** Унарные + и -  ***");
console.log("-2 =", -2);
console.log("+2 =", +2);

console.log('+"4" =', +"4");
console.log("+null =", +null);

console.log("*** Приоритет операторов ***");
console.log("2 + (5 - 3) =", 2 + (5 - 3));
console.log("10 - 2 * 3 =", 10 - 2 * 3);

const str1 = "5";
const str2 = 15;
console.log("str1 + str2 =", +str1 + +str2);

console.log("*** Операторы присваивания ***");
// обычное присваивание
let num1 = 35;
console.log("num =", num1);
// присваивание со сложением
let num2 = 35;
num2 += 5;
console.log("num += 5:", num2);
// присваивание с вычитанием
let num3 = 35;
num3 -= 5;
console.log("num -= 5:", num3);
// присваиванием с умножением
let num4 = 35;
num4 *= 2;
console.log("num *= 2:", num4);
// присваивание с делением
let num5 = 35;
num5 /= 5;
console.log("num /= 5:", num5);
// присваивание со взятием остатка
let num6 = 35;
num6 %= 2;
console.log("num %= 2:", num6);

console.log("*** Инкремент и декремент ***");
let count = 2;
count--;
console.log("count =", count);

// постфиксная форма
let count1 = 1;
console.log("count++ =", count1++);
console.log("count =", count1);

// префиксная форма
let count2 = 1;
console.log("++count =", ++count2);
console.log("count =", count2);
