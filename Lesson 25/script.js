"use strict";

// HTML Drag and Drop API

// Выбор списков
const taskList1 = document.querySelector(".task-list-1");
const taskList1Items = taskList1.querySelectorAll(".list-group-item");
const taskList2 = document.querySelector(".task-list-2");

// Добавление элементам списка 1 атрибута-свойства draggable
for (let task of taskList1Items) {
  task.draggable = true;
}

// Начало перетаскивания из списка 1
taskList1.addEventListener("dragstart", (event) => {
  event.target.classList.add("shadow-sm");
  event.dataTransfer.setData("text", "custom data");
});

// Начало перетаскивания внутри списка 2
taskList2.addEventListener("dragstart", (event) => {
  event.target.classList.add("shadow-sm");
});

// Попадание элемента в цель перетаскивания
taskList2.addEventListener("dragover", (event) => {
  const backEl = document.elementFromPoint(event.clientX, event.clientY);
  if (backEl.tagName != "LI") event.preventDefault();
});

// Сброс элемента в цель перетаскивания
taskList2.addEventListener("drop", (event) => {
  console.log(event.dataTransfer.getData("text"));
  const currentEl = document.querySelector(".shadow-sm");
  const prevEl = document.elementFromPoint(
    event.clientX,
    event.clientY - currentEl.offsetHeight / 2
  );
  prevEl.tagName == "LI"
    ? taskList2.insertBefore(currentEl, prevEl.nextElementSibling)
    : taskList2.append(currentEl);
});

// Конец перетаскивания
taskList2.addEventListener("dragend", (event) => {
  event.target.classList.remove("shadow-sm");
});

// PointerEvents API

// Выбор списков
const jsTaskList1 = document.querySelector(".js-task-list-1");
const jsTaskList1Items = jsTaskList1.querySelectorAll(".list-group-item");
const jsTaskList2 = document.querySelector(".js-task-list-2");

// Добавление функциональности drag and drop
for (let item of jsTaskList1Items) {
  // отключение обработки события перетаскивания dragstart
  item.ondragstart = function () {
    return false;
  };
  // добавление обработчиков события pointerdown
  item.addEventListener("pointerdown", onPointerDown);
}

// Обработчик события pointerdown
function onPointerDown(event) {
  // Навешивание обработчиков на события pointerup, pointermove
  document.addEventListener("pointerup", dropElement);
  document.addEventListener("pointermove", onPointerMove);
  // определение перетаскиваемого элемента
  const dragElement = this;
  // определение начального положения перетаскиваемого элемента
  let shiftX = event.clientX - dragElement.getBoundingClientRect().left;
  let shiftY = event.clientY - dragElement.getBoundingClientRect().top;
  // корректировка стилей перетаскиваемого элемента
  dragElement.style.width = `${event.target.offsetWidth}px`;
  dragElement.style.position = "absolute";
  dragElement.style.zIndex = 1000;
  // переменные элементов, расположенных над и выше перетаскиваемого
  let backElement;
  let prevElement;

  // обработчик события pointermove
  function onPointerMove(event) {
    dragElement.hidden = true;
    backElement = document.elementFromPoint(event.clientX, event.clientY);
    prevElement = document.elementFromPoint(
      event.clientX,
      event.clientY - dragElement.offsetHeight / 2
    );
    dragElement.hidden = false;
    moveAt(event.pageX, event.pageY);
  }

  // функция перемещения перетаскиваемого элемента
  function moveAt(pageX, pageY) {
    dragElement.style.left = pageX - shiftX + "px";
    dragElement.style.top = pageY - shiftY + "px";
  }

  // функция сброса перетаскиваемого элемента
  function dropElement(event) {
    document.removeEventListener("pointermove", onPointerMove);
    document.removeEventListener("pointerup", dropElement);
    if (backElement.classList.contains("js-task-list-2")) {
      jsTaskList2.append(dragElement);
    } else if (
      prevElement.tagName == "LI" &&
      backElement.parentElement.classList.contains("js-task-list-2")
    ) {
      jsTaskList2.insertBefore(dragElement, prevElement);
    }
    dragElement.style = "";
  }
}

// Захват указателя (PointerCapture)
const mark = document.getElementById("mark");
const slider = document.getElementById("slider");

mark.onpointerdown = function (event) {
  // перенацелить все события указателя (до pointerup) на mark
  mark.setPointerCapture(event.pointerId);
  // начать отслеживание перемещения указателя
  mark.onpointermove = function (event) {
    let newLeft = event.clientX - slider.getBoundingClientRect().left;
    if (newLeft < 0) newLeft = 0;
    let maxLeft =
      slider.getBoundingClientRect().width - mark.getBoundingClientRect().width;
    if (newLeft > maxLeft) newLeft = maxLeft;
    mark.style.left = newLeft + "px";
  };
  // если сработало событие pointerup, завершить отслеживание перемещения указателя
  mark.onpointerup = function (event) {
    mark.onpointermove = null;
    mark.onpointerup = null;
  };
};
