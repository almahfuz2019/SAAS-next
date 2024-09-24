/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { FaChartPie } from "react-icons/fa"; // Pie chart icon
import { BsCalendar } from "react-icons/bs"; // Calendar icon
import { HiDotsHorizontal } from "react-icons/hi"; // Dots icon
import React, { useState } from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

// Dummy data
const securityData = [
  { name: "Sat", value: 1 },
  { name: "Sun", value: 2 },
  { name: "Mon", value: 3 },
  { name: "Tue", value: 4 },
];

const serviceRequestData = [
  { name: "Sat", value: 1, anotherValue: 2 },
  { name: "Sun", value: 2, anotherValue: 1 },
  { name: "Mon", value: 4, anotherValue: 3 },
];

const fileStorageData = [
  { name: "Used", value: 47.9 },
  { name: "Free", value: 52.1 },
];
const COLORS = ["#1B8DD3", "#105580"];

// Component to display a stat card
const StatCard = ({ icon: Icon, title, count }) => (
  <div className="bg-white p-4 rounded-lg flex flex-col justify-between space-y-4  w-full">
    <div className="2xl:flex space-y-3 w-full space-x-2 justify-start">
      <Icon className="text-blue-600 rounded-full p-2 bg-blue-100 w-20 h-20" />
      <div className="md:flex 2xl:block md:gap-2 2xl:gap-0 items-center">
        <div className="text-base font-medium text-[#676767]">{title}</div>
        <div className="text-3xl 2xl:mt-3 font-bold text-gray-800 md:flex 2xl:block md:items-center">
          <span className="md:block hidden 2xl:hidden">-</span>
          {count}
        </div>
      </div>
    </div>
    <div className="flex justify-between items-center w-full border-t pt-2">
      <div className="flex items-center space-x-1">
        <BsCalendar className="text-gray-500 w-5 h-5" />
        <span className="text-sm text-gray-500">Current Month</span>
      </div>
      <HiDotsHorizontal className="text-gray-500 w-5 h-5 cursor-pointer" />
    </div>
  </div>
);

// Reusable component for a chart section
const ChartSection = ({ title, children }) => (
  <div className="bg-white p-4 rounded w-full">
    <h3 className="text-lg font-semibold mb-4">{title}</h3>
    {children}
    <br />
    <div className="flex justify-between items-center w-full border-t pt-2">
      <div className="flex items-center space-x-1">
        <BsCalendar className="text-gray-500 w-5 h-5" />
        <span className="text-sm text-gray-500">Current Month</span>
      </div>
      <HiDotsHorizontal className="text-gray-500 w-5 h-5 cursor-pointer" />
    </div>
  </div>
);

// Pie chart center label
const renderCustomLabel = ({ cx, cy }) => (
  <text
    x={cx}
    y={cy}
    dy={8}
    textAnchor="middle"
    fill="#333"
    fontSize={24}
    fontWeight="bold"
  >
    47.9%
  </text>
);

const page = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="p-4 bg-gray-100">
      {/* Stat cards */}
      <div className="grid grid-cols-2 gap-2 lg:grid-cols-4 w-full mb-8">
        <StatCard icon={FaChartPie} title="Emails" count="65" />
        <StatCard icon={FaChartPie} title="Service Requests" count="40" />
        <StatCard icon={FaChartPie} title="User Logins" count="120" />
        <StatCard icon={FaChartPie} title="Open Tickets" count="8" />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Security Activity */}
        <ChartSection title="Security Activity">
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={securityData}>
              <CartesianGrid stroke="#f5f5f5" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#FCAA0B" />
            </LineChart>
          </ResponsiveContainer>
        </ChartSection>

        {/* Service Request */}
        <ChartSection title="Service Request">
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={serviceRequestData}>
              <CartesianGrid stroke="#f5f5f5" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#1B8DD3" />
              <Bar dataKey="anotherValue" fill="#FFB400" />
            </BarChart>
          </ResponsiveContainer>
        </ChartSection>

        {/* File Storage */}
        <ChartSection title="File Storage">
          <ResponsiveContainer className="mx-auto" width={200} height={200}>
            <PieChart>
              <Pie
                data={fileStorageData}
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={90}
                fill="#105580"
                dataKey="value"
                startAngle={90}
                endAngle={450}
                label={renderCustomLabel}
              >
                {fileStorageData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="flex justify-between items-center">
            <p className="mt-2 text-lg font-bold">0.48 GB Used</p>
            <p className="text-gray-500">Current Plan: 1 GB</p>
          </div>
        </ChartSection>
      </div>

      {/* Announcements and Events */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8">
        {/* Recent Announcements */}
        <ChartSection title="Recent Announcement">
          <div>
            <p>Lorem ipsum dolor sit</p>
            <p className="text-sm text-gray-500">11:14 AM 10th Sep, 2024</p>
            <p className="text-sm mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <a href="#" className="text-blue-500">
              View Details
            </a>
          </div>
          <div className="mt-4">
            <p>Lorem ipsum dolor sit</p>
            <p className="text-sm text-gray-500">11:14 AM 10th Sep, 2024</p>
          </div>
          <a href="#" className="text-blue-500 mt-2 block">
            See More
          </a>
        </ChartSection>

        {/* Open/Pending Service Request and Calendar */}
        <div className="p-4 rounded w-full">
          <div className="bg-white rounded-lg mb-5 p-4">
            <h3 className="text-xl font-semibold mb-4">
              Open / Pending Service Request
            </h3>
            <p>No recent activity</p>
          </div>

          {/* Calendar */}
          <h3 className="text-xl font-semibold mb-4">Events</h3>
          <Calendar onChange={setDate} value={date} />
        </div>
      </div>
    </div>
  );
};

export default page;
