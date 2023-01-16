const fs = require("fs");
const FILE_PATH = "TODO.json";

function create_file() {
  fs.writeFileSync(FILE_PATH, JSON.stringify([]));
}
function read_file() {
  return JSON.parse(fs.readFileSync(FILE_PATH, "utf-8"));
}
function write_file(TODO_list) {
  fs.writeFileSync(FILE_PATH, JSON.stringify(TODO_list));
}

if (!fs.existsSync(FILE_PATH)) create_file();
let TODO_list = read_file();

function add_TODO(TODO) {
  let id;
  if (TODO_list.length > 0) {
    id = TODO_list[TODO_list.length - 1].id + 1;
  } else {
    TODO_list = [];
    id = 1;
  }
  let new_TODO = {
    id,
    title: TODO.title,
    body: TODO.body,
    checked: false,
  };
  TODO_list.push(new_TODO);
  write_file(TODO_list);
}
function edit_TODO(TODO) {
  TODO_list = TODO_list.map((item) => {
    if (item.id == TODO.id) {
      item.title = TODO.title;
      item.body = TODO.body;
    }
    return item;
  });
  write_file(TODO_list);
}
function remove_TODO(TODO) {
  TODO_list = TODO_list.filter((item) => item.id != TODO.id);
  write_file(TODO_list);
}
function check_TODO(TODO) {
  TODO_list = TODO_list.map((item) => {
    if (item.id == TODO.id) item.checked = true;
    return item;
  });
  write_file(TODO_list);
}
function uncheck_TODO(TODO) {
  TODO_list = TODO_list.map((item) => {
    if (item.id == TODO.id) item.checked = false;
    return item;
  });
  write_file(TODO_list);
}
function list_one_TODO(TODO) {
  let requested_element;
  TODO_list.forEach((element) => {
    if (element.id == TODO.id) requested_element = element;
  });
  return requested_element;
}
function list_multiple_TODO(TODO) {
  let requested_list = [];
  switch (TODO.type) {
    case "all":
      TODO_list.forEach((element) => {
        requested_list.push(element);
      });
      break;
    case "checked":
      TODO_list.forEach((element) => {
        if (element.checked == true) requested_list.push(element);
      });
      break;
    case "unchecked":
      TODO_list.forEach((element) => {
        if (element.checked == false) requested_list.push(element);
      });
      break;
  }
  return requested_list;
}
module.exports = {
  add_TODO,
  edit_TODO,
  remove_TODO,
  check_TODO,
  uncheck_TODO,
  list_multiple_TODO,
  list_one_TODO,
};
