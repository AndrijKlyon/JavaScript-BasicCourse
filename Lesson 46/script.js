"use strict";

// Выбор элементов
const productForm = document.forms["product-form"];
const imagePreview = document.getElementById("image-preview");
const imageInfo = document.getElementById("image-info");
const qpInfo = document.getElementById("qp-info");
const text = document.getElementById("text");

// Отображение информации об изображении
// productForm.image.onchange = function () {
//   imageInfo.innerHTML = "";
//   const [file] = this.files;
//   if (file) {
//     isImage(file)
//       ? getImageInfo(file)
//       : (imageInfo.innerText = "File is not image");
//   }
// };

function isImage(file) {
  return file.name.match(/\.(jpg|jpeg|png|gif)$/i);
}

function getImageInfo(file) {
  imagePreview.src = URL.createObjectURL(file);
  addInfoItem("Name: ", file.name, imageInfo);
  addInfoItem("Type: ", file.type, imageInfo);
  addInfoItem("Size: ", `${file.size / 1000} KB`, imageInfo);
  addInfoItem(
    "Last Modified: ",
    file.lastModifiedDate.toLocaleDateString("en-US"),
    imageInfo
  );
}

function addInfoItem(key, value, wrapper) {
  const p = document.createElement("p");
  p.innerHTML = `<b>${key}: </b> ${value}`;
  p.className = "mb-2";
  wrapper.append(p);
}

// Разбор URL-адреса
productForm["get-qp"].onclick = function () {
  const url = new URL(document.URL);
  for (let [name, value] of url.searchParams) {
    addInfoItem(name, value, qpInfo);
  }
};

// Выделение фрагментов документа
const range = new Range();
const startPoint = text.textContent.indexOf("Lorem");
range.setStart(text.firstChild, startPoint);
range.setEnd(text.firstChild, startPoint + 5);
document.getSelection().addRange(range);

// Отслеживание выделения
// document.onselectionchange = function () {
//   const selection = document.getSelection().toString();
//   console.log(selection);
// };
