const { validateComment } = require("../helpers/validate");
const comment = require("../models/CommentModel");

const createOne = async (req, res) => {
  const { content } = req.body;

  // vérifier les champs du formulaire
  const error = validateComment({
    content,
  });

  if (error) {
    console.warn(error);
    return res.status(422).json(error);
  }

  try {
    const commentCreated = await comment.createOne({
      content,
    });
    return res.status(201).json({ commentCreated });
  } catch (e) {
    console.warn(e);
    return res.status(500).json(e);
  }
};

const getAll = async (req, res) => {
  try {
    const commentList = await comment.getAll();
    if (commentList.length === 0) {
      return res.status(404).send("Aucun commentaire trouvé");
    }
    const newCommentList = commentList.map((u) => ({
      id: u.id,
      comment: u.comment,
    }));
    return res.status(200).json(newCommentList);
  } catch (e) {
    console.warn(e);
    return res.sendStatus(500);
  }
};

const getOne = async (req, res) => {
  const { id } = req.params;
  try {
    const currentUser = await comment.getOne(id);
    if (!currentUser) {
      return res.status(404).send("Aucun utilisateur trouvé");
    }
    delete currentUser.hashedPassword;
    return res.status(200).json({ currentUser });
  } catch (e) {
    console.warn(e);
    return res.sendStatus(500);
  }
};

const editOne = async (req, res) => {
  // est-ce que le user avec l'id existe
  const { id } = req.params;
  console.warn(req.body);

  const exitingUser = await comment.getOne(id);

  // s'il existe pas retourne une 404
  if (!exitingUser) {
    return res.sendStatus(404);
  }

  // s'il existe je vais valider avec joi
  const error = validateComment(req.body, false);

  if (error) {
    console.warn(error);
    return res.status(422).json(error);
  }

  if (req.body.password) {
    try {
      console.warn({
        ...req.body,
      });

      const userUpdated = await comment.editOne(id);
      delete userUpdated.hashedPassword;
      return res
        .status(200)
        .json({ "Utilisateur mis jour :": { userUpdated } });
    } catch (e) {
      return res.sendStatus(500);
    }
  }
  // si j'ai pas d'erreur je lance le modèle editone
  try {
    const userUpdated = await comment.editOne(id, req.body);
    return res.status(200).json({ "Utilisateur mis jour :": { userUpdated } });
  } catch (e) {
    return res.sendStatus(500);
  }
};

const deleteOne = async (req, res) => {
  const { id } = req.params;
  // check que le user existe
  const userCheck = await comment.getOne(id);
  if (!userCheck) {
    return res.status(404).json({ Erreur: "Aucun utilisateur trouvé" });
  }
  try {
    await comment.deleteOne(id);
    return res
      .status(200)
      .json({ Succès: `Utilisateur supprimé avec succès ` });
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
