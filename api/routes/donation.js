import express from "express"
import { deleteDonation, createDonation, fetchDonations } from "../controllers/donation.js";
import { verifyAdmin } from "../utils/verify.js";

const router = express.Router();


router.post("/create", createDonation)

router.get("/:id", verifyAdmin, fetchDonations)

router.delete("/:id", verifyAdmin, deleteDonation)

export default router;