
import React from 'react';
import { socialLinks } from '../constants';
import { LocationPinIcon, PhoneIcon } from './Icons';

const TopBar: React.FC = () => {
  return (
    <div className="bg-empower-blue text-white text-sm py-2 px-4 md:px-8">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <LocationPinIcon className="w-4 h-4" />
          <span>Bengaluru</span>
        </div>
        <div className="flex items-center space-x-4">
          <a href="tel:+919611621195" className="hidden md:flex items-center space-x-2 hover:text-sunrise-orange transition-colors">
            <PhoneIcon className="w-4 h-4" />
            <span>+91 96116 21195</span>
          </a>
          <div className="flex items-center space-x-3">
            {socialLinks.map((social) => (
              <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="hover:text-sunrise-orange transition-colors">
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
