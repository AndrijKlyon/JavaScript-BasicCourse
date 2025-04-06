import { Storage } from "./storage.js";

export class Users {
  constructor() {
    // Массив пользователей
    this.usersArr = [];
  }

  // Получение пользователей
  async getUsers() {
    const storageUsers = Storage.getStorageUsers();
    if (storageUsers) {
      this.usersArr = storageUsers;
    } else {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      if (response.ok) {
        const users = await response.json();
        this.usersArr = users.map((user) => ({
          id: user.id,
          name: user.name,
          email: user.email,
          code: user.address.zipcode.slice(-4),
        }));
        Storage.setStorageUsers(this.usersArr);
      } else {
        console.log("HTTP Error: " + response.status);
      }
    }
  }

  // Добавление пользователя
  addUser(user) {
    const id = Math.max(...this.usersArr.map((user) => user.id));
    user.id = id + 1;
    this.usersArr.push(user);
    Storage.setStorageUsers(this.usersArr);
  }

  // Удаление пользователя
  deleteUser(id) {
    const userIndex = this.usersArr.findIndex((user) => user.id == id);
    this.usersArr.splice(userIndex, 1);
    Storage.setStorageUsers(this.usersArr);
  }

  // Получение пользователя по id
  getUserById(id) {
    return this.usersArr.find((user) => user.id == id);
  }

  // Обновление данных пользователя
  updateUser(user) {
    const userIndex = this.usersArr.findIndex((item) => item.id == user.id);
    this.usersArr[userIndex].name = user.name;
    this.usersArr[userIndex].email = user.email;
    this.usersArr[userIndex].code = user.code;
    Storage.setStorageUsers(this.usersArr);
  }

  // Сортировка пользователей
  sortUsers(parameter) {
    if (parameter) {
      let sortFunc;
      if (typeof this.usersArr[0][parameter] == "string") {
        sortFunc = (a, b) => a[parameter].localeCompare(b[parameter]);
      } else {
        sortFunc = (a, b) => a[parameter] - b[parameter];
      }
      this.usersArr.sort(sortFunc);
    }
  }

  // Фильтрация пользователей
  filterUsers(filter) {
    return this.usersArr.filter((user) => user.name.includes(filter));
  }
}
