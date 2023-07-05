import mongoose from "mongoose"

const GallerySchema = new mongoose.Schema({
    event: {
        type: String,
        required: true,
        default: "general",
    },
    photos: {
        type: [
            {
                path: {
                    type: String,
                    required: true
                }
            }
        ],
        required: true
    },
    lastAdded: {
        type: Object,
        required: true
    },
}, {timestamps: true});

export default mongoose.model("GallerySchema", GallerySchema)