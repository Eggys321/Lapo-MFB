import React from 'react';
import {
    BarChart, Bar, LineChart, Line, PieChart, Pie, Cell,
    XAxis, YAxis, Tooltip, ResponsiveContainer, Legend
  } from 'recharts';

  import { pieData } from '../db';

const CardStatus = () => {
  return (
    <>
      <div className="bg-white p-4 rounded-lg shadow flex flex-col items-center justify-center">
        <div className="flex justify-between w-full mb-4">
          <h2 className="font-semibold text-lg">Card Status Distribution</h2>
          <span className="text-gray-400 cursor-pointer">⤢</span>
        </div>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={pieData}
              dataKey="value"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={3}
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="text-center mt-[-100px]">
          <div className="text-2xl font-semibold">2,450</div>
          <div className="text-sm text-gray-500">Total Cards</div>
        </div>
        <div className="mt-4 flex flex-wrap justify-center gap-2 text-sm">
          {pieData.map((item, i) => (
            <div key={i} className="flex items-center gap-1">
              <span className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></span>
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default CardStatus