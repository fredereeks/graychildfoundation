import mongoose from "mongoose"

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    images: {
        type: [String],
        required: true,
    },
    category: {
        type: String,
    },
    comments: {
        type: [
            {
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
            }   
        ]
    },
    type: {
        type: String,
    },
    isActive: {
        type: Boolean,
        default: true
    },
    featured: {
        type: Boolean,
        default: true
    },
    createdBy: {
        type: Object,
        required: true,
    },
    date: Date
}, {timestamps: true})

export default mongoose.model("Post", PostSchema)