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

module.exports = { createOne };
