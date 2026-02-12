import React, { useState, useEffect, useRef, useCallback } from 'react';
import CTAButton from '../components/CTAButton';
import CourseCard from '../components/CourseCard';
import { StarIcon, QuoteIcon, CheckCircleIcon, ArrowLeftIcon, ArrowRightIcon, GooglePlayIcon, AcademicCapIcon, BookOpenIcon, LightningBoltIcon, ShieldCheckIcon, CalendarIcon, ClockIcon, DesktopComputerIcon, DownloadIcon, UsersIcon, GlobeAltIcon, ChevronRightIcon, VideoCameraIcon, ChatAlt2Icon, DocumentTextIcon, LightBulbIcon, RefreshIcon, UserIcon, ClipboardListIcon, CogIcon, XIcon } from '../components/Icons';
import { testimonials, coursesData } from '../constants';
import { submitToGoogleSheet } from '../services/googleSheetService';

const carouselSlides = [
    {
        badge: "Technical Hub",
        medium: "English / ಕನ್ನಡ",
        headline: <>Master the <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Technical AEE/AE/JE Exams</span></>,
        subheadline: "Complete coaching for KPSC (PWD/WRD), KEA, and KPCL recruitments. Integrated approach for Domain Subjects and General Studies Paper-1.",
        points: ["Civil, Mech, Elec Streams", "GS Paper-1 Specialist", "Technical Mock Series"],
        image: "/images/hero/technical exams.png",
        cta1: "Enroll Now",
        cta2: "Course Details",
        cta3: "View Exam Info",
        cta1Link: { requiresAuth: true },
        cta2Link: { to: '/courses' },
        cta3Link: { to: '/courses/ae-je-technical' },
    },
    {
        badge: "Multiple Vacancies",
        medium: "English / ಕನ್ನಡ",
        headline: <>KEA Group <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500">A, B, C & D</span> Exams</>,
        subheadline: "One-stop coaching solution for all KEA Technical (AE/JE) and Non-Technical (FDA/SDA/Group-C) posts.",
        points: ["Technical & Non-Tech Batches", "General Kannada/English", "Subject Experts"],
        image: "/images/hero/kea exams.png",
        cta1: "Enroll Now",
        cta2: "Course Details",
        cta3: "Non-Technical Courses",
        cta1Link: { requiresAuth: true },
        cta2Link: { to: '/courses' },
        cta3Link: { to: '/courses/kea-group-b-c-d' },
    },
    {
        badge: "Admissions Open",
        medium: "English / ಕನ್ನಡ",
        headline: <>STATES TOP SERVICES <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 whitespace-nowrap">KAS/AC-SAAD/ACF</span></>,
        subheadline: "Become part of states top level bureaucratic circle with elite preparation strategies.",
        points: ["Subject expert faculty", "Quality material", "Enriched Test series (Pre+Mains)"],
        image: "/images/hero/kpsc kas.png",
        cta1: "Enroll Now",
        cta2: "Course Details",
        cta3: "AC-SAAD Details",
        cta1Link: { requiresAuth: true },
        cta2Link: { to: '/courses' },
        cta3Link: { to: '/courses/ac-saad' },
    },
    {
        badge: "Mass Recruitment",
        medium: "English / ಕನ್ನಡ",
        headline: <>Secure a Govt Job in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">KMF SHIMUL</span></>,
        subheadline: "Targeting 194+ Vacancies. A focused crash course covering Co-operative Laws, General Kannada/English, and Computer knowledge.",
        points: ["Co-operative Act Coverage", "Exam-Oriented Approach", "Daily Quizzes"],
        image: "/images/hero/kmf.png",
        cta1: "Enroll Now",
        cta2: "Course Details",
        cta3: "About the Exam",
        cta1Link: { requiresAuth: true },
        cta2Link: { to: '/courses' },
        cta3Link: { to: '/courses/kmf-shimul' },
    },
    {
        badge: "Uniformed Services",
        medium: "English / ಕನ್ನಡ",
        headline: <>Wear the Khaki with Pride: <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-700">PSI & PC</span></>,
        subheadline: "Rigorous training for Karnataka State Police recruitment. Master both Physical and Written challenges with our expert guidance.",
        points: ["Physical Training Guidance", "Bilingual Classes", "Weekly Mock Tests"],
        image: "/images/hero/police exams.png",
        cta1: "Enroll Now",
        cta2: "Course Details",
        cta3: "About the Exam",
        cta1Link: { requiresAuth: true },
        cta2Link: { to: '/courses' },
        cta3Link: { to: '/courses/psi' },
    },
    {
        badge: "Foundation Batch 2026-27",
        headline: <>Crack <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">UPSC CSE</span> with Confidence</>,
        subheadline: "An integrated Prelims-to-Interview roadmap designed for beginners. Build a rock-solid foundation with personal mentorship.",
        points: ["NCERT to Advanced Level", "Daily Answer Writing", "Current Affairs Magazine"],
        image: "/images/hero/upsc.png",
        cta1: "Enroll Now",
        cta2: "Course Details",
        cta3: "About the Exam",
        cta1Link: { requiresAuth: true },
        cta2Link: { to: '/courses' },
        cta3Link: { to: '/courses/upsc-cse' },
    },
];

