/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";
import Breadcrumb from "./Components/BreadcrumbSection";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <Breadcrumb />
      <div className="bg-[#F5F8FF] py-20 lg:py-20">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start">
            <div>
              <h1 className="text-[32px] sm:text-[40px] leading-[40px] sm:leading-[50px] font-medium">
                Create new account, <br />
                <span className="text-primary">Register now</span>
              </h1>
              <p className="text-[#676767] text-base sm:text-lg mt-6 sm:mt-10">
                <span className="font-medium text-accent">
                  1. Sign Up <br />
                </span>
                Enter your basic details and choose a subscription plan that
                fits your condo’s needs. <br /> <br />
                <span className="font-medium text-accent">
                  2. Set Up Your Property <br />
                </span>
                Add your condo units, residents, and management team in just a
                few clicks. <br /> <br />
                <span className="font-medium text-accent">
                  3. Start Managing <br />
                </span>
                Access your dashboard, communicate with residents, and
                streamline your condo operations instantly.
              </p>
              <Image
                src="/images/registerPage/image.png"
                height={602}
                width={602}
                alt="Property Management"
              />
            </div>
            <div className="flex items-center justify-center">
              <div className="bg-white p-8 sm:p-12 rounded-md shadow-lg w-full max-w-lg">
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
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-[#1C1D1F] text-lg sm:text-xl mb-2"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      className="w-full px-4 py-3 text-[#A5AAAB] rounded-md focus:outline-none focus:shadow-outline bg-[#F5F5F5]"
                      id="email"
                      type="email"
                      placeholder="Enter your email"
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
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      className="block text-[#1C1D1F] text-lg sm:text-xl mb-2"
                      htmlFor="confirm-password"
                    >
                      Confirm Password
                    </label>
                    <input
                      className="w-full px-4 py-3 text-[#A5AAAB] rounded-md focus:outline-none focus:shadow-outline bg-[#F5F5F5]"
                      id="confirm-password"
                      type="password"
                      placeholder="**********"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox text-indigo-600"
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
                      Register
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
                        src="/images/loginPage/googleIcon.png"
                        height={20}
                        width={20}
                        alt="Google login"
                      />
                      Register with Google
                    </button>
                  </div>

                  <div className="text-center">
                    <p className="text-[#1C1D1F]">
                      Already have an account?
                      <Link
                        href="/login"
                        className="text-[#1B8DD3] font-medium ml-2"
                      >
                        Log In
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
