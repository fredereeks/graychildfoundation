import express from "express"
import { deletePost, createPost, fetchPosts, updatePosts } from "../controllers/post.js";
import { verifyAdmin } from "../utils/verify.js";

const router = express.Router();


router.post("/create", verifyAdmin, createPost)

router.put("/:id", verifyAdmin, updatePosts)

router.get("/", fetchPosts)

router.get("/:id", fetchPosts)

router.delete("/:id", verifyAdmin, deletePost)

export default router;