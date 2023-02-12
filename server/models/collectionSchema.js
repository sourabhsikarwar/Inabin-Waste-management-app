import mongoose from "mongoose";

const collectionSchema = mongoose.Schema({
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
        required: true
    },
    paper: {
        type: Number,
        required: true,
    },
    metal: {
        type: Number,
        required: true
    },
    organic: {
        type: Number,
        required: true
    }
}, {
    timestamps : true
})

export default mongoose.model("Collection", collectionSchema);