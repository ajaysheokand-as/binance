import { Info } from 'lucide-react';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import info from '../assets/info.png'
import dol from '../assets/11.png'
import  arrow from '../assets/arrow.jpg'
import { historyContext } from '../context/HistoryContextProvider';
export default function ConfirmOrder() {
  const { } =  useContext(historyContext);
  // Transaction state values
  const [isLoading, setIsLoading] = useState(false);
  const [receiveAmount, setReceiveAmount] = useState('1');
  const [receiveSymbol, setReceiveSymbol] = useState('USDT');
  const [equivalentValue, setEquivalentValue] = useState('1.00');
  const [network, setNetwork] = useState('Tron (TRC20)');
  const [address, setAddress] = useState('TE8yEjfEKzWqbFWbeG2SNObcR3tARz?p75');
  const [withdrawAmount, setWithdrawAmount] = useState('1');
  const [networkFee, setNetworkFee] = useState('1.00');
  const [walletType, setWalletType] = useState('Spot Wallet');
  
  const handleConfirm = () => {
    setIsLoading(true);
    // Simulate transaction processing
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };
  
  return (
    <div className="flex flex-col h-screen color text-white">
      {/* Header */}
      <div className="p-4 flex items-center justify-between ">
        <button className="mr-4">
        <img src={arrow} alt=""width={30} />
         
        </button>
        <h1 className="text-xl font-medium">Confirm order</h1>
        <div></div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col p-4">
        {/* Amount Display */}
        <div className="flex flex-col items-center justify-center mb-8">
          <p className="text-gray-400">Receive amount</p>
          <h2 className="text-2xl font-bold mt-2">{receiveAmount} {receiveSymbol}</h2>
          <p className="text-gray-400 mt-1 flex items-center">≈ <img src={dol} alt="" width={13} height={''} />{" "+ equivalentValue}</p>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-4"></div>

        {/* Transaction Details */}
        <div className="space-y-4">
          <div className="flex justify-between">
            <p className="text-gray-400">Network</p>
            <p>{network}</p>
          </div>
          
          <div className="flex justify-between">
            <p className="text-gray-400">Address</p>
            <p className="text-right max-w-[60%] break-all text-[14px]">{address}</p>
          </div>
          
          <div className="flex justify-between">
            <p className="text-gray-400">Withdraw Amount</p>
            <p >{withdrawAmount} {receiveSymbol}</p>
          </div>
          
          <div className="flex justify-between">
            <p className="text-gray-400">Network fee</p>
            <p className="">{networkFee} {receiveSymbol}</p>
          </div>
          
          <div className="flex justify-between">
            <p className="text-gray-400">Wallet</p>
            <p>{walletType}</p>
          </div>
        </div>

        {/* Warning Box */}
        <div className="fromColor  rounded-2xl py-2 px-2 mt-8 mb-6">
          <div className="flex items-start">
            {/* <Info className="w-5 h-5 mr-2 mt-0.5 text-gray-400" /> */}
            <img src={info} width={30}   alt="" />
            <div>
              <p className="text-gray-300 text-sm">
                Ensure that the address is correct and on the same network.
              </p>
              <p className="text-gray-300 text-sm mt-1">
                Transactions cannot be cancelled.
              </p>
            </div>
          </div>
        </div>

        {/* Confirm Button */}
        <div className="mt-auto mb-2">
            <Link to={'/auth'}>
          <button 
            onClick={handleConfirm}
            className="w-full py-3 btn-2 text-black font-medium rounded-lg focus:outline-none"
            disabled={isLoading}
            >
            {isLoading ? "Processing..." : "Confirm"}
          </button>
              </Link>
        </div>
      </div>
    </div>
  );
}