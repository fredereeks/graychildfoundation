import express from "express"
import {createVolunteer, deleteVolunteer, fetchVolunteers} from "../controllers/volunteer.js"

const router = express.Router();

router.post("/", createVolunteer)

router.get("/", fetchVolunteers)

router.get("/:id", fetchVolunteers)

router.delete("/:id", deleteVolunteer)

export default router;