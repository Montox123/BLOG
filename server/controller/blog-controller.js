const mongoose = require("mongoose");
const Blog = require("../model/Blog");

//fetch list of blog

const fetchListOfBlogs = async (req, res) => {
  let blogList;
  try {
    blogList = await Blog.find();
  } catch (e) {
    console.log(e);
  }

  if (!blogList) {
    return res.status(404).json({ message: "No blog found" });
  }

  return res.status(200).json({ blogList });
};

// to add new blog

const addNewBlog = async (req, res) => {
  const { title, description } = req.body;
  const currentDate = new Blog({
    title,
    description,
    date: currentDate,
  });

  try {
    await newlyCreateBlog.save();
  } catch (e) {
    console.log(e);
  }

  try {
    const session = await mongoose.startSession();
    session.startTransaction();
    await newlyCreateBlog.save(session);
    session.commitTransaction();
  } catch (e) {
    return res.send(500).json({ message: e });
  }

  return res.status(200).json({ newlyCreateBlog });
};

//delete a blog

const deleteABlog = async (req, res) => {
  const id = req.params.id;

  try {
    const findCurrentBlog = await Blog.indByIdAndDelete(id);
    if (!findCurrentBlog) {
      return res.status(404).json({ message: "Blog Not Found" });
    }

    return res.status(200).json({ message: "Successfully Deleted" });
  } catch (e) {
    console.log(e);
    return res
      .status(500)
      .json({ message: "Unable to delete ! please try again" });
  }
};

// update a blog

const updateABlog = async (req, res) => {
  const id = req.params.id;

  const { title, description } = req.body;
  let currentBlogToUpdate;

  try {
    currentBlogToUpdate = await Blog.findIdAndUpdate(id, {
      title,
      description,
    });
  } catch (e) {
    console.log(e);

    return res
      .send(500)
      .json({ message: "Something went wrong while updating ! please wait" });
  }

  if (!currentBlogToUpdate) {
    return res.send(500).json({ message: "Unable to Update" });
  }

  return res.send(200).json({ currentBlogToUpdate });
};

module.exports = { fetchListOfBlogs, deleteABlog, updateABlog, addNewBlog };
