import React from "react";
import dashboardLogo from "../assets/dashboard-logo.png";
import notificationLogo from "../assets/Actions.svg";
import avatarLogo from "../assets/Avatar.svg";
import searchLogo from "../assets/search-logo.svg";

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between px-6 py-3 items-center border-b-1 border-b-[#DEDEDF] ">
        <div className="flex items-center gap-3">
          <img src={dashboardLogo} alt="home logo"  />
          <h2 className="font-[500] text-[#001735] text-[13px] ">Dashboard</h2>
        </div>
        <div className="flex items-center gap-3">
          <form className="relative">
            <input type="search" name="Search" id=""  className="border-1 border-[#D0D5DD] rounded-[97px] outline-none w-[214px] h-[32px] ps-8 " placeholder="Search"/>
            <img className="absolute left-3 top-2.5 " src={searchLogo} alt="search logo" />
          </form>
          <img src={notificationLogo} alt="notication logo" />
          <img src={avatarLogo} alt="avatar logo" />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
