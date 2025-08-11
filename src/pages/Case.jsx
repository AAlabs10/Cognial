import React from 'react';
import { FiChevronDown, FiMoreHorizontal, FiSend, FiRefreshCw, FiSettings } from 'react-icons/fi';

// Helper component for the waffle chart squares
const WaffleSquare = ({ active }) => (
  <div className={`w-3 h-3 rounded-sm ${active ? 'bg-orange-500' : 'bg-orange-100'}`}></div>
);

// Main Case Component
const Case = () => {
  return (
    <div className="bg-white font-sans py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div className="max-w-xl mb-6 md:mb-0">
            <p className="text-sm font-bold text-orange-500 tracking-wide uppercase">Use Case</p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Optimize Workflows with <span className="text-orange-500">Smart</span> Automation Tools
            </h2>
            <p className="mt-3 text-base sm:text-lg text-gray-500">
              Organize tasks, track progress, and achieve more—effortlessly.
            </p>
          </div>
          <a href="#" className="flex-shrink-0 bg-black text-white font-semibold py-3 px-6 rounded-full shadow-md hover:bg-gray-800 transition-colors">
            See AI in Action
          </a>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Card 1: Business Leaders & Marketing Teams */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-sm">
            {/* Business Leaders Section */}
            <div>
              <h3 className="font-bold text-lg text-gray-800">For Business Leaders</h3>
              <p className="text-sm text-gray-500 mt-1">Identify trends & opportunities in real-time to make data-driven decisions and stay ahead of the competition.</p>
              <div className="mt-6 bg-gray-50 p-4 rounded-xl">
                <h4 className="font-semibold text-sm text-gray-700">Trend Insights</h4>
                <div className="mt-3 grid grid-cols-2 gap-4">
                  {/* Waffle Chart 1 */}
                  <div>
                    <div className="grid grid-cols-5 gap-1">
                      {[...Array(15)].map((_, i) => <WaffleSquare key={i} active={i < 13} />)}
                    </div>
                    <p className="text-xs font-bold mt-2">84% <span className="font-normal text-gray-500">Fashion</span></p>
                  </div>
                  {/* Waffle Chart 2 */}
                   <div>
                    <div className="grid grid-cols-5 gap-1">
                      {[...Array(15)].map((_, i) => <WaffleSquare key={i} active={i < 6} />)}
                    </div>
                    <p className="text-xs font-bold mt-2">43% <span className="font-normal text-gray-500">Tech</span></p>
                  </div>
                </div>
              </div>
            </div>

            <hr className="my-8 border-gray-100" />

            {/* Marketing Teams Section */}
            <div>
              <h3 className="font-bold text-lg text-gray-800">For Marketing Teams</h3>
               <p className="text-sm text-gray-500 mt-1">Identify trends & opportunities in real-time to make data-driven decisions and stay ahead of the competition.</p>
               <div className="mt-6 bg-gray-50 p-4 rounded-xl">
                 <h4 className="font-semibold text-sm text-gray-700">Age-Based User Trends</h4>
                 <p className="text-xs text-gray-400">People Born Between 1948-2002</p>
                 <div className="mt-4 flex items-end justify-around h-24">
                    <div className="text-center"><div className="w-8 h-[13.8%] bg-orange-200 rounded-t-md"></div><p className="text-xs mt-1">18-24</p></div>
                    <div className="text-center"><div className="w-8 h-[32.2%] bg-orange-500 rounded-t-md"></div><p className="text-xs mt-1 font-bold bg-black text-white rounded-full px-1 py-0.5">25-34</p></div>
                    <div className="text-center"><div className="w-8 h-[26.9%] bg-orange-200 rounded-t-md"></div><p className="text-xs mt-1">35-44</p></div>
                 </div>
               </div>
            </div>
          </div>
          
          {/* Card 2: Finance & E-commerce */}
           <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-sm">
            {/* Finance Professionals Section */}
            <div>
                <h3 className="font-bold text-lg text-gray-800">For Finance Professionals</h3>
                <p className="text-sm text-gray-500 mt-1">Identify trends & opportunities in real-time to make data-driven decisions and stay ahead of the competition.</p>
                <div className="mt-6 bg-gray-50 p-4 rounded-xl">
                    <div className="flex justify-between items-center">
                        <h4 className="font-semibold text-sm text-gray-700">Schedule Transfer</h4>
                        <button className="text-xs text-gray-600 font-semibold bg-white border border-gray-200 rounded-md px-2 py-1 flex items-center">6 Months <FiChevronDown className="ml-1" /></button>
                    </div>
                    <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                        <div className="bg-white p-3 rounded-lg">
                            <p className="font-bold">VISA <span className="font-normal text-gray-500">Peoni Gibs</span> 🇹🇷</p>
                            <p className="font-bold text-lg mt-1">$2,500</p>
                            <p className="text-xs text-gray-400">Thu, 27 Feb 2025</p>
                        </div>
                        <div className="bg-white p-3 rounded-lg">
                             <p className="font-bold">VISA <span className="font-normal text-gray-500">Peoni Gibs</span> 🇺🇸</p>
                            <p className="font-bold text-lg mt-1">$2,500</p>
                            <p className="text-xs text-gray-400">Thu, 27 Feb 2025</p>
                        </div>
                    </div>
                    <div className="mt-4 flex justify-between items-end">
                      <div>
                        <p className="text-xs text-gray-500">Your Saving</p>
                        <p className="font-bold text-lg text-green-600">$321,523.05</p>
                      </div>
                      <div className="flex space-x-2">
                        <button className="p-2 bg-blue-100 text-blue-600 rounded-full"><FiSend/></button>
                        <button className="p-2 bg-blue-100 text-blue-600 rounded-full"><FiRefreshCw/></button>
                        <button className="p-2 bg-blue-100 text-blue-600 rounded-full"><FiSettings/></button>
                      </div>
                    </div>
                </div>
            </div>
            
            <hr className="my-8 border-gray-100" />

            {/* E-commerce Section */}
            <div>
              <h3 className="font-bold text-lg text-gray-800">For E-commerce</h3>
              <p className="text-sm text-gray-500 mt-1">Identify trends & opportunities in real-time to make data-driven decisions and stay ahead of the competition.</p>
              <div className="mt-6 bg-gray-50 p-4 rounded-xl space-y-4">
                  <h4 className="font-semibold text-sm text-gray-700">Affiliates</h4>
                  {/* Affiliate Item */}
                  <div className="flex items-center text-sm">
                      <span className="text-lg mr-3">🇺🇸</span>
                      <div className="flex-grow">
                          <p className="font-bold">United States</p>
                          <p className="text-xs text-gray-500">Electronic & Technology</p>
                      </div>
                      <div className="w-24 bg-gray-200 rounded-full h-1.5 mx-3"><div className="bg-blue-500 h-1.5 rounded-full" style={{width: '76%'}}></div></div>
                      <span className="font-bold text-xs">76%</span>
                  </div>
                  {/* Affiliate Item */}
                  <div className="flex items-center text-sm">
                      <span className="text-lg mr-3">🇫🇷</span>
                      <div className="flex-grow">
                          <p className="font-bold">France</p>
                          <p className="text-xs text-gray-500">Innovation & Engineering</p>
                      </div>
                      <div className="w-24 bg-gray-200 rounded-full h-1.5 mx-3"><div className="bg-blue-500 h-1.5 rounded-full" style={{width: '52%'}}></div></div>
                      <span className="font-bold text-xs">52%</span>
                  </div>
                  {/* Affiliate Item */}
                  <div className="flex items-center text-sm">
                      <span className="text-lg mr-3">🇰🇷</span>
                      <div className="flex-grow">
                          <p className="font-bold">South Korea</p>
                          <p className="text-xs text-gray-500">Smart Tech & AI</p>
                      </div>
                      <div className="w-24 bg-gray-200 rounded-full h-1.5 mx-3"><div className="bg-blue-500 h-1.5 rounded-full" style={{width: '68%'}}></div></div>
                      <span className="font-bold text-xs">68%</span>
                  </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Case;