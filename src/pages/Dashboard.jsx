import React from "react";
import calenderLogo from "../assets/calender.png";
import hRLogo from "../assets/Vector 15.png";
import QuickAccess from "../components/QuickAccess";
import Analytics from "../components/Analytics";
import MonthlyIssuanceChart from "../components/MonthlyIssuanceChart";
import CardRequest from "../components/CardRequest";
import WeekIncome from "../components/WeekIncome";
import CardStatus from "../components/CardStatus";

const Dashboard = () => {
  return (
    <>
      <main className="p-6 space-y-6">
        <section className="flex flex-wrap justify-between items-center">
          <div>
            <h1 className="font-[700] text-[#121212] text-[18px] leading-[2] ">
              Hi Nazeer, what would you like to do today?
            </h1>
            <p className="text-[#121212] text-[13px] font-[500] py-4 md:py-0 ">
              Last login:{" "}
              <span className="font-[400]">26/11/2024 14:39:58</span>
            </p>
          </div>
          <div className="border-[1px] border-[#D0D5DD] rounded-[4px] flex items-center gap-8 p-2 ">
            <div className="flex items-center gap-2">
              <div>
                <img src={calenderLogo} alt="calender img" />
              </div>
              <h2 className="font-[500] text-[#121212] text-[11px] ">Today</h2>
            </div>
            <div>
              <img src={hRLogo} alt="" className="w-1" />
            </div>
            <h2 className="font-[400] text-[#121212]  text-[11px] ">
              11 Nov 2024
            </h2>
          </div>
        </section>
        <section className="w-full max-w-full overflow-x-auto">
          <QuickAccess />
        </section>
        <section>
          <Analytics />
        </section>
        <section className=" bg-gray-50  grid grid-cols-1 lg:grid-cols-2 gap-6">
          <MonthlyIssuanceChart />
          <CardRequest />
          <WeekIncome />
          <CardStatus />
        </section>
      </main>
    </>
  );
};

export default Dashboard;
