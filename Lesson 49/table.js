import { app } from "./script.js";

export class Table {
  constructor() {
    // Элементы
    this._table = document.querySelector(".table");
    this._tBody = this._table.tBodies[0];
    this._tHead = this._table.tHead;
    this._loadEventListeners();
  }

  // Загрузка обработчиков
  _loadEventListeners() {
    this._tHead.addEventListener("click", this._sortUsersHandler.bind(this));
  }

  // Функции заполнения таблицы
  drawTable(users = app.users.usersArr) {
    this._resetTable();
    users.forEach((user) => this._createRow(user));
  }

  _resetTable() {
    this._tBody.innerHTML = "";
  }

  _createRow(user) {
    const tr = document.createElement("tr");
    tr.append(this._createTd("th", user.id));
    tr.append(this._createTd("td", user.name));
    tr.append(this._createTd("td", user.email));
    tr.append(this._createTd("td", user.code));

    const actionsTd = this._createTd("td", "");
    const editBtn = this._createBtn("btn-dark", "Edit", user.id);
    const deleteBtn = this._createBtn("btn-danger", "Delete", user.id);
    editBtn.addEventListener("click", this._editUserHandler.bind(this));
    deleteBtn.addEventListener("click", this._deleteUserHandler.bind(this));
    actionsTd.append(editBtn, deleteBtn);
    tr.append(actionsTd);

    this._tBody.append(tr);
  }

  _createTd(type, content) {
    const td = document.createElement(type == "td" ? "td" : "th");
    td.innerText = content;
    return td;
  }

  _createBtn(className, content, attr) {
    const btn = document.createElement("button");
    btn.className = `btn btn-sm me-2 ${className}`;
    btn.innerText = content;
    btn.dataset.id = attr;
    return btn;
  }

  // Обработчики события click кнопок
  _editUserHandler(event) {
    const userId = event.target.dataset.id;
    const currentUser = app.users.getUserById(userId);
    app.form.fillForm(currentUser);
    console.log(this);
    const editedEl = this._getCurrentRow(userId);
    editedEl.classList.add("edited");
  }

  _deleteUserHandler(event) {
    const userId = event.target.dataset.id;
    app.users.deleteUser(userId);
    const deletedEl = this._getCurrentRow(userId);
    deletedEl.classList.add("deleted");
    setTimeout(() => this.drawTable(), 1000);
  }

  _getCurrentRow(id) {
    return this._tBody.querySelector(`[data-id="${id}"]`).closest("tr");
  }

  // Снятие выделения строки
  deleteRowSelection(id) {
    const editedEl = this._getCurrentRow(id);
    editedEl.classList.remove("edited");
  }

  // Функция сортировки пользователей
  _sortUsersHandler(event) {
    const sortParameter = event.target.dataset.sort;
    app.users.sortUsers(sortParameter);
    this.drawTable();
  }
}