const allExamsList = [
    "UPSC CSE", "KPSC", "Police Exams", "Judiciary", "AEE/AE/JE (Technical)", "KEA", "Banking", "KMF", "Physical Training", "KAS/AC-SAAD/ACF", "Group B Posts", "FDA / SDA", "Civil Judge", "CLAT", "K-SET", "D-CET", "SBI / IBPS PO", "RRB NTPC"
];

const courseFeatures = [
    { icon: <VideoCameraIcon className="w-6 h-6 text-sunrise-orange" />, title: "Live & Recorded Classes", description: "Flexible learning with live interaction and unlimited recorded access." },
    { icon: <ChatAlt2Icon className="w-6 h-6 text-sunrise-orange" />, title: "English / ಕನ್ನಡ Medium", description: "Complete instruction available in both English and Kannada." },
    { icon: <DownloadIcon className="w-6 h-6 text-sunrise-orange" />, title: "Offline App Access", description: "Download lectures and study without internet connectivity." },
    { icon: <DocumentTextIcon className="w-6 h-6 text-sunrise-orange" />, title: "Comprehensive Notes", description: "Detailed, high-quality notes covering every syllabus topic." },
    { icon: <LightBulbIcon className="w-6 h-6 text-sunrise-orange" />, title: "Doubt Solving", description: "Dedicated sessions to clear concepts and queries instantly." },
    { icon: <AcademicCapIcon className="w-6 h-6 text-sunrise-orange" />, title: "Expert Faculty", description: "Learn from experienced educators and subject matter experts." },
    { icon: <StarIcon className="w-6 h-6 text-sunrise-orange" />, title: "Topper Guidance", description: "Exclusive interaction sessions with previous rank holders." },
    { icon: <ClipboardListIcon className="w-6 h-6 text-sunrise-orange" />, title: "Test Series", description: " rigorous full-length and sectional mock tests with analysis." },
    { icon: <BookOpenIcon className="w-6 h-6 text-sunrise-orange" />, title: "NCERT Foundation", description: "Strong emphasis on building basics through NCERTs." },
    { icon: <RefreshIcon className="w-6 h-6 text-sunrise-orange" />, title: "Revision Modules", description: "Structured revision classes to consolidate learning before exams." },
    { icon: <UserIcon className="w-6 h-6 text-sunrise-orange" />, title: "1-on-1 Mentorship", description: "Personalized guidance to track progress and strategy." },
    { icon: <UsersIcon className="w-6 h-6 text-sunrise-orange" />, title: "Peer Learning", description: "A competitive yet collaborative environment for aspirants." },
    { icon: <CogIcon className="w-6 h-6 text-sunrise-orange" />, title: "Structured Curriculum", description: "Systematically designed course flow for timely syllabus completion." },
    { icon: <GlobeAltIcon className="w-6 h-6 text-sunrise-orange" />, title: "Current Affairs", description: "Free access to our monthly magazine and daily updates." },
];

