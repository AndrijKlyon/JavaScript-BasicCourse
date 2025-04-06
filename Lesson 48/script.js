import { getUsers } from "./users.js";
import { drawTable } from "./table.js";
import { applyUserForm } from "./form.js";
import { applyFilter } from "./filter.js";
import { applyTest } from "./test.js";

init();

async function init() {
  await getUsers();
  drawTable();
  applyUserForm();
  applyFilter();
  applyTest();
}
