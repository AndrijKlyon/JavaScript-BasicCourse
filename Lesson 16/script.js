"use strict";

console.log("*** style property ***");
// single declaration
const heading2 = document.querySelector("h2");
heading2.style.marginBottom = "50px";

// multiple declaration
const heroBlock = document.querySelector("div:nth-of-type(2)");
heroBlock.style.cssText = `
                            border: 1px solid gray;
                            border-radius: 6px;
                            `;
// add new declaration
heroBlock.style.cssText += `
                            background-color: rgb(248, 249, 250)
                            `;
// reset property
heroBlock.style.backgroundColor = "";

console.log("*** getComputedStyle method ***");
const firstAlert = document.querySelectorAll(".alert")[0];
console.log(
  "1st alert background color (style property) :",
  firstAlert.style.backgroundColor
);
console.log(
  "1st alert background color (getComputedStyle method) :",
  getComputedStyle(firstAlert).backgroundColor
);

console.log("*** className property ***");
console.log("heading2 :", heading2.className);
console.log("heroBlock :", heroBlock.className);

const heading1 = document.querySelector("h1");
heading1.className = "py-2";

console.log("*** classList property ***");
const secondAlert = document.querySelectorAll(".alert")[1];
console.log("2nd alert classList before :", secondAlert.classList);
secondAlert.classList.remove("alert-secondary");
secondAlert.classList.add("alert-primary");
console.log("2nd alert classList after :", secondAlert.classList);
console.log(
  "2nd alert has alert class :",
  secondAlert.classList.contains("alert")
);

for (let className of secondAlert.classList) {
  console.log("class of 2nd alert :", className);
}
