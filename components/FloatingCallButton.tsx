
import React from 'react';
import { PhoneIcon, WhatsAppIcon, TelegramIcon, YouTubeIcon } from './Icons';

const FloatingCallButton: React.FC = () => {
  const buttonStyle = "group text-white font-montserrat font-bold p-3 rounded-l-lg shadow-lg flex items-center justify-center transition-all duration-300 ease-in-out hover:w-36 w-14";
  const spanStyle = "max-w-0 group-hover:max-w-xs transition-all duration-300 ease-in-out overflow-hidden whitespace-nowrap group-hover:ml-2";

  return (
    <div className="fixed top-1/2 right-0 transform -translate-y-1/2 z-50 flex flex-col items-end space-y-2">
      {/* YouTube Button */}
      <a 
        href="https://youtube.com/@encourage_india_ias?si=hxuXWNFGTXPfQm0y" 
        target="_blank"
        rel="noopener noreferrer"
        className={`${buttonStyle} bg-red-600 hover:bg-red-700`}
        aria-label="Subscribe to our YouTube Channel"
      >
        <YouTubeIcon className="w-6 h-6 flex-shrink-0" />
        <span className={spanStyle}>YouTube</span>
      </a>

      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/919611621195"
        target="_blank"
        rel="noopener noreferrer"
        className={`${buttonStyle} bg-green-500 hover:bg-green-600`}
        aria-label="WhatsApp Us"
      >
        <WhatsAppIcon className="w-6 h-6 flex-shrink-0" />
        <span className={spanStyle}>WhatsApp</span>
      </a>
      
      {/* Telegram Button */}
      <a 
        href="https://t.me/encourage_INDIAIAS" 
        target="_blank"
        rel="noopener noreferrer"
        className={`${buttonStyle} bg-blue-500 hover:bg-blue-600`}
        aria-label="Join our Telegram Channel"
      >
        <TelegramIcon className="w-6 h-6 flex-shrink-0" />
        <span className={spanStyle}>Telegram</span>
      </a>

      {/* Call Us Button */}
      <a 
        href="tel:+919611621195" 
        className={`${buttonStyle} bg-sunrise-orange hover:bg-orange-600`}
        aria-label="Call Us"
      >
        <PhoneIcon className="w-6 h-6 animate-pulse flex-shrink-0" />
        <span className={spanStyle}>Call Us</span>
      </a>
    </div>
  );
};

export default FloatingCallButton;
