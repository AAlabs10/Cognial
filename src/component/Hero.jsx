import React from 'react';
import { FaGoogle, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Side: Text Content */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
              Turn Raw Data into Actionable Insights – Instantly
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Harness AI-driven analytics to transform complex data into clear, actionable insights. No coding required, just results.
            </p>
            <div className="mt-8">
              <Link
                to="/"
                className="inline-block bg-black text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-gray-800 transition-colors"
              >
                Get Started for Free
              </Link>
            </div>
            <div className="mt-10">
              <p className="text-sm text-gray-500 mb-2">More than 100+ companies partner</p>
              <div className="flex justify-center md:justify-start space-x-6 items-center">
                <span className="font-semibold text-gray-700">vision</span>
                <span className="font-semibold text-gray-700">Tracea</span>
                <span className="font-semibold text-gray-700">Cactusc</span>
              </div>
            </div>
          </div>

          {/* Right Side: Integration/Profile Card */}
          <div className="bg-gradient-to-br from-purple-100 to-orange-100 p-6 rounded-2xl shadow-xl">
            {/* Integration Tools */}
            <div className="bg-white bg-opacity-70 p-4 rounded-xl shadow-md backdrop-blur-md">
              <h3 className="font-bold text-gray-700">Integration Tools</h3>
              <div className="space-y-3 mt-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <FaGoogle className="text-red-500 text-2xl" />
                    <div className="ml-3">
                      <p className="font-semibold">Gmail</p>
                      <p className="text-xs text-gray-500">Emails Sent: 1,200</p>
                    </div>
                  </div>
                  <span className="bg-green-200 text-green-800 text-xs font-bold px-2 py-1 rounded-full">+6%</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <FaInstagram className="text-pink-500 text-2xl" />
                    <div className="ml-3">
                      <p className="font-semibold">Instagram</p>
                      <p className="text-xs text-gray-500">Profile Visits: 18,500</p>
                    </div>
                  </div>
                  <span className="bg-green-200 text-green-800 text-xs font-bold px-2 py-1 rounded-full">+11%</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <FaFacebook className="text-blue-600 text-2xl" />
                    <div className="ml-3">
                      <p className="font-semibold">Facebook</p>
                      <p className="text-xs text-gray-500">Ad CTR: 4.2%</p>
                    </div>
                  </div>
                   <span className="bg-green-200 text-green-800 text-xs font-bold px-2 py-1 rounded-full">+4%</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <FaTwitter className="text-blue-400 text-2xl" />
                    <div className="ml-3">
                      <p className="font-semibold">X (Twitter)</p>
                      <p className="text-xs text-gray-500">Tweets Posted: 150</p>
                    </div>
                  </div>
                   <span className="bg-green-200 text-green-800 text-xs font-bold px-2 py-1 rounded-full">+9%</span>
                </div>
              </div>
            </div>

            {/* Profile Completion */}
            <div className="bg-white bg-opacity-70 p-4 rounded-xl shadow-md backdrop-blur-md mt-6">
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-gray-700">Profile Completion</h3>
                <p className="text-sm font-bold text-gray-800">87%</p>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                <div className="bg-green-500 h-2.5 rounded-l-full" style={{ width: '45%' }}></div>
                <div className="bg-blue-500 h-2.5" style={{ width: '25%', display: 'inline-block' }}></div>
                <div className="bg-orange-500 h-2.5 rounded-r-full" style={{ width: '17%', display: 'inline-block' }}></div>
              </div>
               <p className="text-xs text-gray-500 mt-1 text-right">You're Almost There</p>
              <div className="mt-4">
                <h4 className="font-semibold text-sm text-gray-700">Secure Your Account Now!</h4>
                <div className="flex space-x-2 mt-2">
                  <button className="flex-1 bg-gray-200 text-gray-700 py-2 px-3 rounded-lg text-sm hover:bg-gray-300">Verify by Email</button>
                  <button className="flex-1 bg-gray-200 text-gray-700 py-2 px-3 rounded-lg text-sm hover:bg-gray-300">Enable 2FA</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;