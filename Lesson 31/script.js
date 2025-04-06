"use strict";

// Выбор элементов
const table = document.querySelector(".table");
const tHead = table.tHead;
const tBody = table.tBodies[0];

// Массив пользователей
const users = [
  {
    id: 2456,
    name: "Alex Dow",
    age: 24,
    address: {
      zip: 2413,
      city: "Chicago",
      street: "River road, 24",
    },
  },
  {
    id: 2473,
    name: "Jane Carter",
    age: 34,
    address: {
      zip: 1245,
      city: "Denver",
      street: "Flower str, 77",
    },
  },
  {
    id: 2504,
    name: "Chris Lee",
    age: 29,
    address: {
      zip: 5020,
      city: "Boston",
      street: "Greenside str, 35",
    },
  },
  {
    id: 1877,
    name: "Robert McDuglas",
    age: 38,
    address: {
      zip: 3925,
      city: "Dallas",
      street: "Royal avenue, 25/15",
    },
  },
];

// Изменение идентификаторов пользователей
// users.forEach((item, index) => (item.id = index + 1));

// Добавление новых идентификаторов пользователей
// users.forEach((item, index) => (item.id1 = index + 1));

// Добавление символьных свойств к объектам пользователей
const id = Symbol("id");
users.forEach((item, index) => (item[id] = index + 1));

// Обычные, символьные и все свойства объекта
console.log("General object properties:", Object.getOwnPropertyNames(users[0]));
console.log(
  "Symbol object properties:",
  Object.getOwnPropertySymbols(users[0])
);
console.log("All object properties:", Reflect.ownKeys(users[0]));

// Определение правила преобразования объекта адреса в примитив
users.forEach((user) => {
  if (user.address) {
    user.address[Symbol.toPrimitive] = function (hint) {
      return hint == "string" ? `${this.city}, ${this.street}` : this.zip;
    };
  }
});

// Отображение пользователей в таблице
showUsers(users);

// Функция добавления пользователей в таблицу
function showUsers(users) {
  tHead.append(addHead(Object.keys(users[0])));
  users.forEach((user) => tBody.append(addRow(user)));
}

function addHead(keys) {
  const tr = document.createElement("tr");
  keys.forEach((key) => {
    const th = document.createElement("th");
    th.innerText = key[0].toUpperCase() + key.slice(1);
    tr.append(th);
  });
  return tr;
}

function addRow(user) {
  const tr = document.createElement("tr");
  for (let key in user) {
    const td = document.createElement("td");
    td.innerText = user[key];
    // if (key == "id") td.innerText = tBody.rows.length + 1;
    if (key == "id") td.innerText = user[id];
    tr.append(td);
  }
  return tr;
}

// Преобразование объекта в примитив системным символом
const user = {
  name: "Carl",
  age: 26,
  [Symbol.toPrimitive]: function (hint) {
    console.log(`hint: ${hint}`);
    return hint == "string" ? this.name : this.age;
  },
};

console.log(`user: ${user}`);
console.log("+user:", +user);
console.log("user + 2:", user + 2);

// Преобразование объекта в примитив методами toString()/valueOf()
const newUser = {
  name: "John",
  age: 28,

  // для хинта "string"
  toString() {
    return this.name;
  },

  // для хинта "number" или "default"
  valueOf() {
    return this.age;
  },
};

console.log(`newUser: ${newUser}`);
console.log("+newUser:", +newUser);
console.log("newUser + 2:", newUser + 2);
