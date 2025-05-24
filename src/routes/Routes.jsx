import { Dashboard, Branches, Roles, User, CardScheme, CardProfile, CardRequest, Stock, Cards, BlockUnblockCards, AuthorizationList, AuthorizationQueue, Trail, Account } from '../pages'; 
import dashBoardLogo from "../assets/dashboard-logo.png";
import buildingLogo from "../assets/building-06.png";
import roleLogo from "../assets/user-shield-01.svg";
import userLogo from "../assets/user-group.png";
import CardSchemeLogo from '../assets/setting-05.png';
import cardProfileLogo from "../assets/credit-card-pos.png";
import cardRequestLogo from "../assets/credit-card-accept.png";
import stockLogo from "../assets/chart-bar-line.png";
import cardsLogo from "../assets/credit-card.png";
import blockUnblockLogo from "../assets/elements.png";
import listLogo from "../assets/list.png";
import threeLayersLogo from "../assets/layers-three-01.png";
import mapLogo from "../assets/map-01.png";
import accountLogo from "../assets/user.png";


export const ROUTES = [
    {
      path: '/',
      element: <Dashboard />,
      name: 'Dashboard',
      showInSidebar: true,
      icon: dashBoardLogo,
      iconName:"dashboard logo"
    },
    {
      path: '/branches',
      element: <Branches />  ,
      name: 'Branches',
      showInSidebar: true,
      icon: buildingLogo,
      iconName:"branches logo"
    },
    {
      path: '/roles',
      element: <Roles/>  ,
      name: 'Roles',
      showInSidebar: true,
      icon: roleLogo,
      iconName:"role logo"
    },
    {
      path: '/user',
      element: <User/>  ,
      name: 'User',
      showInSidebar: true,
      icon: userLogo,
      iconName:"user logo"
    },
    {
      path: '/card-scheme',
      element: <CardScheme/>  ,
      name: 'Card Scheme',
      showInSidebar: true,
      icon: CardSchemeLogo,
      iconName:"card scheme logo"
    },
    {
      path: '/card-profile',
      element: <CardProfile/>  ,
      name: 'Card Profile',
      showInSidebar: true,
      icon: cardProfileLogo ,
      iconName:"card profile logo"
    },
    {
      path: '/card-request',
      element: <CardRequest/>  ,
      name: 'Card Request',
      showInSidebar: true,
      icon: cardRequestLogo ,
      iconName:"card request logo"
    },
    {
      path: '/stock',
      element: <Stock/>  ,
      name: 'Stock',
      showInSidebar: true,
      icon: stockLogo ,
      iconName:"stock logo"
    },
    {
      path: '/cards',
      element: <Cards/>  ,
      name: 'Cards',
      showInSidebar: true,
      icon: cardsLogo ,
      iconName:"cards logo"
    },
    {
      path: '/block-unblock-cards',
      element: <BlockUnblockCards/> ,
      name: 'Block/Unblock Cards',
      showInSidebar: true,
      icon: blockUnblockLogo ,
      iconName:"block unblock cards logo"
    },
    {
      path: '/authorization-list',
      element: <AuthorizationList/>  ,
      name: 'Authorization List',
      showInSidebar: true,
      icon: listLogo ,
      iconName:"authorization list logo"
    },
    {
      path: '/authorization-queue',
      element: <AuthorizationQueue/>  ,
      name: 'Authorization Queue',
      showInSidebar: true,
      icon: threeLayersLogo ,
      iconName:"authorization queue logo"
    },
    {
      path: '/trail',
      element: <Trail/>  ,
      name: 'Trail',
      showInSidebar: true,
      icon: mapLogo ,
      iconName:"trail logo"
    },
    {
      path: '/account',
      element: <Account/>  ,
      name: 'Account',
      showInSidebar: true,
      icon: accountLogo ,
      iconName:"account logo"
    }
  
  ];