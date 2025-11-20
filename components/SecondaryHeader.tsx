
import React from 'react';
import { Link } from 'react-router-dom';
import { secondaryNavLinks } from '../constants';
import { ChevronDownIcon } from './Icons';

const SecondaryHeader: React.FC = () => {
  return (
    <nav className="sticky top-[72px] md:top-[88px] z-40 bg-empower-blue text-white shadow-md">
      <div className="container mx-auto px-4">
        <ul className="flex flex-wrap items-center justify-center gap-2 md:gap-8 py-2 text-sm md:text-base font-montserrat font-medium">
          <li role="presentation" className="font-bold whitespace-nowrap">Quick links &gt;</li>
          {secondaryNavLinks.map((link) => (
            <li key={link.name} className="relative group">
              {link.dropdown ? (
                <>
                  <button className="flex items-center space-x-1 py-1 px-2 hover:bg-sunrise-orange rounded-md transition-colors duration-200 cursor-default">
                    <span>{link.name}</span>
                    <ChevronDownIcon className="w-4 h-4" />
                  </button>
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-white dark:bg-slate-800 text-charcoal-gray dark:text-gray-200 rounded-md shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 z-50">
                    <ul className="py-2">
                      {link.dropdown.map(item => (
                        <li key={item.name}>
                          <Link to={item.path} className="block px-4 py-2 hover:bg-soft-gray dark:hover:bg-slate-700 hover:text-empower-blue dark:hover:text-blue-400 transition-colors duration-200">
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              ) : (
                <Link to={link.path!} className="block py-1 px-2 hover:bg-sunrise-orange rounded-md transition-colors duration-200">
                  {link.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default SecondaryHeader;
