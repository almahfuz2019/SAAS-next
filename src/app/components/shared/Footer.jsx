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
    <div className="bg-accent px-4 text-[#BDBDBD] py-24">
      <div className="container mx-auto max-w-screen-xl  grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-between">
        {/* Logo and Contact */}
        <div>
          <Link href="/">
            <Image
              width={200}
              height={50}
              className=""
              src="/images/shared/logoForFooter.png" // Use the path relative to public folder
              alt="logo"
              priority // Ensures the logo loads with higher priority
            />
          </Link>
          <div className="flex items-center mt-6 mb-4 text-white">
            <FaPhoneAlt className="mr-3 bg-[#FFFFFF12] p-2 text-4xl rounded-lg " />
            <span>0123 456 789</span>
          </div>
          <div className="flex items-center text-white">
            <FaEnvelope className="mr-3 bg-[#FFFFFF12] p-2 text-4xl rounded-lg " />
            <span>Loremlpsum1@gmail.com</span>
          </div>
        </div>

        {/* Popular Links */}
        <div>
          <h3 className="text-xl font-medium text-white mb-6 uppercase">
            Popular Links
          </h3>
          <ul className="space-y-3">
            <li>
              <a href="#" className="hover:">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="hover:">
                Articles
              </a>
            </li>
            <li>
              <a href="#" className="hover:">
                System Status
              </a>
            </li>
            <li>
              <a href="#" className="hover:">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="hover:">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* About Us */}
        <div>
          <h3 className="text-xl font-medium text-white mb-6 uppercase ">
            About Us
          </h3>
          <ul className="space-y-3">
            <li>
              <a href="#" className="hover:">
                Our Story
              </a>
            </li>
            <li>
              <a href="#" className="hover:">
                Why Choose Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="hover:">
                Our Teams
              </a>
            </li>
            <li>
              <a href="#" className="hover:">
                Testimonial
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <ul className="space-y-4">
            <li className="flex items-center space-x-3 text-white bg-[#FFFFFF14] w-32 p-2 rounded-md">
              <FaFacebookF className="text-lg" />
              <a href="#" className="">
                Facebook
              </a>
            </li>
            <li className="flex items-center space-x-3 text-white bg-[#FFFFFF14] w-32 p-2 rounded-md">
              <FaLinkedinIn className="text-lg" />
              <a href="#" className="hover:">
                LinkedIn
              </a>
            </li>
            <li className="flex items-center space-x-3 text-white bg-[#FFFFFF14] w-32 p-2 rounded-md">
              <FaTwitter className="text-lg" />
              <a href="#" className="hover:">
                Twitter
              </a>
            </li>
            <li className="flex items-center space-x-3 text-white bg-[#FFFFFF14] w-32 p-2 rounded-md">
              <FaInstagram className="text-lg" />
              <a href="#" className="hover:">
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
