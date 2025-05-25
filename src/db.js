import manageCard from "./assets/manage card.svg";
import instantCard from "./assets/instant card.svg";
import persCard from "./assets/personalised cards.svg";
import cardReq from "./assets/card request.svg";
import tActiveCard from "./assets/active cards.svg";
import tPerCard from "./assets/Personalcred.svg";
import tRevenue from "./assets/T rev.svg";
import pRequest from "./assets/p requ.svg";
import nine from "./assets/9.svg";
import eight from "./assets/8.svg";
import six from "./assets/6.svg";
import alertCircle from "./assets/alert-circle.svg";
export const quickAccessData = [
{
    id:1,
    img:manageCard,
    title:"Manage a Card"
},
{
    id:2,
    img:instantCard,
    title:"Issue Instant Card"
},
{
    id:3,
    img:persCard,
    title:"Issue Personalized Card"
},
{
    id:4,
    img:cardReq,
    title:"Review Card Requests"
}

]

export const analyticsData = [
    {
        id:1,
        img:tActiveCard,
        title:"Total Active Cards",
        amt:"26,478",
        progress:nine,
        duration:"this month"
    },
    {
        id:2,
        img:tPerCard,
        title:"Total Personalized Cards",
        amt:"15,703",
        progress:eight,
        duration:"this month"
    },
    {
        id:3,
        img:tRevenue,
        title:"Today’s Revenue",
        amt:"₦9.3M",
        progress:six,
        duration:"vs yesterday"
    },
    {
        id:4,
        img:pRequest,
        title:"Pending Requests",
        amt:"38",
        progress:alertCircle,
        duration:"Requires attention"
    }
]

export const cardRequests = [
    { branch: 'Corporate', type: 'Instant', qty: 10, status: 'Ready', color: 'bg-green-100 text-green-700' },
    { branch: 'Corporate', type: 'Personalized', qty: 10, status: 'In Progress', color: 'bg-yellow-100 text-yellow-700' },
    { branch: 'Corporate', type: 'Personalized', qty: 10, status: 'Acknowledged', color: 'bg-blue-100 text-blue-700' },
    { branch: 'Corporate', type: 'Instant', qty: 10, status: 'Pending', color: 'bg-gray-100 text-gray-700' },
  ];

 export const pieData = [
    { name: 'Active', value: 2000, color: '#00B289' },
    { name: 'Expired', value: 200, color: '#FFB800' },
    { name: 'Inactive', value: 100, color: '#7F56D9' },
    { name: 'Blocked', value: 100, color: '#FF647C' },
    { name: 'Lost', value: 50, color: '#1D4ED8' },
  ];

 export  const incomeData = [
    { name: 'Mon', income: 50 },
    { name: 'Tue', income: 30 },
    { name: 'Wed', income: 60 },
    { name: 'Thu', income: 45 },
    { name: 'Fri', income: 58 },
    { name: 'Sat', income: 25 },
    { name: 'Sun', income: 75 },
  ];