"use strict";

// Email wrapper
const emailWrapper = document.querySelectorAll("form .mb-3")[0];
// Email Input element
const emailInput = document.getElementById("email");
// Email Label textNode
const emailLabelText = emailWrapper.querySelector('[for="email"]').firstChild;

console.log("*** DOM-узлы - это объекты ***");
console.log("typeof emailInput :", typeof emailInput);
console.log("emailInput nodeType :", emailInput.nodeType);
console.log("nodeType in emailInput :", "nodeType" in emailInput);
console.log("emailInput :", emailInput);
console.dir(emailInput);

console.log("*** TextNode properties ***");
console.log("nodeValue :", emailLabelText.nodeValue);
console.log("data :", emailLabelText.data);
console.log("length :", emailLabelText.length);

console.log("*** Element properties ***");
console.log("tagName :", emailWrapper.tagName);
console.log("innerHTML :", emailWrapper.innerHTML);
console.log("outerHTML :", emailWrapper.outerHTML);
console.log("innerText :", emailWrapper.innerText);

console.log("*** Свойства-атрибуты ***");
console.log("id :", emailInput.id);
console.log("name :", emailInput.name);
console.log("title :", emailInput.title);
console.log("className :", emailInput.className);
console.log("type :", emailInput.type);

// console.log("*** Доступ к HTML-атрибутам ***");
// console.log("emailInput has title :", emailInput.hasAttribute("title"));
// emailInput.setAttribute("title", "Email");
// console.log("emailInput title :", emailInput.getAttribute("title"));
// console.log("emailInput has title :", emailInput.hasAttribute("title"));
// emailInput.removeAttribute("title");
// console.log("emailInput hsd title :", emailInput.hasAttribute("title"));

// console.log("*** Коллекция HTML-атрибутов ***");
// const emailInputAttributes = emailInput.attributes;
// for (let attribute of emailInputAttributes) {
//   console.log(`${attribute.name} : ${attribute.value}`);
// }

// console.log("*** data-атрибуты ***");
// const emailInputDataset = emailInput.dataset;
// console.log("data-status :", emailInputDataset.status);

// console.log("*** Синхронизация атрибутов и свойств ***");
// emailInput.name = "new email";
// console.log("Name property :", emailInput.name);
// console.log("Name attribute :", emailInput.getAttribute("name"));

// emailInput.setAttribute("value", "email");
// emailInput.value = "new email";
// console.log("Value property :", emailInput.value);
// console.log("Value attribute :", emailInput.getAttribute("value"));
