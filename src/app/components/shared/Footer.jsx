"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-accent px-4 text-[#BDBDBD] pt-24 pb-20">
      <div className="container mx-auto max-w-screen-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Logo and Contact */}
        <div data-aos="fade-up">
          <Link href="/">
            <Image
              width={200}
              height={50}
              src="/images/shared/logoForFooter.png"
              alt="logo"
              priority
            />
          </Link>
          <div className="flex items-center mt-6 mb-4 text-white">
            <FaPhoneAlt className="mr-3 bg-[#FFFFFF12] p-2 text-4xl rounded-lg" />
            <span>0123 456 789</span>
          </div>
          <div className="flex items-center text-white">
            <FaEnvelope className="mr-3 bg-[#FFFFFF12] p-2 text-4xl rounded-lg" />
            <span>Loremlpsum1@gmail.com</span>
          </div>
        </div>

        {/* Popular Links */}
        <div data-aos="fade-up" data-aos-delay="100">
          <h3 className="text-xl font-medium text-white mb-6 uppercase">
            Popular Links
          </h3>
          <ul className="space-y-3">
            {[
              "Features",
              "Articles",
              "System Status",
              "Pricing",
              "Contact",
            ].map((link) => (
              <li key={link}>
                <a href="#" className="hover:text-white transition">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* About Us */}
        <div data-aos="fade-up" data-aos-delay="200">
          <h3 className="text-xl font-medium text-white mb-6 uppercase">
            About Us
          </h3>
          <ul className="space-y-3">
            {[
              "Our Story",
              "Why Choose Us",
              "FAQ",
              "Our Teams",
              "Testimonial",
            ].map((link) => (
              <li key={link}>
                <a href="#" className="hover:text-white transition">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media */}
        <div data-aos="fade-up" data-aos-delay="300">
          <h3 className="text-xl font-medium text-white mb-6 uppercase">
            Follow Us
          </h3>
          <ul className="space-y-4">
            {[
              { Icon: FaFacebookF, name: "Facebook" },
              { Icon: FaLinkedinIn, name: "LinkedIn" },
              { Icon: FaTwitter, name: "Twitter" },
              { Icon: FaInstagram, name: "Instagram" },
            ].map(({ Icon, name }) => (
              <li
                key={name}
                className="flex items-center space-x-3 text-white bg-[#FFFFFF14] p-2 rounded-md"
              >
                <Icon className="text-lg" />
                <a href="#" className="hover:text-white transition">
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
