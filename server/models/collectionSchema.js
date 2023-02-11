import mongoose from "mongoose";

const collectionSchema = mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    uniqueRequestId: {
        type: Number,
        required: true
    },
    collectorName: {
        type: String,
        required: true
    },
    userEmail: {
        type: String,
        required: true
    },
    userContact: {
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