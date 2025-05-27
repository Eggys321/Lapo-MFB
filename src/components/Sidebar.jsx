import { NavLink } from "react-router-dom";
import navLogo from "../assets/nav-brand.png";
import logoutLogo from "../assets/logout-02.svg";
import cardinfraLogo from "../assets/Vector (21).svg";
import { useState } from "react";

const Sidebar = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      <button
        className="md:hidden absolute top-10 left-[-8px] z-50 text-white  p-2 rounded"
        onClick={toggleSidebar}
        style={{ color: "black" }}
      >
        <span class="material-symbols-outlined">more_vert</span>{" "}
      </button>

      <div
        className={`absolute md:static top-0 left-0 h-full w-64 bg-[#002F6C] shadow-lg py-10 px-2 transform transition-transform duration-300 z-40
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0 md:block`}
      >
        <div className="pb-10">
          <img src={navLogo} alt="nav logo" className="w-[138.32px]" />
        </div>

        <nav>
          <ul className="space-y-4 font-[400] text-[12px]">
            {items.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center p-2 rounded-lg ${
                      isActive
                        ? "bg-[#AEBAC9] text-[#014DAF] font-[500] py-3"
                        : "text-[#D0D5DD]"
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  <img src={item.icon} alt={item.iconName} className="mr-3" />
                  {item.name}
                </NavLink>

                {item.name === "Dashboard" && (
                  <li className="font-[500] text-[#7E8B9C] text-[10px] ps-3 pt-4">
                    MAIN MENU
                  </li>
                )}
              </li>
            ))}
          </ul>

          <div className="mt-30 px-2">
            <div className="flex gap-3 py-9">
              <img src={logoutLogo} alt="log out logo" />
              <h2 className="font-[500] text-[12px] text-white cursor-pointer">
                Logout
              </h2>
            </div>
            <p className="py-4 font-[500] text-[10px] text-[#7E8B9C]">
              POWERED BY
            </p>
            <img src={cardinfraLogo} alt="logo" />
          </div>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
