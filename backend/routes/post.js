const express = require("express");
const {createPost,deletePost} = require("../controller/post");
const { isAuthenticated } = require("../middlewares/auth");

const router = express.Router();

router.route("/post/upload").post(isAuthenticated, createPost);
router.route("/post/delete/:id").delete(isAuthenticated,deletePost);





module.exports = router;