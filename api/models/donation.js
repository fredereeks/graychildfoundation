import mongoose from "mongoose"

const DonationSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    phone: {
        type: String,
    },
    email: {
        type: String,
        required: true,
    },
    currency: {
        type: String,
        required: true
    },
    channel: {
        type: String,
    }
}, {timestamps: true})

export default mongoose.model("Donation", DonationSchema)