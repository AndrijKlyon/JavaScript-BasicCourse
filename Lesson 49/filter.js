import { app } from "./script.js";
import { debounce } from "./library.js";

export class Filter {
  constructor() {
    // Элементы
    this._filterForm = document.forms["filter-form"];
    this._filterInput = this._filterForm.filter;
    this._loadEventListeners();
  }

  // Загрузка обработчиков
  _loadEventListeners() {
    this._filterInput.addEventListener(
      "input",
      debounce(() => this._filterUsersHandler(this._filterInput.value))
    );
  }

  // Обработчик фильтра
  _filterUsersHandler(filter) {
    const result = app.users.filterUsers(filter);
    app.table.drawTable(result);
  }
}
