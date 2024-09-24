/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import VisitorsData from "./components/VisitorsData";

export default function VisitorForm() {
  const [createdAt, setCreatedAt] = useState(null);
  const [requiresParking, setRequiresParking] = useState(false);
  const [customVehicleMake, setCustomVehicleMake] = useState("");
  const [customVehicleColor, setCustomVehicleColor] = useState("");

  const handleRequiresParkingChange = (e) => {
    setRequiresParking(e.target.checked);
  };

  return (
    <>
      <div className="bg-white rounded-lg shadow container p-4">
        <h2 className="md:text-4xl text-3xl font-medium mb-10">
          Add New Visitor
        </h2>

        <form className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Visitor Name */}
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Visitor Name
              </label>
              <input
                type="text"
                className="block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 focus:outline-none focus:bg-white focus:border-gray-500"
                placeholder="Enter visitor name"
              />
            </div>

            {/* Created At (Date Picker) */}
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Created At
              </label>
              <DatePicker
                selected={createdAt}
                onChange={(date) => setCreatedAt(date)}
                dateFormat="yyyy-MM-dd"
                className="block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 focus:outline-none focus:bg-white focus:border-gray-500"
                placeholderText="Select created date"
              />
            </div>

            {/* Visitor Type */}
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Visitor Type
              </label>
              <select className="block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 focus:outline-none focus:bg-white focus:border-gray-500">
                <option value="Visitor">Visitor</option>
                <option value="Greg's Plumbing">Greg's Plumbing</option>
                <option value="Building">Building</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Unit Number */}
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Unit Number
              </label>
              <input
                type="text"
                className="block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 focus:outline-none focus:bg-white focus:border-gray-500"
                placeholder="Enter unit number"
              />
            </div>

            {/* Requires Parking */}
            <div className="col-span-2 flex gap-2 items-center">
              <label className="block text-gray-700 text-sm font-bold ">
                Requires Parking?
              </label>
              <input
                type="checkbox"
                className="mr-2"
                checked={requiresParking}
                onChange={handleRequiresParkingChange}
              />
            </div>

            {/* Parking Details (Visible only if Requires Parking is checked) */}
            {requiresParking && (
              <>
                {/* Vehicle Make */}
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Vehicle Make
                  </label>
                  <input
                    type="text"
                    className="block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 focus:outline-none focus:bg-white focus:border-gray-500"
                    placeholder="Enter vehicle make"
                    value={customVehicleMake}
                    onChange={(e) => setCustomVehicleMake(e.target.value)}
                  />
                </div>

                {/* Vehicle Color */}
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Vehicle Color
                  </label>
                  <input
                    type="text"
                    className="block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 focus:outline-none focus:bg-white focus:border-gray-500"
                    placeholder="Enter vehicle color"
                    value={customVehicleColor}
                    onChange={(e) => setCustomVehicleColor(e.target.value)}
                  />
                </div>
              </>
            )}
          </div>
          <div className="col-span-2 text-right">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded"
            >
              Add Visitor
            </button>
          </div>
        </form>
      </div>
      <VisitorsData />
    </>
  );
}
