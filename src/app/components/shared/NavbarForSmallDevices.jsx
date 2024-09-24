"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaAlignLeft } from "react-icons/fa6";

const NavbarForSmallDevices = () => {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Pricing", href: "/pricing" },
    { label: "Contact", href: "/contact" },
    { label: "dashboard", href: "/features/dashboard" },
    { label: "Login", href: "/login" },
    { label: "Request a Demo", href: "/request-demo" },
  ];

  return (
    <div className="lg:hidden">
      <div className="flex justify-between bg-white border-b-4 border-primary relative sm:py-2 z-50">
        <div className="ml-4">
          <Link
            href="/"
            className="btn btn-ghost normal-case text-xl pl-0 py-1"
          >
            <Image
              width={200}
              height={50}
              src="/images/shared/logo.png"
              alt="logo"
            />
          </Link>
        </div>
        <div className="flex justify-end">
          <div className="dropdown dropdown-bottom dropdown-end">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <FaAlignLeft className="text-2xl sm:text-3xl font-extrabold rotate-180" />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-2 p-2 shadow bg-base-100 rounded-box w-48 border border-primary border-opacity-30 mr-1"
            >
              {navItems.map((item) => (
                <li
                  key={item.href}
                  className="relative font-normal before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-primary before:transition hover:before:scale-100 text-base -mt-1"
                >
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarForSmallDevices;
