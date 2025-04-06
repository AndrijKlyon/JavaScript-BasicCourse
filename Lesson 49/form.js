import { app } from "./script.js";

export class Form {
  constructor() {
    // Элементы
    this._form = document.forms["user-form"];
    this._loadEventListeners();
  }

  // Загрузка обработчиков
  _loadEventListeners() {
    // Валидация формы по умолчанию
    this._form.addEventListener("submit", (event) => {
      if (!this._form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
        this._form.classList.add("was-validated");
      } else {
        this._form.classList.remove("was-validated");
        this._formHandler(event);
      }
    });
  }

  // Обработка данных
  _formHandler(event) {
    event.preventDefault();
    // обновление данных пользователя
    if (this._form.hasAttribute("data-id")) {
      app.users.updateUser({
        id: this._form.getAttribute("data-id"),
        name: this._form.name.value,
        email: this._form.email.value,
        code: this._form.code.value,
      });
      app.table.deleteRowSelection(this._form.getAttribute("data-id"));
      this._form.removeAttribute("data-id");
    }
    // добавление нового пользователя
    else {
      app.users.addUser({
        name: this._form.name.value,
        email: this._form.email.value,
        code: this._form.code.value,
      });
    }

    this._form.reset();
    app.table.drawTable();
  }

  // Заполнение формы данными пользователя
  fillForm(user) {
    this._form.name.value = user.name;
    this._form.email.value = user.email;
    this._form.code.value = user.code;

    this._form.setAttribute("data-id", user.id);
  }
}
