import React from "react";
import dashboardLogo from "../assets/dashboard-logo.png";
import notificationLogo from "../assets/Actions.svg";
import avatarLogo from "../assets/Avatar.svg";
import searchLogo from "../assets/search-logo.svg";
import { ROUTES } from "../routes/Routes";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const getPath = ROUTES.find((route) => route.path === location.pathname);

  const formatTitle = (path) => {
    if (path === "/") return "DashBoard";
    const noSlash = path.replace("/", "");
    return noSlash.charAt(0).toUpperCase() + noSlash.slice(1);
  };

  return (
    <nav className="flex flex-wrap justify-between px-6 py-3 items-center border-b-1 border-b-[#DEDEDF] ">
      <div className="flex items-center gap-3 pb-2 md:pb-0">
        <img src={dashboardLogo} alt="home logo" />
        <h2 className="font-[500] text-[#001735] text-[13px] ">
          {getPath ? formatTitle(getPath.path) : ""}
        </h2>
      </div>
      <div className="flex items-center justify-between gap-18  md:gap-6">
        <form className="relative">
          <input
            type="search"
            name="Search"
            className="border-1 border-[#D0D5DD] rounded-[97px] outline-none w-[214px] h-[32px] ps-8"
            placeholder="Search"
          />
          <img
            className="absolute left-3 top-2.5"
            src={searchLogo}
            alt="search logo"
          />
        </form>
       <div className="flex">

        <img src={notificationLogo} alt="notication logo" />
        <img src={avatarLogo} alt="avatar logo" />
       </div>
      </div>
    </nav>
  );
};

export default Navbar;
