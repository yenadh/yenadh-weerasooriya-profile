import { NextResponse } from "next/server";
import { connectDB } from "@/libs/mongodb";
import Category from "@/models/Category";
import cloudinary from "@/libs/cloudinary";
import { Readable } from "stream";
import Posts from "@/models/Posts";

export const POST = async (req) => {
  try {
    await connectDB();

    const formData = await req.formData();
    const category = formData.get("category");
    const title = formData.get("title");
    const description = formData.get("description");
    const status = formData.get("status") === "true";
    const files = formData.getAll("image");

    let imageUrls = [];

    for (const file of files) {
      const buffer = Buffer.from(await file.arrayBuffer());

      const uploadStream = () =>
        new Promise((resolve, reject) => {
          const stream = cloudinary.uploader.upload_stream(
            { folder: "postThumbnails" },
            (error, result) => {
              if (error) reject(error);
              else resolve(result.secure_url);
            }
          );

          Readable.from(buffer).pipe(stream);
        });

      const imageUrl = await uploadStream();
      imageUrls.push(imageUrl);
    }

    const newPost = await Posts.create({
      category,
      title,
      description,
      image: imageUrls,
      status,
    });

    return NextResponse.json(
      { message: "Post created successfully", post: newPost },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating post:", error);
    return NextResponse.json(
      { message: "Failed to create post", error: error.message },
      { status: 500 }
    );
  }
};

export const GET = async () => {
  try {
    await connectDB();

    const posts = await Posts.find().sort({
      status: -1,
      createdAt: -1,
    });

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