const HomePage: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [mentorForm, setMentorForm] = useState({ name: '', phone: '' });
    const [mentorStatus, setMentorStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const SLIDE_DURATION = 6000;

    const featuredPrograms = [
        { ...coursesData[0].courses[0], tag: "New Batch", isFlagship: true }, // UPSC Foundation
        { ...coursesData[1].courses[0], tag: "Top Rated", isFlagship: true }, // KAS Program
        { ...coursesData[1].courses[1], tag: "English/Kannada", isFlagship: true }, // AC-SAAD Program - updated tag
        { ...coursesData[2].courses[0], tag: "Popular", isFlagship: true }, // PSI/PC Program
    ];

    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev === carouselSlides.length - 1 ? 0 : prev + 1));
    }, []);

    const prevSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev === 0 ? carouselSlides.length - 1 : prev - 1));
    }, []);

    useEffect(() => {
        const timer = setInterval(nextSlide, SLIDE_DURATION);
        return () => clearInterval(timer);
    }, [nextSlide]);

    const handleTouchStart = (e: React.TouchEvent) => {
        (e as any).touchStartX = e.touches[0].clientX;
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        const touchStartX = (e as any).touchStartX;
        if (touchStartX === undefined) return;
        const touchEndX = e.changedTouches[0].clientX;
        const diff = touchStartX - touchEndX;

        if (Math.abs(diff) > 50) {
            if (diff > 0) nextSlide();
            else prevSlide();
        }
    };

    const handleMentorSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setMentorStatus('loading');
        try {
            await submitToGoogleSheet({ FormType: 'Talk to Mentor', ...mentorForm });
            setMentorStatus('success');
            setMentorForm({ name: '', phone: '' });
            setTimeout(() => setMentorStatus('idle'), 5000);
        } catch (error) {
            console.error(error);
            setMentorStatus('error');
        }
    };

    return (
        <div>
            <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        @keyframes kenburns { 0% { transform: scale(1); } 100% { transform: scale(1.1); } }
        .animate-ken-burns { animation: kenburns 10s ease-out infinite alternate; }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; }
        @keyframes float { 0% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-15px) rotate(1deg); } 100% { transform: translateY(0px) rotate(0deg); } }
        .animate-float { animation: float 5.3s ease-in-out infinite; }
        
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-ticker {
          animation: ticker 12s linear infinite;
        }

        @media (max-width: 768px) {
          .animate-ticker {
            animation: ticker 8s linear infinite;
          }
        }

        .animation-delay-200 { animation-delay: 0.2s; }
        .animation-delay-400 { animation-delay: 0.4s; }
        .animation-delay-600 { animation-delay: 0.6s; }

        @keyframes pulse-soft {
            0% { box-shadow: 0 0 0 0 rgba(247, 127, 0, 0.4); }
            70% { box-shadow: 0 0 0 10px rgba(247, 127, 0, 0); }
            100% { box-shadow: 0 0 0 0 rgba(247, 127, 0, 0); }
        }
        .animate-pulse-soft { animation: pulse-soft 2s infinite; }
      `}</style>

            {/* Cinematic Hero Section - Optimized Compact Height */}
            <section className="relative min-h-[500px] md:h-[65vh] w-full overflow-hidden text-white bg-slate-900" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
                {carouselSlides.map((slide, index) => (
                    <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
                        <div className="absolute inset-0 overflow-hidden">
                            <img src={slide.image} alt={slide.badge} className={`w-full h-full object-cover transform origin-center ${index === currentSlide ? 'animate-ken-burns' : ''}`} />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/70 to-transparent"></div>
                        <div className="absolute inset-0 container mx-auto px-4 md:px-8 flex flex-col justify-center h-full">
                            <div className="max-w-3xl space-y-3 md:space-y-5 pl-2 md:pl-0 pb-10 md:pb-0">
                                <div className={`flex flex-wrap items-center gap-3 ${index === currentSlide ? 'animate-fade-in-up' : 'opacity-0'}`}>
                                    <span className="bg-sunrise-orange/90 backdrop-blur-sm text-white text-[10px] md:text-sm font-bold uppercase px-4 py-1.5 rounded-full tracking-wider shadow-lg border border-white/20">{slide.badge}</span>
                                    {slide.medium && <span className="bg-white/20 backdrop-blur-sm text-white text-[10px] md:text-sm font-bold px-3 py-1.5 rounded-full border border-white/20 shadow-md">{slide.medium}</span>}
                                </div>
                                <h1 className={`text-2xl md:text-5xl lg:text-6xl font-extrabold font-montserrat leading-tight drop-shadow-lg ${index === currentSlide ? 'animate-fade-in-up animation-delay-200' : 'opacity-0'}`}>{slide.headline}</h1>
                                <p className={`text-sm md:text-lg text-gray-200 font-medium leading-relaxed max-w-2xl drop-shadow-md ${index === currentSlide ? 'animate-fade-in-up animation-delay-400' : 'opacity-0'}`}>{slide.subheadline}</p>
                                <ul className={`hidden md:flex flex-wrap gap-3 ${index === currentSlide ? 'animate-fade-in-up animation-delay-600' : 'opacity-0'}`}>
                                    {slide.points.map(point => (
                                        <li key={point} className="flex items-center bg-white/10 backdrop-blur-md rounded-full px-3 py-1 border border-white/10">
                                            <CheckCircleIcon className="w-3 h-3 text-green-400 mr-2" /><span className="text-xs font-semibold">{point}</span>
                                        </li>
                                    ))}
                                </ul>
                                {/* Optimized Button Layout */}
                                <div className={`flex flex-row flex-wrap items-center gap-3 pt-6 md:pt-4 ${index === currentSlide ? 'animate-fade-in-up animation-delay-600' : 'opacity-0'}`}>
                                    <CTAButton variant="primary" className="shadow-orange-500/30 shadow-lg !py-3 !px-8 text-sm md:text-base" {...slide.cta1Link}>{slide.cta1}</CTAButton>
                                    <CTAButton variant="secondary" className="backdrop-blur-sm hover:bg-white/10 !py-1.5 !px-4 md:!py-2 md:!px-6 text-[10px] md:text-sm" {...slide.cta2Link}>{slide.cta2}</CTAButton>
                                    <CTAButton variant="secondary" {...slide.cta3Link} className="backdrop-blur-sm hover:bg-white/10 !py-1.5 !px-4 md:!py-2 md:!px-6 text-[10px] md:text-xs flex items-center group/info">
                                        {slide.cta3}
                                        <ChevronRightIcon className="w-3 h-3 md:w-4 md:h-4 ml-1.5 transform group-hover/info:translate-x-1 transition-transform" />
                                    </CTAButton>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                <button onClick={prevSlide} className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 p-2 md:p-3 bg-black/20 hover:bg-black/50 backdrop-blur-sm rounded-full text-white transition-all z-20 border border-white/10 group"><ArrowLeftIcon className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform" /></button>
                <button onClick={nextSlide} className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 p-2 md:p-3 bg-black/20 hover:bg-black/50 backdrop-blur-sm rounded-full text-white transition-all z-20 border border-white/10 group"><ArrowRightIcon className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform" /></button>
                <div className="absolute bottom-0 left-0 w-full z-20 bg-black/60 backdrop-blur-md border-t border-white/10">
                    <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center py-3 text-xs md:text-sm text-gray-300">
                        <div className="flex space-x-6 mb-2 md:mb-0 overflow-x-auto scrollbar-hide w-full md:w-auto pb-1 md:pb-0">
                            <div className="flex items-center whitespace-nowrap"><UsersIcon className="w-4 h-4 mr-2 text-sunrise-orange" /><span><strong className="text-white">Trusted</strong> by Aspirants</span></div>
                            <div className="flex items-center whitespace-nowrap"><AcademicCapIcon className="w-4 h-4 mr-2 text-sunrise-orange" /><span><strong className="text-white">50+</strong> Expert Faculty</span></div>
                            <div className="flex items-center whitespace-nowrap hidden sm:flex"><GlobeAltIcon className="w-4 h-4 mr-2 text-sunrise-orange" /><span>Online & Offline</span></div>
                        </div>
                        <div className="flex space-x-2">
                            {carouselSlides.map((_, index) => (
                                <button key={index} onClick={() => setCurrentSlide(index)} className="relative h-1.5 w-8 md:w-12 bg-gray-600 rounded-full overflow-hidden hover:bg-gray-500 transition-colors focus:outline-none" aria-label={`Go to slide ${index + 1}`}>
                                    <div className={`absolute top-0 left-0 h-full bg-sunrise-orange transition-all duration-300 ease-linear ${index === currentSlide ? 'w-full' : index < currentSlide ? 'w-full opacity-50' : 'w-0'}`} style={{ transitionDuration: index === currentSlide ? `${SLIDE_DURATION}ms` : '300ms' }}></div>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Flagship Programs Section */}
            <section className="py-12 bg-white dark:bg-slate-900 transition-colors duration-300 relative overflow-hidden">
                <div className="absolute top-1/4 left-0 w-96 h-96 bg-empower-blue/5 rounded-full blur-[120px] pointer-events-none"></div>
                <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-sunrise-orange/5 rounded-full blur-[120px] pointer-events-none"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-8 relative">
                        <div className="inline-flex items-center space-x-2 bg-sunrise-orange/10 dark:bg-orange-500/20 text-sunrise-orange text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest mb-4 border border-sunrise-orange/20 animate-pulse-soft">
                            <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sunrise-orange opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-sunrise-orange"></span></span>
                            <span>Admissions Open 2026-27</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black font-montserrat text-charcoal-gray dark:text-white mb-4 tracking-tight">Our Flagship Programs</h2>
                        <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto font-medium text-xs md:text-sm px-2">Elite preparation strategies designed by former bureaucrats and subject domain experts.</p>
                    </div>

                    <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-4 px-4 pb-8 pt-8 sm:mx-0 sm:px-0 sm:pb-0 sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                        {featuredPrograms.map((course, index) => (
                            <div key={index} className="relative flex-shrink-0 w-[290px] sm:w-auto snap-center group">
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20 whitespace-nowrap bg-white dark:bg-slate-800 px-5 py-2 rounded-full shadow-[0_4px_15px_rgba(0,0,0,0.1)] border border-gray-100 dark:border-gray-700">
                                    <p className="text-[10px] font-black uppercase tracking-[0.15em] text-sunrise-orange">{course.tag}</p>
                                </div>
                                <CourseCard course={course} index={index} />
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-10">
                        <CTAButton to="/courses" variant="secondary-blue" className="text-xs px-12 py-4 uppercase font-black tracking-[0.2em] shadow-xl hover:shadow-empower-blue/20">
                            Explore All Our Courses
                        </CTAButton>
                    </div>
                </div>
            </section>

            {/* Exam Ticker Strip */}
            <section className="bg-gradient-to-r from-empower-blue via-blue-900 to-empower-blue py-10 overflow-hidden relative border-y border-white/20 shadow-[inset_0_0_40px_rgba(0,0,0,0.3)]">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none"></div>
                <div className="flex whitespace-nowrap animate-ticker group">
                    {[...allExamsList, ...allExamsList, ...allExamsList, ...allExamsList].map((exam, i) => (
                        <div key={i} className="flex items-center mx-12">
                            <StarIcon className="w-5 h-5 text-sunrise-orange mr-5 opacity-80" />
                            <span className="text-2xl md:text-4xl font-black font-montserrat text-white tracking-tighter uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                                {exam}
                            </span>
                        </div>
                    ))}
                </div>
                <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-empower-blue to-transparent z-10"></div>
                <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-empower-blue to-transparent z-10"></div>
            </section>

            {/* Why Choose Section */}
            <section className="py-16 bg-white dark:bg-slate-800 border-t border-gray-100 dark:border-gray-700 transition-colors duration-300">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl md:text-3xl font-extrabold font-montserrat text-charcoal-gray dark:text-white">Why Choose Encourage India?</h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
                        {courseFeatures.map((feature, index) => (
                            <div key={index} className="flex items-center p-3 md:p-4 rounded-lg bg-gray-50 dark:bg-slate-700/50 border border-gray-100 dark:border-gray-700 hover:border-empower-blue/50 hover:shadow-md transition-all duration-300 group cursor-default" title={feature.description}>
                                <div className="flex-shrink-0 mr-3">
                                    <div className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">{feature.icon}</div>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="text-xs md:text-sm font-bold text-charcoal-gray dark:text-gray-100 group-hover:text-empower-blue dark:group-hover:text-blue-300 transition-colors leading-snug">{feature.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-empower-blue dark:text-blue-400">What Our Mentors Say</h2>
                    <div className="grid md:grid-cols-3 gap-8 mt-12">
                        {testimonials.map((testimonial) => (
                            <div key={testimonial.name} className="bg-soft-gray dark:bg-slate-800 p-8 rounded-lg text-left relative transition-colors duration-300">
                                <QuoteIcon className="w-16 h-16 text-empower-blue/10 dark:text-white/10 absolute top-4 right-4" />
                                <p className="text-charcoal-gray/90 dark:text-gray-200 italic">"{testimonial.quote}"</p>
                                <div className="mt-6 flex items-center">
                                    <img src={testimonial.image} alt={testimonial.name} className="w-14 h-14 rounded-full object-cover mr-4" />
                                    <div>
                                        <h4 className="font-bold font-montserrat text-charcoal-gray dark:text-white">{testimonial.name}</h4>
                                        <p className="text-sm text-sunrise-orange">{testimonial.achievement}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-12">
                        <CTAButton to="/results" variant="secondary-blue" className="text-xs px-10 py-3 uppercase font-black tracking-widest">
                            View All Results & Testimonials
                        </CTAButton>
                    </div>
                </div>
            </section>

            {/* Mentor Section */}
            <section className="bg-empower-blue text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold font-montserrat">Talk to a Mentor</h2>
                    <p className="mt-4 max-w-2xl mx-auto">Get your doubts cleared and receive expert guidance for your preparation journey.</p>
                    {mentorStatus === 'success' ? (
                        <div className="mt-8 bg-white/10 border border-white/20 rounded-lg p-6 max-w-lg mx-auto animate-fade-in">
                            <CheckCircleIcon className="w-12 h-12 text-green-400 mx-auto mb-2" />
                            <h3 className="text-xl font-bold">Request Received!</h3>
                            <p className="text-soft-gray">Our mentor will call you shortly.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleMentorSubmit} className="mt-8 max-w-lg mx-auto flex flex-col sm:flex-row gap-4">
                            <input type="text" placeholder="Your Name" className="flex-grow p-3 rounded-lg text-charcoal-gray focus:outline-none focus:ring-2 focus:ring-sunrise-orange disabled:bg-gray-200" value={mentorForm.name} onChange={(e) => setMentorForm({ ...mentorForm, name: e.target.value })} required disabled={mentorStatus === 'loading'} />
                            <input type="tel" placeholder="Phone Number" className="flex-grow p-3 rounded-lg text-charcoal-gray focus:outline-none focus:ring-2 focus:ring-sunrise-orange disabled:bg-gray-200" value={mentorForm.phone} onChange={(e) => setMentorForm({ ...mentorForm, phone: e.target.value })} pattern="[0-9]{10}" required disabled={mentorStatus === 'loading'} />
                            <CTAButton type="submit" variant="primary" className={`shrink-0 ${mentorStatus === 'loading' ? 'opacity-70 cursor-not-allowed' : ''}`}>{mentorStatus === 'loading' ? 'Sending...' : 'Request a Call'}</CTAButton>
                        </form>
                    )}
                    {mentorStatus === 'error' && <p className="mt-2 text-red-300">Something went wrong. Please try again.</p>}
                </div>
            </section>

            {/* Sleek App Download Section - Compact & Mobile Optimized */}
            <section className="py-12 relative overflow-hidden bg-white dark:bg-slate-900 border-t border-gray-100 dark:border-gray-800 transition-colors duration-300">
                <div className="container mx-auto px-4 md:px-8 relative z-10">
                    <div className="bg-slate-50 dark:bg-slate-800/50 rounded-[2rem] p-6 md:p-10 border border-gray-100 dark:border-gray-700 shadow-lg relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-empower-blue/5 to-transparent pointer-events-none"></div>

                        <div className="grid lg:grid-cols-2 gap-10 items-center">
                            <div className="space-y-6">
                                <div className="space-y-4">
                                    <div className="inline-flex items-center space-x-2 px-3 py-1 bg-sunrise-orange/10 text-sunrise-orange text-[10px] font-black uppercase tracking-[0.2em] rounded">
                                        <span>Learn on the Go</span>
                                    </div>
                                    <h2 className="text-2xl md:text-4xl font-black font-montserrat text-charcoal-gray dark:text-white leading-tight tracking-tight">
                                        Your <span className="text-empower-blue dark:text-blue-400">Classroom</span>, Everywhere.
                                    </h2>
                                    <p className="text-base text-charcoal-gray/70 dark:text-gray-300 font-medium leading-relaxed max-w-xl">
                                        Download our app for access to free test series (PYQ + monthly current affairs based), free video lectures & more right at your fingertips.
                                    </p>
                                </div>

                                <div className="space-y-3">
                                    {[
                                        "PYQ Test Series (UPSC / KPSC / Police / Judiciary)",
                                        "Monthly current affairs based test series",
                                        "High quality video lectures."
                                    ].map((feat, i) => (
                                        <div key={i} className="flex items-start">
                                            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center mr-3 mt-0.5">
                                                <CheckCircleIcon className="w-3 h-3 text-green-500" />
                                            </div>
                                            <span className="text-charcoal-gray dark:text-gray-200 font-bold text-sm md:text-base">{feat}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                                    <a
                                        href="https://play.google.com/store/apps/details?id=co.barney.yflbb"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full sm:w-auto flex items-center justify-center bg-slate-900 text-white px-6 py-3 rounded-xl hover:bg-black transition-all shadow-md active:scale-95 group/btn"
                                    >
                                        <GooglePlayIcon className="w-6 h-6 mr-3" />
                                        <div className="flex flex-col items-start leading-none">
                                            <span className="text-[9px] uppercase font-bold tracking-widest opacity-60 mb-0.5">Get it on</span>
                                            <span className="text-base font-bold">Google Play</span>
                                        </div>
                                    </a>

                                    <div className="flex items-center gap-3 p-2.5 bg-white dark:bg-slate-700 border border-gray-100 dark:border-gray-600 rounded-xl shadow-sm">
                                        <img src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=https://play.google.com/store/apps/details?id=co.barney.yflbb" alt="QR Code" className="w-10 h-10 rounded shadow-xs" />
                                        <div className="text-left leading-tight">
                                            <p className="text-[9px] font-black text-sunrise-orange uppercase tracking-wider">Quick Scan</p>
                                            <p className="text-[10px] text-gray-400 font-medium">Instant Access</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-center relative mt-8 lg:mt-0">
                                <div className="relative">
                                    <div className="w-[200px] md:w-[250px] relative rounded-[2rem] border-[6px] border-slate-900 shadow-xl overflow-hidden bg-white">
                                        <img src="/app-mockup-playstore.png" alt="Encourage India App" className="w-full h-auto" />
                                    </div>

                                    {/* Compact Vertical Badges */}
                                    <div className="absolute top-4 -right-10 md:-right-12 space-y-3">
                                        <div className="bg-white dark:bg-slate-700 p-3 rounded-xl shadow-lg border border-gray-50 dark:border-gray-600 flex flex-col items-center animate-float">
                                            <div className="flex text-sunrise-orange mb-0.5">
                                                {[1, 2, 3, 4, 5].map(s => <StarIcon key={s} className="w-2 h-2" />)}
                                            </div>
                                            <p className="text-[14px] font-black text-slate-900 dark:text-white leading-none">4.9</p>
                                            <p className="text-[7px] text-gray-400 font-bold uppercase mt-0.5">Rating</p>
                                        </div>

                                        <div className="bg-white dark:bg-slate-700 p-3 rounded-xl shadow-lg border border-gray-50 dark:border-gray-600 flex flex-col items-center animate-float" style={{ animationDelay: '1.5s' }}>
                                            <p className="text-[14px] font-black text-empower-blue leading-none">10K+</p>
                                            <p className="text-[7px] text-gray-400 font-bold uppercase mt-0.5">Users</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Downgraded Final CTA Section - Clean Professional Standard */}
            <section className="bg-slate-900 text-white py-20 border-t border-white/5">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold font-montserrat mb-6">Ready to start your success story?</h2>
                    <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                        Join thousands of successful aspirants who trusted Encourage India to brighten their future.
                    </p>
                    <CTAButton
                        requiresAuth
                        variant="primary"
                        className="text-lg px-12 py-4 shadow-xl !rounded-lg"
                    >
                        Enroll Now for 2026-27
                    </CTAButton>
                </div>
            </section>
        </div>
    );
};

export default HomePage;