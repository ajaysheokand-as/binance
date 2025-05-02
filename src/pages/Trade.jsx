import { useState, useEffect } from 'react';
import { ChevronDown, X } from 'lucide-react';
import BottomNavigation from '../components/BottomNavigation';
import convert from '../assets/convert.jpg'
import usd from '../assets/usd.jpg'
// import pl from '../assets/+logo.png'
import pl from '../assets/sum.jpg'
import trx from '../assets/trx.jpg'
import btn from '../assets/btn.jpg'
import swapArrow from '../assets/convert.png'
import utce from '../assets/1utc.jpg'
export default function Trade() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [dropdownAnimation, setDropdownAnimation] = useState('');
  const [fromCrypto, setFromCrypto] = useState({ symbol: 'USDT', name: 'Tether', icon: '$' });
  const [toCrypto, setToCrypto] = useState({ symbol: 'TRX', name: 'TRON', icon: '♦️' });
  const [fromValue, setFromValue] = useState('');
  const [fromValuePlaceholder, setFromValuePlaceholder] = useState('0.01-200000');
  const [toValue, setToValue] = useState('0.01-200000');
  const [exchangeRate, setExchangeRate] = useState({ rate: 0.2463, change: -1.16 });
  
  const cryptoList = [
    { symbol: 'INIT', name: 'Initia', icon: '⚫' },
    { symbol: 'BRL', name: 'Brazilian Real', icon: 'R$' },
    { symbol: 'DOGE', name: 'Dogecoin', icon: '🐶' },
    { symbol: 'HYPER', name: 'Hyperlane', icon: 'H' },
    { symbol: 'KERNEL', name: 'KernelDAO', icon: '📦' },
    { symbol: 'HMSTR', name: 'Hamster Kombat', icon: '🟠' },
    { symbol: 'TRX', name: 'TRON', icon: '♦️' },
    { symbol: 'EUR', name: 'Euro', icon: '€' },
    { symbol: 'USDT', name: 'Tether', icon: '$' }
  ];

  const toggleDropdown = () => {
    if (!showDropdown) {
      setDropdownAnimation('animate-slide-up');
      setShowDropdown(true);
    } else {
      setDropdownAnimation('animate-slide-down');
      setTimeout(() => {
        setShowDropdown(false);
      }, 300);
    }
  };
  
  const swapCurrencies = () => {
    // Swap the cryptocurrencies
    const tempCrypto = fromCrypto;
    setFromCrypto(toCrypto);
    setToCrypto(tempCrypto);
    
    // Swap the values
    const tempValue = fromValue;
    setFromValue(toValue);
    setToValue(tempValue);
    
    // Update the exchange rate
    if (exchangeRate.rate !== 0) {
      setExchangeRate({
        rate: (1 / exchangeRate.rate).toFixed(4),
        change: -exchangeRate.change
      });
    }
  };
  
  const selectCrypto = (crypto) => {
    setToCrypto(crypto);
    toggleDropdown();
  };
  
  // Custom CSS animations
  useEffect(() => {
    // Add animation styles to head
    const style = document.createElement('style');
    style.textContent = `
      @keyframes slideUp {
        from {
          transform: translateY(100%);
          opacity: 0;
        }
        to {
          transform: translateY(0);
          opacity: 1;
        }
      }
      
      @keyframes slideDown {
        from {
          transform: translateY(0);
          opacity: 1;
        }
        to {
          transform: translateY(100%);
          opacity: 0;
        }
      }
      
      .animate-slide-up {
        animation: slideUp 0.3s ease-out forwards;
      }
      
      .animate-slide-down {
        animation: slideDown 0.3s ease-out forwards;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="flex flex-col h-screen color text-white">
      {/* Header */}
      <img src={convert} alt="" />
      {/* <div className="py-4 px-4 flex justify-between border-b border-gray-800">
        <div className="flex space-x-6">
          <span className="font-bold">Convert</span>
          <span className="text-gray-500">Spot</span>
          <span className="text-gray-500">Margin</span>
          <span className="text-gray-500">Buy/Sell</span>
          <span className="text-gray-500">P2</span>
        </div>
        <div>
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </div>
      </div> */}
      
      {/* Converter body */}
      <div className="px-4 py-1 relative">
        {/* <div className="flex items-center justify-between">
          <span>Instant</span>
          <ChevronDown className="w-4 h-4" />
        </div>
        
        <div className="mt-4 flex items-center justify-between">
          <span>1 {fromCrypto.symbol} = {exchangeRate.rate} {toCrypto.symbol}</span>
          <span className={exchangeRate.change >= 0 ? "text-green-500" : "text-red-500"}>
            {exchangeRate.change >= 0 ? '+' : ''}{exchangeRate.change}%
          </span>
        </div>
         */}
        {/* From section */}
        <div className=" fromColor rounded-lg p-4 py-5">
          <div className="flex justify-between mb-2">
            <span className="text-gray-400 text-[12px]">From</span>
            <div className="flex items-center">
              <span className="text-gray-400 text-[12px] underline decoration-dotted underline-offset-2">Available</span>
              <span className="ml-2 text-[12px] text-gray-400 flex">515.47221953 {fromCrypto.symbol} <img src={pl} alt="" width={23} /></span>
            </div>
          </div>
          
          <div className="flex justify-between items-center">
            <img src={usd} width={100} alt="" />
            <div className="text-right  overflow-hidden ">
              <input type="number" style={{ direction: 'rtl', textAlign: 'right' ,caretColor: 'transparent', }} className='text-[23px]  text-white font-bold w-full outline-none' placeholder={fromValuePlaceholder} value={fromValue}  />
              {/* <span className="text-[23px] fromValue font-bold">{fromValue}</span> */}
            </div>
          </div>
          
          <div className="flex justify-end mt-3 gap-5">
           {
            fromValue == 200000 ? <span className="text-red-400 text-[13px]">Maximum amount 200000 </span> :<></>
           }
            <button className="text-yellow-300 text-[14px]" onClick={()=>{setFromValue(200000)}}>Max</button>
          </div>
        </div>
        {/* Divider with swap functionality */}
        <div className="flex justify-center my-2 absolute top-[120px] right-45">
          <div className='p-1 color rounded-full'>
          <img src={swapArrow} alt="" width={32} className='rounded-full color' />
          </div>
          {/* <div 
            className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center cursor-pointer hover:bg-gray-600"
            onClick={swapCurrencies}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
            </svg>
          </div> */}
        </div>
        
        {/* To section */}
        <div className=" overflow-hidden mt-4">
          <div className="fromColor rounded-lg p-4 py-7">
            <div className="-mt-2 mb-2">
              <span className="text-gray-400 text-[13px]">To</span>
            </div>
            
            <div className="flex justify-between items-center " onClick={toggleDropdown}>
              <img src={trx} width={100} alt="" />
              {/* <div className="flex items-center cursor-pointer">
                <div className={`w-8 h-8 rounded-full ${toCrypto.symbol === 'TRX' ? 'bg-red-500' : toCrypto.symbol === 'USDT' ? 'bg-teal-500' : 'bg-blue-500'} flex items-center justify-center mr-2`}>
                  <span>{toCrypto.icon}</span>
                </div>
                <span className="font-bold">{toCrypto.symbol}</span>
                <ChevronDown className="w-4 h-4 ml-1" />
              </div> */}
              <div className="text-right">
                <span className="text-[23px] fromValue font-bold">{toValue}</span>
              </div>
            </div>
          </div>
          
          {/* Dropdown with animation */}
          {showDropdown && (
            <div className={`absolute top-0 left-0 right-0 bg-gray-800 rounded-lg p-4 z-10 ${dropdownAnimation}`}>
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-400">To</span>
                <X className="w-6 h-6 cursor-pointer" onClick={toggleDropdown} />
              </div>
              
              <div className="mb-4">
                <div className="bg-gray-700 rounded-lg p-2 flex items-center">
                  <svg className="w-4 h-4 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <input 
                    type="text" 
                    placeholder="Search" 
                    className="bg-transparent outline-none w-full"
                  />
                </div>
              </div>
              
              <div className="space-y-4">
                {cryptoList.filter(crypto => crypto.symbol !== fromCrypto.symbol).map((crypto, index) => (
                  <div 
                    key={index} 
                    className="flex items-center cursor-pointer hover:bg-gray-700 p-2 rounded"
                    onClick={() => selectCrypto(crypto)}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 ${
                      crypto.symbol === 'TRX' ? 'bg-red-500' : 
                      crypto.symbol === 'USDT' ? 'bg-teal-500' : 'bg-blue-500'
                    }`}>
                      <span>{crypto.icon}</span>
                    </div>
                    <div>
                      <div className="font-bold">{crypto.symbol}</div>
                      <div className="text-gray-400 text-sm">{crypto.name}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        <span className='text-red-400 text-[13px]'>Sorry ! your balance has no liquidity</span>
        {/* Preview button */}
        <img src={utce} alt="" className='-mt-1' />
        <img src={btn} alt="" className='-mt-1' />
        {/* <button className="w-full bg-yellow-400 text-center py-4 rounded-lg mt-6 font-bold">
          Preview
        </button> */}
      </div>
      
      {/* Bottom navigation */}
      {/* <div className="mt-auto border-t border-gray-800">

        <div className="flex justify-between px-8 py-4">
          <div className="flex flex-col items-center">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span className="text-xs mt-1">Home</span>
          </div>
          <div className="flex flex-col items-center">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
            </svg>
            <span className="text-xs mt-1">Markets</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
              </svg>
            </div>
            <span className="text-xs mt-1 font-bold">Trade</span>
          </div>
          <div className="flex flex-col items-center">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            <span className="text-xs mt-1">Futures</span>
          </div>
          <div className="flex flex-col items-center">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-xs mt-1">Assets</span>
          </div>
        </div>
      </div> */}
       <BottomNavigation/>
    </div>
  );
}