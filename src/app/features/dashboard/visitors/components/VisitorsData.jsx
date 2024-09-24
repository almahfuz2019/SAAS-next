"use client";
import React, { useState } from "react";
import { FaEye } from "react-icons/fa";

export default function VisitorsData() {
  const [search, setSearch] = useState("");

  // Mock Data for Visitors
  const visitorsToDisplay = [
    {
      id: 1,
      visitorName: "John Doe",
      unitNumber: "101",
      visitorType: "Visitor",
      createdAt: "2024-09-18",
    },
    {
      id: 2,
      visitorName: "Jane Smith",
      unitNumber: "202",
      visitorType: "Greg's Plumbing",
      createdAt: "2024-09-19",
    },
    // Add more mock data here
  ];

  const handleSearch = () => {
    // Handle search logic
  };

  const pageNumbers = [1, 2, 3]; // Example pagination
  const totalPages = pageNumbers.length;
  const [page, setPage] = useState(1); // Page state

  return (
    <div className="bg-white rounded-lg shadow container p-4 mt-16">
      <h1 className="md:text-4xl text-3xl font-medium mb-5">
        Visitors Information
      </h1>

      {/* Search Bar */}
      <div className="flex mb-10 items-center">
        <div className="relative w-full lg:w-1/3">
          <input
            type="text"
            placeholder="Search by name or email"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="p-3 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <button
          onClick={handleSearch}
          className="ml-4 px-6 py-3 bg-[#648AFF] text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Search
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 shadow-lg rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6  py-4 text-left text-base font-semibold text-[#648AFF] uppercase">
                Visitor Name
              </th>
              <th className="px-6 py-4 text-left text-base font-semibold text-[#648AFF] uppercase">
                Unit Number
              </th>
              <th className="px-6 py-4 text-left text-base font-semibold text-[#648AFF] uppercase">
                Visitor Type
              </th>
              <th className="px-6 py-4 text-left text-base font-semibold text-[#648AFF] uppercase">
                Created At
              </th>
              <th className="px-6 py-4 text-left text-base font-semibold text-[#648AFF] uppercase">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {visitorsToDisplay.map((visitor) => (
              <tr key={visitor.id}>
                <td className="px-6 py-4 whitespace-nowrap text-gray-700">
                  {visitor.visitorName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-700">
                  {visitor.unitNumber}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-700">
                  {visitor.visitorType}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-700">
                  {visitor.createdAt}
                </td>
                <td className="px-6 py-4 flex space-x-4 items-center">
                  <button className="text-green-500 text-xl rounded-md bg-[#44EF5533] p-2 hover:text-green-700">
                    <FaEye />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
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
                page === number ? "bg-blue-500 text-white" : "bg-gray-200"
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
}
