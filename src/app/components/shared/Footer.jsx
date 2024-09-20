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
    <div className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto max-w-screen-xl px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Contact */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-white">Condo Cloud</h3>
          <div className="flex items-center mb-4">
            <FaPhoneAlt className="mr-3 text-lg" />
            <span>0123 456 789</span>
          </div>
          <div className="flex items-center">
            <FaEnvelope className="mr-3 text-lg" />
            <span>Loremlpsum1@gmail.com</span>
          </div>
        </div>

        {/* Popular Links */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-white">Popular Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Articles
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                System Status
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* About Us */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-white">About Us</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white">
                Our Story
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Why Choose Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Our Teams
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Testimonial
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-white">Follow Us</h3>
          <ul className="space-y-4">
            <li className="flex items-center space-x-3">
              <FaFacebookF className="text-lg" />
              <a href="#" className="hover:text-white">
                Facebook
              </a>
            </li>
            <li className="flex items-center space-x-3">
              <FaLinkedinIn className="text-lg" />
              <a href="#" className="hover:text-white">
                LinkedIn
              </a>
            </li>
            <li className="flex items-center space-x-3">
              <FaTwitter className="text-lg" />
              <a href="#" className="hover:text-white">
                Twitter
              </a>
            </li>
            <li className="flex items-center space-x-3">
              <FaInstagram className="text-lg" />
              <a href="#" className="hover:text-white">
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
