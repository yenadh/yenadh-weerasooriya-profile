import mongoose from "mongoose";

const PostsSchema = new mongoose.Schema(
  {
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      default: null,
    },
    title: { type: String, required: true },
    description: { type: String, trim: true, default: "" },
    image: { type: [String], default: [] },
    status: { type: Boolean, default: false },
    content: { type: String },
  },
  { timestamps: { createdAt: "createdAt" } }
);

export default mongoose.models.Posts || mongoose.model("Posts", PostsSchema);
