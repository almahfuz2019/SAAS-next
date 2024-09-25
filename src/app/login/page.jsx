/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";
import Breadcrumb from "./Components/BreadcrumbSection";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <Breadcrumb />
      <div className="bg-[#F5F8FF] py-16 lg:py-20">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            <div data-aos="fade-right" className="flex flex-col justify-center">
              <h1 className="text-[28px] sm:text-[36px] lg:text-[40px] leading-[36px] sm:leading-[44px] lg:leading-[50px] font-medium">
                Manage your property from any place, with any device by{" "}
                <span className="text-primary">Condo Cloud</span>
              </h1>
              <Image
                className="mt-8"
                src="/images/loginPage/image.png"
                height={602}
                width={602}
                alt="Property Management"
              />
            </div>
            <div data-aos="fade-left">
              <div className="bg-white p-6 sm:p-8 lg:p-12 rounded-md shadow-lg w-full max-w-lg">
                <form>
                  <div className="mb-4">
                    <label
                      className="block text-[#1C1D1F] text-lg sm:text-xl mb-2"
                      htmlFor="username"
                    >
                      User Name
                    </label>
                    <input
                      className="w-full px-4 py-3 text-[#A5AAAB] rounded-md focus:outline-none focus:shadow-outline bg-[#F5F5F5]"
                      id="username"
                      type="text"
                      placeholder="Enter your user name"
                      aria-label="Enter your user name"
                    />
                  </div>

                  <div className="mb-6">
                    <label
                      className="block text-[#1C1D1F] text-lg sm:text-xl mb-2"
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <input
                      className="w-full px-4 py-3 text-[#A5AAAB] rounded-md focus:outline-none focus:shadow-outline bg-[#F5F5F5]"
                      id="password"
                      type="password"
                      placeholder="**********"
                      aria-label="Enter your password"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox text-indigo-600"
                        aria-label="Agree to terms and conditions"
                      />
                      <span className="ml-2 text-gray-700">
                        I agree to terms & conditions
                      </span>
                    </label>
                  </div>

                  <div className="mb-6">
                    <button
                      className="w-full bg-primary hover:bg-indigo-700 text-white font-medium py-3 px-4 rounded-md focus:outline-none focus:shadow-outline"
                      type="button"
                    >
                      Log In
                    </button>
                  </div>

                  <div className="flex items-center justify-center mb-4">
                    <span className="text-gray-500">or</span>
                  </div>

                  <div className="mb-6">
                    <button
                      className="w-full bg-[#F5F5F5] hover:bg-indigo-700 font-medium py-3 px-4 rounded-md focus:outline-none focus:shadow-outline flex items-center gap-4 justify-center border border-[#c4c4c44c]"
                      type="button"
                    >
                      <Image
                        className=""
                        src="/images/loginPage/googleIcon.png"
                        height={20}
                        width={20}
                        alt="Google Icon"
                      />
                      Log in with Google
                    </button>
                  </div>

                  <div className="text-center">
                    <p className="text-[#1C1D1F]">
                      Don't have an account?
                      <Link
                        href="/register"
                        className="text-[#1B8DD3] font-medium ml-2"
                      >
                        Register
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
