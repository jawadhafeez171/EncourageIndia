
import React from 'react';
import { DownloadIcon } from './Icons';

interface DownloadCardProps {
  title: string;
  description: string;
  fileUrl: string;
}

const DownloadCard: React.FC<DownloadCardProps> = ({ title, description, fileUrl }) => {
  return (
    <div className="border border-soft-gray dark:border-gray-700 rounded-lg p-6 flex flex-col items-center text-center hover:shadow-xl hover:border-empower-blue dark:hover:border-blue-400 transition-all duration-300 bg-white dark:bg-slate-800">
      <div className="bg-empower-blue/10 dark:bg-blue-400/10 p-4 rounded-full mb-4">
        <DownloadIcon className="w-12 h-12 text-empower-blue dark:text-blue-400" />
      </div>
      <h3 className="font-montserrat text-xl font-bold text-empower-blue dark:text-blue-400 mb-2">{title}</h3>
      <p className="text-charcoal-gray/80 dark:text-gray-300 mb-6 flex-grow">{description}</p>
      <a 
        href={fileUrl} 
        download
        className="font-montserrat font-semibold py-2 px-6 rounded-lg bg-sunrise-orange text-white hover:bg-orange-600 transition-colors duration-300 inline-flex items-center space-x-2"
      >
        <span>Download</span>
        <DownloadIcon className="w-5 h-5" />
      </a>
    </div>
  );
};

export default DownloadCard;
