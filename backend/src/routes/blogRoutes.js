import express from "express";
import { createBlogController, getAllBlogsController, getBlogController } from "../controllers/BlogController.js";
const router = express.Router();
//Get All Blogs
router.get("/all-blogs", getAllBlogsController);
//Create A Blog
router.put("/create-blog", createBlogController);
//Get Blog
router.get("/get-blog/", getBlogController);
// //Update A Blog
// router.put("/update-blog/:id", updateBlogController);
// //Delete A Blog
// router.delete("/delete-blog/:id", deleteBlogController);

export default router;
