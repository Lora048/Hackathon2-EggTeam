const { Prisma } = require("@prisma/client");
const { validateUser } = require("../helpers/validate");
const { hashPassword } = require("../helpers/argonHelper");
const user = require("../models/UserModel");

const createOne = async (req, res) => {
  const {
    firstname,
    lastname,
    jobPost,
    hardSkills,
    agency,
    picture,
    email,
    password,
  } = req.body;

  // vérifier les champs du formulaire
  const error = validateUser({
    firstname,
    lastname,
    jobPost,
    hardSkills,
    agency,
    picture,
    email,
    password,
  });

  if (error) {
    console.warn(error);
    return res.status(422).json(error);
  }

  try {
    const hashedPassword = await hashPassword(password);
    const userCreated = await user.createOne({
      firstname,
      lastname,
      jobPost,
      hardSkills,
      agency,
      picture,
      email,
      hashedPassword,
    });
    delete userCreated.hashedPassword;
    return res.status(201).json({ userCreated });
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      if (e.code === "P2002") {
        return res.status(409).json({
          erreur: "Cette adresse email est déjà utilisée.",
        });
      }
      console.warn(e);
      return res.status(500).json(e);
    }
    return res.status(500).json(e);
  }
};

const getAll = async (req, res) => {
  try {
    const userList = await user.getAll();
    if (userList.length === 0) {
      return res.status(404).send("Aucun utilisateur trouvé");
    }
    const newList = userList.map((u) => ({
      id: u.id,
      firstname: u.firstname,
      lastname: u.lastname,
      jobPost: u.jobPost,
      hardSkills: u.hardSkills,
      agency: u.agency,
      picture: u.picture,
      email: u.email,
    }));
    return res.status(200).json(newList);
  } catch (e) {
    console.warn(e);
    return res.sendStatus(500);
  }
};

const getOne = async (req, res) => {
  const { id } = req.params;
  try {
    const currentUser = await user.getOne(id);
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

  const exitingUser = await user.getOne(id);

  // s'il existe pas retourne une 404
  if (!exitingUser) {
    return res.sendStatus(404);
  }

  // s'il existe je vais valider avec joi
  const error = validateUser(req.body, false);

  if (error) {
    console.warn(error);
    return res.status(422).json(error);
  }

  if (req.body.password) {
    const newHashedPassword = await hashPassword(req.body.password);

    try {
      console.warn({
        ...req.body,
        hashedPassword: newHashedPassword,
      });
      const { password, ...body } = req.body;
      const data = { ...body, hashedPassword: newHashedPassword };

      const userUpdated = await user.editOne(id, data);
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
    const userUpdated = await user.editOne(id, req.body);
    return res.status(200).json({ "Utilisateur mis jour :": { userUpdated } });
  } catch (e) {
    return res.sendStatus(500);
  }
};

const deleteOne = async (req, res) => {
  const { id } = req.params;
  // check que le user existe
  const userCheck = await user.getOne(id);
  if (!userCheck) {
    return res.status(404).json({ Erreur: "Aucun utilisateur trouvé" });
  }
  try {
    await user.deleteOne(id);
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
