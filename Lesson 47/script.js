// "use strict";

// Подключение модулей
import { premiumUsers as users } from "./users.js";
import { showUsers } from "./showUsers.js";
import { getLastUser } from "./getLastUser.js";
import { addInfoItem } from "./addInfoItem.js";
import getAvAge from "./getAvAge.js";

// Выбор элементов
const tBody = document.getElementById("tBody");
const infoMsg = document.getElementById("infoMsg");

// Отображение массива пользователей в таблице
showUsers(users, tBody);

// Добавление пользователя
users.push({
  id: 3000,
  name: "Maria Light",
  age: 25,
  address: "New-York, Flower road, 30",
});

// Получение последнего пользователя
const lastUser = getLastUser(users);
addInfoItem("Last user name", lastUser.name, infoMsg);

// Получение среднего возраста пользователей
const avAge = getAvAge(users);
addInfoItem("Average users age", avAge, infoMsg);
