import { postModel } from "../models/postModel.js";

export const getPost = async (req, res) => {
  try {
    let post = new postModel({
      title: "test",
      content: "test",
    });
    post.save();
    let posts = await postModel.find();
    console.log("posts", posts);
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const createPost = (req, res) => {
  res.send("Create Post Success");
};
