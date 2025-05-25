import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { ROUTES } from '../routes/Routes';
import Navbar from './Navbar';

const MainLayout = () => {
  const sidebarItems = ROUTES.filter(route => route.showInSidebar);
  
  return (
    <div className="flex min-h-screen  ">
      <Sidebar items={sidebarItems} />
      <div className="flex-1 overflow-auto container mx-auto">
        <Navbar/>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;