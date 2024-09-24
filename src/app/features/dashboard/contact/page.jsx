/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { useState } from "react";
import { FaEye, FaTrash } from "react-icons/fa";

const page = () => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const totalPages = 5; // Mock total pages for pagination
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const contactsToDisplay = [
    {
      _id: 1,
      email: "contact1@example.com",
      message: "This is a sample message from contact 1.",
      status: "unread",
    },
    {
      _id: 2,
      email: "contact2@example.com",
      message: "This is a sample message from contact 2.",
      status: "read",
    },
    // Add more mock contacts here if necessary
  ];

  return (
    <div className="container p-4">
      <h1 className="md:text-4xl text-3xl font-medium mb-10">Contacts Info</h1>

      <div className="flex mb-10 items-center">
        <div className="relative w-full lg:w-1/3">
          <input
            type="text"
            placeholder="Search by email"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="p-3 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <button className="ml-4 px-6 py-3 bg-[#648AFF] text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
          Search
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 shadow-lg rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-4 text-left text-base font-semibold text-[#648AFF] uppercase">
                Email
              </th>
              <th className="px-6 py-4 text-left text-base font-semibold text-[#648AFF] uppercase">
                Message
              </th>
              <th className="px-6 py-4 text-left text-base font-semibold text-[#648AFF] uppercase">
                Status
              </th>
              <th className="px-6 py-4 text-left text-base font-semibold text-[#648AFF] uppercase">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {contactsToDisplay.map((contact) => (
              <tr key={contact._id}>
                <td className="px-6 py-4 whitespace-nowrap text-gray-700">
                  {contact.email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-700">
                  {contact.message.length > 30
                    ? contact.message.substring(0, 30) + "..."
                    : contact.message}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-700">
                  <button
                    className={`px-4 inline-flex py-2 leading-5 font-semibold rounded-lg ${
                      contact.status === "read"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {contact.status}
                  </button>
                </td>
                <td className="px-6 py-4 flex space-x-4 items-center">
                  <button className="text-green-500 text-xl rounded-md bg-[#44EF5533] p-2 hover:text-green-700">
                    <FaEye />
                  </button>
                  <button className="text-red-500 text-xl rounded-md bg-[#EF44441A] p-2 hover:text-red-700">
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex flex-col items-center mt-5">
        <div className="flex mb-3">
          <button
            onClick={() => setPage(page - 1)}
            disabled={page <= 1}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg disabled:opacity-50"
          >
            Previous
          </button>
          {pageNumbers.map((number) => (
            <button
              key={number}
              onClick={() => setPage(number)}
              className={`mx-1 px-4 py-2 rounded-lg ${
                page === number ? "bg-[#323232] text-white" : "bg-gray-200"
              }`}
            >
              {number}
            </button>
          ))}
          <button
            onClick={() => setPage(page + 1)}
            disabled={page >= totalPages}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg disabled:opacity-50"
          >
            Next
          </button>
        </div>
        <span className="text-gray-600">{`Page ${page} of ${totalPages}`}</span>
      </div>
    </div>
  );
};

export default page;
