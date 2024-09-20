/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import React from "react";
import Image from "next/image";

const Custom404 = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 text-center">
      <Image
        src="/images/404.svg" // Replace with your custom 404 illustration
        alt="404 Not Found"
        width={300}
        height={300}
      />
      <h1 className="text-4xl font-bold mt-4 text-gray-800">
        Oops! Page Not Found
      </h1>
      <p className="text-lg text-gray-600 mt-2">
        It looks like the page you're looking for doesn't exist.
      </p>
      <Link href="/">
        <a className="mt-6 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-md transition-all">
          Go Back Home
        </a>
      </Link>
    </div>
  );
};

export default Custom404;
