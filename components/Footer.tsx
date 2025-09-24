import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from './Icon';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-[#EAEAEA]">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Navigate</h3>
            <ul className="space-y-2">
              <li><Link to="/#pricing" className="text-base text-[#111] hover:text-gray-600">Pricing</Link></li>
              <li><Link to="/feature-packs" className="text-base text-[#111] hover:text-gray-600">Feature Packs</Link></li>
              <li><Link to="/process" className="text-base text-[#111] hover:text-gray-600">Process</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/our-story" className="text-base text-[#111] hover:text-gray-600">Our Story</Link></li>
              <li><Link to="/studio" className="text-base text-[#111] hover:text-gray-600">Studio</Link></li>
              <li><Link to="/security" className="text-base text-[#111] hover:text-gray-600">Security</Link></li>
            </ul>
          </div>
          <div className="space-y-4 col-span-2 md:col-span-1">
             <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Trust & Data Handling</h3>
             <p className="text-xs text-gray-500">Hosted on ISO 27001 / SOC 2 certified infrastructure (provider level). GDPR-aligned setup. You own the code.</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-[#EAEAEA] flex flex-col sm:flex-row justify-between items-center">
          <div className="flex flex-col items-center sm:items-start">
            <img src="./logo.svg" alt="BlackWeaver Logo" className="h-8 w-auto mb-2" />
            <p className="text-xs text-gray-400">&copy; {new Date().getFullYear()} All Rights Reserved.</p>
          </div>
          <div className="flex space-x-6 mt-4 sm:mt-0">
             <a href="#" className="text-gray-400 hover:text-[#111]"><Icon name="twitter" /></a>
             <a href="#" className="text-gray-400 hover:text-[#111]"><Icon name="github" /></a>
             <a href="#" className="text-gray-400 hover:text-[#111]"><Icon name="linkedin" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;