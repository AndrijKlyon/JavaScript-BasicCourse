"use strict";

console.log("*** Числа (number) ***");
let num = 18;
const PI = 3.14;
const devByZero = 45 / 0;
const calcError = "Not a number" / 4;

console.log("num=", num);
console.log("PI=", PI);
console.log("devByZero=", devByZero);
console.log("calcError=", calcError);

console.log("*** Большие числа (BigInt) ***");
const bigInt = 123456789n;
console.log("bigInt=", bigInt);

console.log("*** Строки (string) ***");
const str1 = "My name is Alex";
const str2 = "I am coder";
const str3 = `I am ${2023 - 2000} years old`;

console.log("string1:", str1);
console.log("string2:", str2);
console.log("string3:", str3);

const quotes1 = '"Titanic" ship';
const quotes2 = "I'am your father";

console.log("quotes1:", quotes1);
console.log("quotes2:", quotes2);

const esc1 = "Total \\ 250";
const esc2 = "line1 \nline2";
const esc3 = "\t start string";
const esc4 = "Unicode symbol: \u00A9";
const esc5 = `line1
    line2
    line3`;

console.log("esc1:", esc1);
console.log("esc2:", esc2);
console.log("esc3:", esc3);
console.log("esc4:", esc4);
console.log("esc5:", esc5);

console.log("*** Логические значения (boolean) ***");
const logic1 = true;
const logic2 = 5 > 10;

console.log("logic1:", logic1);
console.log("logic2:", logic2);

console.log("*** Специальное значение null ***");
const nothing = null;

console.log("nothing:", nothing);

console.log("*** Специальное значение undefined ***");
let notDefined = 23;
notDefined = undefined;

console.log("notDefined:", notDefined);

console.log("*** Символ (symbol) ***");
const symbolId = Symbol();

console.log("symbolId:", symbolId);

console.log("*** Объект (object) ***");
const obj = window;

console.log("obj:", obj);

console.log("*** проверка типа данных - оператор typof ***");
console.log('type of "string":', typeof "string");
console.log("type of 20:", typeof 20);

console.log("typeof num:", typeof num);
console.log("typeof str1:", typeof str1);
console.log("typeof bigInt:", typeof bigInt);
console.log("typeof logic1:", typeof logic1);
console.log("typeof nothing:", typeof nothing);
console.log("typeof notDefined:", typeof notDefined);
console.log("typeof symbolId:", typeof symbolId);
console.log("typeof obj:", typeof obj);

console.log("typeof confirm function:", typeof confirm);
