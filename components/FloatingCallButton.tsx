
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PhoneIcon, WhatsAppIcon, TelegramIcon, YouTubeIcon, HomeIcon } from './Icons';

const FloatingCallButton: React.FC = () => {
  const location = useLocation();
  const buttons = [
    { 
        name: 'YouTube', 
        icon: YouTubeIcon, 
        href: 'https://youtube.com/@encourage_india_ias?si=hxuXWNFGTXPfQm0y', 
        colorClass: 'hover:bg-red-600 text-red-600',
        borderColor: 'border-red-100 dark:border-red-900/30'
    },
    { 
        name: 'WhatsApp', 
        icon: WhatsAppIcon, 
        href: 'https://wa.me/919611621195', 
        colorClass: 'hover:bg-green-500 text-green-500',
        borderColor: 'border-green-100 dark:border-green-900/30'
    },
    { 
        name: 'Telegram', 
        icon: TelegramIcon, 
        href: 'https://t.me/encourage_INDIAIAS', 
        colorClass: 'hover:bg-blue-500 text-blue-500',
        borderColor: 'border-blue-100 dark:border-blue-900/30'
    },
    { 
        name: 'Call Us', 
        icon: PhoneIcon, 
        href: 'tel:+919611621195', 
        colorClass: 'hover:bg-sunrise-orange text-sunrise-orange',
        borderColor: 'border-orange-100 dark:border-orange-900/30'
    },
  ];

  return (
    <>
      {/* Desktop Vertical Stack (Right Edge) - Keeps existing functionality */}
      <div className="hidden md:flex fixed right-6 top-1/2 -translate-y-1/2 z-50 flex-col gap-4">
        {buttons.map((btn) => (
          <a 
            key={btn.name}
            href={btn.href}
            target={btn.name !== 'Call Us' ? "_blank" : undefined}
            rel={btn.name !== 'Call Us' ? "noopener noreferrer" : undefined}
            className={`group relative flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-slate-800 shadow-lg border border-gray-100 dark:border-gray-700 transition-all duration-300 ease-out hover:scale-110 hover:text-white ${btn.colorClass}`}
            aria-label={btn.name}
            title={btn.name}
          >
            <btn.icon className="w-6 h-6 transition-transform duration-300 group-hover:rotate-12" />
            
            {/* Tooltip on Hover */}
            <span className="absolute right-full mr-3 px-2 py-1 rounded bg-gray-800 text-white text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
              {btn.name}
            </span>
          </a>
        ))}
      </div>

      {/* Mobile Fixed Bottom Navigation Bar - Brick & Bolt Style */}
      <div className="md:hidden fixed bottom-0 left-0 w-full z-50 bg-[#1a1a1a] text-white border-t border-gray-800 pb-2 pt-1 px-2 h-[72px]">
        <div className="flex justify-between items-end h-full w-full">
            
            {/* 1. Home */}
            <Link 
                to="/" 
                className={`flex flex-col items-center justify-center w-1/5 pb-2 transition-colors duration-200 ${location.pathname === '/' ? 'text-blue-400' : 'text-gray-400 hover:text-white'}`}
            >
                <HomeIcon className="w-6 h-6 mb-1" />
                <span className="text-[10px] font-medium tracking-wide">Home</span>
            </Link>

            {/* 2. YouTube */}
            <a 
                href="https://youtube.com/@encourage_india_ias?si=hxuXWNFGTXPfQm0y" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center w-1/5 pb-2 text-gray-400 hover:text-white transition-colors duration-200"
            >
                <YouTubeIcon className="w-6 h-6 mb-1" />
                <span className="text-[10px] font-medium tracking-wide">YouTube</span>
            </a>

            {/* 3. Center CTA - Call Us */}
            <div className="w-1/5 flex flex-col items-center justify-end h-full relative">
                <a 
                    href="tel:+919611621195" 
                    className="absolute -top-6 flex flex-col items-center justify-center w-14 h-14 bg-sunrise-orange rounded-full shadow-lg border-4 border-[#1a1a1a] transform transition-transform hover:scale-105 active:scale-95"
                >
                    <div className="transform rotate-45 border-2 border-white/30 w-7 h-7 flex items-center justify-center rounded-sm">
                         <div className="transform -rotate-45">
                             <PhoneIcon className="w-4 h-4 text-white fill-current" />
                         </div>
                    </div>
                </a>
                <span className="text-[10px] font-bold tracking-wide text-white mb-2">Call Us</span>
            </div>

            {/* 4. WhatsApp */}
            <a 
                href="https://wa.me/919611621195"
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center w-1/5 pb-2 text-gray-400 hover:text-white transition-colors duration-200"
            >
                <WhatsAppIcon className="w-6 h-6 mb-1" />
                <span className="text-[10px] font-medium tracking-wide">WhatsApp</span>
            </a>

            {/* 5. Telegram */}
            <a 
                href="https://t.me/encourage_INDIAIAS"
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center w-1/5 pb-2 text-gray-400 hover:text-white transition-colors duration-200"
            >
                <TelegramIcon className="w-6 h-6 mb-1" />
                <span className="text-[10px] font-medium tracking-wide">Telegram</span>
            </a>

        </div>
      </div>
    </>
  );
};

export default FloatingCallButton;
