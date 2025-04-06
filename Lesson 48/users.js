// Массив пользователей
let usersArr;

// Получение пользователей
async function getUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  if (response.ok) {
    const users = await response.json();
    usersArr = users.map((user) => ({
      id: user.id,
      name: user.name,
      email: user.email,
      code: user.address.zipcode.slice(-4),
    }));
  } else {
    console.log("HTTP Error: " + response.status);
  }
}

// Добавление пользователя
function addUser(user) {
  const id = Math.max(...usersArr.map((user) => user.id));
  user.id = id + 1;
  usersArr.push(user);
}

// Удаление пользователя
function deleteUser(id) {
  const userIndex = usersArr.findIndex((user) => user.id == id);
  usersArr.splice(userIndex, 1);
}

// Получение пользователя по id
function getUserById(id) {
  return usersArr.find((user) => user.id == id);
}

// Обновление данных пользователя
function updateUser(user) {
  const userIndex = usersArr.findIndex((item) => item.id == user.id);
  usersArr[userIndex].name = user.name;
  usersArr[userIndex].email = user.email;
  usersArr[userIndex].code = user.code;
}

// Сортировка пользователей
function sortUsers(parameter) {
  if (parameter) {
    let sortFunc;
    if (typeof usersArr[0][parameter] == "string") {
      sortFunc = (a, b) => a[parameter].localeCompare(b[parameter]);
    } else {
      sortFunc = (a, b) => a[parameter] - b[parameter];
    }
    usersArr.sort(sortFunc);
  }
}

// Фильтрация пользователей
function filterUsers(filter) {
  return usersArr.filter((user) => user.name.includes(filter));
}

export {
  usersArr,
  getUsers,
  addUser,
  deleteUser,
  getUserById,
  updateUser,
  sortUsers,
  filterUsers,
};
