"use strict";

// Выбор элементов
const page = document.documentElement;
const homeSection = document.querySelector(".home");
const nav = document.querySelector("nav");

const btnChangeTitle = document.querySelector(".btn-dark");
const btnStopWatching = document.querySelector(".btn-outline-secondary");

const sections = document.querySelectorAll("section");
const images = document.querySelectorAll(".image");

const topBtn = document.querySelector(".top-btn");

// MUTATION OBSERVER
// 1 Объект настроек
const mutationConfig = {
  childList: true,
  subtree: true,
  attributes: true,
};

// 2 Функция-callback
function mutationCallback(records, observer) {
  for (let record of records) {
    console.log("Change element:", record.target);
    console.log("Change type:", record.type);
  }
}

// 3 Наблюдатель
const mutationObserver = new MutationObserver(mutationCallback);

// 4 Наблюдаемые элементы
const mutationNode = homeSection;

// 5 Привязка элементов к наблюдателю
mutationObserver.observe(mutationNode, mutationConfig);

// Изменение наблюдаемых элементов
btnChangeTitle.onclick = function () {
  const h1 = mutationNode.querySelector("h1");
  h1.textContent = "New text";
  h1.classList.add("text-success");
};

// Остановка наблюдения
btnStopWatching.onclick = function () {
  mutationObserver.disconnect();
};

// INTERSECTION OBSERVER
// 1 Объект настроек
const intersectionConfig = {
  root: null,
  threshold: [0.5, 0.8],
};

// 2 Функция-callback
function intersectionCallback(records, observer) {
  for (let record of records) {
    if (record.isIntersecting) {
      if (record.target.tagName != "SECTION") {
        record.target.classList.add("animated");
        // прекращение наблюдения
        observer.unobserve(record.target);
      } else {
        const currentSectionId = record.target.id;
        document.querySelector(".active").classList.remove("active");
        document
          .querySelector(`a[href="#${currentSectionId}"]`)
          .classList.add("active");
        // скрытие кнопки Top вверху страницы
        topBtn.hidden = currentSectionId == "home";
        // изменение стилей панели меню
        if (currentSectionId == "home" && record.intersectionRatio <= 0.8) {
          nav.classList.add("bg-success");
          nav.classList.remove("bg-dark");
        } else if (
          currentSectionId == "home" &&
          record.intersectionRatio > 0.8
        ) {
          nav.classList.remove("bg-success");
          nav.classList.add("bg-dark");
        }
      }
    }
  }
}

// 3 Наблюдатель
const intersectionObserver = new IntersectionObserver(
  intersectionCallback,
  intersectionConfig
);

// 4 Наблюдаемые элементы
const intersectionNodes = images;

// 5 Привязка элементов к наблюдателю
for (let node of intersectionNodes) {
  intersectionObserver.observe(node);
}

// Добавление новых элементов в IntersectionObserver
const intersectionNodes2 = sections;
for (let node of intersectionNodes2) {
  intersectionObserver.observe(node);
}

// RESIZE OBSERVER
// 1 Объект настроек
const resizeConfig = {};

// 2 Функция-callback
function resizeCallback(records, observer) {
  for (let record of records) {
    console.log(`width: ${page.clientWidth}px; height: ${page.clientHeight}px`);
    console.log(`width: ${record.contentRect.width}px`);
  }
}

// 3 Наблюдатель
const resizeObserver = new ResizeObserver(resizeCallback);

// 4 Наблюдаемые элементы
const resizeNode = page;

// 5 Привязка элементов к наблюдателю
resizeObserver.observe(resizeNode, resizeConfig);
