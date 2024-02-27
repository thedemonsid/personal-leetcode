import express from "express";
import {
  createBlogController,
  deleteBlogController,
  getAllBlogsController,
  getBlogController,
  updateBlogController,
} from "../controllers/BlogController.js";
const router = express.Router();
//Get All Blogs
router.get("/all-blogs", getAllBlogsController);
//Create A Blog
router.put("/create-blog", createBlogController);
//Get Blog
router.get("/get-blog/", getBlogController);
//Update A Blog
router.put("/update-blog/", updateBlogController);
//Delete A Blog
router.delete("/delete-blog/", deleteBlogController);

export default router;
