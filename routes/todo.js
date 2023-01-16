const helper = require("../controllers/helper1");
const express = require("express");
const router = express.Router();

router.get("/:id", (request, response) => {
  return response.json(helper.list_one_TODO(request.params));
});
router.get("/", (request, response) => {
  return response.json(helper.list_multiple_TODO(request.query));
});
router.post("/", (request, response) => {
  helper.add_TODO(request.body);
  return response.send("TODO Added");
});
router.put("/", (request, response) => {
  helper.edit_TODO(request.body);
  return response.send("TODO Edited");
});
router.delete("/", (request, response) => {
  helper.remove_TODO(request.body);
  return response.send("TODO Deleted");
});
router.patch("/", (request, response) => {
  switch (request.body.operation) {
    case "check":
      helper.check_TODO(request.body);
      return response.send("TODO Checked");
    case "uncheck":
      helper.uncheck_TODO(request.body);
      return response.send("TODO Unchecked");
  }
});

module.exports = router;
