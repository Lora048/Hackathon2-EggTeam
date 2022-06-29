const express = require("express");
const UserController = require("./controllers/UserController");
const CommentController = require("./controllers/CommentController");
const ProjectController = require("./controllers/ProjectController");
const ReplyController = require("./controllers/ReplyController");

const router = express.Router();

router.get("/users", UserController.getAll);
router.get("/users/:id", UserController.getOne);
router.post("/users", UserController.createOne);
router.put("/users/:id", UserController.editOne);
router.delete("/users/:id", UserController.deleteOne);

router.get("/projects", ProjectController.getAll);
router.get("/projects/:id", ProjectController.getOne);
router.post("/users/:userId/projects", ProjectController.createOne);
router.put("/projects/:id", ProjectController.editOne);
router.delete("/projects/:id", ProjectController.deleteOne);

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

module.exports = router;
