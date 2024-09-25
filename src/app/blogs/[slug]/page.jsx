"use client"; // Ensure this is treated as a Client Component
import React from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

const blogData = [
  {
    id: 1,
    title: "How to create account and set up your data in Condo Cloud",
    slug: "create-account-condo-cloud",
    description:
      "Getting started with Condo Cloud is a simple process that ensures your condo management runs smoothly from the start. Follow these four steps to create an account and set up your data effectively.",
    content: `
      <p>Getting started with Condo Cloud is a simple process that ensures your condo management runs smoothly from the start. Follow these four steps to create an account and set up your data effectively.</p>
      <h3>Step 1: Sign Up for Your Account</h3>
      <p>To begin, visit the Condo Cloud homepage and click the “Sign Up” button. You’ll be asked to provide your email address and create a secure password. After submitting your details, you’ll receive a confirmation email to verify your account. Click the link in the email to finalize the registration and log in to your new account.</p>
      <h3>Step 2: Set Up Your Profile</h3>
      <p>Once logged in, you’ll be prompted to complete your profile by filling in necessary information such as your full name, condo or property name, and contact information.</p>
      <h3>Step 3: Add Property and Resident Data</h3>
      <h3>Step 4: Configure Communication and Preferences</h3>
    `,
    imageUrl:
      "https://images.pexels.com/photos/374023/pexels-photo-374023.jpeg",
  },
  {
    id: 2,
    title: "Condo operations made simple",
    slug: "condo-operations-made-simple",
    description:
      "Condo operations are becoming more streamlined with modern tools and technologies.",
    content: `
      <p>Condo operations are becoming more streamlined with modern tools and technologies.</p>
    `,
    imageUrl:
      "https://images.pexels.com/photos/374023/pexels-photo-374023.jpeg",
  },
];

export default function BlogDetailPage() {
  const { slug } = useParams();

  // Find the blog post that matches the slug
  const blog = blogData.find((b) => b.slug === slug);

  if (!blog) return <p>Loading...</p>;

  return (
    <div className="max-w-screen-xl mx-auto py-20 px-4">
      {/* Blog Details Section */}
      <div className="mb-16">
        <h1 className="text-4xl font-bold">{blog.title}</h1>
        <p className="text-gray-500 mt-2">12th September, 2024</p>
        <div className="my-8 w-full">
          <Image
            src={blog.imageUrl}
            alt={blog.title}
            width={700}
            height={400}
            className="w-full h-auto rounded-xl"
          />
        </div>
        <div className="prose lg:prose-xl max-w-none">
          <div dangerouslySetInnerHTML={{ __html: blog.content }} />
        </div>
      </div>

      {/* Social Share Buttons */}
      <div className="flex items-center mt-10 space-x-4">
        <p className="text-lg font-semibold">Share - </p>
        <a
          href="#"
          className="text-gray-600 hover:text-blue-600 transition"
          aria-label="Share on Facebook"
        >
          <FaFacebookF className="text-2xl" />
        </a>
        <a
          href="#"
          className="text-gray-600 hover:text-blue-400 transition"
          aria-label="Share on Twitter"
        >
          <FaTwitter className="text-2xl" />
        </a>
        <a
          href="#"
          className="text-gray-600 hover:text-blue-700 transition"
          aria-label="Share on LinkedIn"
        >
          <FaLinkedinIn className="text-2xl" />
        </a>
        <a
          href="#"
          className="text-gray-600 hover:text-green-500 transition"
          aria-label="Share on WhatsApp"
        >
          <FaWhatsapp className="text-2xl" />
        </a>
      </div>

      {/* Related Blogs Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold">Related Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {blogData
            .filter((relatedBlog) => relatedBlog.id !== blog.id)
            .map((relatedBlog) => (
              <div
                key={relatedBlog.id}
                className="bg-white rounded-lg shadow-lg p-6"
              >
                <Image
                  src={relatedBlog.imageUrl}
                  alt={relatedBlog.title}
                  width={700}
                  height={400}
                  className="w-full h-40 object-cover rounded-md"
                />
                <div className="mt-4">
                  <h3 className="text-xl font-semibold">{relatedBlog.title}</h3>
                  <p className="text-gray-600 mt-2">
                    {relatedBlog.description.substring(0, 100)}...
                  </p>
                  <Link
                    href={`/blogs/${relatedBlog.slug}`}
                    className="text-primary font-semibold mt-4 block"
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
