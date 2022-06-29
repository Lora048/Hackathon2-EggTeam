const { validateReply } = require("../helpers/validate");
const reply = require("../models/ReplyModel");

const createOne = async (req, res) => {
  const userId = parseInt(req.params.userId, 10);
  const commentId = parseInt(req.params.commentId, 10);

  const error = validateReply(req.body);

  if (error) {
    console.warn(error);
    return res.status(422).json(error);
  }
  try {
    const replyCreated = await reply.createOne({
      ...req.body,
      userId,
      commentId,
    });
    return res.status(201).json({ replyCreated });
  } catch (e) {
    console.warn(e);
    return res.status(500).json(e);
  }
};

const getAll = async (req, res) => {
  try {
    const replyList = await reply.getAll();
    if (replyList.length === 0) {
      return res.status(404).send("Aucune réponses trouvé");
    }
    const newReplyList = replyList.map((u) => ({
      id: u.id,
      content: u.content,
    }));
    return res.status(200).json(newReplyList);
  } catch (e) {
    console.warn(e);
    return res.sendStatus(500);
  }
};

const getOne = async (req, res) => {
  const { id } = req.params;
  try {
    const currentReply = await reply.getOne(id);
    if (!currentReply) {
      return res.status(404).send("Aucune réponses trouvé");
    }
    return res.status(200).json({ currentReply });
  } catch (e) {
    console.warn(e);
    return res.sendStatus(500);
  }
};

const editOne = async (req, res) => {
  const { id } = req.params;
  console.warn(req.body);

  const exitingReply = await reply.getOne(id);

  if (!exitingReply) {
    return res.sendStatus(404);
  }

  const error = validateReply(req.body, true);

  if (error) {
    console.warn(error);
    return res.status(422).json(error);
  }

  try {
    const replyUpdated = await reply.editOne(id, req.body);
    return res
      .status(200)
      .json({ "Réponse de commentaire mis jour :": { replyUpdated } });
  } catch (e) {
    return res.sendStatus(500);
  }
};

const deleteOne = async (req, res) => {
  const { id } = req.params;
  const replyCheck = await reply.getOne(id);
  if (!replyCheck) {
    return res.status(404).json({ Erreur: "Aucune réponses trouvé" });
  }
  try {
    await reply.deleteOne(id);
    return res.status(200).json({ Succès: `Réponse supprimé avec succès ` });
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
