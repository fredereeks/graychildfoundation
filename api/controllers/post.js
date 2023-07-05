import Post from "../models/post.js"
import {createError} from "../utils/error.js"

export const createPost = async(req,res,next) => {
	try{
		const oldPost = await Post.findOne({title: req.body.title, category: req.body.category})
		if(oldPost){
			return next(createError(409, "We have a similar post just like this one"));
		}else{
			const newPost = new Post({
				title: req.body.title,
				text: req.body.text,
				type: req.body.type,
				images: JSON.parse(req.body.images),
				category: req.body.category,
				isActive: req.body.isActive,
				createdBy: req.user._id
			});
			try{
				await newPost.save();
				res.status(201).json({data: newPost, message: "New Post Created Successfully"});	
			}catch(err){
				next(err)
			}
		}
	}catch(err){
		next(err)
	}
}

export const updatePosts = async(req, res, next) => {
	try{
		const updatedPost = await Post.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true});
		res.status(200).json(updatedPost);
	}catch(err){
		next(err)
	}
}

export const fetchPosts = async(req,res,next) => {
	console.log({body: req.body, query: req.query})
	try{
		if(req.params.id){
			const post = await Post.findById(req.params.id);
			console.log({post})
			res.status(200).json(post);	
		}
		else{
			const limit = req.query.max || 999;
			const category = {category: req.query.category} || {};
			const posts = req.query.category ? await Post.find(category).sort({createdAt: -1}).limit(limit) : await Post.find().sort({createdAt: -1}).limit(limit);
			res.status(200).json(posts);	
		}
	}catch(err){
		next(err)
	}
}

export const deletePost = async(req,res,next) => {
	try{
		await Post.findByIdAndDelete(req.params.id);
		res.status(200).json("Post has been deleted");
	}catch(err){
		next(err);
	}
}