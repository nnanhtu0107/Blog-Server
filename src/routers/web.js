import express from "express";
import { getPost, createPost } from "../controllers/posts.js";
const router = express.Router();

router.get("/getPost", getPost);

router.post("/createPost", createPost);

export default router;
