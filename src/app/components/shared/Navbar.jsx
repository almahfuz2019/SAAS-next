"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function Navbar() {
  const navItemsStyle =
    "relative font-normal before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:transition hover:before:scale-100 text-[#676767] hover:text-primary text-xl";

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Pricing", href: "/pricing" },
    { label: "Contact", href: "/contact" },
    { label: "Dashboard", href: "/features/dashboard" },
  ];

  return (
    <div className="lg:z-50 hidden lg:block mt-2 max-w-screen-xl mx-auto">
      <div className="navbar py-0 bg-white">
        {/* Navbar Start */}
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="4"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 border border-primary border-opacity-30"
            >
              {navItems.map((item) => (
                <li key={item.href} className={navItemsStyle}>
                  <Link href={item.href} className="text-md">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <Link href="/" className="btn btn-ghost normal-case text-xl logo">
            <Image
              width={200}
              height={50}
              src="/images/shared/logo.png" // Adjust the path relative to the public folder
              alt="logo"
              priority
            />
          </Link>
        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal px-1">
            {navItems.map((item) => (
              <li key={item.href} className={navItemsStyle}>
                <Link href={item.href} className="text-md">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end flex gap-6">
          <Link href="/login" className="text-xl text-black font-medium">
            Log in
          </Link>
          <Link
            href="/login"
            className="bg-primary rounded-[32px] font-medium text-white px-6 py-3 hover:bg-[#3B43B2] transition duration-300 text-lg"
          >
            Request A Demo
          </Link>
        </div>
      </div>
    </div>
  );
}
