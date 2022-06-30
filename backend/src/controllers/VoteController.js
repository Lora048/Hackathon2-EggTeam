const { validateVote } = require("../helpers/validate");
const vote = require("../models/VoteModel");

const createOne = async (req, res) => {
  const userId = parseInt(req.params.userId, 10);
  const projectId = parseInt(req.params.projectId, 10);

  const error = validateVote(req.body);
  if (error) {
    console.warn(error);
    return res.status(422).json(error);
  }

  try {
    const voteList = await vote.getOnebyUserAndProject(userId, projectId);
    if (voteList.length > 0) {
      return res.status(409).send("Un vote existe déjà");
    }
    const voteCreated = await vote.createOne({
      ...req.body,
      userId,
      projectId,
    });
    return res.status(201).json({ voteCreated });
  } catch (e) {
    console.warn(e);
    return res.sendStatus(500);
  }
};

const getAll = async (req, res) => {
  try {
    const voteList = await vote.getAll();
    if (voteList.length === 0) {
      return res.status(404).send("Aucun vote trouvé");
    }
    return res.status(200).json(voteList);
  } catch (e) {
    console.warn(e);
    return res.sendStatus(500);
  }
};

const getOnebyUserAndProject = async (req, res) => {
  const userId = parseInt(req.params.userId, 10);
  const projectId = parseInt(req.params.projectId, 10);

  try {
    const voteCheck = await vote.getOnebyUserAndProject(userId, projectId);
    if (!vote) {
      return res.status(404).send("Aucun vote trouvé");
    }
    return res.status(200).json(voteCheck);
  } catch (e) {
    console.warn(e);
    return res.sendStatus(500);
  }
};

const editOne = async (req, res) => {
  const { id } = req.params;
  console.warn(req.body);

  const exitingVote = await vote.getOne(id);

  if (!exitingVote) {
    return res.sendStatus(404);
  }

  const error = validateVote(req.body, false);

  if (error) {
    console.warn(error);
    return res.status(422).json(error);
  }

  try {
    const votetUpdated = await vote.editOne(id, req.body);
    return res.status(200).json({ "Vote mis jour :": { votetUpdated } });
  } catch (e) {
    return res.sendStatus(500);
  }
};

const deleteOne = async (req, res) => {
  const { id } = req.params;
  const voteCheck = await vote.getOne(id);
  if (!voteCheck) {
    return res.status(404).json({ Erreur: "Aucun vote trouvé" });
  }
  try {
    await vote.deleteOne(id);
    return res.status(200).json({ Succès: `Vote supprimé avec succès ` });
  } catch (e) {
    console.warn(e);
    return res.sendStatus(500);
  }
};

module.exports = {
  createOne,
  getAll,
  getOnebyUserAndProject,
  editOne,
  deleteOne,
};
