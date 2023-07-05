import Volunteer from "../models/volunteer.js"

import {createError} from "../utils/error.js"

export const createVolunteer = async(req,res,next) => {
	try{
		const oldVolunteer = await Volunteer.find({email: req.body.email})
		if(oldVolunteer !== undefined){
			return next(createError(409, "You have already volunteered with us, thank you for your continuous interest :-)"))
		}else{
            const volunteer = new Volunteer(req.body)
            try{
                await volunteer.save()
                res.status(200).json(`Thank you for your interest ${req.body.firstname} ${req.body.lastname}. We would get back to you as soon as possible.`)
            }catch(err){
                next(err)
            }
        }
    }catch(err){
        next(err)
    }
}

export const fetchVolunteers = async(req,res,next) => {
    try{
        const volunteers = req.params.id ? await Volunteer.findById(req.params.id) : await Volunteer.find({createdAt: -1})
        res.status(200).json(volunteers)
    }catch(err){
        next(err)
    }
}

export const updateVolunteer = async(req,res,next) => {
    try{
        const updatedVolunteer = await Volunteer.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true})
        res.status(200).json(updatedVolunteer)
    }catch(err){
        next(err)
    }
}

export const deleteVolunteer = async(req,res,next) => {
    try{
        await Volunteer.findByIdAndDelete(req.params.id)
        res.status(200).json("Voluteer Deleted!")
    }catch(err){
        next(err)
    }
}