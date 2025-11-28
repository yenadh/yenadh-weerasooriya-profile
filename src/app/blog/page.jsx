"use client";

import { useEffect, useState } from "react";
import BlogHeroSection from "@/components/BlogHeroSection";
import StoryCategories from "@/components/StoryCategories";

export default function Blog() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch("/api/category");
        const result = await res.json();
        setData(result.categories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return (
    <>
      <BlogHeroSection />
      <StoryCategories items={data} loading={loading} />
    </>
  );
}
