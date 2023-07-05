// import Comment from "../models/comment.js";
import Post from "../models/post.js";


export const createComment = async(req,res,next) => {
        const postId = req.params.id;
        console.log({params: req.params, body: req.body})
        const {fullname, date, text, email} = req.body;
    try{
        const postComment = await Post.findByIdAndUpdate(postId, {$push: {comments: {fullname, date, text, email}}}, {new: true})
        res.status(200).json(postComment.comments)
    }catch(err){
        next(err)
    }
}

export const getComments = async(req,res,next) => {
    const postId = req.params.id;
    try{
        const post = await Post.findById(postId);
        res.status(200).json(post.comments)
    }catch(err){
        next(err)
    }
}

export const deleteComment = async(req, res, next) => {
    const commentId = req.params.id, postId = req.params.postId;
    try{
        await Post.findById(postId, {$pull: {comments: commentId}})
        res.status(200).json("Comment Deleted")
    }
    catch(err){
        next(err)
    }
}