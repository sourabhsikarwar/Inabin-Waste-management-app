import mongoose from "mongoose";

const collectionSchema = mongoose.Schema({
    requestId: {
        type: String,
        required: true,
        unique : true,
    },
    userName: {
        type: String,
        required: true
    },
    collectorId: {
        type: String,
        required: true
    },
    requestUserId: {
        type: String,
        required: true
    },
    collectorName: {
        type: String,
        required: true
    },
    collectorContact: {
        type: Number,
        required: true
    },
    pickupAddress: {
        type: String,
        required: true
    },
    plastic: {
        type: Number,
        required: true,
        default : 0
    },
    paper: {
        type: Number,
        required: true,
        default : 0
    },
    metal: {
        type: Number,
        required: true,
        default : 0
    },
    organic: {
        type: Number,
        required: true,
        default : 0
    }
}, {
    timestamps : true
})

export default mongoose.model("Collection", collectionSchema);