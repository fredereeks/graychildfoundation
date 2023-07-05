import express from "express"
import { deletePhoto, createPhoto, fetchPhoto, deleteGallery } from "../controllers/gallery.js";
import { verifyAdmin } from "../utils/verify.js";

const router = express.Router();


router.post("/create", verifyAdmin, createPhoto)

router.get("/", fetchPhoto)

router.delete("/gallery/:id", verifyAdmin, deleteGallery)

router.delete("/:galleryId/:id", verifyAdmin, deletePhoto)

export default router;