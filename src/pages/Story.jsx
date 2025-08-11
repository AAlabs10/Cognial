import React, { useState } from 'react';
import { FiCheckCircle, FiX, FiArrowUpRight } from 'react-icons/fi';

// Helper component to create SVG donut charts
const DonutChart = ({ percentage, color, size = 52 }) => {
  const radius = (size / 2) - 4; // radius = (size/2) - (strokeWidth/2)
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle
          stroke={color}
          strokeOpacity="0.2"
          fill="transparent"
          strokeWidth="5"
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
        <circle
          stroke={color}
          fill="transparent"
          strokeWidth="5"
          strokeLinecap="round"
          r={radius}
          cx={size / 2}
          cy={size / 2}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </svg>
      <span className="absolute text-xs font-bold text-gray-700">{percentage}%</span>
    </div>
  );
};


const Story = () => {
  const [isVisible, setIsVisible] = useState(true);

  const benefits = [
    'Advance career growth opportunities',
    'Communicate ideas persuasively',
    'Develop strong networking abilities',
    'Boost professional confidence daily',
  ];

  if (!isVisible) return null;

  return (
    <div className="bg-gray min-h-screen p-4 flex items-center justify-center font-sans">
      <div className="relative max-w-5xl w-full bg-gradient-to-br from-blue-50 to-orange-50 rounded-3xl shadow-2xl overflow-hidden">
        <button 
          onClick={() => setIsVisible(false)} 
          className="absolute top-4 right-4 z-30 bg-gray-400/30 text-white rounded-full p-1.5 hover:bg-gray-500/50 transition-colors"
        >
          <FiX size={20} />
        </button>

        <div className="flex flex-col lg:flex-row items-center">
          {/* Left Column: Text Content */}
          <div className="w-full lg:w-5/12 p-8 lg:pl-12 z-10">
            <p className="text-sm font-bold text-orange-500 tracking-wider">REAL STORIES</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mt-2">
              Real People, <span className="text-orange-500">Real Impact</span>
            </h2>
            <p className="text-gray-500 mt-4">
              Authentic stories of transformation driving meaningful change globally.
            </p>
            <ul className="mt-8 space-y-3">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center bg-white/60 backdrop-blur-sm p-3 rounded-lg text-sm font-medium text-gray-700">
                  <FiCheckCircle className="text-orange-500 mr-3 flex-shrink-0" size={20} />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Image and Overlays */}
          <div className="w-full lg:w-7/12 relative">
            <img 
              src={"customer.jpg"} 
              alt="Smiling professional holding a tablet" 
              className="w-full h-auto object-cover lg:scale-110 lg:-translate-x-10"
            />
            {/* Resource Card Overlay */}
            <div className="absolute top-6 right-6 w-52 bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/50">
              <div className="flex justify-between items-center mb-3">
                <h4 className="text-sm font-bold text-gray-800">Resource Utilization</h4>
                <FiArrowUpRight className="text-gray-500" />
              </div>
              <div className="flex justify-between mb-3">
                <DonutChart percentage={58} color="#f97316" />
                <DonutChart percentage={25} color="#16a34a" />
                <DonutChart percentage={12} color="#2563eb" />
              </div>
              <ul className="text-xs space-y-1.5">
                <li className="flex items-center"><span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span> Current Users <span className="ml-auto font-semibold">58%</span></li>
                <li className="flex items-center"><span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span> User Retention <span className="ml-auto font-semibold">25%</span></li>
                <li className="flex items-center"><span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span> Interaction Rate <span className="ml-auto font-semibold">12%</span></li>
              </ul>
            </div>
            
             {/* Overlapping Circles Overlay */}
            <div className="absolute bottom-6 right-6 flex">
                <div className="w-10 h-10 rounded-full bg-orange-400 border-2 border-white"></div>
                <div className="w-10 h-10 rounded-full bg-green-500 border-2 border-white -ml-4"></div>
                <div className="w-10 h-10 rounded-full bg-blue-500 border-2 border-white -ml-4"></div>
                <div className="w-10 h-10 rounded-full bg-white border-2 border-gray-200 -ml-4"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;