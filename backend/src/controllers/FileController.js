const fs = require("fs");
const path = require("path");
const file = require("../models/FileModel");
const user = require("../models/UserModel");

exports.addOne = async (req, res) => {
  const userId = parseInt(req.params.userId, 10);
  const projectId = parseInt(req.params.userId, 10);

  if (!req.file) {
    res.sendStatus(400);
  }

  const exitingUser = await user.getOne(userId);

  // s'il existe pas retourne une 404
  if (!exitingUser) {
    return res.sendStatus(404);
  }

  // localhost:5001/uploads/Marie-Serradori-Resume.pdf1656529959142.pdf
  try {
    const fileUploaded = await file.createOne({
      ...req.body,
      url: `http://localhost:${process.env.APP_PORT}/uploads/${req.file.filename}`,
      userId,
      projectId,
    });
    return res.sendStatus(201).json({ fileUploaded });
  } catch (e) {
    console.warn(e);
    return res.sendStatus(500);
  }
};

exports.deleteOne = async (req, res) => {
  const id = parseInt(req.query.id, 10);
  const removed = await file.deleteOne(id);

  await fs.promises.unlink(
    path.join(__dirname, `../../public/uploads/${removed.file_path}`)
  );

  res.sendStatus(204);
};

exports.getAll = async (req, res) => {
  const files = await file.getAll();

  const formatedData = files.map((img) => {
    const filePath = `${req.protocol}://${req.get("host")}/uploads/${
      img.filePath
    }`;

    return { ...img, filePath };
  });

  res.json(formatedData);
};
