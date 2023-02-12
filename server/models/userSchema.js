// User Schema
import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  user_type: {
    type: String,
    required: true,
    enum: ["collector", "user"],
    default : "user",
  },
  points: {
    type: Number,
    default: 0,
  },
  address: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
  },
  waste_disposal: {
    type: Array(Date),
  },
  notification_sent : {
    type : Date,
  },
  average_day : {
    type : Number,
  },
  days_left_notification : {
    type : Number,
  },
});

export default mongoose.model("User", userSchema);
