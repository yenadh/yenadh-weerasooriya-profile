import mongoose from "mongoose";

const postsContentSchema = new mongoose.Schema(
  {
    postId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Posts",
      default: null,
    },
    content: { type: String, trim: true, default: "" },
    status: { type: Boolean, default: false },
  },
  { timestamps: { createdAt: "createdAt" } }
);

export default mongoose.models.PostContent ||
  mongoose.model("PostContent", postsContentSchema);
