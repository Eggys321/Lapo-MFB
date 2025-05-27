import React from "react";
import { cardRequests } from "../db";

const CardRequest = () => {
  return (
    <>
     <div className="bg-white p-4 rounded-lg shadow overflow-x-auto "  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
  <div className="flex justify-between items-center mb-4 min-w-[600px] md:min-w-0">
    <h1 className="font-[500] text-[#121212] text-[18px] ">
      Recent Card Requests
    </h1>
    <span className="text-gray-400 cursor-pointer">⤢</span>
  </div>
  <table className="min-w-[600px] w-full border-collapse">
    <thead>
      <tr className="font-[500] text-[#0000008F] text-[12px] bg-[#F1F7FF] h-[34px]">
        <th className="text-left px-4 py-2">Branch</th>
        <th className="text-left px-4 py-2">Card Type</th>
        <th className="text-left px-4 py-2">Quantity</th>
        <th className="text-left px-4 py-2">Status</th>
        <th className="text-left px-4 py-2">Action</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-gray-200">
      {cardRequests.map((req, i) => (
        <tr key={i} className="h-[52px]">
          <td className="px-4 py-2 text-[10px] font-[400] text-[#475467]">{req.branch}</td>
          <td className="px-4 py-2 text-[10px] font-[400] text-[#475467]">{req.type}</td>
          <td className="px-4 py-2 text-[10px] font-[400] text-[#475467]">{req.qty}</td>
          <td className="px-4 py-2">
            <span className={`text-xs px-2 py-1 rounded-full ${req.color}`}>
              {req.status}
            </span>
          </td>
          <td className="px-4 py-2">
            <a
              href="#"
              className="text-[#014DAF] font-[700] hover:underline text-[10px]"
            >
              View
            </a>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

    </>
  );
};

export default CardRequest;
