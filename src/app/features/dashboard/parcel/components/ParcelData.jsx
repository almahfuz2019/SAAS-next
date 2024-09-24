"use client";
import { useState } from "react";
import { FaTrash, FaEye, FaPencilAlt } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";

const UsersPage = () => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const totalPages = 5; // Mock total pages for pagination
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const usersToDisplay = [
    {
      _id: 1,
      name: "John Doe",
      email: "johndoe@example.com",
      role: "User",
      status: "Active",
    },
    {
      _id: 2,
      name: "Jane Smith",
      email: "janesmith@example.com",
      role: "Admin",
      status: "Disabled",
    },
    // Add more mock users here if necessary
  ];

  return (
    <div className="container mt-10 p-4 overflow-hidden">
      <h1 className="md:text-4xl text-3xl font-medium mb-5">
        Parcel Information
      </h1>

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
          onClick={() => {}}
          className="ml-4 px-6 py-3 bg-[#648AFF] text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Search
        </button>
      </div>

      {/* Horizontal scroll applied to the table */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 shadow-lg rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-4 text-left text-base font-semibold text-[#648AFF] uppercase">
                Name
              </th>
              <th className="px-6 py-4 text-left text-base font-semibold text-[#648AFF] uppercase">
                Email
              </th>
              <th className="px-6 py-4 text-left text-base font-semibold text-[#648AFF] uppercase">
                Role
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
            {usersToDisplay.map((user) => (
              <tr key={user._id}>
                <td className="px-6 py-4 whitespace-nowrap text-gray-700">
                  {user.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-700">
                  {user.email}
                </td>
                <td className="px-6 py-4">
                  <select
                    value={user.role}
                    onChange={() => {}}
                    className="p-2 border border-gray-300"
                  >
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                    <option value="manager">Manager</option>
                    <option value="security">Security</option>
                  </select>
                </td>
                <td className="px-6 py-4">
                  <select
                    value={user.status}
                    onChange={() => {}}
                    className="p-2 border border-gray-300"
                  >
                    <option value="active">Active</option>
                    <option value="disabled">Disabled</option>
                  </select>
                </td>
                <td className="px-6 py-4 flex space-x-4 items-center">
                  <button className="text-green-500 text-xl rounded-md bg-[#44EF5533] p-2 hover:text-green-700">
                    <FaEye />
                  </button>
                  <button className="text-blue-500 text-xl rounded-md bg-[#648AFF33] p-2 hover:text-blue-700">
                    <FaPencilAlt />
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
};

export default UsersPage;
