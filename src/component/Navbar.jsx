import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#', label: 'Home', isActive: true },
    { href: '#', label: 'Work', isActive: false },
    { href: '#', label: 'Expertise', isActive: false },
    { href: '#', label: 'Pricing', isActive: false },
    { href: '#', label: 'Testimonial', isActive: false },
  ];

  return (
    <nav className="bg-white p-4 font-sans">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-wide">
          <a href="#">CogniAI</a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center bg-white shadow-sm rounded-full p-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`px-5 py-2 rounded-full text-sm font-medium ${
                link.isActive
                  ? 'bg-orange-500 text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
        
        {/* Contact Us Button - Desktop */}
        <a href="#" className="hidden md:block bg-black text-white px-6 py-2.5 rounded-full text-sm font-medium">
          Contact Us
        </a>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              // X icon
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger icon
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4">
          <div className="flex flex-col items-center space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`w-full text-center px-4 py-2 rounded-md text-base font-medium ${
                  link.isActive
                    ? 'bg-orange-500 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a href="#" className="w-full text-center bg-black text-white px-4 py-2 rounded-md text-base font-medium">
              Contact Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;