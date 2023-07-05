import express from "express"
import { createComment, deleteComment, getComments } from "../controllers/comment.js";
import { verifyAdmin } from "../utils/verify.js";

const router = express.Router();


router.post("/create/:id", createComment)

router.get("/:id", getComments)

router.delete("/:postId/:id", verifyAdmin, deleteComment)

export default router;