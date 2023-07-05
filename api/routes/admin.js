import express from "express"
import { deleteAdmin, updateAdmin, fetchAdmins} from "../controllers/admin.js"
import { verifyAdmin } from "../utils/verify.js";

const router = express.Router();

router.get("/", verifyAdmin, fetchAdmins)

router.get("/:id", verifyAdmin, fetchAdmins)

router.put("/:id", verifyAdmin, updateAdmin)

router.delete("/:id", verifyAdmin, deleteAdmin)

export default router;