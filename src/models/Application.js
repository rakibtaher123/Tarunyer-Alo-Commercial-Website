import mongoose from "mongoose";

const ApplicationSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Please provide your full name."],
      trim: true,
    },
    phone: {
      type: String,
      required: [true, "Please provide your phone number."],
      trim: true,
    },
    address: {
      type: String,
      required: [true, "Please provide your residential address."],
      trim: true,
    },
    skills: {
      type: String,
      required: [true, "Please outline your core skills/interests."],
      trim: true,
    },
    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Application || mongoose.model("Application", ApplicationSchema);
