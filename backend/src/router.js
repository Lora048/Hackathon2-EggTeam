const express = require("express");
const UserController = require("./controllers/UserController");
const CommentController = require("./controllers/CommentController");

const router = express.Router();

router.get("/users", UserController.getAll);
router.get("/users/:id", UserController.getOne);
router.post("/users", UserController.createOne);
router.put("/users/:id", UserController.editOne);
router.delete("/users/:id", UserController.deleteOne);

router.get("/comments", CommentController.getAll);
router.get("/comments/:id", CommentController.getOne);
router.post("/comments", CommentController.createOne);
router.put("/comments/:id", CommentController.editOne);
router.delete("/comments/:id", CommentController.deleteOne);

module.exports = router;
