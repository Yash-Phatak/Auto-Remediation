import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Modal from '../components/Modal';

const Home = () => {
  const [open, setOpen] = useState(false);
  const [det, setDet] = useState({ name: "Sam", gen: "Male" });
  const name = localStorage.getItem('name');
  const ref = useRef();
  const navigate = useNavigate();

  // Dummy forex data
  const [currencies] = useState([
    { pair: "EUR/USD", price: "1.0921", change: "+0.05%" },
    { pair: "GBP/USD", price: "1.2645", change: "-0.12%" },
    { pair: "USD/JPY", price: "148.12", change: "+0.28%" },
    { pair: "AUD/USD", price: "0.6589", change: "-0.08%" }
  ]);

  if (!name) { ref.current = 1 }

  useEffect(() => {
    if (ref.current === 1) setOpen(true);
    ref.current++;
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      {open && <Modal setOpenModal={setOpen} setDet={setDet} />}
      <Navbar />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Market Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {currencies.map((currency) => (
            <div key={currency.pair} className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-blue-500/20">
              <h3 className="text-lg font-bold text-gray-200">{currency.pair}</h3>
              <p className="text-2xl text-blue-400 my-2">{currency.price}</p>
              <p className={`text-sm ${currency.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                {currency.change}
              </p>
            </div>
          ))}
        </div>

        {/* Trading Chart Area */}
        <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-blue-500/20 mb-8">
          <h2 className="text-xl font-bold text-gray-200 mb-4">Price Chart</h2>
          <div className="h-96 bg-gray-700/50 rounded-lg flex items-center justify-center">
            <p className="text-gray-400">Chart placeholder - Add your preferred charting library here</p>
          </div>
        </div>

        {/* Trading Controls */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-blue-500/20">
            <h2 className="text-xl font-bold text-gray-200 mb-4">Quick Trade</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-300 mb-2">Amount</label>
                <input 
                  type="number" 
                  className="w-full bg-gray-700 text-gray-200 p-2 rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none"
                  placeholder="Enter amount"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <button className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600">
                  Buy
                </button>
                <button className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600">
                  Sell
                </button>
              </div>
            </div>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-blue-500/20">
            <h2 className="text-xl font-bold text-gray-200 mb-4">Open Positions</h2>
            <div className="text-gray-400">
              No open positions
            </div>
          </div>
        </div>
      </div>

      {/* Chatbot Button */}
      <button 
        onClick={() => navigate('/chat')}
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
      >
        <i className="fa-solid fa-message text-xl"></i>
      </button>
    </div>
  );
};

export default Home;