import { drawTable } from "./table.js";
import { filterUsers } from "./users.js";
import { debounce } from "./library.js";

// Элементы
const filterForm = document.forms["filter-form"];
const filterInput = filterForm.filter;

// Обработчик фильтра
export const applyFilter = () => {
  filterInput.addEventListener(
    "input",
    debounce(() => filterUsersHandler(filterInput.value))
  );

  function filterUsersHandler(filter) {
    const result = filterUsers(filter);
    drawTable(result);
  }
};
