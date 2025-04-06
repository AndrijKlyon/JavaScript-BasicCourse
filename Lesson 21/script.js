"use strict";

// ВЫБОР ФОРМ
const forms = document.forms;
console.log("Forms :", forms);

// Выбор формы с именем customer-form
const customerForm = forms["customer-form"];

// Выбор второй формы на странице
const productForm = forms[1];

// ВЫБОР ЭЛЕМЕНТОВ ФОРМЫ
const customerFormElements = customerForm.elements;
const productFormElements = productForm.elements;

// ПОЛНАЯ И СОКРАЩЕННАЯ ССЫЛКА НА ЭЛЕМЕНТЫ ФОРМЫ
console.log("Email name :", customerFormElements.email.name);
console.log("Email name :", customerForm.email.name);

// ОБРАТНАЯ ССЫЛКА
console.log("Email backlink form :", customerFormElements.email.form.name);

// СОБЫТИЯ Focus/Blur
for (let element of customerFormElements) {
  if (element.type != "checkbox" && element.type != "submit") {
    element.addEventListener("focus", function () {
      element.style.backgroundColor = "lightyellow";
      console.log("Active element :", document.activeElement.name);
    });
    element.addEventListener("blur", function () {
      element.style.backgroundColor = "white";
    });
  }
}

// СОБЫТИЯ Input/Change
customerFormElements.username.oninput = function () {
  console.log("Input value :", this.value);
};

customerFormElements.username.onchange = function () {
  console.log("Change value :", this.value);
};

customerFormElements.country.onchange = function () {
  console.log("Change value :", this.value);
};

customerFormElements.age.onchange = function () {
  console.log("Checked :", this.checked);
};

// ОТПРАВКА ФОРМЫ
productForm.onsubmit = function (event) {
  event.preventDefault();
  alert(
    ` Subscribe period : ${this.period.value} (${this.period.selectedIndex}) \n Package type : ${this.package.value} \n Comment : ${this.comment.value}`
  );
  this.reset();
};
