import Donation from "../models/donation.js";

export const createDonation = async(req,res,next) => {
	const newDonation = new Donation(req.body);
	try{
		await newDonation.save();
		res.status(201).json({data: newDonation, message: "Thank You for your Donation. Be rest assured it would serve a good purpose."});	
	}catch(err){
		next(err)
	}
}

export const fetchDonations = async(req,res,next) => {
	try{
		const donations = req.params.id ? await Donation.findById(req.params.id) : await Donation.find("-createdAt");
		res.status(200).json(donations);	
	}catch(err){
		next(err)
	}
}

export const deleteDonation = async(req,res,next) => {
	try{
		await Donation.findByIdAndDelete(req.params.id);
		res.status(200).json("Donation has been deleted");
	}catch(err){
		next(err);
	}
}