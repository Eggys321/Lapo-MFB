import React from "react";
import longHr from "../assets/long-hr.svg";
import { analyticsData } from "../db";

const Analytics = () => {
  return (
    <>
      <main>
        <section className="flex items-center pb-3 ">
          <h1 className="font-[700] text-[#000000] text-[18px] ">Analytics</h1>
          <div className="w-full">
            <img src={longHr} alt="" className="w-full" />
          </div>
        </section>
        <section className=" flex flex-wrap justify-between gap-2">
          {analyticsData.map((datum) => {
            const { id, img, title, amt, progress, duration } = datum;
            return (
              <div key={id} className="border-1 border-[#E2E2E2] rounded-[10px] w-full md:w-[290px] h-[110px] px-3 pt-3 pb-2">
                <img src={img} alt={title} />
               
                <h2 className="font-[500] text-[#0000008F] text-[14px] pt-2 pb-3 ">{title} </h2>
                <div className="flex justify-between">
                  <h1 className="font-[700] text-[24px] text-[#121212] ">{amt} </h1>
                  <div className="flex items-center gap-2 ">
                   
                    <img src={progress} alt={title} />
                    <h3 className={`font-[400] ${duration === "Requires attention" ?  "text-[#E78020]" :"text-[#0000008F]" }  text-[12px]`} > {duration} </h3>
                  </div>
                </div>
              </div>
            );
          })}
        </section>
      </main>
    </>
  );
};

export default Analytics;
