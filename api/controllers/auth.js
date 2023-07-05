import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"

import Admin from "../models/admin.js"
import { createError } from "../utils/error.js";

export const handleLogin = async(req,res,next) => {
    console.log({details: req.body})
    try {
        const user = await Admin.findOne({username: req.body.username});
        if(user){
            const {password, isAdmin, username, fullname, _id} = user;
            console.log({user})
            const matchPassword = await bcryptjs.compare(req.body.password, password);
            if(matchPassword){
                const token = jwt.sign({username, isAdmin, fullname, id: _id}, process.env.JWT);
                console.log({token})
                res.cookie("access_token", token, {httpOnly: true}).status(200).json({user})
            }
            else return next(createError(400, "Invalid username/password")) //400 - bad request
        } 
        else return next(createError(404, "User NOT Found"))
    } catch (err) {
        next(err)
    }
}

export const handleRegister = async(req,res,next) => {
    try{
		const oldAdmin = await Admin.find({username: req.body.username}) || await Admin.find({email: req.body.email})
		if(oldAdmin.length){
			return next(createError(409, "We have an admin with one of your username/email"))
		}else{
            const salt = bcryptjs.genSaltSync(10);
            const hashPassword = bcryptjs.hashSync(req.body.password, salt);
            const admin = {...req.body, password: hashPassword}
            const newAdmin = new Admin(admin);
            try{
                await newAdmin.save();
                res.status(200).json("New Admin Created Successfully");
            }catch(err){
                next(err);
            }
        }
    }catch(err){
        next(err)
    }
}

export const handleLogout = async(req,res,next) => {
    res.clearCookie("access_token", {
        sameSite: "none",
        secure: true
    }).status(200).json("ou have been logged out!")
}
