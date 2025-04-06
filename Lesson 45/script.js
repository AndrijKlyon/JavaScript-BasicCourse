"use strict";

// Выбор элементов
const usersTable = document.getElementById("users-table");
const authForm = document.forms["auth-form"];
const authUserMessage = document.getElementById("auth-user-message");
const userHistoryMessage = document.getElementById("user-history-message");

// Аутентифицированные пользователи
const users = getUsersFromStorage();

// Отображение пользователей
getUsers().then((users) => fillTable(users, usersTable));

// Получение пользователей
async function getUsers() {
  const response = await fetch("https://dummyjson.com/users?limit=5");
  const json = await response.json();
  const users = json.users.map((item) => ({
    id: item.id,
    username: item.username,
    password: item.password,
  }));
  console.log(users);
  return users;
}

// Занесение пользователей в таблицу
function fillTable(users, table) {
  users.forEach((user) => {
    table.tBodies[0].insertAdjacentHTML(
      "beforeend",
      `
           <tr>
            <td>${user.id}</td>
            <td>${user.username}</td>
            <td>${user.password}</td>
           </tr>
        `
    );
  });
}

// Отправка формы аутентификации
authForm.onsubmit = async function (event) {
  event.preventDefault();
  const data = new FormData(this);
  const response = await sendData(data);
  console.log(response);
  this.reset();
  if (response.status) {
    console.log(response.result);
    createCookie(response.result);
    addUserToStorage(response.result);
  } else {
    console.warn(response.result.message);
  }
};

// Аутентификация
async function sendData(data) {
  try {
    const response = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      body: data,
      //   credentials: "include",
    });
    const status = response.ok;
    const result = await response.json();
    return { status, result };
  } catch (error) {
    console.warn(`Error: ${error.message}`);
  }
}

// Добавление Cookie
function createCookie(response) {
  setCookie("accessToken", response.accessToken);
  setCookie("refreshToken", response.refreshToken);
}

// Получение текущего аутентифицированного пользователя
authForm["get-current-user"].onclick = async () => {
  authUserMessage.innerHTML = "";
  try {
    const response = await fetch("https://dummyjson.com/auth/me", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${getCookie("accessToken")}`,
      },
    });
    const status = response.ok;
    const user = await response.json();
    if (status) {
      authUserMessage.insertAdjacentHTML(
        "beforeend",
        `
                <div><b>id:</b> ${user.id}</div>
                <div><b>first name:</b> ${user.firstName}</div>
                <div><b>last name:</b> ${user.lastName}</div>
            `
      );
    }
  } catch (error) {
    console.warn(`Error: ${error.message}`);
  }
};

// Получение пользователей из localStorage
function getUsersFromStorage() {
  return JSON.parse(localStorage.getItem("users")) ?? [];
}

// Добавление пользователя в localStorage
function addUserToStorage(user) {
  const { id, firstName, lastName } = user;
  users.push({
    id,
    firstName,
    lastName,
  });
  localStorage.setItem("users", JSON.stringify(users));
}

// Обновление истории
authForm["update-history"].onclick = () => {
  userHistoryMessage.innerHTML = "";
  const users = getUsersFromStorage();
  if (users) {
    for (let user of users) {
      userHistoryMessage.append(addUserToHistoryMessage(user));
    }
  }
};

// Добавление элемента пользователя
function addUserToHistoryMessage(user) {
  const div = document.createElement("div");
  div.className = "badge rounded-pill text-bg-primary me-2";
  div.innerText = user.firstName + " " + user.lastName;
  return div;
}
