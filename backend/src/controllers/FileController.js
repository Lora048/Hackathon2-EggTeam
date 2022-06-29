const fs = require("fs");
const path = require("path");
const document = require("../models/FileModel");
const user = require("../models/UserModel");
const project = require("../models/ProjectModel");

exports.addOne = async (req, res) => {
  const userId = parseInt(req.params.userId, 10);
  const projectId = parseInt(req.params.projectId, 10);
  if (!req.file) {
    res.sendStatus(400);
  }

  const exitingUser = await user.getOne(userId);
  const exitingProject = await project.getOne(projectId);

  // s'il existe pas retourne une 404
  if (!exitingUser) {
    return res.sendStatus(404);
  }

  if (!exitingProject) {
    return res.sendStatus(404);
  }

  // localhost:5001/uploads/Marie-Serradori-Resume.pdf1656529959142.pdf
  try {
    const fileUploaded = await document.createOne({
      ...req.body,
      url: `http://localhost:${process.env.APP_PORT}/uploads/${req.file.filename}`,
      userId,
      projectId,
    });
    return res.status(201).json({ fileUploaded });
  } catch (e) {
    console.warn(e);
    return res.sendStatus(500);
  }
};

exports.deleteOne = async (req, res) => {
  const docid = parseInt(req.params.docid, 10);
  const removed = await document.deleteOne(docid);
  await fs.promises.unlink(
    path.join(
      __dirname,
      `../../public/uploads/${removed.url.replace(
        `http://localhost:${process.env.APP_PORT}/uploads/`,
        ""
      )}`
    )
  );

  res.status(200).send("document supprimé avec succès");
};

exports.getAll = async (req, res) => {
  const files = await document.getAll();

  const formatedData = files.map((img) => {
    const filePath = `${req.protocol}://${req.get("host")}/uploads/${
      img.filePath
    }`;

    return { ...img, filePath };
  });

  res.json(formatedData);
};

exports.getOne = async (req, res) => {
  const projectId = parseInt(req.params.projectId, 10);
  const docid = parseInt(req.params.docid, 10);

  const projectcheck = await project.getOne(projectId);
  if (!projectcheck) {
    return res.status(404).send("Aucun projet trouvé");
  }

  try {
    const doc = await document.getOne(docid);
    return res.status(200).json(doc);
  } catch (e) {
    console.warn(e);
    return res.sendStatus(500);
  }
};
