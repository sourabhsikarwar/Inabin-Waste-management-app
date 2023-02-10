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
    uniqueRequestID: {
        type: Number,
        required: true,
    },
    dateOfCompletion: {
        type: Date,
        default: null,
    },
    status: {
        type: String,
        enum: ['started', 'pending', 'completed'],
        required: true,
    }
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Request", requestSchema);