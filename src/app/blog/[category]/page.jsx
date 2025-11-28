"use client";
import CommonHero from "@/components/CommonHero";
import PostCard from "@/components/PostCard";
import StoryCategories from "@/components/StoryCategories";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function BlogCategories() {
  const params = useParams();
  const categoryId = params.category;

  const [posts, setPosts] = useState([]);
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch(`/api/post/${categoryId}`);
        const result = await res.json();
        setPosts(result.posts);
        setCategory(result.category);
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading)
    return (
      <div className="animate-pulse px-4 sm:px-6 md:px-10 xl:px-40 py-16 space-y-6 bg-black text-gray-300">
        <div className="h-8 w-3/4 bg-gray-800 rounded"></div>
        <div className="h-4 w-1/2 bg-gray-700 rounded"></div>
        <div className="h-96 w-full bg-gray-900 rounded"></div>
        <div className="space-y-4">
          <div className="h-4 w-full bg-gray-800 rounded"></div>
          <div className="h-4 w-5/6 bg-gray-800 rounded"></div>
          <div className="h-4 w-3/4 bg-gray-700 rounded"></div>
          <div className="h-4 w-2/3 bg-gray-700 rounded"></div>
        </div>
      </div>
    );

  if (!posts) return <p>Post not found.</p>;

  return (
    <>
      <CommonHero
        title={category?.category}
        description={category?.description}
        image={category?.image?.[0]}
      />
      <PostCard items={posts} loading={loading} />
    </>
  );
}
