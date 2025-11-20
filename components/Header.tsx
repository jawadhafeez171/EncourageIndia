
import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { navLinks, coursesData, downloadCategories, editorialSummaries } from '../constants';
import { MenuIcon, XIcon, SearchIcon, SunIcon, MoonIcon } from './Icons';
import { useTheme } from '../contexts/ThemeContext';

interface SearchResult {
  title: string;
  type: 'Course' | 'Download' | 'Article';
  path: string;
}

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setSearchResults([]);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.trim().length < 2) {
      setSearchResults([]);
      return;
    }

    const lowerCaseQuery = query.toLowerCase();
    
    // Search courses
    const courseResults = coursesData.flatMap(category => 
        category.courses
            .filter(course => 
                course.title.toLowerCase().includes(lowerCaseQuery) || 
                course.description.toLowerCase().includes(lowerCaseQuery)
            )
            .map(course => ({
                title: course.title,
                type: 'Course' as const,
                path: `/courses#${category.id}`
            }))
    );

    // Search downloads
    const downloadResults = downloadCategories.flatMap(category => category.items)
        .filter(item => 
            item.title.toLowerCase().includes(lowerCaseQuery) || 
            item.description.toLowerCase().includes(lowerCaseQuery)
        )
        .map(item => ({
            title: item.title,
            type: 'Download' as const,
            path: '/downloads'
        }));

    // Search articles
    const articleResults = editorialSummaries
        .filter(item => 
            item.title.toLowerCase().includes(lowerCaseQuery) || 
            item.summary.toLowerCase().includes(lowerCaseQuery)
        )
        .map(item => ({
            title: item.title,
            type: 'Article' as const,
            path: '/current-affairs'
        }));

    const combinedResults = [...courseResults, ...downloadResults, ...articleResults];
    setSearchResults(combinedResults.slice(0, 10)); // Limit to 10 results
  };

  const clearSearch = () => {
    setSearchQuery('');
    setSearchResults([]);
  };

  const activeLinkStyle = {
    color: '#F77F00',
    fontWeight: '600',
  };

  return (
    <header className={`sticky top-0 z-50 bg-white dark:bg-slate-900 transition-all duration-300 ${isScrolled ? 'shadow-lg' : ''}`}>
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link to="/" className="flex-shrink-0 flex items-center gap-3 group">
          <img src="/logo.png" alt="Encourage India IAS Academy" className="h-12 md:h-16 w-auto" />
           <div className="flex flex-col">
             <span className="font-montserrat font-bold text-empower-blue dark:text-blue-400 text-lg md:text-2xl leading-none group-hover:text-sunrise-orange transition-colors duration-300">Encourage India</span>
             <span className="font-lato font-bold text-charcoal-gray dark:text-gray-300 text-xs md:text-sm tracking-wider uppercase">IAS Academy</span>
          </div>
        </Link>
        
        <div className="flex items-center">
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6 font-montserrat text-charcoal-gray dark:text-gray-200">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  style={({ isActive }) => (isActive ? activeLinkStyle : {})}
                  className="hover:text-sunrise-orange transition-colors duration-200"
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>

            {/* Search Bar - Desktop */}
            <div ref={searchContainerRef} className="hidden md:block relative ml-6">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  onFocus={handleSearchChange}
                  className="border-2 border-soft-gray dark:border-gray-700 rounded-full py-2 px-4 pl-10 w-48 focus:w-64 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-empower-blue dark:bg-slate-800 dark:text-white dark:focus:ring-blue-400"
                  aria-label="Search content"
                />
                <SearchIcon className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />

                {searchResults.length > 0 && searchQuery.trim().length > 1 && (
                  <div className="absolute top-full mt-2 w-80 max-h-96 overflow-y-auto bg-white dark:bg-slate-800 rounded-lg shadow-xl border border-soft-gray dark:border-gray-700 z-50 right-0">
                    <ul>
                      {searchResults.map((result, index) => (
                        <li key={index} className="border-b border-soft-gray dark:border-gray-700 last:border-b-0">
                          <Link
                            to={result.path}
                            onClick={clearSearch}
                            className="block px-4 py-3 hover:bg-soft-gray dark:hover:bg-slate-700 transition-colors duration-200"
                          >
                            <p className="font-semibold text-charcoal-gray dark:text-gray-100 text-sm mb-1">{result.title}</p>
                            <span className="text-xs font-bold uppercase tracking-wider text-white bg-sunrise-orange px-2 py-0.5 rounded-full">{result.type}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
            </div>
            
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="ml-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle Theme"
            >
              {theme === 'light' ? <MoonIcon className="w-6 h-6 text-empower-blue" /> : <SunIcon className="w-6 h-6 text-yellow-400" />}
            </button>
            
            {/* Mobile Menu Button */}
            <div className="md:hidden ml-2">
              <button onClick={() => setIsOpen(!isOpen)} aria-label="Open menu" className="text-charcoal-gray dark:text-white">
                {isOpen ? <XIcon className="w-8 h-8" /> : <MenuIcon className="w-8 h-8" />}
              </button>
            </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 absolute top-full left-0 w-full shadow-lg z-50 border-t dark:border-gray-700">
          <nav className="flex flex-col items-center space-y-4 p-4 font-montserrat text-charcoal-gray dark:text-gray-200">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                style={({ isActive }) => (isActive ? activeLinkStyle : {})}
                className="hover:text-sunrise-orange transition-colors duration-200 text-lg"
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
