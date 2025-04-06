"use strict";

// Выбор элементов
const table1 = document.getElementById("table1");
const table2 = document.getElementById("table2");
const form = document.forms["comment-form"];
const alert = document.querySelector(".alert pre");

// Fetch()
// Получение данных
// Пример 1. Обработка результата промиса методом then
const users = fetch("https://dummyjson.com/users?limit=5")
  .then((response) => response.json())
  .then((json) => json.users.forEach((user) => fillRow(user, table1)));

function fillRow(user, table) {
  const tr = document.createElement("tr");
  for (let i = 0; i < 4; i++) {
    tr.append(createCell(user, i));
  }
  table.tBodies[0].append(tr);
}

function createCell(user, i) {
  const td = document.createElement("td");
  let content;
  switch (i) {
    case 0:
      content = user.id;
      break;
    case 1:
      content = `${user.firstName} ${user.lastName}`;
      break;
    case 2:
      content = user.email;
      break;
    case 3:
      content = user.address.city;
      break;
  }
  td.innerText = content;
  return td;
}

// Пример 2. Обработка результата промиса await
async function getPost(id) {
  // получение заголовков ответа
  const response = await fetch(`https://dummyjson.com/posts/${id}`);
  console.log(response);
  // получение тела ответа в формате JSON
  return await response.json();
}

const post1 = getPost(5).then((res) => console.log(res));

// Отправка данных
const postUrl = "https://dummyjson.com/comments/add";
form.onsubmit = async function (event) {
  event.preventDefault();
  alert.innerText = "";
  const formData = formPostSata(this);
  this.reset();

  if (!this.xhr.checked) {
    const result = await fetchSend(postUrl, formData);
    alert.innerText = JSON.stringify(result, null, 2);
  } else {
    xhrSend(postUrl, formData);
  }
};

function formPostSata(form) {
  //   const formData = JSON.stringify({
  //     body: form.body.value,
  //     userId: 4,
  //     postId: form.postId.value,
  //   });

  const formData = new FormData(form);
  formData.append("userId", 4);
  formData.delete("xhr");

  for (let [name, value] of formData) {
    console.log(`${name} = ${value}`);
  }

  return formData;
}

// Отправка методом fetch()
async function fetchSend(url, data) {
  const res = await fetch(url, {
    method: "POST",
    // headers: {
    //   "Content-Type": "application/json",
    // },
    body: data,
  });
  return await res.json();
}

// Отправка методами XMLHttpRequest
function xhrSend(url, data) {
  const xhr = new XMLHttpRequest();
  xhr.responseType = "json";
  xhr.open("POST", url);
  xhr.send(data);
  xhr.onload = () => (alert.innerText = JSON.stringify(xhr.response, null, 2));
}

// XMLHttpRequest
// 1. Создание объекта XMLHttpRequest
const xhr = new XMLHttpRequest();
// 2. инициализация и настройка: GET-запрос по URL
xhr.open("GET", "https://dummyjson.com/users?limit=5");
xhr.responseType = "json";
// 3. Отправка запроса
xhr.send();
// 4. Обработка ответов сервера
xhr.onload = function () {
  if (xhr.status != 200) {
    console.log(`Error ${xhr.status}: ${xhr.statusText}`);
  } else {
    xhr.response.users.forEach((user) => fillRow(user, table2));
  }
};
xhr.onprogress = function (event) {
  if (event.lengthComputable) {
    console.log(`Received ${event.loaded} of ${event.total} bytes`);
  } else {
    console.log(`Received ${event.loaded} bytes`);
  }
};
xhr.onerror = function () {
  console.log("Error");
};
