const Task = require("../models/TaskModel");

//get all task
module.exports.getAllTasks = async (req, res) => {
  try {
    const AllTask = await Task.find({});
    res.status(200).json({ AllTask });
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

/// create a new task
module.exports.createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

// get task by id
module.exports.getTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOne({ _id: taskID });
    if (!task) {
      return res.status(404).json({ msg: `No task with that id : ${taskID}` });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

// update task api
module.exports.updateTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      return res.status(404).json({ msg: `No task with that id : ${taskID}` });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

// delete task api
module.exports.deleteTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskID });
    if (!task) {
      return res.status(404).json({ msg: `No task with that id : ${taskID}` });
    }
    res.status(200).json("Task Deleted Successfully");
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
