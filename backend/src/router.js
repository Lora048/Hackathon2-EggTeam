const express = require("express");
const UserController = require("./controllers/UserController");
const FileController = require("./controllers/FileController");
const ProjectController = require("./controllers/ProjectController");
const multer = require("./middleWares/multer");

const router = express.Router();

// routes for users
router.get("/users", UserController.getAll);
router.get("/users/:id", UserController.getOne);
router.post("/users", UserController.createOne);
router.put("/users/:id", UserController.editOne);
router.delete("/users/:id", UserController.deleteOne);

// routes for projects
router.get("/projects", ProjectController.getAll);
router.get("/projects/:id", ProjectController.getOne);
router.post("/users/:userId/projects", ProjectController.createOne);
router.put("/projects/:id", ProjectController.editOne);
router.delete("/projects/:id", ProjectController.deleteOne);

// routes for documents
router.post(
  "/users/:userId/projects/:projectid/documents",
  multer,
  FileController.addOne
);

// router.get("/projects/:projectid/documents", FileController.getAll);
// router.delete(
//   "/projects/:projectid/documents/:docid",
//   FileController.deleteOne
// );

module.exports = router;
