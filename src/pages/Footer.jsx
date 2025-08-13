import React from 'react';
import { FiArrowUp } from 'react-icons/fi';

// Footer link data
const footerLinks = [
  {
    title: 'Solutions',
    links: ['AI-Powered Analytics', 'Predictive Insights', 'Automation & Optimization'],
  },
  {
    title: 'Resources',
    links: ['Blog & Insights', 'Case Studies', 'Webinars & Events'],
  },
  {
    title: 'Company',
    links: [
      { name: 'About Us' },
      { name: 'Careers', hasBadge: true },
      { name: 'Press & Media' },
    ],
  },
];

const Footer = () => {
  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-gray-50/70 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Brand and Description */}
          <div className="md:col-span-2 lg:col-span-1">
            <h2 className="text-2xl font-bold text-gray-800">Thinkora</h2>
            <p className="mt-4 text-sm text-gray-500 leading-relaxed">
              Our intelligent platform provides real-time insights, predictive analytics, and automation to optimize performance and efficiency.
            </p>
          </div>

          {/* Columns 2, 3, 4: Links */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-gray-800 flex items-center">
                {section.title}
                {/* Custom handling for the "New" badge next to Company */}
                {section.title === 'Company' && (
                  <span className="ml-2 bg-green-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                    NEW
                  </span>
                )}
              </h3>
              <ul className="mt-4 space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors flex items-center">
                      {typeof link === 'object' ? link.name : link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar: Copyright and Back to Top */}
        <div className="mt-12 pt-8 border-t border-gray-200/80 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 mb-4 sm:mb-0">
            © {new Date().getFullYear()} Thinkora. All Rights Reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-gray-600 hover:text-black transition-colors"
          >
            <span className="bg-gray-200/70 rounded-full p-2">
              <FiArrowUp />
            </span>
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;