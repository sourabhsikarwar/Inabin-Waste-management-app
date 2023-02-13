import mongoose from "mongoose";

const requestSchema = mongoose.Schema(
  {
    requestUser: {
      type: String,
      required: true,
    },
    requestEmail: {
      type: String,
      required: true,
    },
    contact: {
      type: Number,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    collectorID: {
        type: String,
        required: false,
    },
    requestUserID: {
        type: String,
        required: true,
    },
    dateOfCompletion: {
        type: Date,
        default: null,
    },
    status: {
        type: String,
        enum: ['started', 'in-progress', 'completed'],
        required: true,
    },
    collectorName: {
      type: String,
    },
    collectorContact: {
      type: Number,
    },
    // lognitude and latitude
    location : {
      type : Object,
    }
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Request", requestSchema);