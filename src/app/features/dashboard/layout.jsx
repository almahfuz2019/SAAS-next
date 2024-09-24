import { FaAlignLeft } from "react-icons/fa";
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
        <div className="flex justify-between items-center p-2 border-b border-gray-200">
          {/* Sidebar toggle for mobile */}
          <h1 className="text-3xl hidden lg:block uppercase font-bold my-4 text-white">
            Condo Cloud
          </h1>
          <label htmlFor="my-drawer-2" className="lg:hidden">
            <FaAlignLeft className="lg:text-5xl text-4xl p-1 lg:p-2 bg-white rounded-md rotate-180 cursor-pointer font-normal" />
          </label>

          {/* User dropdown */}
          <div className="relative">
            <div className="dropdown dropdown-end">
              <label tabIndex={0}>
                <div className="avatar border border-primary rounded-full placeholder online cursor-pointer">
                  <div className="bg-primary-focus text-primary rounded-full lg:w-14 w-10 font-semibold">
                    <Image
                      height={100}
                      width={100}
                      src={img}
                      alt="User Photo"
                      className="lg:w-14 lg:h-14 w-10 h-10 object-cover object-top rounded-full border-2 border-white bg-white p-[0.5px]"
                    />
                  </div>
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 border border-primary z-50 border-opacity-30"
              >
                <li className="relative font-medium before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-primary before:transition hover:before:scale-100">
                  <Link href="/features/dashboard" className="text-md">
                    Dashboard
                  </Link>
                </li>
                <li className="relative font-medium before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-primary before:transition hover:before:scale-100">
                  <Link href="/login" className="text-md">
                    Login
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
