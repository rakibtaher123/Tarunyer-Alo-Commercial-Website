import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide your name."],
      trim: true,
    },
    phone: {
      type: String,
      required: [true, "Please provide your phone number."],
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
    },
    message: {
      type: String,
      required: [true, "Please provide a message."],
      trim: true,
    },
  },
  {
    timestamps: true, // Automates createdAt and updatedAt
  }
);

export default mongoose.models.Contact || mongoose.model("Contact", ContactSchema);
