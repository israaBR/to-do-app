const express = require("express");
const app = express();
const todoRouter = require("./routes/todo");
const port = process.env.PORT || 5000;

app.listen(port, (error) => {
  if (!error) return console.log(`server started at port number: ${port}`);
  else console.log(error);
});
app.use(express.json());
app.use("/todo", todoRouter);
