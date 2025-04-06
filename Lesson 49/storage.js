export class Storage {
  static getStorageUsers() {
    const storageUsers = localStorage.getItem("users");
    if (!storageUsers) {
      return null;
    } else {
      return JSON.parse(storageUsers).length != 0
        ? JSON.parse(storageUsers)
        : null;
    }
  }

  static setStorageUsers(users) {
    localStorage.setItem("users", JSON.stringify(users));
  }
}
