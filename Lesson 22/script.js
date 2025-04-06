"use strict";

// Выбор элементов
const text = document.querySelector(".text");
const alert = document.querySelector(".alert");

// Кнопки вывода метрик
const offsetMetricsBtn = document.querySelector(".btn-primary");
const clientMetricsBtn = document.querySelector(".btn-secondary");
const scrollMetricsBtn = document.querySelector(".btn-dark");
const windowMetricsBtn = document.querySelector(".btn-outline-primary");
const windowCoordsBtn = document.querySelector(".btn-outline-secondary");
const pageCoordsBtn = document.querySelector(".btn-outline-dark");

// Добавление обработчиков события click на кнопки
offsetMetricsBtn.addEventListener("click", offsetMetricsHandler);
clientMetricsBtn.addEventListener("click", clientMetricsHandler);
scrollMetricsBtn.addEventListener("click", scrollMetricsHandler);
windowMetricsBtn.addEventListener("click", windowMetricsHandler);
windowCoordsBtn.addEventListener("click", windowCoordsHandler);
pageCoordsBtn.addEventListener("click", pageCoordsHandler);

// Функция добавления метрики
function addMetric(name, value) {
  const p = document.createElement("p");
  p.className = "mb-1";
  p.innerHTML = `<span class="fw-bold">${name}</span>: ${value};`;
  alert.append(p);
}

// Offset - метрики (относительно родительского элемента с позиционированием)
function offsetMetricsHandler() {
  alert.innerHTML = "";
  addMetric(
    "offsetParent",
    `${text.offsetParent.tagName} (${text.offsetParent.className})`
  );
  addMetric("offsetTop", `${text.offsetTop}px`);
  addMetric("offsetLeft", `${text.offsetLeft}px`);
  addMetric("offsetWidth", `${text.offsetWidth}px`);
  addMetric("offsetHeight", `${text.offsetHeight}px`);
}

// Client - Метрики (внутренние метрики элемента)
function clientMetricsHandler() {
  alert.innerHTML = "";
  addMetric("clientTop", `${text.clientTop}px`);
  addMetric("clientLeft", `${text.clientLeft}px`);
  addMetric("clientWidth", `${text.clientWidth}px`);
  addMetric("clientHeight", `${text.clientHeight}px`);
}

// Scroll - метрики (прокрутка элемента)
function scrollMetricsHandler() {
  alert.innerHTML = "";
  addMetric("scrollTop", `${text.scrollTop}px`);
  addMetric("scrollLeft", `${text.scrollLeft}px`);
  addMetric("scrollWidth", `${text.scrollWidth}px`);
  addMetric("scrollHeight", `${text.scrollHeight}px`);
}

// Метрики окна браузера и документа
const scrollHeight = Math.max(
  document.body.scrollHeight,
  document.documentElement.scrollHeight,
  document.body.offsetHeight,
  document.documentElement.offsetHeight,
  document.body.clientHeight,
  document.documentElement.clientHeight
);

function windowMetricsHandler() {
  alert.innerHTML = "";
  addMetric(
    "documentElement.clientWidth",
    `${document.documentElement.clientWidth}px`
  );
  addMetric(
    "documentElement.clientHeight",
    `${document.documentElement.clientHeight}px`
  );
  addMetric(
    "documentElement.scrollWidth",
    `${document.documentElement.scrollWidth}px`
  );
  addMetric("documentElement.scrollHeight", `${scrollHeight}px`);
  addMetric("window.pageYOffset", `${window.pageYOffset}px`);
  addMetric("window.pageXOffset", `${window.pageXOffset}px`);
}

// Координаты элемента относительно окна браузера (window-метрики)
function windowCoordsHandler() {
  alert.innerHTML = "";
  const elemCoords = text.getBoundingClientRect();
  addMetric("x (left)", `${elemCoords.x}px (${elemCoords.left}px)`);
  addMetric("y (top)", `${elemCoords.y}px (${elemCoords.top}px)`);
  addMetric("width", `${elemCoords.width}px`);
  addMetric("height", `${elemCoords.height}px`);
  addMetric("bottom", `${elemCoords.bottom}px`);
  addMetric("right", `${elemCoords.right}px`);
}

// Координаты элемента относительно документа (page-метрики)
function getPageCoords(elem) {
  const box = elem.getBoundingClientRect();
  return {
    top: box.top + window.pageYOffset,
    right: box.right + window.pageXOffset,
    bottom: box.bottom + window.pageYOffset,
    left: box.left + window.pageXOffset,
  };
}

function pageCoordsHandler() {
  alert.innerHTML = "";
  const elemCoords = getPageCoords(text);
  addMetric("x (left)", `${elemCoords.left}px`);
  addMetric("y (top)", `${elemCoords.top}px`);
  addMetric("right", `${elemCoords.right}px`);
  addMetric("bottom", `${elemCoords.bottom}px`);
}

// Координаты курсора, определение целевого элемента по координатам
document.onpointerup = function (event) {
  if (event.target.tagName != "BUTTON") {
    console.log(
      ` clientX: ${event.clientX}; clientY: ${event.clientY} \n pageX: ${event.pageX}; pageY: ${event.pageY}`
    );
    const elem = document.elementFromPoint(event.clientX, event.clientY);
    if (elem) console.log(` Element: ${elem.tagName}`);
  }
};

// Относительное позиционирование элементов
const list = document.querySelector(".list-group");
list.addEventListener("click", listClickHandler);

function listClickHandler(event) {
  if (event.target.tagName != "SPAN") {
    if (event.target.querySelector("span") == null) {
      const currentLi = event.target;
      const span = document.createElement("span");
      span.className = "position-absolute fs-4";
      span.innerHTML = "&#9745;";
      span.style.right = "20px";
      currentLi.append(span);
      span.style.top = (currentLi.clientHeight - span.clientHeight) / 2 + "px";
    }
  } else event.target.remove();
}
