"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaAlignLeft } from "react-icons/fa6";

const NavbarForSmallDevices = () => {
  const navItems = (
    <>
      <li className="relative font-normal before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-primary before:transition hover:before:scale-100 text-base -mt-1">
        <Link href="/">Home</Link>
      </li>
      <li className="relative font-normal before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-primary before:transition hover:before:scale-100 text-base -mt-1">
        <Link href="/about">About</Link>
      </li>
      <li className="relative font-normal before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-primary before:transition hover:before:scale-100 text-base -mt-1">
        <Link href="/services">Services</Link>
      </li>
      <li className="relative font-normal before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-primary before:transition hover:before:scale-100 text-base -mt-1">
        <Link href="/pricing">Pricing</Link>
      </li>
      <li className="relative font-normal before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-primary before:transition hover:before:scale-100 text-base -mt-1">
        <Link href="/contact">Contact</Link>
      </li>
      <li className="relative font-normal before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-primary before:transition hover:before:scale-100 text-base -mt-1">
        <Link href="/login">Login</Link>
      </li>
      <li className="relative font-normal before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-primary before:transition hover:before:scale-100 text-base -mt-1">
        <Link href="/request-demo">Request a Demo</Link>
      </li>
    </>
  );

  return (
    <div className="lg:hidden">
      <div className="flex justify-between bg-white border-b-4 border-primary relative sm:py-2 z-50">
        <div className="ml-4">
          <Link href="/" className="btn btn-ghost normal-case text-xl pl-0 py-1">
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
              <i className="font-bold">
                <FaAlignLeft className="text-2xl sm:text-3xl font-extrabold rotate-180" />
              </i>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-2 p-2 shadow bg-base-100 rounded-box w-48 border border-primary border-opacity-30 mr-1"
            >
              {navItems}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarForSmallDevices;
