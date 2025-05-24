import React from "react";
import MonthlyIssuanceBar from "../components/MonthlyIssuanceBar";
import CardStatusPie from "../components/CardStatusPie";
import WeeklyIncomeLine from "../components/WeeklyIncomeLine";
import calenderLogo from "../assets/calender.png";

const Dashboard = () => {
  return (
    <>
      <main className="p-6 space-y-6">
        <section className="flex justify-between items-center">
          <div>
            <h1 className="font-[700] text-[#121212] text-[18px] leading-[2] ">
              Hi Nazeer, what would you like to do today?
            </h1>
            <p className="text-[#121212] text-[13px] font-[500] ">
              Last login:{" "}
              <span className="font-[400]">26/11/2024 14:39:58</span>
            </p>
          </div>
          <div className="border-[1px] border-[#D0D5DD] rounded-[4px] flex items-center gap-8 p-2 ">
            <div className="flex items-center">
              <div>
                <img src={calenderLogo} alt="calender img" />
              </div>
              <h2>Today</h2>
            </div>
            <h2 className="font-[400] text-[#121212]  text-[11px] ">
              11 Nov 2024
            </h2>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">{/* <MonthlyIssuanceBar /> */}</div>
          <div>{/* <CardStatusPie /> */}</div>
        </div>

        <div className="grid grid-cols-1">{/* <WeeklyIncomeLine /> */}</div>
      </main>
    </>
  );
};

export default Dashboard;

// import React from 'react';
// import { Search, Bell, User } from 'lucide-react';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   LineElement,
//   PointElement,
//   ArcElement,
//   Tooltip,
//   Legend
// } from 'chart.js';
// import { Bar, Line, Doughnut } from 'react-chartjs-2';

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   LineElement,
//   PointElement,
//   ArcElement,
//   Tooltip,
//   Legend
// );

// const Dashboard = () => {
//   const barData = {
//     labels: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
//     datasets: [
//       {
//         label: 'Instant',
//         backgroundColor: '#60a5fa',
//         data: [30, 40, 20, 50, 45, 80, 70],
//       },
//       {
//         label: 'Personalized',
//         backgroundColor: '#1d4ed8',
//         data: [20, 30, 10, 20, 25, 50, 60],
//       },
//     ],
//   };

//   const lineData = {
//     labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
//     datasets: [
//       {
//         label: "Income",
//         data: [50, 40, 60, 55, 65, 30, 85],
//         fill: false,
//         borderColor: '#22c55e',
//         tension: 0.4
//       }
//     ]
//   };

//   const doughnutData = {
//     labels: ['Active', 'Expired', 'Inactive', 'Blocked', 'Lost'],
//     datasets: [
//       {
//         label: 'Card Status',
//         data: [1200, 500, 400, 200, 150],
//         backgroundColor: ['#22c55e', '#f97316', '#94a3b8', '#e11d48', '#6366f1']
//       }
//     ]
//   };

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen text-gray-800 font-sans">
//       <div className="flex justify-between items-start mb-8">
//         <div>
//           <h2 className="text-2xl font-bold">Hi Nazeer, what would you like to do today?</h2>
//           <p className="text-sm text-gray-500 mt-1">Last login: 26/11/2024 14:39:58</p>
//         </div>
//         <div className="flex items-center space-x-4">
//           <span className="text-sm text-gray-600">Today | 11 Nov 2024</span>
//           <Search className="w-5 h-5 text-gray-600" />
//           <Bell className="w-5 h-5 text-gray-600" />
//           <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
//             <User className="w-5 h-5 text-white" />
//           </div>
//         </div>
//       </div>

//       <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
//         <button className="bg-white shadow-sm rounded-md py-2 text-sm font-medium hover:bg-gray-50">Manage a Card</button>
//         <button className="bg-white shadow-sm rounded-md py-2 text-sm font-medium hover:bg-gray-50">Issue Instant Card</button>
//         <button className="bg-white shadow-sm rounded-md py-2 text-sm font-medium hover:bg-gray-50">Issue Personalized Card</button>
//         <button className="bg-white shadow-sm rounded-md py-2 text-sm font-medium hover:bg-gray-50">Review Card Requests</button>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
//         <div className="bg-white rounded-lg shadow p-4">
//           <p className="text-gray-500 text-sm mb-1">Total Active Cards</p>
//           <h3 className="text-2xl font-bold">26,478 <span className="text-green-500 text-sm">+9%</span></h3>
//         </div>
//         <div className="bg-white rounded-lg shadow p-4">
//           <p className="text-gray-500 text-sm mb-1">Total Personalized Cards</p>
//           <h3 className="text-2xl font-bold">15,703 <span className="text-green-500 text-sm">+8.5%</span></h3>
//         </div>
//         <div className="bg-white rounded-lg shadow p-4">
//           <p className="text-gray-500 text-sm mb-1">Today's Revenue</p>
//           <h3 className="text-2xl font-bold">₦9.3M <span className="text-green-500 text-sm">+6%</span></h3>
//         </div>
//         <div className="bg-white rounded-lg shadow p-4">
//           <p className="text-gray-500 text-sm mb-1">Pending Requests</p>
//           <h3 className="text-2xl font-bold">38 <span className="text-orange-500 text-sm">Requires attention</span></h3>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
//         <div className="bg-white rounded-lg shadow p-4">
//           <h4 className="text-lg font-semibold mb-2">Monthly Issuance</h4>
//           <Bar data={barData} className="h-60" />
//         </div>
//         <div className="bg-white rounded-lg shadow p-4">
//           <h4 className="text-lg font-semibold mb-2">Recent Card Requests</h4>
//           <div className="text-gray-600 text-sm">Table Placeholder</div>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
//         <div className="bg-white rounded-lg shadow p-4">
//           <h4 className="text-lg font-semibold mb-2">This Week's Income</h4>
//           <Line data={lineData} className="h-56" />
//         </div>
//         <div className="bg-white rounded-lg shadow p-4">
//           <h4 className="text-lg font-semibold mb-2">Card Status Distribution</h4>
//           <Doughnut data={doughnutData} className="h-56" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
