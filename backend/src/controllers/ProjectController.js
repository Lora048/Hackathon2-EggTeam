const { validateProject } = require("../helpers/validate");
const project = require("../models/ProjectModel");

const createOne = async (req, res) => {
  const userId = parseInt(req.params.userId, 10);
  const { title, description, cover, status } = req.body;

  const error = validateProject({
    title,
    description,
    cover,
    status,
  });
  if (error) {
    console.warn(error);
    return res.status(422).json(error);
  }

  try {
    const projectCreated = await project.createOne({ ...req.body, userId });
    return res.status(201).json({ projectCreated });
  } catch (e) {
    console.warn(e);
    return res.sendStatus(500);
  }
};

const getAll = async (req, res) => {
  try {
    const projectList = await project.getAll();
    if (projectList.length === 0) {
      return res.status(404).send("Aucun projet trouvé");
    }
    return res.status(200).json(projectList);
  } catch (e) {
    console.warn(e);
    return res.sendStatus(500);
  }
};

const getAllProjectsForOneUser = async (req, res) => {
  const { userId } = req.params;
  try {
    const projectList = await project.getAllProjectsForOneUser(userId);
    if (projectList.length === 0) {
      return res.status(404).send("Aucun projet trouvé");
    }
    return res.status(200).json(projectList);
  } catch (e) {
    console.warn(e);
    return res.sendStatus(500);
  }
};

const getOne = async (req, res) => {
  const { id } = req.params;
  try {
    const currentProject = await project.getOne(id);
    if (!currentProject) {
      return res.status(404).send("Aucun projet trouvé");
    }
    return res.status(200).json({ currentProject });
  } catch (e) {
    console.warn(e);
    return res.sendStatus(500);
  }
};

const editOne = async (req, res) => {
  const { id } = req.params;
  console.warn(req.body);

  const exitingProject = await project.getOne(id);

  if (!exitingProject) {
    return res.sendStatus(404);
  }

  const error = validateProject(req.body, false);

  if (error) {
    console.warn(error);
    return res.status(422).json(error);
  }

  try {
    const projectUpdated = await project.editOne(id, req.body);
    return res.status(200).json({ "Projet mis jour :": { projectUpdated } });
  } catch (e) {
    return res.sendStatus(500);
  }
};

const deleteOne = async (req, res) => {
  const { id } = req.params;
  const projectCheck = await project.getOne(id);
  if (!projectCheck) {
    return res.status(404).json({ Erreur: "Aucun projet trouvé" });
  }
  try {
    await project.deleteOne(id);
    return res.status(200).json({ Succès: `Projet supprimé avec succès ` });
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
  getAllProjectsForOneUser,
};
