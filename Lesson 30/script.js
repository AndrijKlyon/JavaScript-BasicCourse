"use strict";

// Выбор элементов
const table = document.querySelector(".table");
const tableBody = table.tBodies[0];
const alertWrapper = document.querySelector(".col-4");
const alert = alertWrapper.querySelector(".alert");

// Массив пользователей
const users = [
  {
    name: "John Smith",
    age: 25,
    address: {
      zip: 1245,
      city: "New York",
      street: "5th Avenu, 56/45",
    },
  },
];

// Копирование объектов
// Копирование ссылки на объект
// const user2 = users[0];

// Поверхностное клонирование объекта
// const user2 = Object.assign({}, users[0]);

// Глубокое клонирование объекта
// const user2 = structuredClone(users[0]);
const user2 = JSON.parse(JSON.stringify(users[0]));

user2.name = "Jake Smith";
user2.address.street = "Stone str, 57";
users.push(user2);

// Отображение пользователей в таблице
showUsers(users);

// Клонирование DOM-объектов
const alert2 = alert.cloneNode(true);
alert2.innerText = "Element 2";
alertWrapper.append(alert2);

// Свойства объекта Object
console.log("user2 entries:", Object.entries(user2));
console.log("user2 keys:", Object.keys(user2));
console.log("user2 values:", Object.values(user2));

// Функции-конструкторы объектов
function User(name, age, address) {
  this.name = name;
  this.age = age;
  this.address = address;
}

function Address(zip, city, street) {
  this.zip = zip;
  this.city = city;
  this.street = street;
}

users.push(
  new User("Mary Brown", 35, new Address(2545, "Las-Vegas", "Brick str, 56"))
);
users.push(
  new User(
    "Alex Marshall",
    42,
    new Address(1378, "Washington", "13th Avenu, 21/564")
  )
);
users.push(
  new User("Jane Beetle", 27, new Address(5714, "Boston", "River str, 55"))
);

showUsers(users);

// Функция отображения пользователей в таблице
function showUsers(users) {
  tableBody.innerHTML = "";
  users.forEach((user) => createRow(user));
}

// Вспомогательная функция создания строки таблицы с данными пользователя
function createRow(user) {
  const rowElement = document.createElement("tr");
  for (let i = 0; i < 6; i++) {
    const tdElement = document.createElement("td");
    let tdText;
    switch (i) {
      case 0:
        tdText = tableBody.rows.length + 1;
        break;
      case 1:
        tdText = user.name.split(" ")[0];
        break;
      case 2:
        tdText = user.name.split(" ")[1];
        break;
      case 3:
        tdText = user.age;
        break;
      case 4:
        tdText = user.address.city;
        break;
      case 5:
        tdText = user.address.street;
    }
    tdElement.innerText = tdText;
    rowElement.append(tdElement);
  }
  tableBody.append(rowElement);
}
