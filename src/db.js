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