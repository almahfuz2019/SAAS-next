import React from "react";
import Breadcrumb from "./Components/BreadcrumbSection";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <Breadcrumb />
      <div className="bg-[#F5F8FF] py-20">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className=" mb-12">
            <h1 className="text-[32px] lg:text-[40px] leading-tight font-medium text-accent">
              Learn how our powerful but simple{" "}
              <span className="text-primary">All In One</span> condo Management
              Tool Can Help You to streamline property operations and save your
              valuable time
            </h1>
            <p className="text-[#676767] text-lg sm:text-xl mt-6">
              Talk to our sales team member. Provide your information and a
              member of our sales team will contact you to gather details about
              your property needs.
            </p>
          </div>

          <div className="flex justify-center items-center mt-12">
            <div className="bg-white p-6 sm:p-12 rounded-md shadow-lg w-full ">
              <form>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="mb-6">
                    <label
                      className="block text-[#1C1D1F] text-lg mb-2"
                      htmlFor="first-name"
                    >
                      First Name
                    </label>
                    <input
                      className="w-full px-3 py-3 text-[#A5AAAB] rounded-md focus:outline-none focus:shadow-outline bg-[#F5F5F5]"
                      id="first-name"
                      type="text"
                      placeholder="Enter your first name"
                      aria-label="First Name"
                    />
                  </div>

                  <div className="mb-6">
                    <label
                      className="block text-[#1C1D1F] text-lg mb-2"
                      htmlFor="last-name"
                    >
                      Last Name
                    </label>
                    <input
                      className="w-full px-3 py-3 text-[#A5AAAB] rounded-md focus:outline-none focus:shadow-outline bg-[#F5F5F5]"
                      id="last-name"
                      type="text"
                      placeholder="Enter your last name"
                      aria-label="Last Name"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label
                    className="block text-[#1C1D1F] text-lg mb-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="w-full px-3 py-3 text-[#A5AAAB] rounded-md focus:outline-none focus:shadow-outline bg-[#F5F5F5]"
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    aria-label="Email"
                  />
                </div>

                <div className="mb-6">
                  <label
                    className="block text-[#1C1D1F] text-lg mb-2"
                    htmlFor="phone"
                  >
                    Phone
                  </label>
                  <input
                    className="w-full px-3 py-3 text-[#A5AAAB] rounded-md focus:outline-none focus:shadow-outline bg-[#F5F5F5]"
                    id="phone"
                    type="text"
                    placeholder="Enter your phone number"
                    aria-label="Phone"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      className="block text-[#1C1D1F] text-lg mb-2"
                      htmlFor="role"
                    >
                      I am a
                    </label>
                    <select
                      className="w-full px-3 py-3 text-[#A5AAAB] rounded-md focus:outline-none focus:shadow-outline bg-[#F5F5F5]"
                      id="role"
                      aria-label="I am a"
                    >
                      <option value="property-owner">Property Owner</option>
                      <option value="property-manager">Property Manager</option>
                      <option value="tenant">Tenant</option>
                    </select>
                  </div>
                  <div>
                    <label
                      className="block text-[#1C1D1F] text-lg mb-2"
                      htmlFor="units"
                    >
                      Number of units
                    </label>
                    <select
                      className="w-full px-3 py-3 text-[#A5AAAB] rounded-md focus:outline-none focus:shadow-outline bg-[#F5F5F5]"
                      id="units"
                      aria-label="Number of units"
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label
                    className="block text-[#1C1D1F] text-lg mb-2"
                    htmlFor="details"
                  >
                    Additional questions or details
                  </label>
                  <textarea
                    className="w-full px-3 py-3 text-[#A5AAAB] rounded-md focus:outline-none focus:shadow-outline bg-[#F5F5F5]"
                    id="details"
                    placeholder="Write here..."
                    rows="4"
                    aria-label="Additional questions or details"
                  ></textarea>
                </div>

                <div className="mb-6">
                  <button
                    className=" bg-primary hover:bg-indigo-700 text-white font-medium py-3 px-4 rounded-md focus:outline-none focus:shadow-outline"
                    type="submit"
                    aria-label="Submit form"
                  >
                    Submit
                  </button>
                </div>
              </form>

              <p className="text-lg text-accent">
                Confidential and Secure{" "}
                <Link href="#" className="text-[#1B8DD3] font-medium">
                  Privacy Policy
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
