
import React from 'react';
import { PhoneIcon, WhatsAppIcon, TelegramIcon, YouTubeIcon } from './Icons';

const FloatingCallButton: React.FC = () => {
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
      {/* Desktop Vertical Stack (Right Edge) */}
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

      {/* Mobile Floating Bottom Dock */}
      <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-auto max-w-[90%]">
        <div className="flex items-center justify-center gap-5 px-6 py-3 bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl rounded-full shadow-2xl border border-gray-200/50 dark:border-gray-700/50">
            {buttons.map((btn) => (
            <a
                key={btn.name}
                href={btn.href}
                target={btn.name !== 'Call Us' ? "_blank" : undefined}
                rel={btn.name !== 'Call Us' ? "noopener noreferrer" : undefined}
                className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 transform active:scale-95 hover:-translate-y-1 ${btn.colorClass} hover:bg-transparent bg-gray-50 dark:bg-slate-700/50 ${btn.borderColor} border`}
                aria-label={btn.name}
            >
                <btn.icon className="w-5 h-5" />
            </a>
            ))}
        </div>
      </div>
    </>
  );
};

export default FloatingCallButton;
