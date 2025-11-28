"use client";

import { useEffect, useState } from "react";
import CommonHero from "@/components/CommonHero";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { useParams } from "next/navigation";

export default function Post() {
  const params = useParams();
  const postId = params.post;

  const [post, setPost] = useState(null);
  const [htmlContent, setHtmlContent] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch(`/api/post/content/${postId}`);
        const data = await res.json();
        const fetchedPost = data.posts;
        setPost(fetchedPost);

        const mdRes = await fetch(fetchedPost.content);
        const mdText = await mdRes.text();

        const { content } = matter(mdText);

        const processed = await unified()
          .use(remarkParse)
          .use(remarkRehype)
          .use(rehypeSlug)
          .use(rehypeAutolinkHeadings)
          .use(rehypePrettyCode, { theme: "github-dark" })
          .use(rehypeStringify)
          .process(content);

        setHtmlContent(processed.toString());
      } catch (error) {
        console.error("Error fetching post:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [postId]);

  // Dark themed Skeleton Loader
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

  if (!post) return <p>Post not found.</p>;

  return (
    <>
      <CommonHero
        title={post.title || "Untitled Post"}
        description={post.description || ""}
        image={post.image[0] || "/images/profile-image-yenadh.png"}
      />

      <article className="prose prose-invert max-w-full w-full px-4 sm:px-6 md:px-10 xl:px-40 py-16 bg-linear-to-b from-black via-gray-900 to-black text-gray-300">
        <div
          className="article"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      </article>
    </>
  );
}
