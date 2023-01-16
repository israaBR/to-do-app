const helper = require("./models/helper1");

function main() {
  [, , command, ...data] = process.argv;
  data = data.reduce((obj, item) => {
    [key, value] = item.split("=");
    obj[key] = value;
    return obj;
  }, {});

  switch (command) {
    case "add":
      helper.add_TODO(data);
      break;
    case "edit":
      helper.edit_TODO(data);
      break;
    case "remove":
      helper.remove_TODO(data);
      break;
    case "check":
      helper.check_TODO(data);
      break;
    case "uncheck":
      helper.uncheck_TODO(data);
      break;
    case "list":
      console.log(helper.list_multiple_TODO(data));
      break;
  }
}

main();
