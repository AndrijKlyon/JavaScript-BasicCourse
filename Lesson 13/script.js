"use strict";

console.log("*** ВЕРХНИЕ ЭЛЕМЕНТЫ DOM-ДЕРЕВА ***");
const html = document.documentElement;
const head = document.head;
const body = document.body;

console.log("document Element :", html);
console.log("document head :", head);
console.log("document body :", body);

console.log("*** ВЫБОР УЗЛОВ ***");
console.log("*** Дочерние узлы ***");
console.log("body first Child :", body.firstChild);
console.log("body last Child :", body.lastChild);
console.log("body child Nodes :", body.childNodes);

console.log("*** Родительский узел ***");
console.log("body parent Node :", body.parentNode);

console.log("*** Соседние узлы ***");
console.log("body next Sibling :", body.nextSibling);
console.log("body previous Sibling :", body.previousSibling);

console.log("*** КОЛЛЕКЦИЯ УЗЛОВ ***");
const bodyChildNodes = body.childNodes;

console.log("1st bodyChildNodes :", bodyChildNodes[0]);
console.log("bodyChildNodes length :", bodyChildNodes.length);

for (let node of bodyChildNodes) {
  console.log("body Child Node :", node);
}

console.log("*** ВЫБОР ЭЛЕМЕНТОВ ***");
console.log("*** Дочерние элементы ***");
console.log("body first Element Child :", body.firstElementChild);
console.log("body last Element Child :", body.lastElementChild);
console.log("body children Elements :", body.children);

console.log("*** Родительский элемент ***");
console.log("body parent Element :", body.parentElement);

console.log("*** Соседние элементы ***");
console.log("body next Sibling Element :", body.nextElementSibling);
console.log("body previous Sibling Element :", body.previousElementSibling);
