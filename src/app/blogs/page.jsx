import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function BlogPage() {
  const stories = [
    {
      id: 1,
      title: "Understanding Condo Management",
      slug: "understanding-condo-management", // Unique slug
      description:
        "Learn the basics of condo management and how it can simplify property operations.",
      content: `
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      `,
      imageUrl:
        "https://images.pexels.com/photos/374023/pexels-photo-374023.jpeg",
    },
    {
      id: 2,
      title: "Condo Operations Made Simple",
      slug: "condo-operations-made-simple", // Unique slug
      description:
        "Explore best practices for managing condo operations efficiently with modern tools.",
      content: `
        <p>Condo operations are becoming more streamlined with modern tools and technologies. In this blog, we explore the best practices for managing condo operations efficiently.</p>
      `,
      imageUrl:
        "https://images.pexels.com/photos/374023/pexels-photo-374023.jpeg",
    },
  ];

  return (
    <div>
      <div className="max-w-screen-xl mx-auto py-16 lg:py-20 px-4 lg:px-8">
        {/* Blog Page Header */}
        <div className="mb-16 text-center">
          <h1 className="text-[32px] sm:text-[40px] leading-[40px] sm:leading-[50px] font-medium">
            Read our official blogs to know more about how to smoothly{" "}
            <span className="text-primary">Operate</span> and{" "}
            <span className="text-primary">Manage</span> your Condo
          </h1>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story) => (
            <div
              key={story.id}
              className="bg-[#F5F8FF] rounded-2xl p-5 shadow-md hover:shadow-lg transition-shadow duration-300"
              data-aos="fade-up"
            >
              {/* Blog Image */}
              <div className="relative w-full h-56">
                <Image
                  src={story.imageUrl}
                  alt={`${story.title} image`}
                  layout="responsive"
                  width={700}
                  height={400}
                  className="object-cover rounded-2xl"
                  priority={story.id === 1 ? true : false} // Load first image as priority
                />
              </div>

              {/* Blog Content */}
              <div className="py-6">
                <h3 className="text-2xl font-semibold text-accent">
                  {story.title}
                </h3>
                <p className="text-lg md:text-xl text-[#676767] my-4">
                  {story.description}
                </p>
                <Link
                  href={`/blogs/${story.slug}`} // Dynamic link using slug
                  className="text-lg md:text-xl text-primary font-medium underline underline-offset-2"
                  aria-label={`Read more about ${story.title}`}
                >
                  Read more
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
