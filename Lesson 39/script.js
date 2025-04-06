"use strict";

// Выбор элементов
const listEl = document.getElementById("list-1");
const form = document.forms.pow;

// РЕКУРСИЯ
console.log("*** РЕКУРСИЯ ***");
// Пример 1. Сумма чисел
// Решение с использованием цикла
function loopSum(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

console.log("loopSum(4)=", loopSum(4));

// Решение через рекурсию
function recursionSum(n) {
  if (n == 1) return 1;
  return n + recursionSum(n - 1);
}

console.log("recursionSum(4)=", recursionSum(4));

// Пример 2. Рекурсивный обход
const list = [
  { title: "Item 1", link: "item1.html" },
  {
    title: "Item 2",
    link: "item2.html",
    subitems: [
      { title: "Item 2.1", link: "item21.html" },
      { title: "Item 2.2", link: "item22.html" },
    ],
  },
  {
    title: "Item 3",
    link: "item3.html",
    subitems: [
      { title: "Item 3.1", link: "item31.html" },
      { title: "Item 3.2", link: "item32.html" },
      {
        title: "Item 3.3",
        link: "item33.html",
        subitems: [
          { title: "Item 3.3.1", link: "item331.html" },
          { title: "Item 3.3.2", link: "item332.html" },
        ],
      },
      { title: "Item 3.4", link: "item34.html" },
    ],
  },
  { title: "Item 4", link: "item4.html" },
];

function makeNewList(wrapEl, list) {
  list.forEach((item) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.innerText = item.title;
    a.href = item.link;
    li.append(a);
    wrapEl.append(li);
    if (item.subitems) {
      const ul = document.createElement("ul");
      li.append(ul);
      makeNewList(ul, item.subitems);
    }
  });
}

makeNewList(listEl, list);

// ДЕКОРАТОРЫ
console.log("*** ДЕКОРАТОРЫ ***");
// Произвольная функция
const pow = function (x, y) {
  return x ** y;
};

console.log("result from initial function:", pow(2, 3));

// Функция-декоратор кэширования
function cacheDecorator(func) {
  const cache = new Map();
  return function (...args) {
    const key = args.join("-");
    let result;
    if (cache.has(key)) {
      result = cache.get(key);
      console.log("from cache");
    } else {
      result = func.apply(this, args);
      cache.set(key, result);
      console.log("result is cached");
    }
    return result;
  };
}

const cachedPow = cacheDecorator(pow);

form.calc.onclick = function () {
  const base = form.base.value;
  const pow = form.pow.value;
  form.result.value = cachedPow(base, pow);
};

// ЗАИМСТВОВАНИЕ МЕТОДА
console.log("*** ЗАИМСТВОВАНИЕ МЕТОДА ***");

const car = {
  model: "unknown",
  getModel() {
    return this.model;
  },
};

const car1 = {
  model: "BMW X5",
};

console.log("car model:", car.getModel.call(car1));

// КАРРИРОВАНИЕ
console.log("*** КАРРИРОВАНИЕ ***");
//  Функция каррирования
function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2));
      };
    }
  };
}

function sayPhrase(greeting, name) {
  return `${greeting}, ${name}`;
}

// Каррирование функции sayPhrase
const curriedSayPhrase = curry(sayPhrase);

console.log(curriedSayPhrase("Hi")("John"));

// ЧАСТИЧНОЕ ПРИМЕНЕНИЕ
console.log("*** ЧАСТИЧНОЕ ПРИМЕНЕНИЕ ***");

// 1. Использование метода bind()
const sayBye = sayPhrase.bind(null, "Bye");
console.log(sayBye("Pete"));
console.log(sayBye("Jane"));

// 2. Использование каррирования
const sayBye2 = curriedSayPhrase("Bye");
console.log(sayBye2("Alex"));
console.log(sayBye2("Mary"));
