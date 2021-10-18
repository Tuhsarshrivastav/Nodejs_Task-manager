const Task = require("../models/TaskModel");
module.exports.getAllTasks = async (req, res) => {
  try {
    const AllTask = await Task.find({});
    res.status(201).json(AllTask);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};
module.exports.createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ msg: error.message });
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
