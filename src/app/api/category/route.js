import { NextResponse } from "next/server";
import { connectDB } from "@/libs/mongodb";
import Category from "@/models/Category";
import cloudinary from "@/libs/cloudinary";
import { Readable } from "stream";

export const POST = async (req) => {
  try {
    await connectDB();

    const formData = await req.formData();
    const category = formData.get("category");
    const description = formData.get("description") || "";
    const status = formData.get("status") === "true";
    const files = formData.getAll("image");

    let imageUrls = [];

    // Upload images to Cloudinary
    for (const file of files) {
      const buffer = Buffer.from(await file.arrayBuffer());

      const uploadStream = () =>
        new Promise((resolve, reject) => {
          const stream = cloudinary.uploader.upload_stream(
            { folder: "categories" },
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

    const newCategory = await Category.create({
      category,
      description,
      image: imageUrls,
      status,
    });

    return NextResponse.json(
      { message: "Category created successfully", category: newCategory },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating category:", error);
    return NextResponse.json(
      { message: "Failed to create category", error: error.message },
      { status: 500 }
    );
  }
};

export const GET = async () => {
  try {
    await connectDB();

    const categories = await Category.find().sort({
      status: -1,
      createdAt: -1,
    });

    return NextResponse.json(
      { message: "Categories fetched successfully", categories },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching categories:", error);
    return NextResponse.json(
      { message: "Failed to fetch categories", error: error.message },
      { status: 500 }
    );
  }
};
