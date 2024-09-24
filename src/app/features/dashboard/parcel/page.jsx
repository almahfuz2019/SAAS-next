"use client";
import React from "react";
import ParecelData from "./components/ParcelData";

export default function ParcelForm() {
  // Sample data for dropdowns
  const couriers = [
    "Amazon",
    "Canada Post",
    "Canpar",
    "DHL",
    "FedEx",
    "UPS",
    "USPS",
  ];
  const storageSpots = ["Spot#1", "Spot#2", "Spot#3"];

  return (
    <>
      <div className="bg-white rounded-lg shadow container p-4">
        <form className="space-y-6">
          <h1 className="md:text-4xl text-3xl font-medium mb-10">
            Add New Parcel
          </h1>
          <div className="grid grid-cols-2 gap-6">
            {/* Recipient Name */}
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Recipient Name:
              </label>
              <input
                type="text"
                className="block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              />
            </div>

            {/* Recipient Unit */}
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Recipient Unit:
              </label>
              <input
                type="text"
                className="block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              />
            </div>

            {/* Courier / Delivered by */}
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Select Courier / Delivered by:
              </label>
              <select className="block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                {couriers.map((courier) => (
                  <option key={courier} value={courier}>
                    {courier}
                  </option>
                ))}
              </select>
            </div>

            {/* Tracking Number */}
            <div className="col-span-2">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Tracking Number (optional):
              </label>
              <input
                type="text"
                className="block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              />
            </div>

            {/* Package Details */}
            <div className="col-span-2">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Package Details:
              </label>
              <textarea className="block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"></textarea>
            </div>

            {/* Is Perishable */}
            <div className="col-span-2">
              <label className="flex items-center mb-2">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-gray-600 mr-2"
                />
                Check here if package is perishable
              </label>
            </div>

            {/* Storage Spot */}
            <div className="col-span-2">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Storage Spot (optional):
              </label>
              <select className="block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                {storageSpots.map((spot) => (
                  <option key={spot} value={spot}>
                    {spot}
                  </option>
                ))}
              </select>
            </div>

            {/* Submit Button */}
            <div className="col-span-2 text-right">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
      <ParecelData />
    </>
  );
}
