import React, { useState } from "react";
import BottomNavigation from "../components/BottomNavigation";
import logobb from "../assets/logobb.png";
import headerIcons from '../assets/99.png'
import mainIcon from '../assets/main.jpg'
import search from '../assets/search.png'
import fire from '../assets/f.png'
// import do from '../assets/.png'
import dol from '../assets/$.jpg'
import addd from '../assets/addd.jpg'
import aq from '../assets/aq.jpg'
import zzz from '../assets/zzz.jpg'
import btl from '../assets/btl.jpg'
import { Menu } from "lucide-react";
const HomeScreen = () => {
  const [activeTab, setActiveTab] = useState("Market Cap");

  const marketTabs = ["Gainers", "Losers", "New", "24h Vol", "Market Cap"];

  // Custom header icons
  // const headerIcons = {
  //   message: (
  //     <svg
  //       width="22"
  //       height="22"
  //       viewBox="0 0 24 24"
  //       fill="none"
  //       xmlns="http://www.w3.org/2000/svg"
  //     >
  //       <path
  //         d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H5.17L4 17.17V4H20V16Z"
  //         fill="white"
  //       />
  //     </svg>
  //   ),
  //   headphones: (
  //     <svg
  //       width="22"
  //       height="22"
  //       viewBox="0 0 24 24"
  //       fill="none"
  //       xmlns="http://www.w3.org/2000/svg"
  //     >
  //       <path
  //         d="M12 1C7.03 1 3 5.03 3 10V17C3 18.66 4.34 20 6 20H9V12H5V10C5 6.13 8.13 3 12 3C15.87 3 19 6.13 19 10V12H15V20H18C19.66 20 21 18.66 21 17V10C21 5.03 16.97 1 12 1Z"
  //         fill="white"
  //       />
  //     </svg>
  //   ),
  //   bell: (
  //     <svg
  //       width="22"
  //       height="22"
  //       viewBox="0 0 24 24"
  //       fill="none"
  //       xmlns="http://www.w3.org/2000/svg"
  //     >
  //       <path
  //         d="M12 22C13.1 22 14 21.1 14 20H10C10 21.1 10.9 22 12 22ZM18 16V11C18 7.93 16.36 5.36 13.5 4.68V4C13.5 3.17 12.83 2.5 12 2.5C11.17 2.5 10.5 3.17 10.5 4V4.68C7.63 5.36 6 7.92 6 11V16L4 18V19H20V18L18 16ZM16 17H8V11C8 8.52 9.51 6.5 12 6.5C14.49 6.5 16 8.52 16 11V17Z"
  //         fill="white"
  //       />
  //     </svg>
  //   ),
  //   search: (
  //     <svg
  //       width="18"
  //       height="18"
  //       viewBox="0 0 24 24"
  //       fill="none"
  //       xmlns="http://www.w3.org/2000/svg"
  //     >
  //       <path
  //         d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z"
  //         fill="#9AA4B4"
  //       />
  //     </svg>
  //   ),
  // };

  // Custom action icons
  const actionIcons = {
    user: (
      <svg class="bn-svg icon-normal left-icon-pc sidebar-icon-size shrink-0" width={22} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path  clip-rule="evenodd" d="M11 8.5a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0zM2 17a3 3 0 013-3h5a3 3 0 013 3v3H2v-3zm14.5-1v-3h-3v-3h3V7h3v3h3v3h-3v3h-3z" fill="currentColor"></path></svg>
    ),
  award: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19 5H5V7H19V5ZM17 10C17 8.9 16.1 8 15 8C13.9 8 13 8.9 13 10C13 11.1 13.9 12 15 12C16.1 12 17 11.1 17 10ZM9 10C9 8.9 8.1 8 7 8C5.9 8 5 8.9 5 10C5 11.1 5.9 12 7 12C8.1 12 9 11.1 9 10ZM7 16C5.9 16 5 16.9 5 18C5 19.1 5.9 20 7 20C8.1 20 9 19.1 9 18C9 16.9 8.1 16 7 16ZM15 16C13.9 16 13 16.9 13 18C13 19.1 13.9 20 15 20C16.1 20 17 19.1 17 18C17 16.9 16.1 16 15 16Z"
          fill="white"
        />
      </svg>
    ),
    grid: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 2H4C2.9 2 2 2.9 2 4V20C2 21.1 2.9 22 4 22H20C21.1 22 22 21.1 22 20V4C22 2.9 21.1 2 20 2ZM8 20H4V16H8V20ZM8 14H4V10H8V14ZM8 8H4V4H8V8ZM14 20H10V16H14V20ZM14 14H10V10H14V14ZM14 8H10V4H14V8ZM20 20H16V16H20V20ZM20 14H16V10H20V14ZM20 8H16V4H20V8Z"
          fill="white"
        />
      </svg>
    ),
  };

  const cryptoData = [
    {
      name: "BTC",
      price: "$81,943.02",
      change: "-1.59%",
      cap: "$1.63T",
      vol: "$17.94B",
      changeColor: "text-red-500",
    },
    {
      name: "ETH",
      price: "$1,796.98",
      change: "-2.45%",
      cap: "$217.29B",
      vol: "$11.79B",
      changeColor: "text-red-500",
    },
    {
      name: "USDT",
      price: "$1",
      change: "+0.02%",
      cap: "$143.92B",
      vol: "$43.20B",
      changeColor: "text-green-500",
    },
    {
      name: "XRP",
      price: "$2.06",
      change: "-5.75%",
      cap: "$120.81B",
      vol: "$3.07B",
      changeColor: "text-red-500",
    },
    {
      name: "BNB",
      price: "$597.96",
      change: "-1.83%",
      cap: "$85.38B",
      vol: "$1.29B",
      changeColor: "text-red-500",
    },
    {
      name: "SOL",
      price: "$125.85",
      change: "-0.06%",
      cap: "$64.66B",
      vol: "$2.00B",
      changeColor: "text-red-500",
    },
  ];

  const bottomTabList = ["Discover", "Following", "News", "Announcements"];

  return (
    <div className="flex flex-col h-screen max-w-md mx-auto color text-white font-['SF_Pro_Display',-apple-system,BlinkMacSystemFont,'Segoe_UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open_Sans','Helvetica_Neue',sans-serif]">
      {/* Status Bar */}
      {/* <div className="flex justify-between items-center p-2 px-4 bg-gray-900">
        <div className="text-lg font-semibold">12:50</div>
        <div className="flex items-center space-x-1">
          <span className="text-xs">5G</span>
          <div className="flex space-x-0.5">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-3 w-0.5 bg-white rounded-sm"></div>
            ))}
          </div>
          <div className="ml-1 bg-white w-8 h-3 rounded-sm relative">
            <div className="absolute right-0.5 top-0.5 bg-gray-900 h-2 w-1 rounded-sm"></div>
          </div>
        </div>
      </div> */}

      {/* Search Header */}
      {/* <div className="flex items-center justify-between px-1 color">
        <div className="flex items-center w-full">
          <div className="bg-gray-800 p-2 rounded-full flex items-center justify-center">
            <img src={logobb} height={30} width={35} className="rounded-md cursor-pointer" />
          </div>
          <div className="bg-gray-700 flex items-center rounded-xl py-1 px-2 flex-1 mr-1">
            <img src={search} width={17} alt="" />
            <span className="text-red-500 mx-1"><img src={fire} alt="" width={22} /></span>
            <span className="text-gray-400">UFT</span>
          </div>
        </div>
        <div className="flex space-x-5 cursor-pointer">
          <img src={headerIcons} width={130} height={10} alt="" />
          {/* {headerIcons.message}
          {headerIcons.headphones}
          {headerIcons.bell} */}
        {/* </div> */}
      {/* </div>  */}
        <img src={aq} alt="" />
      {/* Portfolio Value */}
      <div className="p-4 py-2 color mt-2">
        <div className="flex items-center -mb-2">
          <span className="text-white text-sm font-medium cursor-pointer">
            Est. Total Value (USD)
          </span>
          <svg
            className="ml-1 h-4 w-4 text-gray-400 rotate-180"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
          </svg>
        </div>
        <div className="flex justify-between items-center">
          <div className="text-3xl font-bold flex items-center"> <img src={dol} width={21}  alt="" /> 139.96</div>
          <img src={addd} alt="" width={120} />
          {/* <button className="bg-yellow-300 cursor-pointer text-gray-800 font-semibold py-3 px-5 rounded-xl text-sm">
            Add Funds
          </button> */}
        </div>
      </div>

      {/* Quick Actions */}
      {/* <div className="bg-gray-800"> */}
       <img src={mainIcon} alt="" className="cursor-pointer" />
      {/* </div> */}
      {/* <div className="flex justify-around p-4 bg-gray-800 border-b border-gray-700">
        <div className="flex flex-col items-center cursor-pointer">
          <div className="p-3 bg-gray-700 rounded-full mb-2 relative">
            {actionIcons.user}
          </div>
          <span className="text-xs">Referral</span>
        </div>
        <div className="flex flex-col items-center cursor-pointer">
          <div className="p-3 bg-gray-700 rounded-full mb-2">
            {actionIcons.award}
          </div>
          <span className="text-xs">Earn</span>
        </div>
        <div className="flex flex-col items-center cursor-pointer">
          <div className="p-3 bg-gray-700 rounded-full mb-2 relative">
            {actionIcons.grid}
            <span className="absolute -top-1 -right-1 text-yellow-500 text-xs font-bold">
              +
            </span>
          </div>
          <span className="text-xs">Menu</span>
        </div>
      </div> */}

      {/* Market Tabs */}
      <img src={zzz} alt="" />
      {/* <div className=" scrollbar-hide color">
        <div className="flex p-1 py-2 space-x-1  border-gray-700 min-w-max">
          {marketTabs.map((tab) => (
            <button
              key={tab}
              className={`px-2 py-1 whitespace-nowrap text-[16px] cursor-pointer ${
                activeTab === tab
                  ? "text-white border-b-2 border-yellow-500 font-medium"
                  : "text-gray-400"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        <Menu className="-ml-2 mt-1 cursor-pointer font-bold " />
        </div>
      </div> */}

      {/* Market Table */}
      <div className="flex-1 overflow-y-auto">
        <div className="flex justify-between px-4 py-1  text-gray-400 text-xs">
          <div className="w-1/4">Name</div>
          <div className="w-2/5 text-right">Last Price/24Chg%</div>
          <div className="w-1/3 text-right">Cap/Vol</div>
        </div>

        {cryptoData.map((crypto, index) => (
          <div
            key={index}
            className="flex justify-between cursor-pointer items-center px-4 py-3  border-gray-700"
          >
            <div className="font-bold text-sm w-1/4">{crypto.name}</div>
            <div className="text-right w-2/5">
              <div className="text-sm font-medium">{crypto.price}</div>
              <div className={`text-xs ${crypto.changeColor}`}>
                {crypto.change}
              </div>
            </div>
            <div className="text-right w-1/3">
              <div className="text-sm font-medium">{crypto.cap}</div>
              <div className="text-xs text-gray-400">{crypto.vol}</div>
            </div>
          </div>
        ))}

          <div className="text-yellow-400 text-sm font-medium text-center mt-2">View More</div>
           <img src={btl} alt="" className=""  />
        <div className="text-center py-1">
        </div>
         </div>
      <BottomNavigation />
    </div>
  );
};

export default HomeScreen;
