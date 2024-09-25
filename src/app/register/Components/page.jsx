/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";
import Breadcrumb from "./Components/BreadcrumbSection";

export default function page() {
  return (
    <>
    <Breadcrumb/>
    <div className="bg-[#F5F8FF] py-20 lg:py-20">
      <div className="max-w-screen-xl mx-auto ">
        <div className="grid grid-cols-2 gap-20 ">
          <div>
            <h1 className=" text-[40px] leading-[50px] font-medium">
              Manage your property from any place, with any device by{" "}
              <span className="text-primary">Condo Cloud</span>
            </h1>{" "}
            <Image
              className=""
              src="/images/loginPage/image.png"
              height={602}
              width={602}
              alt="image"
              />
          </div>
          <div class="flex items-center justify-center ">
            <div class="bg-white p-12 rounded-md shadow-lg w-full max-w-md">
              <form>
                <div class="mb-4">
                  <label
                    class="block text-[#1C1D1F] text-xl mb-2"
                    for="username"
                  >
                    User Name
                  </label>
                  <input
                    class="w-full px-3 py-3 text-[#A5AAAB] rounded-md focus:outline-none focus:shadow-outline bg-[#F5F5F5]"
                    id="username"
                    type="text"
                    placeholder="Enter your user name"
                    />
                </div>

                <div class="mb-6">
                  <label
                    class="block text-[#1C1D1F] text-xl mb-2"
                    for="password"
                    >
                    Password
                  </label>
                  <input
                    class="w-full px-3 py-3 text-[#A5AAAB] rounded-md focus:outline-none focus:shadow-outline bg-[#F5F5F5]"
                    id="password"
                    type="password"
                    placeholder="**********"
                    />
                </div>

                <div class="mb-4">
                  <label class="flex items-center">
                    <input
                      type="checkbox"
                      class="form-checkbox text-indigo-600"
                      />
                    <span class="ml-2 text-gray-700">
                      I agree to terms & conditions
                    </span>
                  </label>
                </div>

                <div class="mb-6">
                  <button
                    class="w-full bg-primary hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-md focus:outline-none focus:shadow-outline"
                    type="button"
                    >
                    Log In
                  </button>
                </div>

                <div class="flex items-center justify-center mb-4">
                  <span class="text-gray-500">or</span>
                </div>
                <div class="mb-6">
                  <button
                    class="w-full bg-[#F5F5F5] hover:bg-indigo-700  font-bold py-3 px-4 rounded-md focus:outline-none focus:shadow-outline  flex items-center gap-4 justify-center"
                    type="button"
                    >
                    <Image
                      className=""
                      src="/images/loginPage/googleIcon.png"
                      height={20}
                      width={20}
                      alt="image"
                      />{" "}
                    Log in with Google
                  </button>
                </div>
                <div class="text-center">
                  <p class="text[#1C1D1F]">
                    Don't have an account?
                    <a href="#" class="text-[#1B8DD3] font-bold ml-2 ">
                      Register
                    </a>
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
