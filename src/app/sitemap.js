const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://yenadh-weerasooriya-profile.vercel.app";

export default function sitemap() {
  const lastModified = new Date();

  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/blog`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];
}
