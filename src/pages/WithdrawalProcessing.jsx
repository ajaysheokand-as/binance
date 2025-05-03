import { useState, useEffect } from "react";
import time from "../assets/time.png";
export default function WithdrawalProcessing() {
  const [currentDate, setCurrentDate] = useState("");
  const [amount, setAmount] = useState("1");
  const [currency, setCurrency] = useState("USDT");
  useEffect(() => {
    // Set estimated completion time (current time + 10 minutes)
    const date = new Date();
    date.setMinutes(date.getMinutes() + 10);

    // Format date as YYYY-MM-DD HH:MM:SS
    const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1)
      .toString()
      .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")} ${date
      .getHours()
      .toString()
      .padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}:${date
      .getSeconds()
      .toString()
      .padStart(2, "0")}`;

    setCurrentDate(formattedDate);
  }, []);

  return (
    <div className="flex flex-col h-screen color text-white">
      {/* Header */}
      <div className="p-4">
        <button className="text-white">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 12H5"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 19L5 12L12 5"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center px-6">
        {/* Hourglass SVG */}
        <div className="mb-8">
          <img src={time} alt="" className="w-full" />
        </div>

        <h1 className="text-xl font-bold mb-3">Withdrawal Processing</h1>

        <h2 className="text-[28px] font-bold mb-6">
          {amount} {currency}
        </h2>

        <p className="text-gray-400 text-center mb-1 text-[14px]">
          Estimated completion time: {currentDate}
        </p>

        <p className="text-gray-400 text-center max-w-md text-[14px]">
          You will receive an email once withdrawal is completed. View history
          for the latest updates.
        </p>
      </div>

      {/* Footer */}
      <div className="p-4 py-0 pt-3 fixed bottom-10 right-0 left-0 ">
        <button className="w-full py-4  btn-2 text-black font-medium rounded-lg focus:outline-none">
          View History
        </button>
      </div>
    </div>
  );
}
