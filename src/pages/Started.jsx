import React from 'react';
import { BsShuffle, BsPuzzle, BsStars, BsFileText } from 'react-icons/bs';
import { FaCrown } from 'react-icons/fa';

const Started = () => {
  // Helper component for the smaller icons in the timeline
  const TimelineIcon = ({ icon }) => (
    <div className="flex items-center justify-center w-10 h-10 bg-orange-100 rounded-full">
      {icon}
    </div>
  );

  return (
    <div className="bg-white py-20 sm:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
          Thinkora is an advanced <span className="text-orange-500">AI-powered data</span> analysis platform designed to <span className="text-orange-500">transform</span> raw data into actionable insights.
        </h1>

        {/* Timeline Visualization */}
        <div className="my-16 flex items-center justify-center">
            <div className="flex items-center w-full max-w-xl">
                <TimelineIcon icon={<BsShuffle className="text-orange-500 text-xl" />} />
                <div className="flex-grow h-0.5 bg-orange-200"></div>
                <TimelineIcon icon={<BsPuzzle className="text-orange-500 text-xl" />} />
                <div className="flex-grow h-0.5 bg-orange-200"></div>

                {/* Central Highlighted Icon */}
                <div className="relative mx-4">
                    <div className="absolute inset-0 bg-orange-400 opacity-40 rounded-full blur-xl"></div>
                    <div className="relative flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-orange-500 rounded-full shadow-lg">
                        <BsStars className="text-white text-3xl sm:text-4xl" />
                    </div>
                </div>

                <div className="flex-grow h-0.5 bg-orange-200"></div>
                <TimelineIcon icon={<FaCrown className="text-orange-500 text-xl" />} />
                <div className="flex-grow h-0.5 bg-orange-200"></div>
                <TimelineIcon icon={<BsFileText className="text-orange-500 text-xl" />} />
            </div>
        </div>

        {/* Description Text */}
        <p className="max-w-2xl mx-auto text-gray-600 text-base sm:text-lg">
          Using cutting-edge machine learning and deep analytics, CogniAI helps businesses, researchers, and decision-makers unlock hidden patterns, predict trends, and optimize performance.
        </p>

        {/* Call to Action Button */}
        <div className="mt-12">
          <a
            href="#"
            className="inline-block bg-black text-white font-semibold py-3 px-8 rounded-full shadow-md hover:bg-gray-800 transition-transform transform hover:scale-105"
          >
            Get Started Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Started;