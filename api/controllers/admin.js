import Admin from "../models/admin.js"
import {createError} from "../utils/error.js"


export const updateAdmin = async(req, res, next) => {
	try{
		const replaceAdmin = await Admin.findByIdAndUpdate({id: req.params.id}, {$set: req.body}, {new: true});
		res.status(200).json(replaceAdmin);
	}catch(err){
		next(err)
	}
}

export const fetchAdmins = async(req,res,next) => {
	try{
		const allAdmins = req.params.id ? await Admin.findById(req.params.id) : await Admin.find("-createdAt");
		res.status(201).json(allAdmins);	
	}catch(err){
		next(err)
	}
}

export const deleteAdmin = async(req,res,next) => {
	try{
		await Admin.findByIdAndDelete({id: req.params.id});
		res.status(200).json("Admin has been deleted");
	}catch(err){
		next(err);
	}
}