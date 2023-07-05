import mongoose from 'mongoose'

const Comment = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    replies: {
        type: [{
            fullname: {
                type: String,
                required: true
            },
            email: {
                type: String,
                required: true
            },
            date: {
                type: Date,
                required: true
            },
            text: {
                type: String,
                required: true
            },
        }]
    }
}, {timestamps: true})

export default mongoose.model("Comment", Comment)