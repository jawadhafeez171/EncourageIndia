
import React from 'react';
import { downloadCategories } from '../constants';
import { DownloadIcon } from '../components/Icons';

const PageHeader = ({ title }: { title: string }) => (
    <div className="bg-empower-blue py-16 text-center text-white">
        <div className="container mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold font-montserrat">{title}</h1>
        </div>
    </div>
);

const DownloadsPage: React.FC = () => {
    return (
        <div className="bg-white dark:bg-slate-900 transition-colors duration-300">
            <PageHeader title="Downloads & Resources" />
            <section className="py-20 bg-gray-50 dark:bg-slate-900">
                <div className="container mx-auto px-8 space-y-16">
                    {downloadCategories.map((category, index) => (
                        <div key={index}>
                            <h2 className="text-3xl font-bold font-montserrat text-empower-blue dark:text-blue-400 mb-8 border-l-4 border-sunrise-orange pl-4">{category.category}</h2>
                            <ul className="space-y-4">
                                {category.items.map((item, itemIndex) => (
                                    <li key={itemIndex} className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-md border border-soft-gray dark:border-gray-700 flex flex-col sm:flex-row items-center justify-between hover:border-empower-blue dark:hover:border-blue-400 transition-colors duration-300">
                                        <div className="flex-grow mb-4 sm:mb-0 sm:mr-4 text-center sm:text-left">
                                            <h3 className="font-bold font-montserrat text-charcoal-gray dark:text-gray-200">{item.title}</h3>
                                            <p className="text-sm text-charcoal-gray/70 dark:text-gray-400">{item.description}</p>
                                        </div>
                                        <a 
                                            href={item.fileUrl} 
                                            download
                                            className="flex-shrink-0 font-montserrat font-semibold py-2 px-4 rounded-lg bg-sunrise-orange text-white hover:bg-orange-600 transition-colors duration-300 inline-flex items-center space-x-2 text-sm w-full sm:w-auto justify-center"
                                        >
                                            <DownloadIcon className="w-5 h-5" />
                                            <span>Download</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default DownloadsPage;
