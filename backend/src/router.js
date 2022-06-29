const express = require("express");
const UserController = require("./controllers/UserController");
const ProjectController = require("./controllers/ProjectController");

const router = express.Router();

router.get("/users", UserController.getAll);
router.get("/users/:id", UserController.getOne);
router.post("/users", UserController.createOne);
router.put("/users/:id", UserController.editOne);
router.delete("/users/:id", UserController.deleteOne);

router.post("/users/:userId/projects", ProjectController.createOne);

module.exports = router;
