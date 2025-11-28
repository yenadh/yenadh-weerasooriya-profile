import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    category: { type: String, required: true },
    description: { type: String, trim: true, default: "" },
    image: { type: [String], default: [] },
    status: { type: Boolean, default: false },
  },
  { timestamps: { createdAt: "createdAt" } }
);

export default mongoose.models.Category ||
  mongoose.model("Category", categorySchema);
