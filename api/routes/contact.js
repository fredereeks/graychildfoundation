import express from "express"
import {createContact, deleteContact, fetchContacts} from "../controllers/contact.js"
import { verifyAdmin } from "../utils/verify.js";

const router = express.Router();

router.post("/", createContact)

router.get("/", verifyAdmin, fetchContacts)

router.get("/:id", verifyAdmin, fetchContacts)

router.delete("/:id", verifyAdmin, deleteContact)

export default router;