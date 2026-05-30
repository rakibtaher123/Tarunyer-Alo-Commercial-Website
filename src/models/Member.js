import mongoose from "mongoose";

const MemberSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide the member's name."],
      trim: true,
    },
    role: {
      type: String,
      required: [true, "Please provide the member's role."],
      trim: true,
    },
    memberId: {
      type: String,
      required: [true, "Please provide the unique member ID (e.g. TA-101)."],
      unique: true,
      trim: true,
    },
    category: {
      type: String,
      required: [true, "Please provide the member category."],
      enum: ["executive", "advisor", "ambassador", "volunteer"],
      default: "volunteer",
    },
    image_url: {
      type: String,
      default: "",
    },
    social_links: {
      facebook: { type: String, default: "" },
      linkedin: { type: String, default: "" },
      email: { type: String, default: "" },
    },
  },
  {
    timestamps: true,
  }
);

// Reuse the model if already defined during hot-reload compile states
export default mongoose.models.Member || mongoose.model("Member", MemberSchema);
