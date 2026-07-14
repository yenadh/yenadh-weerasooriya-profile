export default function JsonLd() {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://yenadh-weerasooriya-profile.vercel.app";

  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Keshawa Sri Yenadh Weerasooriya",
    alternateName: "Yenadh Weerasooriya",
    url: siteUrl,
    image: `${siteUrl}/images/profile-image-yenadh-dark.png`,
    jobTitle: "Software Engineer",
    description:
      "Software Engineer building clean, efficient, and user-focused web and mobile applications. Full-stack development with React, Next.js, Node.js, and .NET.",
    email: "mailto:yenathweerasooriya@gmail.com",
    sameAs: [
      "https://www.linkedin.com/in/yenath-weerasooriya-0b93a8351/",
      "https://github.com/yenadh/",
    ],
    knowsAbout: [
      "Software Engineering",
      "React",
      "Next.js",
      "Node.js",
      ".NET",
      "Full-stack Development",
      "Data Analytics",
      "AI",
    ],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Yenadh Weerasooriya Portfolio",
    url: siteUrl,
    description:
      "Portfolio of Yenadh Weerasooriya — Software Engineer.",
    inLanguage: ["en", "ar"],
    author: { "@id": `${siteUrl}/#person` },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({ ...person, "@id": `${siteUrl}/#person` }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}
