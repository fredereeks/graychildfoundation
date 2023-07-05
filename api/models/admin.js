import mongoose from "mongoose"

const AdminSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
    isAdmin: {
        type: Boolean,
        default: true
    },
    token: {
        type: String
    }
}, {timestamps: true});

export default mongoose.model("AdminSchema", AdminSchema)