const participation = require("../models/ParticipationModel");
const project = require("../models/ProjectModel");
const user = require("../models/UserModel");

const getAll = async (req, res) => {
  try {
    const participationList = await participation.getAll();
    if (participationList.length === 0) {
      return res.status(404).send("Aucun projet trouvé");
    }
    return res.status(200).json(participationList);
  } catch (e) {
    console.warn(e);
    return res.sendStatus(500);
  }
};

const getAllForAProject = async (req, res) => {
  const projectId = parseInt(req.params.projectId, 10);
  try {
    const participationList = await participation.getAllForAProject(projectId);
    if (participationList.length === 0) {
      return res.status(404).send("Aucun projet trouvé");
    }
    return res.status(200).json(participationList);
  } catch (e) {
    console.warn(e);
    return res.sendStatus(500);
  }
};

const getOnebyUserAndProject = async (req, res) => {
  const userId = parseInt(req.params.userId, 10);
  const projectId = parseInt(req.params.projectId, 10);

  try {
    const participationCheck = await participation.getOnebyUserAndProject(
      userId,
      projectId
    );
    if (!participation) {
      return res.status(404).send("Aucune participation trouvée");
    }
    return res.status(200).json(participationCheck);
  } catch (e) {
    console.warn(e);
    return res.sendStatus(500);
  }
};

const createOne = async (req, res) => {
  const userId = parseInt(req.params.userId, 10);
  const projectId = parseInt(req.params.projectId, 10);
  const existingUser = await user.getOne(userId);
  if (!existingUser) {
    return res.status(404).send("L'utilisateur n'existe pas");
  }

  const existingParticipation = await participation.getOnebyUserAndProject(
    userId,
    projectId
  );

  if (existingParticipation.length > 0) {
    return res.status(409).json({
      Erreur: "impossible de participer une deuxième fois à ce projet",
    });
  }

  const existingProject = await project.getOne(projectId);
  if (!existingProject) {
    return res
      .status(404)
      .send("Vous ne pouvez pas participer à un projet qui n'existe pas");
  }

  try {
    const participationCreated = await participation.createOne({
      userId,
      projectId,
    });
    return res.status(201).json({ participationCreated });
  } catch (e) {
    console.warn(e);
    return res.sendStatus(500);
  }
};

const deleteOne = async (req, res) => {
  const userId = parseInt(req.params.userId, 10);
  const projectId = parseInt(req.params.projectId, 10);

  const participationCheck = await participation.getOnebyUserAndProject(
    userId,
    projectId
  );

  if (participationCheck.length === 0) {
    return res
      .status(404)
      .json({ Erreur: "Vous n'avez pas de participation pour ce projet" });
  }

  try {
    await participation.deleteOne(participationCheck[0].id);
    return res
      .status(200)
      .json({ Succès: `Votre participation a été annulée` });
  } catch (e) {
    console.warn(e);
    return res.sendStatus(500);
  }
};

module.exports = {
  createOne,
  getAll,
  deleteOne,
  getOnebyUserAndProject,
  getAllForAProject,
};
