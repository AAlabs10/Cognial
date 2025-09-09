import React from 'react';
import { FiRefreshCw, FiFileText, FiCode, FiLink, FiUpload, FiTrendingUp, FiBell, FiThumbsUp } from 'react-icons/fi';

// Reusable component for the side feature cards
const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-gray-50/70 p-6 rounded-2xl h-full">
    <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-full mb-4">
      {icon}
    </div>
    <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
  </div>
);

const Feature = () => {
  return (
    <div className="bg-white font-sans py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-indigo-500 font-bold tracking-wider uppercase">Key Features</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900">
            Unlock Success with <span className="text-indigo-500">Actionable</span> Performance Metrics
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-500">
            Track, analyze, and optimize data to improve performance and drive success.
          </p>
        </div>

        {/* Main Grid */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Left Column */}
          <div className="flex flex-col space-y-8">
            <FeatureCard
              icon={<FiRefreshCw className="text-indigo-500 text-2xl" />}
              title="Predictive Analytics"
              description="Forecast trends with AI-driven insights."
            />
            <FeatureCard
              icon={<FiFileText className="text-indigo-500 text-2xl" />}
              title="Real-Time Reporting"
              description="Interactive dashboards for better decision-making."
            />
          </div>

          {/* Center Column */}
          <div className="bg-indigo-50/80 p-6 sm:p-8 rounded-3xl">
            <div className="bg-white rounded-2xl shadow-lg p-5">
              <div className="flex justify-between items-center text-gray-400 text-xs mb-3">
                <span>...</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4">
                <div className="bg-indigo-500 h-1.5 rounded-full" style={{ width: '75%' }}></div>
              </div>
              <div className="flex space-x-2 text-xs mb-5">
                <button className="bg-indigo-500 text-white font-semibold py-1 px-3 rounded-full flex items-center">
                  <FiUpload className="mr-1" /> News Upload
                </button>
                <button className="bg-gray-100 text-gray-600 font-semibold py-1 px-3 rounded-full flex items-center">
                  <FiTrendingUp className="mr-1" /> Trending
                </button>
              </div>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="p-2 bg-gray-100 rounded-full mr-3"><FiBell className="text-gray-500" /></div>
                  <div>
                    <h4 className="font-semibold text-sm">Content Refresh Alert</h4>
                    <p className="text-xs text-gray-400">Post fresh content, share insights, and stay active. Consistency is key!</p>
                  </div>
                  <span className="text-xs text-gray-400 ml-auto">20 MB</span>
                </div>
                <div className="flex items-start">
                  <div className="p-2 bg-gray-100 rounded-full mr-3"><FiThumbsUp className="text-gray-500" /></div>
                  <div>
                    <h4 className="font-semibold text-sm">Engagement Boost Reminder</h4>
                    <p className="text-xs text-gray-400">Share valuable content, post consistently, and keep your audience coming back!</p>
                  </div>
                  <span className="text-xs text-gray-400 ml-auto">24 MB</span>
                </div>
              </div>
            </div>
            <div className="mt-6 text-center">
              <h3 className="text-xl font-bold text-gray-900">Automated Data Processing</h3>
              <p className="mt-2 text-gray-600 text-sm">
                AI intelligently cleans, structures, and analyzes vast amounts of raw data, transforming it into meaningful insights for informed decision-making.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col space-y-8">
            <FeatureCard
              icon={<FiCode className="text-indigo-500 text-2xl" />}
              title="No-Code Simplicity"
              description="Designed for business users, not just data scientists."
            />
            <FeatureCard
              icon={<FiLink className="text-indigo-500 text-2xl" />}
              title="Seamless Integrations"
              description="Connect with your CRM, eCommerce, and databases."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;