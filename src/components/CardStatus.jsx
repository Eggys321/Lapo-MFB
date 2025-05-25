import React from 'react';
import {
  PieChart, Pie, Cell,
  ResponsiveContainer
} from 'recharts';
import { pieData } from '../db';

const CardStatus = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow w-full">
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-[500] text-[#121212] text-[18px] ">Card Status Distribution</h2>
        <span className="text-gray-400 cursor-pointer text-xl">⤢</span>
      </div>
      
      <div className="flex flex-col items-center">
        <div className="relative w-full" style={{ height: '250px' }}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart margin={{ top: 0, right: 20, bottom: 0, left: 20 }}>
              <Pie
                data={pieData}
                dataKey="value"
                innerRadius={70}  
                outerRadius={78}  
                paddingAngle={2}
                cy="55%"     
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          
          <div className="absolute inset-0 flex flex-col items-center justify-center pt-8">
            <div className="text-[12px] font-[500] text-[#808080] ">Total Cards</div>
            <div className="text-[24px]  text-[#121212] font-[500] ">2,450</div>
          </div>
        </div>
        
        <div className="w-full  mt-6 flex justify-center gap-4">
          {pieData.map((item, i) => (
            <div key={i} className="flex items-center">
              <span 
                className="w-3 h-3 rounded-full mr-2" 
                style={{ backgroundColor: item.color }}
              ></span>
              <span className="text-[12px] text-[#808080] font-[400] ">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CardStatus;