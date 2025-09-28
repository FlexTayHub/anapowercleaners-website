import React, { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Header = ({ business }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src="https://customer-assets.emergentagent.com/job_accra-pressure-wash/artifacts/qka9lpqp_IMG_3274.png" 
              alt="ANA Power Cleaners Logo" 
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection('quote')}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
            >
              Get Quote
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
            >
              Contact
            </button>
          </nav>

          {/* Phone Number */}
          <div className="hidden md:flex items-center space-x-2">
            <Phone className="h-4 w-4 text-blue-600" />
            <span className="text-gray-700 font-medium">{business.phone}</span>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('services')}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors duration-300"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors duration-300"
              >
                Gallery
              </button>
              <button
                onClick={() => scrollToSection('quote')}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors duration-300"
              >
                Get Quote
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors duration-300"
              >
                Contact
              </button>
              <div className="flex items-center space-x-2 pt-2">
                <Phone className="h-4 w-4 text-blue-600" />
                <span className="text-gray-700 font-medium">{business.phone}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;