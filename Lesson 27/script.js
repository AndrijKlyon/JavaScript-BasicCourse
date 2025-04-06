"use strict";

// Выбор элементов
const userForm = document.forms["user-form"];
const userFormInputs = userForm.querySelectorAll(".form-control");
const userFormData = document.getElementById("user-form-data");

// Добавление обработчиков событий focus/blur на поля ввода
for (let input of userFormInputs) {
  input.addEventListener("focus", inputFocusHandler);
  input.addEventListener("blur", inputBlurHandler);
}

// Обработчики событий focus/blur
function inputFocusHandler() {
  clearInput(this);
}

function clearInput(input) {
  input.classList.remove("is-valid", "is-invalid");
  const inputFeedbackElement = input.closest("div").querySelector(".feedback");
  inputFeedbackElement.classList.remove("valid-feedback", "invalid-feedback");
  inputFeedbackElement.textContent = "";
}

function inputBlurHandler() {
  switch (this.id) {
    case "name":
      validateName(this);
      break;
    case "email":
      validateEmail(this);
      break;
    case "nick":
      validateNick(this);
  }
}

// Валидация полей
function validateName(nameInput) {
  const name = nameInput.value;
  if (name.trim().includes(" ")) {
    markValid(nameInput);
    return true;
  } else {
    markInvalid(nameInput);
    return false;
  }
}

function validateEmail(emailInput) {
  const email = emailInput.value;
  if (email.match(/^\S+@\S+\.\S+$/)) {
    markValid(emailInput);
    return true;
  } else {
    markInvalid(emailInput, "Enter correct email address!");
    return false;
  }
}

function validateNick(nickInput) {
  const nick = nickInput.value;
  if (nick.startsWith("@")) {
    markValid(nickInput);
    return true;
  } else {
    markInvalid(nickInput, "Nick must have correct format!");
    return false;
  }
}

function markValid(inputElement, feedbackMessage = "Looks good!") {
  inputElement.classList.add("is-valid");
  const inputFeedbackElement = inputElement
    .closest("div")
    .querySelector(".feedback");
  inputFeedbackElement.classList.add("valid-feedback");
  inputFeedbackElement.textContent = feedbackMessage;
}

function markInvalid(inputElement, feedbackMessage = "Invalid data!") {
  inputElement.classList.add("is-invalid");
  const inputFeedbackElement = inputElement
    .closest("div")
    .querySelector(".feedback");
  inputFeedbackElement.classList.add("invalid-feedback");
  inputFeedbackElement.textContent = feedbackMessage;
}

// Добавление обработчика отправки формы
userForm.addEventListener("submit", userFormHandler);

// Обработчик отправки формы
function userFormHandler(event) {
  event.preventDefault();
  if (
    validateName(this.name) &&
    validateEmail(this.email) &&
    validateNick(this.nick)
  ) {
    printUserFormData(this);
  }
}

function printUserFormData(form) {
  const name = form.name.value.trim();
  const spaceIndex = name.indexOf(" ");
  const firstName = name.slice(0, spaceIndex);
  const lastName = name.slice(spaceIndex + 1);
  addLine(
    "First name",
    firstName[0].toUpperCase() + firstName.slice(1).toLowerCase()
  );
  addLine(
    "Last name",
    lastName[0].toUpperCase() + lastName.slice(1).toLowerCase()
  );
  addLine("Email", form.email.value);
  addLine("Nick", form.nick.value);
}

function addLine(key, value) {
  const p = document.createElement("p");
  p.className = "mb-2";
  p.innerHTML = `<span class="fw-bold">${key}</span>: ${value}`;
  userFormData.append(p);
}

// Очистка формы
userForm.resetBtn.onclick = function () {
  userForm.reset();
  userFormData.innerHTML = "";
  for (let input of userFormInputs) {
    clearInput(input);
  }
};
