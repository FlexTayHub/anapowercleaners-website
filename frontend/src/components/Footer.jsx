import React from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = ({ business }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="mb-6">
              <img 
                src="https://customer-assets.emergentagent.com/job_accra-pressure-wash/artifacts/qka9lpqp_IMG_3274.png" 
                alt="ANA Power Cleaners Logo" 
                className="h-16 w-auto mb-4"
              />
            </div>
            <p className="text-gray-300 leading-relaxed">
              Professional pressure washing services throughout Greater Accra, Ghana. 
              Specializing in residential, commercial, and compound cleaning.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-6">Our Services</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="hover:text-blue-400 transition-colors cursor-pointer">Residential Cleaning</li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">Commercial Cleaning</li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">Driveway & Walkway</li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">Vehicle & Fleet Cleaning</li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">Compound Cleaning</li>
            </ul>
          </div>

          {/* Service Areas */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-6">Service Areas</h4>
            <ul className="space-y-3 text-gray-300">
              <li>East Legon</li>
              <li>Accra Central</li>
              <li>Tema</li>
              <li>Kaneshie</li>
              <li>Madina</li>
              <li>Spintex</li>
              <li>Airport Residential</li>
              <li>& All Greater Accra</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">{business.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">{business.email}</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">{business.location}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">{business.hours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} {business.name}. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                License & Insurance
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;