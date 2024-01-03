const express = require("express");
const {
    getAllBlogs,
    createdBlog,
    getBlogById,
    updatedBlog,
    deletedBlog,
} = require("../controllers/BlogController");

const router = express.Router();
router.route("/").get(getAllBlogs).post(createdBlog);
router.route("/:id").get(getBlogById).put(updatedBlog).delete(deletedBlog);

module.exports = router;