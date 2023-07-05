import mongoose from "mongoose"

const ContactSchema = new mongoose.Schema({
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
        required: true
    },
    phone: {
        type: String,
    },
    message: {
        type: String,
    },
}, {timestamps: true});

export default mongoose.model("ContactSchema", ContactSchema)