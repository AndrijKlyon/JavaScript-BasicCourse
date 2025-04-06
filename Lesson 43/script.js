"use strict";

// Выбор элементов
const alert = document.querySelector(".alert");

// Promise
function loadScript(src) {
  return new Promise(function (resolve, reject) {
    const script = document.createElement("script");
    script.src = src;

    script.onload = () => resolve(src);
    script.onerror = () => reject(new Error(`Error in script loading: ${src}`));

    document.head.append(script);
  });
}

// const promise = loadScript("one.js");
// promise.then(
//   (script) => console.log(`${script} is loaded!`),
//   (error) => console.log(`Error: ${error.message}`)
// );

// Promise chaining
// Example 1
// loadScript("one.js")
//   .then((script) => loadScript("two.js"))
//   .then((script) => loadScript("three.js"))
//   .then((script) => {
//     // скрипты загружены, можно использовать объявленные в них функции
//     one();
//     two();
//     three();
//   });

// Example 2
new Promise((resolve, reject) => {
  resolve("Result 1");
})
  .then((result) => {
    console.log("chaining:", result);
    return "Result 2";
  })
  .then((result) => {
    console.log("chaining:", result);
  });

// Promise API
// Example 1
// Promise.all([
//   loadScript("one.js"),
//   loadScript("two.js"),
//   loadScript("three.js"),
// ]).then((result) => {
//   console.log(result);
//   one();
//   two();
//   three();
// });

// Example 2
Promise.allSettled([
  loadScript("one.js"),
  loadScript("two.js"),
  loadScript("three.js"),
]).then((result) => {
  console.log(result);
  one();
  two();
  three();
});

// Async/await
async function loadSource(src) {
  try {
    await loadScript(src);
    alert.classList.add("alert-info");
    alert.innerText = str;
  } catch (error) {
    console.warn(`Error: ${error.message}`);
  }
}

loadSource("myscript.js");
