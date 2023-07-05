import express from "express"
import fileUpload from "express-fileupload"
import cors from "cors"
import cookieParser from "cookie-parser"
import dotenv from "dotenv"
import mongoose from "mongoose"
import fs from "fs"
import * as url from "url"

dotenv.config()

// Routes
import adminRoute from "./routes/admin.js"
import authRoute from "./routes/auth.js"
import commentRoute from "./routes/comment.js"
import contactRoute from "./routes/contact.js"
import donationRoute from "./routes/donation.js"
import postRoute from "./routes/post.js"
import volunteerRoute from "./routes/volunteer.js"
// import { createError } from "./utils/error.js"

const __dirname = url.fileURLToPath(new URL(`../`,import.meta.url))
// console.log({__filename: url.fileURLToPath(import.meta.url), __dirname, uploadDir: `${__dirname}/client/public/images/news`})

const app = express()
app.use(cookieParser())

app.use(fileUpload({createParentPath: true, max_upload_size: 5000}))
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}))
app.use(express.json({urlencoded: 40867}))

const CONNECTION_STRING = process.env.development === 'production' ? process.env.MONGO_URI : process.env.MONGO_URL;

const connect = async() => {
    try{
        mongoose.connect(CONNECTION_STRING)
        console.log(`Mongo Connected`)
    }
    catch(err){
        console.log(`Could not connect to db`);
        throw err;
    }
}

// Middlewares
app.post("/api/upload", async(req,res,next) => {
    console.log({files: req.files, body: req.body})
    if(!req.files) res.status(400).json("No file uploaded");
    else{
        const images = [];
        const uploadDir = `${__dirname}/client/public/images/${req.body.folder}`;
        req.files.images = !req.files.images.length ? [req.files.images] : req.files.images
        for(let i = 0; i < req.files.images.length; i++){
            const image = req.files.images[i];
            const ext = image.mimetype.toString().toLowerCase().split("/").slice(-1);
            console.log({ext})
            if(ext === 'png' || ext === 'jpg' || ext === 'jpeg') {
                continue;
            }
            else{
                const uploadPath = `${__dirname}/client/public/images/${req.body.folder}/${image.name}`
                const filePath = `../images/${req.body.folder}/${image.name}`
                await new Promise((resolve) => {
                    image.mv(uploadPath, (err) => {
                        if(err) res.status(500).json("Something went wrong, image NOT uploaded")
                        images.push(`${uploadPath}`)
                        resolve(true);
                    })
                })
            }
        }
        res.status(201).json(images)
    }
})
app.use("/api/admin", adminRoute)
app.use("/api/auth", authRoute)
app.use("/api/comment", commentRoute)
app.use("/api/contact", contactRoute)
app.use("/api/donation", donationRoute)
app.use("/api/posts", postRoute)
app.use("/api/volunteer", volunteerRoute)

app.use((err,req,res,next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong";
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack
    })
})

const PORT = process.env.PORT

app.listen(PORT, () => {
    connect();
    console.log(`App is listening on port ${PORT}`)
})
