import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const SideBarMenu = ({ activeMenu, setActiveMenu }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { path: '/ats-menu', icon: 'M4 6h16M4 12h12M4 18h8', name: 'ATS Menu' },
    { path: '/', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3', name: 'Dashboard' },
    { path: '/orders', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10', name: 'Orders' },
    { path: '/tables', icon: 'M12 4v1m6 11h2', name: 'Tables' },
    { path: '/delivery', icon: 'M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12', name: 'Delivery' },
    { path: '/reservations', icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14', name: 'Reservations' },
    { path: '/accounting', icon: 'M9 14l6-6 6 6', name: 'Accounting' },
    { path: '/customers', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857', name: 'Customers' },
    { path: '/staff', icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0', name: 'Staff' },
    { path: '/reports', icon: 'M9 12l2 2 4-4', name: 'Reports' },
    { path: '/settings', icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0', name: 'Settings' }
  ];

  useEffect(() => {
    const currentMenuItem = menuItems.find(item => item.path === location.pathname);
    if (currentMenuItem) {
      setActiveMenu(currentMenuItem.name);
    }
  }, [location.pathname, setActiveMenu]);

  const handleMenuItemClick = (item) => {
    setActiveMenu(item.name);
    navigate(item.path);
  };

  return (
    <div className="w-58 h-screen bg-teal-500 text-white flex flex-col">
      <div className="flex-1 overflow-y-auto">
        {menuItems.map((item) => (
          <div
            key={item.name}
            className={`
              flex items-center p-4 cursor-pointer transition-all duration-200
              ${
                activeMenu === item.name
                  ? 'bg-teal-700 text-white font-semibold'
                  : 'hover:bg-teal-600'
              }
            `}
            onClick={() => handleMenuItemClick(item)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={item.icon}
              />
            </svg>
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBarMenu;
