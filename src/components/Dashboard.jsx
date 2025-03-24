import React, { useState } from 'react';

const Dashboard = () => {
  const [stats] = useState({
    revenue: 96321,
    orders: 61,
    customers: 7321,
    pendingOrders: 321
  });

  const [activeMenu, setActiveMenu] = useState('Dashboard');

  const menuItems = [
    { icon: 'M4 6h16M4 12h12M4 18h8', name: 'ATS Menu' },
    { icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6', name: 'Dashboard' },
    { icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01', name: 'Orders' },
    { icon: 'M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01B12 12h-4.01', name: 'Tables' },
    { icon: 'M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20', name: 'Delivery' },
    { icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z', name: 'Reservations' },
    { icon: 'M9 14l6-6 6 6', name: 'Accounting' },
    { icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.768-.231-1.5-.65-2.12M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.768.231-1.5.65-2.12M10 14a3 3 0 100-6 3 3 0 000 6z', name: 'Customers' },
    { icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z', name: 'Staff' },
    { icon: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.0 0 013.138-3.138z', name: 'Reports' },
    { icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z', name: 'Settings' }
  ];

  return (
    <div className="flex w-screen h-screen bg-gray-100">
      <div className="w-64 bg-teal-500 text-white flex flex-col">
        <div className="flex-1 overflow-y-auto">
          {menuItems.map((item) => (
            <div
              key={item.name}
              className={`
                flex items-center p-4 cursor-pointer
                ${activeMenu === item.name ? 'bg-teal-600' : 'hover:bg-teal-600'}
              `}
              onClick={() => setActiveMenu(item.name)}
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

      <div className="flex-1 p-4 overflow-hidden">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold text-gray-500">{activeMenu}</h1>
          <div className="flex items-center">
            <div className="mr-4 text-sm text-gray-500">Andre Carvalli</div>
            <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4 mb-4">
          {[
            { label: 'Total Revenue', value: `$${stats.revenue.toLocaleString()}`, color: 'blue' },
            { label: 'Total Orders', value: stats.orders, color: 'green' },
            { label: 'Total Customers', value: stats.customers, color: 'purple' },
            { label: 'Pending Orders', value: stats.pendingOrders, color: 'yellow' }
          ].map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow p-4 text-center">
              <div className={`text-2xl font-bold text-${stat.color}-600`}>{stat.value}</div>
              <div className="text-xs text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="bg-white rounded-lg shadow p-4 col-span-2">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold text-black">Order Management (Live)</h2>
              <button className="text-sm text-blue-600">New Order</button>
            </div>
            
            <div className="space-y-2">
              {[
                { 
                  item: 'Sweet cheesy pizza for kids', 
                  status: 'Pending', 
                  quantity: 12,
                  image: 'https://via.placeholder.com/50'
                },
                { 
                  item: 'Sweet cheesy pizza for kids', 
                  status: 'Completed', 
                  quantity: 10,
                  image: 'https://via.placeholder.com/50'
                }
              ].map((order, index) => (
                <div key={index} className="flex items-center border-b pb-2">
                  <img 
                    src={order.image} 
                    alt={order.item} 
                    className="w-12 h-12 -mb-15 rounded mr-4"
                  />
                  <div className="flex-1">
                    <div className="font-semibold">{order.item}</div>
                    <span className={`
                      inline-block px-2 py-1 rounded-full text-xs
                      ${order.status === 'Pending' 
                        ? 'bg-yellow-100 text-yellow-800' 
                        : 'bg-green-100 text-green-800'
                      }
                    `}>
                      {order.status}
                    </span>
                  </div>
                  <div className="text-sm text-gray-600">Qty: {order.quantity}</div>
                </div>
              ))}
            </div>
          
          </div>

          <div className="bg-white rounded-lg shadow p-4">
            <h2 className="text-lg font-bold text-black mb-4">Popular Dishes</h2>
            <div className="space-y-2 text-black">
              {[
                { 
                  dish: 'Spaghetti Carbonara', 
                  image: 'https://via.placeholder.com/50'
                },
                { 
                  dish: 'Margherita Pizza', 
                  image: 'https://via.placeholder.com/50'
                },
                { 
                  dish: 'Caesar Salad', 
                  image: 'https://via.placeholder.com/50'
                }
              ].map((dish, index) => (
                <div key={index} className="flex justify-around items-center pb-2">
                  <img 
                    src={dish.image} 
                    alt={dish.dish} 
                    className="w-12 h-12 rounded mr-4"
                  />
                  <div className="font-semibold">{dish.dish}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
