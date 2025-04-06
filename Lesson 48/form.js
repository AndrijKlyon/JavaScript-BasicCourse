import { addUser, updateUser } from "./users.js";
import { drawTable, deleteRowSelection } from "./table.js";

// Элементы
const form = document.forms["user-form"];

// Обработчик отправки формы
const applyUserForm = () => {
  // Валидация формы по умолчанию
  form.addEventListener("submit", (event) => {
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
      form.classList.add("was-validated");
    } else {
      form.classList.remove("was-validated");
      formHandler(event);
    }
  });
  // Обработка данных
  function formHandler(event) {
    event.preventDefault();
    // обновление данных пользователя
    if (form.hasAttribute("data-id")) {
      updateUser({
        id: form.getAttribute("data-id"),
        name: form.name.value,
        email: form.email.value,
        code: form.code.value,
      });
      deleteRowSelection(form.getAttribute("data-id"));
      form.removeAttribute("data-id");
    }
    // добавление нового пользователя
    else {
      addUser({
        name: form.name.value,
        email: form.email.value,
        code: form.code.value,
      });
    }

    form.reset();
    drawTable();
  }
};

// Заполнение формы данными пользователя
function fillForm(user) {
  form.name.value = user.name;
  form.email.value = user.email;
  form.code.value = user.code;

  form.setAttribute("data-id", user.id);
}

export { applyUserForm, fillForm };
