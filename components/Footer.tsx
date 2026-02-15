import React from 'react';
import { Link } from 'react-router-dom';
import { socialLinks } from '../constants';
import { LocationPinIcon, PhoneIcon, MailIcon } from './Icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-empower-blue text-white font-lato">
      <div className="container mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Column 1: Logo and Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Link to="/">
              <img src="/logo.png" alt="Encourage India IAS Academy" className="h-20 w-auto bg-white p-2 rounded-lg" />
            </Link>
            <p className="mt-4 text-lg font-montserrat font-semibold">Encourage India IAS Academy</p>
            <p className="text-soft-gray/80 mt-1">Your Journey to Success Begins Here.</p>
          </div>

          {/* Column 2: Contact Us */}
          <div>
            <h3 className="text-xl font-montserrat font-bold mb-4 border-b-2 border-sunrise-orange pb-2 inline-block">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <LocationPinIcon className="w-6 h-6 mt-1 text-sunrise-orange flex-shrink-0" />
                <span>Near Al-ameen towers, Hosur Main Road, Lal Bagh Main Rd, Behind, Sudhama Nagar, Bengaluru, Karnataka 560027</span>
              </li>
              <li className="flex items-center space-x-3">
                <PhoneIcon className="w-5 h-5 text-sunrise-orange flex-shrink-0" />
                <a href="tel:+919611621195" className="hover:underline">+91 96116 21195</a>
              </li>
              <li className="flex items-center space-x-3">
                <MailIcon className="w-5 h-5 text-sunrise-orange flex-shrink-0" />
                <a href="mailto:encourageindiaias@gmail.com" className="hover:underline">encourageindiaias@gmail.com</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Follow Us */}
          <div>
            <h3 className="text-xl font-montserrat font-bold mb-4 border-b-2 border-sunrise-orange pb-2 inline-block">Follow Us</h3>
            <div className="flex items-center space-x-4 mt-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 p-3 rounded-full hover:bg-sunrise-orange transition-colors duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-charcoal-gray/50 py-4 text-sm text-soft-gray">
        <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0 text-center md:text-left">
          <p>&copy; {new Date().getFullYear()} Encourage India IAS Academy. All Rights Reserved.</p>
          <p className="md:text-right">
            Designed and Developed by <span className="hover:text-sunrise-orange transition-colors cursor-default font-medium">HafeezStudio</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;