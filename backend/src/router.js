const express = require("express");
const UserController = require("./controllers/UserController");
const FileController = require("./controllers/FileController");
const ProjectController = require("./controllers/ProjectController");
const VoteController = require("./controllers/VoteController");
const multer = require("./middleWares/multer");
const CommentController = require("./controllers/CommentController");
const ReplyController = require("./controllers/ReplyController");
const TaskController = require("./controllers/TaskController");
const ParticipationController = require("./controllers/ParticipationController");

const router = express.Router();

// routes for users
router.get("/users", UserController.getAll);
router.get("/users/:id", UserController.getOne);
router.post("/users", UserController.createOne);
router.put("/users/:id", UserController.editOne);
router.delete("/users/:id", UserController.deleteOne);

router.get("/users/:id/projects", ProjectController.getAll);
router.get("/users/:id/projects/:id", ProjectController.getOne);
// routes for projects
router.get("/projects/participations", ParticipationController.getAll);
router.get("/projects", ProjectController.getAll);
router.get("/projects/:id", ProjectController.getOne);
router.post("/users/:userId/projects", ProjectController.createOne);
router.put("/users/:id/projects/:id", ProjectController.editOne);
router.delete("/users/:id/projects/:id", ProjectController.deleteOne);

// routes for votes
router.get("/votes", VoteController.getAll);

router.get(
  "/users/:userId/projects/:projectId/votes",
  VoteController.getOnebyUserAndProject
);

router.post(
  "/users/:userId/projects/:projectId/votes",
  VoteController.createOne
);
router.put("/vote/:id", VoteController.editOne);
router.delete("/vote/:id", VoteController.deleteOne);

// routes for documents
router.post(
  "/users/:userId/projects/:projectId/documents",
  multer,
  FileController.addOne
);
router.get("/projects/:projectId/documents", FileController.getAll);
router.get("/projects/:projectId/documents/:docid", FileController.getOne);
router.delete(
  "/projects/:projectid/documents/:docid",
  FileController.deleteOne
);

// routes for comments
router.get(
  "/users/:userId/projects/:projectId/comments",
  CommentController.getAll
);
router.get(
  "/users/:userId/projects/:projectId/comments/:id",
  CommentController.getOne
);
router.post(
  "/users/:userId/projects/:projectId/comments",
  CommentController.createOne
);
router.put(
  "/users/:userId/projects/:projectId/comments/:id",
  CommentController.editOne
);
router.delete(
  "/users/:userId/projects/:projectId/comments/:id",
  CommentController.deleteOne
);

// routes for reply
router.get(
  "/users/:userId/projects/:projectId/comments/:commentId/reply",
  ReplyController.getAll
);
router.get(
  "/users/:userId/projects/:projectId/comments/:commentId/reply/:id",
  ReplyController.getOne
);
router.post(
  "/users/:userId/projects/:projectId/comments/:commentId/reply/",
  ReplyController.createOne
);
router.put(
  "/users/:userId/projects/:projectId/comments/:commentId/reply/:id",
  ReplyController.editOne
);
router.delete(
  "/users/:userId/projects/:projectId/comments/:commentId/reply/:id",
  ReplyController.deleteOne
);

// routes for participation_user_project

router.get(
  "/users/:userId/projects/:projectId/participations/",
  ParticipationController.getOnebyUserAndProject
);
// automatiquement à la création du projet
router.post(
  "/users/:userId/projects/:projectId/participations/",
  ParticipationController.createOne
);
router.delete(
  "/users/:userId/projects/:projectId/participations/",
  ParticipationController.deleteOne
);

// Affiche tout les participants d'un projet
router.get(
  "/projects/:projectId/participations/",
  ParticipationController.getAllForAProject
);

// routes for tasks

router.get("/users/:userId/projects/:projectId/tasks", TaskController.getAll);
router.get(
  "/users/:userId/projects/:projectId/tasks/:id",
  TaskController.getOne
);
router.post(
  "/users/:userId/projects/:projectId/tasks",
  TaskController.createOne
);
router.put(
  "/users/:userId/projects/:projectId/tasks/:id",
  TaskController.editOne
);
router.delete(
  "/users/:userId/projects/:projectId/tasks/:id",
  TaskController.deleteOne
);

module.exports = router;
