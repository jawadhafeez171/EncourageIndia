import React, { useState, useEffect, useMemo, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import CourseCard from '../components/CourseCard';
import CTAButton from '../components/CTAButton';
import { coursesData } from '../constants';
import { SearchIcon, AcademicCapIcon, ScaleIcon, BriefcaseIcon, ShieldCheckIcon, LightBulbIcon, PhoneIcon, StarIcon, GlobeAltIcon, CogIcon, BookOpenIcon, XIcon } from '../components/Icons';
import SEO from '../components/SEO';

// Helper to map category IDs to icons
const getCategoryIcon = (id: string) => {
    switch (id) {
        case 'upsc': return <AcademicCapIcon className="w-5 h-5" />;
        case 'kpsc-cse': return <BookOpenIcon className="w-5 h-5" />;
        case 'other-comp-1': return <ShieldCheckIcon className="w-5 h-5" />;
        case 'technical': return <CogIcon className="w-5 h-5" />;
        case 'judiciary': return <ScaleIcon className="w-5 h-5" />;
        case 'other-comp-2': return <BriefcaseIcon className="w-5 h-5" />;
        case 'banking': return <GlobeAltIcon className="w-5 h-5" />;
        default: return <StarIcon className="w-5 h-5" />;
    }
};

const CoursesPage: React.FC = () => {
    const location = useLocation();
    const [activeSection, setActiveSection] = useState<string>('all');
    const [searchTerm, setSearchTerm] = useState('');
    const coursesGridRef = useRef<HTMLDivElement>(null);

    // Handle Hash Navigation on Load
    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace('#', '');
            handleFilterClick(id);
        }
    }, [location]);

    const handleFilterClick = (id: string) => {
        setActiveSection(id);

        // Scroll to the courses grid container
        if (coursesGridRef.current) {
            const offset = window.innerWidth < 768 ? 180 : 210;
            const top = coursesGridRef.current.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({ top, behavior: "smooth" });
        }
    };

    // Filter courses based on search and category
    const filteredCategories = useMemo(() => {
        return coursesData.map(cat => ({
            ...cat,
            courses: cat.courses.filter(c =>
                c.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                c.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                (c.eligibility && c.eligibility.toLowerCase().includes(searchTerm.toLowerCase()))
            )
        })).filter(cat => cat.courses.length > 0 && (activeSection === 'all' || activeSection === cat.id));
    }, [searchTerm, activeSection]);

    return (
        <div className="bg-white dark:bg-slate-900 transition-colors duration-300 min-h-screen pb-20">
            <SEO
                title="Our Courses"
                description="Explore our comprehensive courses for UPSC CSE, KPSC KAS, PSI, PC, KEA, Banking, and Judiciary exams. Classroom and online programs available."
                url="https://encourageindia.com/courses"
            />

            {/* Header Hero */}
            <div className="relative bg-empower-blue text-white pt-16 pb-20 md:py-24 px-4 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-empower-blue via-blue-900 to-indigo-900"></div>
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

                <div className="container mx-auto relative z-10 text-center max-w-4xl px-2">
                    <h1 className="text-3xl md:text-7xl font-black font-montserrat mb-4 md:mb-6 tracking-tight leading-tight">
                        Find Your <span className="text-sunrise-orange">Future.</span>
                    </h1>
                    <p className="text-sm md:text-xl text-blue-100/80 mb-8 md:mb-10 max-w-2xl mx-auto font-medium">
                        Search across our elite preparation programs.
                    </p>

                    <div className="relative max-w-2xl mx-auto group">
                        <input
                            type="text"
                            placeholder="Search exam or eligibility..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full py-4 md:py-5 pl-12 md:pl-14 pr-10 rounded-2xl text-charcoal-gray bg-white shadow-2xl focus:outline-none focus:ring-4 focus:ring-sunrise-orange/30 transition-all font-semibold text-sm md:text-base"
                        />
                        <SearchIcon className="absolute left-4 md:left-5 top-1/2 -translate-y-1/2 w-5 h-5 md:w-6 md:h-6 text-gray-400 group-focus-within:text-sunrise-orange transition-colors" />
                        {searchTerm && (
                            <button onClick={() => setSearchTerm('')} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-charcoal-gray">
                                <XIcon className="w-5 h-5" />
                            </button>
                        )}
                    </div>
                </div>
            </div>

            {/* Sticky Navigation Bar */}
            <div className="sticky top-[115px] md:top-[132px] z-30 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl shadow-md border-b border-gray-100 dark:border-gray-800 py-3 md:py-4 transition-all duration-300">
                <div className="container mx-auto px-4">
                    <div className="flex space-x-2 overflow-x-auto scrollbar-hide pb-1">
                        <button
                            onClick={() => handleFilterClick('all')}
                            className={`flex items-center space-x-2 px-5 py-2.5 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest whitespace-nowrap transition-all duration-300 ${activeSection === 'all'
                                    ? 'bg-sunrise-orange text-white shadow-lg shadow-orange-500/30'
                                    : 'bg-gray-100 dark:bg-slate-800 text-charcoal-gray dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700'
                                }`}
                        >
                            <span>View All</span>
                        </button>
                        {coursesData.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => handleFilterClick(category.id)}
                                className={`flex items-center space-x-2 px-5 py-2.5 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest whitespace-nowrap transition-all duration-300 ${activeSection === category.id
                                        ? 'bg-empower-blue text-white shadow-lg shadow-blue-500/30'
                                        : 'bg-gray-100 dark:bg-slate-800 text-charcoal-gray dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700'
                                    }`}
                            >
                                {getCategoryIcon(category.id)}
                                <span>{category.shortTitle}</span>
                                <span className={`ml-1.5 px-1.5 py-0.5 rounded-full text-[9px] ${activeSection === category.id ? 'bg-white/20' : 'bg-gray-200 dark:bg-slate-700'}`}>
                                    {category.courses.length}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Dynamic Course Grid */}
            <div ref={coursesGridRef} className="py-12 md:py-16 container mx-auto px-4 md:px-8 space-y-16 md:space-y-24">
                {filteredCategories.length > 0 ? (
                    filteredCategories.map(category => (
                        <section key={category.id} id={category.id} className="scroll-mt-20">
                            {/* Simplified Section Header */}
                            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-10 border-b border-gray-100 dark:border-gray-800 pb-5 md:pb-6">
                                <div className="flex items-center">
                                    <div className="p-3 md:p-4 rounded-xl md:rounded-2xl bg-empower-blue text-white mr-4 md:mr-5 shadow-lg">
                                        {getCategoryIcon(category.id)}
                                    </div>
                                    <div>
                                        <h2 className="text-xl md:text-4xl font-extrabold font-montserrat text-charcoal-gray dark:text-white uppercase tracking-tight leading-tight">
                                            {category.title}
                                        </h2>
                                    </div>
                                </div>
                                <div className="flex items-center mt-4 md:mt-0">
                                    <span className="text-gray-400 font-bold text-[10px] md:text-xs uppercase tracking-widest mr-3">
                                        {category.courses.length} Available Programs
                                    </span>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                                {category.courses.map((course, index) => (
                                    <CourseCard key={index} course={course} index={index} />
                                ))}
                            </div>
                        </section>
                    ))
                ) : (
                    <div className="text-center py-20 md:py-32">
                        <div className="bg-soft-gray/30 dark:bg-slate-800 inline-block p-8 md:p-10 rounded-full mb-6">
                            <SearchIcon className="w-12 h-12 md:w-16 md:h-16 text-gray-300" />
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-charcoal-gray dark:text-gray-200 mb-2">No matching courses</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-8 px-4">Try searching for generic terms like "Degree" or "12th".</p>
                        <button onClick={() => { setSearchTerm(''); setActiveSection('all'); }} className="text-empower-blue font-bold hover:underline">Show all programs</button>
                    </div>
                )}
            </div>

            {/* Bottom Support Section */}
            <section className="container mx-auto px-4 md:px-8 pb-12 md:pb-24">
                <div className="bg-gradient-to-br from-empower-blue to-blue-900 rounded-[2.5rem] p-8 md:p-16 shadow-3xl text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-10 opacity-10 pointer-events-none">
                        <LightBulbIcon className="w-48 h-48 md:w-64 md:h-64 rotate-12" />
                    </div>
                    <div className="relative z-10 grid md:grid-cols-2 gap-10 md:gap-12 items-center">
                        <div>
                            <span className="bg-sunrise-orange text-white text-[9px] md:text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest mb-6 inline-block">Free Counseling</span>
                            <h2 className="text-2xl md:text-5xl font-black font-montserrat mb-4 md:mb-6 leading-tight">Need help <br className="hidden md:block" /><span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400">choosing a path?</span></h2>
                            <p className="text-sm md:text-lg text-blue-100/80 mb-8 md:mb-10 max-w-lg">Our academy counselors have helped 10,000+ students map their career paths. Get a free profile evaluation.</p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <CTAButton requiresAuth className="px-8 py-4 !bg-white !text-empower-blue font-black rounded-2xl shadow-xl">Enroll Now for 2026-27</CTAButton>
                                <a href="tel:+919611621195" className="flex items-center justify-center px-8 py-4 border-2 border-white/30 rounded-2xl font-bold text-sm">
                                    <PhoneIcon className="w-5 h-5 mr-3" /> Call Desk
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <style>{`
                .scrollbar-hide::-webkit-scrollbar { display: none; }
                .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
            `}</style>
        </div>
    );
};

export default CoursesPage;