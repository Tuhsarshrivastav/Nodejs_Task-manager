module.exports.getAllTasks = (req, res) => {
  res.send("all itms");
};
module.exports.createTask = (req, res) => {
  res.json(req.body);
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
