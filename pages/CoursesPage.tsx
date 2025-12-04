
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import CourseCard from '../components/CourseCard';
import CTAButton from '../components/CTAButton';
import { coursesData } from '../constants';
import { SearchIcon, AcademicCapIcon, ScaleIcon, BriefcaseIcon, LightningBoltIcon, ShieldCheckIcon, LightBulbIcon, PhoneIcon } from '../components/Icons';

// Helper to map category IDs to icons
const getCategoryIcon = (id: string) => {
    switch (id) {
        case 'upsc': return <AcademicCapIcon className="w-5 h-5" />;
        case 'judiciary': return <ScaleIcon className="w-5 h-5" />;
        case 'kpsc': return <BriefcaseIcon className="w-5 h-5" />;
        case 'kmf': return <LightningBoltIcon className="w-5 h-5" />;
        case 'kea': return <LightningBoltIcon className="w-5 h-5" />;
        case 'police': return <ShieldCheckIcon className="w-5 h-5" />;
        default: return <AcademicCapIcon className="w-5 h-5" />;
    }
};

const CoursesPage: React.FC = () => {
    const location = useLocation();
    const [activeSection, setActiveSection] = useState<string>('');
    const [searchTerm, setSearchTerm] = useState('');

    // Handle Scroll Spy for Active Section
    useEffect(() => {
        const handleScroll = () => {
            const sections = coursesData.map(cat => document.getElementById(cat.id));
            const scrollPosition = window.scrollY + 200; // Offset

            sections.forEach(section => {
                if (section && section.offsetTop <= scrollPosition && (section.offsetTop + section.offsetHeight) > scrollPosition) {
                    setActiveSection(section.id);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Handle Hash Navigation on Load
    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace('#', '');
            scrollToSection(id);
        }
    }, [location]);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const headerOffset = 180; // Adjusted for double header + nav
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
            setActiveSection(id);
        }
    };

    // Filter courses based on search
    const filteredCategories = coursesData.map(cat => ({
        ...cat,
        courses: cat.courses.filter(c => 
            c.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
            c.description.toLowerCase().includes(searchTerm.toLowerCase())
        )
    })).filter(cat => cat.courses.length > 0);

    return (
        <div className="bg-gray-50 dark:bg-slate-900 transition-colors duration-300 min-h-screen">
            
            {/* 1. Enhanced Hero Section */}
            <div className="relative bg-gradient-to-br from-empower-blue to-blue-900 text-white py-20 px-4 overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
                
                <div className="container mx-auto relative z-10 text-center max-w-4xl">
                    <span className="text-sunrise-orange font-bold tracking-widest uppercase text-sm mb-2 block">Excellence in Education</span>
                    <h1 className="text-4xl md:text-6xl font-extrabold font-montserrat mb-6 leading-tight">
                        Find Your Path to <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400">Success</span>
                    </h1>
                    <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
                        Explore our comprehensive range of courses designed by experts to help you crack the toughest competitive exams in India.
                    </p>

                    {/* Search Bar */}
                    <div className="relative max-w-xl mx-auto">
                        <input 
                            type="text" 
                            placeholder="Search for courses (e.g., KAS, PSI, UPSC)..." 
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full py-4 pl-12 pr-4 rounded-full text-charcoal-gray focus:outline-none focus:ring-4 focus:ring-sunrise-orange/50 shadow-xl transition-all"
                        />
                        <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" />
                    </div>
                </div>
            </div>

            {/* 2. Sticky Category Navigation */}
            <div className="sticky top-[115px] md:top-[132px] z-30 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-md border-b border-gray-200 dark:border-gray-700 py-3 transition-all duration-300">
                <div className="container mx-auto px-4">
                    <div className="flex space-x-2 overflow-x-auto scrollbar-hide md:justify-center pb-1">
                        {coursesData.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => scrollToSection(category.id)}
                                className={`flex items-center space-x-2 px-5 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all duration-300 ${
                                    activeSection === category.id 
                                    ? 'bg-empower-blue text-white shadow-lg transform scale-105' 
                                    : 'bg-gray-100 dark:bg-slate-800 text-charcoal-gray dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700'
                                }`}
                            >
                                {getCategoryIcon(category.id)}
                                <span>{category.title.split(' ')[0]}</span> {/* Show Short Name */}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* 3. Course Listings */}
            <div className="py-16 container mx-auto px-4 md:px-8 space-y-20">
                {filteredCategories.length > 0 ? (
                    filteredCategories.map(category => (
                        <section key={category.id} id={category.id} className="scroll-mt-48">
                            <div className="flex items-center mb-8">
                                <div className="p-3 rounded-xl bg-empower-blue/10 dark:bg-blue-900/20 text-empower-blue dark:text-blue-400 mr-4">
                                    {getCategoryIcon(category.id)}
                                </div>
                                <h2 className="text-3xl font-bold font-montserrat text-charcoal-gray dark:text-white">
                                    {category.title}
                                </h2>
                            </div>
                            
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                                {category.courses.map((course, index) => (
                                    <CourseCard key={index} course={course} index={index} />
                                ))}
                            </div>
                        </section>
                    ))
                ) : (
                    <div className="text-center py-20">
                        <div className="bg-gray-100 dark:bg-slate-800 inline-block p-6 rounded-full mb-4">
                            <SearchIcon className="w-12 h-12 text-gray-400" />
                        </div>
                        <h3 className="text-xl font-bold text-charcoal-gray dark:text-gray-200">No courses found</h3>
                        <p className="text-gray-500 dark:text-gray-400">Try adjusting your search terms.</p>
                    </div>
                )}
            </div>

            {/* 4. "Need Help?" CTA Section */}
            <section className="bg-white dark:bg-slate-800 border-t border-gray-100 dark:border-gray-700 py-16 transition-colors duration-300">
                <div className="container mx-auto px-8">
                    <div className="bg-gradient-to-r from-sunrise-orange to-orange-600 rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between">
                        {/* Decorative Circles */}
                        <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
                        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-black/10 rounded-full blur-3xl pointer-events-none"></div>

                        <div className="relative z-10 text-white text-center md:text-left mb-10 md:mb-0 max-w-2xl">
                            <h2 className="text-3xl md:text-4xl font-extrabold font-montserrat mb-4 flex items-center justify-center md:justify-start leading-tight">
                                <LightBulbIcon className="w-8 h-8 mr-3 text-yellow-300 flex-shrink-0" />
                                Confused about which course to pick?
                            </h2>
                            <p className="text-lg text-orange-50 font-medium leading-relaxed">
                                Our expert mentors are here to guide you. Get a free profile evaluation and a personalized preparation roadmap.
                            </p>
                        </div>

                        <div className="relative z-10 flex flex-col gap-4 w-full md:w-auto">
                            <CTAButton 
                                requiresAuth 
                                className="bg-white text-empower-blue hover:bg-gray-50 border-none shadow-xl hover:shadow-2xl px-10 py-4 text-xl font-extrabold transform hover:-translate-y-1 transition-all duration-300 w-full md:w-auto text-center"
                            >
                                Talk to a Mentor
                            </CTAButton>
                            <a 
                                href="tel:+919611621195" 
                                className="flex items-center justify-center bg-transparent text-white border-2 border-white hover:bg-white hover:text-orange-600 px-10 py-4 rounded-lg text-xl font-bold transition-all duration-300 w-full md:w-auto shadow-md"
                            >
                                <PhoneIcon className="w-6 h-6 mr-3" />
                                +91 96116 21195
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CoursesPage;
