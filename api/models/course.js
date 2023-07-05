import mongoose from "mongoose"

const CourseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    resources: {
        type: [{String}],
        required: true,
        unique: true
    },
    isActive: {
        type: Boolean,
        default: false
    },
    featured: {
        type: Boolean,
        default: false
    },
    image: {
        type: [String],
    },
    createdBy: {
        type: String,
    },
}, {timestamps: true})

export default mongoose.model("Course", CourseSchema)