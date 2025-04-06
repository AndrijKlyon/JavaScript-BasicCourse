import { Users } from "./users.js";
import { Table } from "./table.js";
import { Form } from "./form.js";
import { Filter } from "./filter.js";

class App {
  constructor() {
    this.users = new Users();
    this.table = new Table();
    this.form = new Form();
    this.filter = new Filter();
    this._init();
  }

  async _init() {
    await this.users.getUsers();
    this.table.drawTable();
  }
}

export const app = new App();
