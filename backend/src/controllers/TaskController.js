const { validateTask } = require("../helpers/validate");
const task = require("../models/TaskModel");

const createOne = async (req, res) => {
  const userId = parseInt(req.params.userId, 10);
  const projectId = parseInt(req.params.projectId, 10);
  const { title, description, status, startDate, dueDate } = req.body;

  const error = validateTask({
    title,
    description,
    status,
    startDate,
    dueDate,
  });

  if (error) {
    console.warn(error);
    return res.status(422).json(error);
  }
  try {
    const taskCreated = await task.createOne({
      ...req.body,
      userId,
      projectId,
    });
    return res.status(201).json({ taskCreated });
  } catch (e) {
    console.warn(e);
    return res.status(500).json(e);
  }
};

const getAll = async (req, res) => {
  try {
    const taskList = await task.getAll();
    if (taskList.length === 0) {
      return res.status(404).send("Aucune tâches trouvé");
    }
    const newTaskList = taskList.map((u) => ({
      id: u.id,
      title: u.title,
      description: u.description,
      status: u.status,
      startDate: u.startDate,
      dueDate: u.dueDate,
    }));
    return res.status(200).json(newTaskList);
  } catch (e) {
    console.warn(e);
    return res.sendStatus(500);
  }
};

const getOne = async (req, res) => {
  const { id } = req.params;
  try {
    const currentTask = await task.getOne(id);
    if (!currentTask) {
      return res.status(404).send("Aucune tâches trouvé");
    }
    return res.status(200).json({ currentTask });
  } catch (e) {
    console.warn(e);
    return res.sendStatus(500);
  }
};

const editOne = async (req, res) => {
  const { id } = req.params;

  const exitingComment = await task.getOne(id);

  if (!exitingComment) {
    return res.sendStatus(404);
  }

  const error = validateTask(req.body, true);

  if (error) {
    console.warn(error);
    return res.status(422).json(error);
  }

  try {
    const taskUpdated = await task.editOne(id, req.body);
    return res.status(200).json({ "Tâche mis jour :": { taskUpdated } });
  } catch (e) {
    return res.sendStatus(500);
  }
};

const deleteOne = async (req, res) => {
  const { id } = req.params;
  const taskCheck = await task.getOne(id);
  if (!taskCheck) {
    return res.status(404).json({ Erreur: "Aucune tâches trouvé" });
  }
  try {
    await task.deleteOne(id);
    return res.status(200).json({ Succès: `Tâche supprimé avec succès ` });
  } catch (e) {
    console.warn(e);
    return res.sendStatus(500);
  }
};

module.exports = {
  createOne,
  getAll,
  getOne,
  editOne,
  deleteOne,
};
