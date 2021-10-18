const Task = require("../models/TaskModel");
module.exports.getAllTasks = (req, res) => {
  res.send("all itms");
};
module.exports.createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json(task);
  } catch (error) {
    console.log(error.stack);
  }
};
module.exports.getTask = (req, res) => {
  res.json({ id: req.params.id });
};
module.exports.updateTask = (req, res) => {
  res.send("all itms");
};
module.exports.deleteTask = (req, res) => {
  res.send("all itms");
};
