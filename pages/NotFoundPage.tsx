
import React from 'react';
import CTAButton from '../components/CTAButton';
import { HomeIcon } from '../components/Icons';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 bg-gray-50 dark:bg-slate-900 transition-colors duration-300">
      <h1 className="text-9xl font-extrabold text-empower-blue/20 dark:text-white/10 select-none">404</h1>
      <div className="absolute mt-2">
        <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-charcoal-gray dark:text-white mb-4">Page Not Found</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <CTAButton to="/" variant="primary" className="flex items-center justify-center space-x-2">
            <HomeIcon className="w-5 h-5" />
            <span>Back to Home</span>
        </CTAButton>
      </div>
    </div>
  );
};

export default NotFoundPage;
