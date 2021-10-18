//dependencys
const express = require("express");
const app = express();

//imports
const tasks = require("./routes/task");

//db config

//middlewares
app.use(express.json());

//routes
app.use("/api/v1/tasks", tasks);

//port
const Port = process.env.port || 5000;

//app listen
app.listen(Port, () => {
  console.log(`Server is running ${Port}`);
});
