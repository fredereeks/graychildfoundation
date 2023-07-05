// import Comment from "../models/comment.js";
import Post from "../models/post.js";


export const createReplies = async(req,res,next) => {
        const postId = req.params.postId, commentId = req.params.id;
        const {fullname, date, text, email} = req.body;
    try{
        const postComment = await Post.findAndUpdate(postId, {comments: {$push: {replies: {fullname, date, text, email}}}}, {new: true});
        res.status(200).json(postComment.comments.replies)
    }catch(err){
        next(err)
    }
}

export const getReplies = async(req,res,next) => {
    const postId = req.params.postId, commentId = req.params.id;
    try{
        const post = await Post.findOneAndUpdate({$and: {_id: postId, comments: {_id: commentId}}});
        res.status(200).json(post.replies)
    }catch(err){
        next(err)
    }
}

export const deleteReplies = async(req, res, next) => {
    const postId = req.params.postId, commentId = req.params.commentId, replyId = req.params.id;
    try{
        await Post.findByIdAndUpdate(postId, {$pull: {comments: commentId}})
        res.status(200).json("Comment Deleted")
    }
    catch(err){
        next(err)
    }
}