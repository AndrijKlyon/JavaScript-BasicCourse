"use strict";

console.log("*** МЕТОДЫ ВЫБОРА ЭЛЕМЕНТОВ ***");
console.log("*** querySelector ***");
const heading1 = document.querySelector("h1");
console.log("heading1 :", heading1);

console.log("*** querySelectorAll ***");
const cards = document.querySelectorAll(".card");
console.log("cards :", cards);

console.log("*** getElementById ***");
const alert = document.getElementById("alert");
console.log("alert :", alert);

console.log("*** getElementsByClassName ***");
const buttons = document.getElementsByClassName("btn");
console.log("buttons :", buttons);

console.log("*** getElementsByTagName ***");
const headings3 = document.getElementsByTagName("h3");
console.log("headings3 :", headings3);

console.log("*** getElementsByName ***");
const alerts = document.getElementsByName("alert");
console.log("alerts :", alerts);

console.log("*** СТАТИЧЕСКИЕ И ДИНАМИЧЕСКИЕ КОЛЛЕКЦИИ ***");
const staticCollection = document.querySelectorAll(".row");
const liveCollection = document.getElementsByClassName("row");

// Коллекции до добавления новой строки
console.log("staticCollection length before :", staticCollection.length);
console.log("liveCollection length before :", liveCollection.length);

// Создание новой строки
const newRow = document.createElement("div");
newRow.className = "row";
document.querySelector(".container").append(newRow);

// Коллекции после добавления новой строки
console.log("staticCollection length after :", staticCollection.length);
console.log("liveCollection length after :", liveCollection.length);

console.log("*** МЕТОДЫ И СВОЙСТВА Document/Element ***");
console.log("heading1 next Sibling Element :", heading1.nextElementSibling);
console.log("1st row Children :", liveCollection[0].children);

console.log("*** ДОПОЛНИТЕЛЬНЫЕ МЕТОДЫ ОБЪЕКТА Element ***");
console.log("*** Метод closest ***");
const card0Text = cards[0].querySelector(".card-text");
console.log("card closest element :", card0Text.closest(".card"));

console.log("*** Метод contains ***");
console.log("card contains card text :", cards[0].contains(card0Text));
console.log("card contains card :", cards[0].contains(cards[0]));
console.log(
  "card contains card image :",
  cards[0].contains(cards[0].querySelector(".card-image"))
);

console.log("*** Метод matches ***");
console.log("heading1 has py-4 class :", heading1.matches(".py-4"));
console.log("alert has disabled attribute :", alert.matches("[disabled]"));
