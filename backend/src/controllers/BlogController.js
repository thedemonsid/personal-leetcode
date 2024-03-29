import { Blog } from "../models/blog.model.js";
//logic to get All Blogs from DB
export async function getAllBlogsController(req, res, next) {
  try {
    const blogs = await Blog.find({});
    if (!blogs.length) {
      return res.status(200).json({
        success: true,
        message: "No Blogs On DB",
      });
    }
    res.status(200).json({
      success: true,
      message: "successful acquisition of blogs",
      blogs,
      length: blogs.length,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Error while getting Blogs",
      error,
    });
  }
}
export async function createBlogController(req, res, next) {
  try {
    const { title, content, image } = req.body;
    if (!title || !content || !image) {
      return res.status(404).json({
        success: false,
        message: "Please send all Content to create a blog",
        error,
      });
    }
    const blog = new Blog({ title, content, image });
    await blog.save();
    res.status(200).json({
      success: true,
      message: "Successfully created the blog",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error while creating Blog",
      error,
    });
  }
}
export async function getBlogController(req, res, next) {
  try {
    const id = req.query.id;
    if (!id) {
      return res.status(404).json({
        success: false,
        message: "Please give the Id of Blog",
      });
    }
    const blogContent = await Blog.findById(id);
    res.status(200).json({
      success: true,
      message: "Got the blog From DB",
      blog: blogContent,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to get Blog from DB",
      error,
    });
  }
}
export async function updateBlogController(req, res, next) {
  try {
    const { title, content, image } = req.body;
    const id = req.query.id;
    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Please send the blog id",
      });
    }
    if (!title || !content || !image) {
      return res.status(400).json({
        success: false,
        message: "Please send all content to update a blog",
      });
    }
    const blog = await Blog.findById(id);
    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "Blog not found",
      });
    }
    blog.title = title;
    blog.content = content;
    blog.image = image;
    await blog.save();
    res.status(200).json({
      success: true,
      message: "Updated the blog",
      blog,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to update blog",
      error,
    });
  }
}
export async function deleteBlogController(req, res, next) {
  try {
    const id = req.query.id;
    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Please send the blog id",
      });
    }
    const blog = await Blog.findByIdAndDelete(id);
    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "Blog not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Deleted the blog",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete blog",
      error,
    });
  }
}
