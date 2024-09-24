import { FaAlignLeft, FaChevronDown } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import DashboardSidebar from "./components/DashboardSidebar";

const DashboardLayout = ({ children }) => {
  const img =
    "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  return (
    <div className="relative">
      {/* Top Navbar */}
      <div className="fixed top-0 left-0 right-0 z-20 w-full bg-[#323232] shadow-md">
        <div className="flex justify-between items-center p-3 lg:p-1 border-b border-gray-200">
          {/* Sidebar toggle for mobile */}
          <Link
            href="/"
            className="text-3xl hidden lg:block uppercase font-bold my-4 text-white"
          >
            Condo Cloud
          </Link>
          <label htmlFor="my-drawer-2" className="lg:hidden">
            <FaAlignLeft className="lg:text-5xl text-4xl p-1 lg:p-2 bg-white rounded-md rotate-180 cursor-pointer font-normal" />
          </label>

          {/* User dropdown */}
          <div className="relative flex items-center">
            <div className="dropdown dropdown-end">
              <label
                tabIndex={0}
                className="cursor-pointer flex items-center space-x-3"
              >
                {/* User Avatar */}
                <div className="avatar">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border-2 border-green-500">
                    <Image
                      src={img}
                      alt="User Avatar"
                      height={48}
                      width={48}
                      className="rounded-full object-cover object-top"
                    />
                  </div>
                </div>

                {/* User Info */}
                <div className="hidden lg:flex flex-col items-start">
                  <span className="text-white font-semibold">John Doe</span>
                  <span className="text-gray-400 text-sm">Admin</span>
                </div>

                {/* Dropdown Arrow */}
                <FaChevronDown className="text-gray-400" />
              </label>

              {/* Dropdown Menu */}
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52 border border-gray-300"
              >
                <li>
                  <Link
                    className="text-sm text-gray-700 hover:text-blue-500"
                    href="/features/dashboard"
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm text-gray-700 hover:text-blue-500"
                    href="/login"
                  >
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar and Drawer */}
      <div className="drawer lg:drawer-open bg-white pt-20">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Where your main page components will be rendered */}
          {children}
        </div>
        <div className="drawer-side mt-16 lg:mt-0">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <DashboardSidebar /> {/* Sidebar component rendered here */}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
