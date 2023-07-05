import express from "express"
import StudentSchema from "../models/student.js"

const router = express.Router();

router.post("/create", async(req,res,next) => {
    try{
        const newStudent = await StudentSchema(req.body);
        const savedStudent = newStudent.save();
        res.status(200)
    }
    catch(err){

    }
    res.send("Authenticated!")
})

export default router;