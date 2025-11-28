import { NextResponse } from "next/server";
import { connectDB } from "@/libs/mongodb";
import Posts from "@/models/Posts";
import Category from "@/models/Category";

export const GET = async (req, { params }) => {
  try {
    await connectDB();
    const { categoryId } = await params;

    const posts = await Posts.find({ category: categoryId }).sort({
      status: -1,
      createdAt: -1,
    });

    const category = await Category.findById(categoryId);

    return NextResponse.json(
      { message: "Posts fetched successfully", posts, category },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching posts:", error);
    return NextResponse.json(
      { message: "Failed to fetch posts", error: error.message },
      { status: 500 }
    );
  }
};
