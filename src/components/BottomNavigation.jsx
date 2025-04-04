import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function BottomNavigation() {
  const [activeBottomTab, setActiveBottomTab] = useState("Home");
  const bottomTabs = ["Home", "Markets", "Trade", "Futures", "Assets"];
  // Custom SVG icons that match Binance exactly
  const bottomTabIcons = {
    Home: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {" "}
        <path
          d="M12 5.69L17 10.19V18H15V12H9V18H7V10.19L12 5.69ZM12 3L2 12H5V20H11V14H13V20H19V12H22L12 3Z"
          fill="currentColor"
        />{" "}
      </svg>
    ),
    Markets: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 17H7V10H9V17ZM13 17H11V7H13V17ZM17 17H15V13H17V17ZM21 19H3V5H21V19ZM21 3H3C1.9 3 1 3.9 1 5V19C1 20.1 1.9 21 3 21H21C22.1 21 23 20.1 23 19V5C23 3.9 22.1 3 21 3Z"
          fill="currentColor"
        />
      </svg>
    ),
    Trade: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 12V20H20V12H4ZM19 19H5V13H19V19ZM12 2L20 10H4L12 2ZM12 4.83L7.53 9H16.47L12 4.83Z"
          fill="currentColor"
        />
      </svg>
    ),
    Futures: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 6H10V8H20V6ZM20 10H10V12H20V10ZM20 14H10V16H20V14ZM4 6H8V18H4V6ZM22 4H2V20H22V4Z"
          fill="currentColor"
        />
      </svg>
    ),
    Assets: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM12 11H14.5V16.5H11.5V11H9V9H15V11H12Z"
          fill="currentColor"
        />
      </svg>
    ),
  };
  return (
    <>
      {/* Fixed Bottom Navigation Bar */}
      <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto flex justify-around items-center p-3 bg-gray-900 border-t border-gray-800">
        {bottomTabs.map((tab) => (
          <NavLink
            key={tab}
            className="flex flex-col items-center"
            onClick={() => {
              setActiveBottomTab(tab);
            }}
            to={`/${tab}`}
          >
            <div
              className={
                activeBottomTab === tab ? "text-white" : "text-gray-500"
              }
            >
              {bottomTabIcons[tab]}
            </div>
            <span
              className={`text-xs mt-1 ${
                activeBottomTab === tab ? "text-white" : "text-gray-500"
              }`}
            >
              {tab}
            </span>
          </NavLink>
        ))}
      </div>
    </>
  );
}
