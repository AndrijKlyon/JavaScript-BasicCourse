"use strict";

console.log("*** Структура объекта ***");
const name = "Alex";
let age = 24;

const user = {
  name,
  age,
};

console.log(user);

console.log("*** Свойства объекта из нескольких слов ***");
const car = {
  name: "Toyota",
  color: "black",
  "production year": 2020,
};

console.log(car);

console.log("*** Доступ к свойствам объекта ***");
console.log("user name :", user.name);
console.log("user age :", user["age"]);
console.log("car production year :", car["production year"]);

console.log("*** Добавление свойств после создания объекта ***");
const company = {};
company.name = "Dream company";
company["foundation year"] = 2021;

console.log(company);

console.log("*** Значение свойства объекта может быть другим объектом ***");
user.address = {
  "zip code": 15325,
  city: "New York",
  street: "5th Avenu",
  building: 36,
  apartment: 124,
};

console.log(user);

console.log("*** Изменение свойств объекта ***");
company.name = "Target company";
console.log("company name :", company.name);

console.log("*** Удаление свойств объекта ***");
delete company["foundation year"];
console.log(company);

console.log("*** Проверка наличия свойства c заданным ключом ***");
console.log("name in user :", "name" in user);
console.log("education in user :", "education" in user);

console.log("*** Обращение к несуществующему свойству объекта ***");
console.log("user education :", user.education);

console.log("*** Перебор свойств объекта циклом for...in ***");
for (let key in user) {
  console.log(`${key} : ${user[key]}`);
}

console.log("*** Методы объекта ***");
const cat = {
  name: "Kitty",
  "born year": 2019,
  sayHello: function () {
    console.log("Meow!");
  },
};

cat.sayHello();

console.log("*** Сокращенная форма записи методов ***");
const dog = {
  name: "Tom",
  color: "white",
  sayHello() {
    console.log("Woof!");
  },
};

dog.sayHello();

console.log("*** Добавление, изменение и удаление методов ***");
const person = {
  name: "Alex",
};

function sayHello() {
  console.log("Hello!");
}

person.sayHello = sayHello;
person.sayHello();

person.sayHello = function () {
  console.log("Hi!");
};
person.sayHello();

delete person.sayHello;
console.log(person);

console.log("*** Вызов несуществующего метода приводит к ошибке ***");
// ERROR: person.sayHello is not a function
// person.sayHello();

console.log("*** Обращение к свойствам объекта из метода ***");
person.sayHello = function () {
  console.log(`Hello! My name is ${this.name}`); // this == person
};

person.sayHello();
