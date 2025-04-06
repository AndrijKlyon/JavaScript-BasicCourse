"use strict";

// Родительский элемент
const row = document.querySelector(".row");

// СОЗДАНИЕ УЗЛОВ
const card1Wrapper = document.createElement("div");
card1Wrapper.className = "col-4";

const card1 = document.createElement("div");
card1.className = "alert alert-primary";

const card1Content = document.createTextNode("Card 1 Content");

const comment = document.createComment("New content");

// ВСТАВКА УЗЛОВ
// Методы вставки узлов на страницу
row.insertAdjacentElement("afterbegin", card1Wrapper);
card1Wrapper.insertAdjacentElement("afterbegin", card1);
card1.insertAdjacentText("afterbegin", card1Content.textContent);

// Сокращенные методы вставки узлов
const card2Wrapper = document.createElement("div");
card2Wrapper.className = "col-4";

const card2 = document.createElement("div");
card2.className = "alert alert-warning";
card2.innerText = "Card 2 Content";

card2Wrapper.append(card2);
row.append(card2Wrapper);
row.prepend(comment);

// СОЗДАНИЕ ФРАГМЕНТОВ ДОКУМЕНТА
// Создание клона элемента
const card3Wrapper = card1Wrapper.cloneNode(true);
// Изменение содержимого клона
const card3 = card3Wrapper.querySelector(".alert");
card3.innerText = "Card 3 Content";
card3.classList.remove("alert-primary");
card3.classList.add("alert-success");
// Вставка клона на страницу
card2Wrapper.after(card3Wrapper);

// Метод insertAdjacentHTML
card3Wrapper.insertAdjacentHTML(
  "afterend",
  `
            <div class="col-4">
                <div class="alert alert-secondary">
                    Card 4 Content <span>deleted content</span>
                </div>
            </div>
`
);

// Свойство innerHTML (нежелательный вариант)
const card5Wrapper = document.createElement("div");
card5Wrapper.className = "col-4";
row.append(card5Wrapper);
card5Wrapper.innerHTML = `<div class="alert alert-danger">Card 5 Content</div>`;

// Объект DocumentFragment
const fragment = new DocumentFragment();
const ul = document.createElement("ul");
ul.className = "col-4 list-group";
for (let i = 1; i <= 3; i++) {
  let li = document.createElement("li");
  li.className = "list-group-item";
  li.innerText = `Item ${i}`;
  fragment.append(li);
}
ul.append(fragment);
document.querySelector(".container").append(ul);

// УДАЛЕНИЕ УЗЛОВ
document.querySelector("span").remove();
ul.innerHTML = "";
