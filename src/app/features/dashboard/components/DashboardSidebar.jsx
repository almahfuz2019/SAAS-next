import { FaBoxOpen, FaUser, FaParking } from "react-icons/fa";
import { LuMessageSquare } from "react-icons/lu";
import { IoLogOut } from "react-icons/io5";
import { GoHomeFill } from "react-icons/go";
import { MdKeyboardArrowDown, MdOutlineSecurity } from "react-icons/md";
import Link from "next/link";

const SidebarItem = ({ href, icon: Icon, label }) => (
  <li className="hover:border-secondary hover:border-l-8 border-0 rounded-r-lg group hover:bg-[#404040] transition-all duration-300 ease-in-out">
    <Link
      href={href}
      className="flex items-center py-3 px-5 space-x-3 rounded-md"
    >
      <Icon className="lg:w-7 lg:h-7 h-5 w-5 text-[#B1B1B1] group-hover:text-seborder-secondary transition-colors duration-300 ease-in-out" />
      <span className="font_Inter font-medium text-base lg:text-lg text-[#B1B1B1] group-hover:text-seborder-secondary transition-colors duration-300 ease-in-out">
        {label}
      </span>
    </Link>
  </li>
);

const DropdownItem = ({ icon: Icon, label, children }) => (
  <li className="group">
    <details className="group">
      <summary className="flex items-center py-3 px-5 space-x-3 cursor-pointer group-hover:text-seborder-secondary transition-colors">
        <Icon className="lg:w-7 lg:h-7 h-5 w-5 text-[#B1B1B1] group-hover:text-seborder-secondary transition-colors" />
        <span className="font_Inter font-medium text-base lg:text-lg flex items-center gap-2 text-[#B1B1B1] group-hover:text-seborder-secondary">
          {label}
          <MdKeyboardArrowDown className="lg:w-7 lg:h-7 h-5 w-5" />
        </span>
      </summary>
      <div className="pl-10">{children}</div>
    </details>
  </li>
);

const DashboardSidebar = () => {
  return (
    <div className="h-full py-3 pr-4 lg:space-y-2  w-90 bg-[#323232] text-gray-100">
      <ul className="pt-2 pb-4 lg:space-y-1 ">
        <SidebarItem
          href="/features/dashboard"
          icon={GoHomeFill}
          label="Home"
        />
        <SidebarItem
          href="/features/dashboard/users"
          icon={FaUser}
          label="Users"
        />

        <DropdownItem icon={MdOutlineSecurity} label="Security-and-conscious">
          <SidebarItem
            href="/features/dashboard/visitors"
            icon={FaParking}
            label="Visitors"
          />
          <SidebarItem
            href="/features/dashboard/parcel"
            icon={FaBoxOpen}
            label="Parcel"
          />
        </DropdownItem>

        <SidebarItem
          href="/features/dashboard/contact"
          icon={LuMessageSquare}
          label="Messages"
        />
      </ul>

      <ul className="border-t-1 border-white lg:space-y-2 text-sm">
        <li className="hover:border-red-700 hover:border-l-8 group hover:bg-[#fbfbfbdc] transition-all duration-300 ease-in-out">
          <button className="flex items-center py-3 px-5 space-x-3 rounded-md">
            <IoLogOut className="lg:w-7 lg:h-7 h-5 w-5 text-[#B1B1B1] group-hover:text-red-700 transition-colors duration-300" />
            <span className="font_Inter font-medium text-base lg:text-lg text-[#B1B1B1] group-hover:text-red-700">
              Sign Out
            </span>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default DashboardSidebar;
