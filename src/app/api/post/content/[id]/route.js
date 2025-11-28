import { NextResponse } from "next/server";
import { connectDB } from "@/libs/mongodb";
import Posts from "@/models/Posts";

export const GET = async (req, { params }) => {
  try {
    await connectDB();
    const { id } = await params;

    const posts = await Posts.findById(id);

    if (!posts) {
      return NextResponse.json({ message: "Posts not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Posts fetched successfully", posts },
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
