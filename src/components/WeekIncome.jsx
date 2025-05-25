import React from 'react'
import {
    BarChart, Bar, LineChart, Line, PieChart, Pie, Cell,
    XAxis, YAxis, Tooltip, ResponsiveContainer, Legend
  } from 'recharts';
  import { incomeData } from '../db';
const WeekIncome = () => {
  return (
    <>
    <div className="bg-white p-4 rounded-lg shadow">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-[500] text-[18px] text-[#121212] ">This Week’s Income</h2>
          <span className="text-gray-400 cursor-pointer">⤢</span>
        </div>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={incomeData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="income"
              stroke="#22C55E"
              strokeWidth={3}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  )
}

export default WeekIncome