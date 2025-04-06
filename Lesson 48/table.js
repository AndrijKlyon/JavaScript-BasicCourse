import { usersArr, deleteUser, getUserById, sortUsers } from "./users.js";
import { fillForm } from "./form.js";

// Элементы
const table = document.querySelector(".table");
const tBody = table.tBodies[0];
const tHead = table.tHead;

// Функции заполнения таблицы
function drawTable(users = usersArr) {
  resetTable();
  users.forEach((user) => createRow(user));
}

function resetTable() {
  tBody.innerHTML = "";
}

function createRow(user) {
  const tr = document.createElement("tr");
  tr.append(createTd("th", user.id));
  tr.append(createTd("td", user.name));
  tr.append(createTd("td", user.email));
  tr.append(createTd("td", user.code));

  const actionsTd = createTd("td", "");
  const editBtn = createBtn("btn-dark", "Edit", user.id);
  const deleteBtn = createBtn("btn-danger", "Delete", user.id);
  editBtn.addEventListener("click", editUserHandler);
  deleteBtn.addEventListener("click", deleteUserHandler);
  actionsTd.append(editBtn, deleteBtn);
  tr.append(actionsTd);

  tBody.append(tr);
}

function createTd(type, content) {
  const td = document.createElement(type == "td" ? "td" : "th");
  td.innerText = content;
  return td;
}

function createBtn(className, content, attr) {
  const btn = document.createElement("button");
  btn.className = `btn btn-sm me-2 ${className}`;
  btn.innerText = content;
  btn.dataset.id = attr;
  return btn;
}

// Обработчики события click кнопок
function editUserHandler(event) {
  const userId = event.target.dataset.id;
  const currentUser = getUserById(userId);
  fillForm(currentUser);

  const editedEl = getCurrentRow(userId);
  editedEl.classList.add("edited");
}

function deleteUserHandler(event) {
  const userId = event.target.dataset.id;
  deleteUser(userId);
  const deletedEl = getCurrentRow(userId);
  deletedEl.classList.add("deleted");
  setTimeout(() => drawTable(), 1000);
}

function getCurrentRow(id) {
  return tBody.querySelector(`[data-id="${id}"]`).closest("tr");
}

// Снятие выделения строки
function deleteRowSelection(id) {
  const editedEl = getCurrentRow(id);
  editedEl.classList.remove("edited");
}

// Функция сортировки пользователей
tHead.addEventListener("click", sortUsersHandler);

function sortUsersHandler(event) {
  const sortParameter = event.target.dataset.sort;
  sortUsers(sortParameter);
  drawTable();
}

export { drawTable, deleteRowSelection };
