import { useState } from "react"
import SideBarMenu from "./SideBarMenu"

export default function DeliveryDashboard() {
  const [activeMenu, setActiveMenu] = useState("Delivery")
  const [activeTab, setActiveTab] = useState("pending")

  const deliveryData = [
    {
      orderNumber: "MPL124423",
      customer: "Nancy Worgan",
      orderedAt: "6:12am",
      orderItems: "1 item",
      itemDelivery: "Delivery",
      deliveryLocation: "Vienna Westside Center 1/4 Building 19",
      orderTotal: "500",
      deliveryGuy: "Alvin Curtis",
      deliveryStatus: "Pending",
    },
    {
      orderNumber: "MPL124422",
      customer: "Nancy Worgan",
      orderedAt: "6:12am",
      orderItems: "1 item",
      itemDelivery: "Pick up",
      deliveryLocation: "Vienna Westside Center 1/4 Building 19",
      orderTotal: "500",
      deliveryGuy: "Alvin Curtis",
      deliveryStatus: "Pending",
    },
    {
      orderNumber: "MPL124422",
      customer: "Adam Black",
      orderedAt: "6:00pm",
      orderItems: "2 items",
      itemDelivery: "Pick up",
      deliveryLocation: "Vienna Westside Center 1/4 Building 19",
      orderTotal: "14,500",
      deliveryGuy: "Alvin Curtis",
      deliveryStatus: "Pending",
    },
    {
      orderNumber: "MPL124472",
      customer: "Constance Nkuta",
      orderedAt: "5:23pm",
      orderItems: "4 items",
      itemDelivery: "Drive Through",
      deliveryLocation: "Vienna Westside Center 1/4 Building 19",
      orderTotal: "10,000",
      deliveryGuy: "Alvin Curtis",
      deliveryStatus: "Pending",
    },
  ]

  const handleTabChange = (tab) => {
    setActiveTab(tab)
  }

  return (
    <div className="flex h-screen">
      <SideBarMenu activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      <div className="flex-1 flex flex-col">
        <header className="bg-white p-4 border-b flex justify-between items-center">
          <div className="relative w-64">
            <div className="absolute left-2 top-2.5 h-4 w-4 text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search..."
              className="pl-8 pr-4 py-2 w-full rounded-md border border-gray-200 bg-gray-50 text-sm"
            />
          </div>
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
              <img src="/placeholder.svg" alt="User" className="h-full w-full object-cover" />
            </div>
            <span className="text-sm font-medium">Andre</span>
            <div className="h-4 w-4 text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </div>
          </div>
        </header>

        <main className="flex-1 p-6 bg-stone-100 overflow-auto">
          <div className="mb-6">
            <h1 className="text-xl font-bold">Delivery</h1>
            <p className="text-sm text-gray-500">Get track of all your deliveries.</p>
          </div>

          <div className="bg-white rounded-md shadow-sm">
            <div className="p-4 flex justify-between items-center border-b">
              <div className="flex items-center gap-2">
                <h2 className="font-medium">Delivery logs</h2>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-2 border rounded-md px-3 py-1.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                  <span className="text-sm">04/03/2023</span>
                </div>
                <button className="flex items-center gap-2 px-3 py-1.5 border rounded-md bg-white hover:bg-gray-50 text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                  Download report
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
              </div>
            </div>

            <div className="w-full">
              <div className="border-b px-4">
                <div className="flex">
                  <button
                    onClick={() => handleTabChange("pending")}
                    className={`py-2 px-4 text-sm ${activeTab === "pending" ? "border-b-2 border-teal-500 text-teal-500" : "text-gray-500"}`}
                  >
                    Pending (4)
                  </button>
                  <button
                    onClick={() => handleTabChange("delivered")}
                    className={`py-2 px-4 text-sm ${activeTab === "delivered" ? "border-b-2 border-teal-500 text-teal-500" : "text-gray-500"}`}
                  >
                    Delivered/ Picked up (4)
                  </button>
                  <button
                    onClick={() => handleTabChange("canceled")}
                    className={`py-2 px-4 text-sm ${activeTab === "canceled" ? "border-b-2 border-teal-500 text-teal-500" : "text-gray-500"}`}
                  >
                    Canceled (0)
                  </button>
                </div>
              </div>

              <div className={activeTab === "pending" ? "block" : "hidden"}>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b bg-gray-50 text-xs text-gray-500">
                        <th className="py-3 px-4 text-left font-medium">Order number</th>
                        <th className="py-3 px-4 text-left font-medium">Customer</th>
                        <th className="py-3 px-4 text-left font-medium">Ordered at</th>
                        <th className="py-3 px-4 text-left font-medium">Order items</th>
                        <th className="py-3 px-4 text-left font-medium">Item delivery</th>
                        <th className="py-3 px-4 text-left font-medium">Delivery Location</th>
                        <th className="py-3 px-4 text-left font-medium">Order total</th>
                        <th className="py-3 px-4 text-left font-medium">Delivery guy</th>
                        <th className="py-3 px-4 text-left font-medium">Delivery Status</th>
                        <th className="py-3 px-4 text-left font-medium">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {deliveryData.map((order, index) => (
                        <tr key={index} className="border-b hover:bg-gray-50">
                          <td className="py-3 px-4 text-sm">{order.orderNumber}</td>
                          <td className="py-3 px-4 text-sm text-blue-600">{order.customer}</td>
                          <td className="py-3 px-4 text-sm">{order.orderedAt}</td>
                          <td className="py-3 px-4 text-sm">{order.orderItems}</td>
                          <td className="py-3 px-4 text-sm">{order.itemDelivery}</td>
                          <td className="py-3 px-4 text-sm text-gray-500 max-w-xs truncate">
                            {order.deliveryLocation}
                          </td>
                          <td className="py-3 px-4 text-sm">{order.orderTotal}</td>
                          <td className="py-3 px-4 text-sm">{order.deliveryGuy}</td>
                          <td className="py-3 px-4">
                            <span className="px-2 py-1 bg-amber-100 text-amber-800 rounded text-xs">
                              {order.deliveryStatus}
                            </span>
                          </td>
                          <td className="py-3 px-4">
                            <button className="h-8 w-8 rounded-md hover:bg-gray-100 flex items-center justify-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <circle cx="12" cy="12" r="1"></circle>
                                <circle cx="12" cy="5" r="1"></circle>
                                <circle cx="12" cy="19" r="1"></circle>
                              </svg>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className={activeTab === "delivered" ? "block" : "hidden"}>
                <div className="p-8 text-center text-gray-500">No delivered orders to display</div>
              </div>

              <div className={activeTab === "canceled" ? "block" : "hidden"}>
                <div className="p-8 text-center text-gray-500">No canceled orders to display</div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

