import React from 'react';
import { FiFileText, FiClock, FiBarChart2, FiAward } from 'react-icons/fi';

// A reusable card component for each feature
const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300">
    <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-full mb-5">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-500 leading-relaxed">{description}</p>
  </div>
);

const Part = () => {
  const features = [
    {
      icon: <FiFileText className="text-orange-500 text-2xl" />,
      title: 'Upload & Connect Seamlessly',
      description: 'Easily import data from spreadsheets, databases, and APIs effortlessly for seamless integration and efficient workflows.',
    },
    {
      icon: <FiClock className="text-orange-500 text-2xl" />,
      title: 'AI-Driven Processing in Real-Time',
      description: 'No coding required! AI instantly cleans, analyzes, and structures your data for seamless organization.',
    },
    {
      icon: <FiBarChart2 className="text-orange-500 text-2xl" />,
      title: 'Gain Actionable Insights Instantly',
      description: 'Generate reports, visualize trends, and detect patterns with AI-powered analytics.',
    },
    {
      icon: <FiAward className="text-orange-500 text-2xl" />,
      title: 'Make Smarter, Data-Driven Decisions',
      description: 'Use AI recommendations to optimize strategies, enhance decision-making, boost efficiency, and drive business growth.',
    },
  ];

  return (
    <div className="bg-white-50/50 font-sans mb-8">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
          <div className="max-w-2xl mb-8 md:mb-0">
            <p className="text-orange-500 font-bold tracking-wide uppercase text-sm">
              How It Works
            </p>
            <h2 className="mt-2 text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight">
              Unlock the <span className="text-orange-500">Power of Your Data</span> with Thinkora
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Organize tasks, track progress, and achieve more—effortlessly.
            </p>
          </div>
          <div className="flex-shrink-0">
            <a
              href="#"
              className="inline-block bg-black text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-gray-800 transition-colors duration-300"
            >
              Try AI-Powered Analysis Today
            </a>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Part;