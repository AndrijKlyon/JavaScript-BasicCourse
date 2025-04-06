"use strict";

console.log("*** Операторы сравнения ***");
// сравнение чисел
console.log("5 > 1 :", 5 > 1);
console.log("5 <= 1 :", 5 <= 1);
console.log("5 == 5 :", 5 == 5);
console.log('5 === "5" :', 5 === "5");
console.log("5 != 1 :", 5 != 1);

// сравнение строк
const str1 = "Cat";
const str2 = "Dog";
const str3 = "Cats";
const str4 = "cat";

console.log("Cat < Dog :", str1 < str2);
console.log(`C code: ${str1.codePointAt(0)}, D code: ${str2.codePointAt(0)}`);
console.log("Cat > Cats :", str1 > str3);
console.log("Cat == cat :", str1 == str4);
console.log(`C code: ${str1.codePointAt(0)}, c code: ${str4.codePointAt(0)}`);

// сравнение разных типов
console.log("5 > true :", 5 > true);
console.log("2 == {} :", 2 == {});
console.log("null == 0 :", null == 0);
console.log("null == undefined :", null == undefined);

console.log("*** Логические операторы ***");
// оператор ИЛИ
console.log("false || true :", false || true);
console.log("2 || 3 :", 2 || 3);
console.log("4 < 1 || 5 == 3 || 5 > 4 :", 4 < 1 || 5 == 3 || 5 > 4);
console.log("null || undefined || false :", null || undefined || false);

// оператор И
console.log("false && true :", false && true);
console.log("2 && 3 :", 2 && 3);
console.log("4 < 1 && 5 == 3 && 5 > 4 :", 4 < 1 && 5 == 3 && 5 > 4);
console.log("null && undefined && false :", null && undefined && false);

// оператор НЕ
console.log("!true :", !true);
console.log("!null :", !null);

// оператор нулевого слияния
let name;
console.log("name ?? 'anonym' :", name ?? "anonym");
console.log("null ?? 'Alex' ?? 'anonym' :", null ?? "Alex" ?? "anonym");

// оператор логического присваивания ИЛИ
let age = null;
age ||= 18;
console.log("age ||= 18 :", age);

// оператор логического присваивания И
let age2 = null;
age2 &&= 18;
console.log("age &&= 18 :", age2);

// оператор нулевого присваивания
let age3 = null;
age3 ??= 18;
console.log("age ??= 18 :", age3);

// приоритет операторов
let height;
let width;
let area = (height ?? 10) * (width ?? 20);
console.log("area :", area);
