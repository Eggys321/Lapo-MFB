import React from 'react';
import { cardRequests } from '../db';
import {
    BarChart, Bar, LineChart, Line, PieChart, Pie, Cell,
    XAxis, YAxis, Tooltip, ResponsiveContainer, Legend
  } from 'recharts';
const CardRequest = () => {
  return (
    <>
     <div className="bg-white p-4 rounded-lg shadow">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-semibold text-lg">Recent Card Requests</h2>
          <span className="text-gray-400 cursor-pointer">⤢</span>
        </div>
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-gray-500">
              <th className="pb-2">Branch</th>
              <th>Card Type</th>
              <th>Quantity</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cardRequests.map((req, i) => (
              <tr key={i} className="border-t">
                <td className="py-2">{req.branch}</td>
                <td>{req.type}</td>
                <td>{req.qty}</td>
                <td>
                  <span className={`text-xs px-2 py-1 rounded-full ${req.color}`}>
                    {req.status}
                  </span>
                </td>
                <td>
                  <a href="#" className="text-blue-600 hover:underline text-sm">View</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </>
  )
}

export default CardRequest