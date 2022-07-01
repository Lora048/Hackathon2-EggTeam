const { validateComment } = require("../helpers/validate");
const comments = require("../models/CommentModel");

const createOne = async (req, res) => {
  const userId = parseInt(req.params.userId, 10);
  const projectId = parseInt(req.params.projectId, 10);

  const error = validateComment(req.body);

  if (error) {
    console.warn(error);
    return res.status(422).json(error);
  }
  try {
    const commentCreated = await comments.createOne({
      ...req.body,
      userId,
      projectId,
    });
    return res.status(201).json({ commentCreated });
  } catch (e) {
    console.warn(e);
    return res.status(500).json(e);
  }
};

const getAll = async (req, res) => {
  try {
    const commentList = await comments.getAll();
    if (commentList.length === 0) {
      return res.status(404).send("Aucun commentaires trouvé");
    }
    return res.status(200).json(commentList);
  } catch (e) {
    console.warn(e);
    return res.sendStatus(500);
  }
};

const getOne = async (req, res) => {
  const { id } = req.params;
  try {
    const currentComment = await comments.getOne(id);
    if (!currentComment) {
      return res.status(404).send("Aucun commentaires trouvé");
    }
    return res.status(200).json({ currentComment });
  } catch (e) {
    console.warn(e);
    return res.sendStatus(500);
  }
};

const editOne = async (req, res) => {
  const { id } = req.params;
  console.warn(req.body);

  const exitingComment = await comments.getOne(id);

  if (!exitingComment) {
    return res.sendStatus(404);
  }

  const error = validateComment(req.body, true);

  if (error) {
    console.warn(error);
    return res.status(422).json(error);
  }

  try {
    const commentUpdated = await comments.editOne(id, req.body);
    return res
      .status(200)
      .json({ "Commentaire mis jour :": { commentUpdated } });
  } catch (e) {
    return res.sendStatus(500);
  }
};

const deleteOne = async (req, res) => {
  const { id } = req.params;
  const commentCheck = await comments.getOne(id);
  if (!commentCheck) {
    return res.status(404).json({ Erreur: "Aucun commentaire trouvé" });
  }
  try {
    await comments.deleteOne(id);
    return res
      .status(200)
      .json({ Succès: `Commentaire supprimé avec succès ` });
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
