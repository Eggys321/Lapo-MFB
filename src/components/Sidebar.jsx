import { NavLink } from "react-router-dom";
import navLogo from "../assets/nav-brand.png";
import logoutLogo from "../assets/logout-02.svg";
import cardinfraLogo from "../assets/Vector (21).svg";

const Sidebar = ({ items }) => {
  return (
    <div className="w-64 bg-[#002F6C] shadow-lg py-10 px-2">
      <div className=" pb-10">
        <img src={navLogo} alt="nav logo" className="w-[138.32px]" />
      </div>
      <nav className=" ">
        <ul className="space-y-4 font-[400] text-[12px]">
          {items.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center p-2 rounded-lg  ${
                    isActive
                      ? "bg-[#AEBAC9] text-[#014DAF] text-[12px] font-[500] py-3"
                      : "text-[#D0D5DD]"
                  }`
                }
              >
                <img src={item.icon} alt={item.iconName} className="mr-3" />
                {item.name}
              </NavLink>

              {item.name === "Dashboard" && (
                <li className="font-[500] text-[#7E8B9C] text-[10px] ps-3 pt-4 ">
                  MAIN MENU
                </li>
              )}
            </li>
          ))}
        </ul>
        <div className="mt-30 px-2 ">
          <div className="flex gap-3 py-9">
            <img src={logoutLogo} alt="log out logo" />
            <h2 className="font-[500] text-[12px] text-[#FFFFFF] cursor-pointer ">
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
  );
};

export default Sidebar;
