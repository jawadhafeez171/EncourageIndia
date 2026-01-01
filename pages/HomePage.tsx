import React, { useState, useEffect, useRef, useCallback } from 'react';
import CTAButton from '../components/CTAButton';
import CourseCard from '../components/CourseCard';
import { StarIcon, QuoteIcon, CheckCircleIcon, ArrowLeftIcon, ArrowRightIcon, GooglePlayIcon, AcademicCapIcon, BookOpenIcon, LightningBoltIcon, ShieldCheckIcon, CalendarIcon, ClockIcon, DesktopComputerIcon, DownloadIcon, UsersIcon, GlobeAltIcon, ChevronRightIcon, VideoCameraIcon, ChatAlt2Icon, DocumentTextIcon, LightBulbIcon, RefreshIcon, UserIcon, ClipboardListIcon, CogIcon } from '../components/Icons';
import { testimonials, coursesData } from '../constants';
import { submitToGoogleSheet } from '../services/googleSheetService';

const carouselSlides = [
    {
        badge: "Recruitment Alert",
        medium: "English / ಕನ್ನಡ",
        headline: <>Power Your Career with <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">KPCL AE/JE</span></>,
        subheadline: "Comprehensive coaching for Assistant & Junior Engineer posts. Master technical concepts with Karnataka's top engineering faculty.",
        points: ["Complete Technical Syllabus", "General Awareness Module", "Mock Tests & Analysis"],
        image: "https://picsum.photos/seed/kpcl/1920/1080",
        cta1: "Enroll Now",
        cta2: "Course Details",
        cta3: "About the Exam",
        cta1Link: { requiresAuth: true },
        cta2Link: { to: '/courses/kpcl' },
        cta3Link: { to: '/courses/kpcl' },
    },
    {
        badge: "Multiple Vacancies",
        medium: "English / ಕನ್ನಡ",
        headline: <>KEA Group <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500">A, B, C & D</span> Exams</>,
        subheadline: "One-stop coaching solution for all KEA Technical (AE/JE) and Non-Technical (FDA/SDA/Group-C) posts.",
        points: ["Technical & Non-Tech Batches", "General Kannada/English", "Subject Experts"],
        image: "https://picsum.photos/seed/kea_hero/1920/1080",
        cta1: "Enroll Now",
        cta2: "Technical Courses",
        cta3: "Non-Technical Courses",
        cta1Link: { requiresAuth: true },
        cta2Link: { to: '/courses/kea-tech' },
        cta3Link: { to: '/courses/kea-group-b-c-d' },
    },
    {
        badge: "Admissions Open",
        medium: "English / ಕನ್ನಡ",
        headline: <>Cultivate Success in <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600 whitespace-nowrap">Agriculture (AO/AAO)</span></>,
        subheadline: "Specialized program for KPSC Agriculture Officer posts. Detailed coverage of B.Sc (Agri) syllabus and GK paper.",
        points: ["Expert Agriculture Faculty", "Bilingual Study Material", "Focused Test Series"],
        image: "https://picsum.photos/seed/agriculture/1920/1080",
        cta1: "Enroll Now",
        cta2: "Course Details",
        cta3: "About the Exam",
        cta1Link: { requiresAuth: true },
        cta2Link: { to: '/courses/kpsc-ao-aao' },
        cta3Link: { to: '/courses/kpsc-ao-aao' },
    },
    {
        badge: "Mass Recruitment",
        medium: "English / ಕನ್ನಡ",
        headline: <>Secure a Govt Job in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">KMF SHIMUL</span></>,
        subheadline: "Targeting 194+ Vacancies. A focused crash course covering Co-operative Laws, General Kannada/English, and Computer knowledge.",
        points: ["Co-operative Act Coverage", "Exam-Oriented Approach", "Daily Quizzes"],
        image: "https://picsum.photos/seed/kmf/1920/1080",
        cta1: "Enroll Now",
        cta2: "Course Details",
        cta3: "About the Exam",
        cta1Link: { requiresAuth: true },
        cta2Link: { to: '/courses/kmf-shimul' },
        cta3Link: { to: '/courses/kmf-shimul' },
    },
    {
        badge: "Uniformed Services",
        medium: "English / ಕನ್ನಡ",
        headline: <>Wear the Khaki with Pride: <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-700">PSI & PC</span></>,
        subheadline: "Rigorous training for Karnataka State Police recruitment. Master both Physical and Written challenges with our expert guidance.",
        points: ["Physical Training Guidance", "Bilingual Classes", "Weekly Mock Tests"],
        image: "https://picsum.photos/seed/ksp_police/1920/1080",
        cta1: "Enroll Now",
        cta2: "Course Details",
        cta3: "About the Exam",
        cta1Link: { requiresAuth: true },
        cta2Link: { to: '/courses/psi' },
        cta3Link: { to: '/courses/psi' },
    },
    {
        badge: "Foundation Batch 2026",
        headline: <>Crack <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">UPSC CSE</span> with Confidence</>,
        subheadline: "An integrated Prelims-to-Interview roadmap designed for beginners. Build a rock-solid foundation with personal mentorship.",
        points: ["NCERT to Advanced Level", "Daily Answer Writing", "Current Affairs Magazine"],
        image: "https://picsum.photos/seed/upsc/1920/1080",
        cta1: "Enroll Now",
        cta2: "Course Details",
        cta3: "About the Exam",
        cta1Link: { requiresAuth: true },
        cta2Link: { to: '/courses/upsc-cse' },
        cta3Link: { to: '/courses/upsc-cse' },
    },
];

const allExamsList = [
    "UPSC CSE", "KPSC KAS", "PSI / ESI", "Police Constable", "AC-SAAD", "ACF / RFO / DRFO", "Agriculture Officer", "Group B Posts", "FDA / SDA", "PDO", "KEA Technical", "KPCL AE/JE", "KPSC Technical", "Village Admin Officer", "Civil Judge", "District Judge", "CLAT", "AIBE", "K-SET", "D-CET", "KMF SHIMUL", "Banking IBPS", "SSC CGL", "RRB NTPC"
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
        { ...coursesData[1].courses[1], tag: "Flagship", isFlagship: true }, // AC-SAAD Program
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
        @keyframes scan { 0% { transform: translateY(-10px); opacity: 0; } 50% { opacity: 1; } 100% { transform: translateY(110px); opacity: 0; } }
        .animate-scan { animation: scan 3s ease-in-out infinite; }
        
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-ticker {
          animation: ticker 18s linear infinite;
        }
        .animate-ticker:hover {
          animation-play-state: paused;
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

      {/* Cinematic Hero Section */}
      <section className="relative h-[85vh] w-full overflow-hidden text-white bg-slate-900" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
          {carouselSlides.map((slide, index) => (
              <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
                  <div className="absolute inset-0 overflow-hidden">
                      <img src={slide.image} alt={slide.badge} className={`w-full h-full object-cover transform origin-center ${index === currentSlide ? 'animate-ken-burns' : ''}`} />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/70 to-transparent"></div>
                  <div className="absolute inset-0 container mx-auto px-4 md:px-8 flex flex-col justify-center h-full">
                      <div className="max-w-3xl space-y-6 pl-2 md:pl-0 pb-24 md:pb-0">
                          <div className={`flex flex-wrap items-center gap-3 ${index === currentSlide ? 'animate-fade-in-up' : 'opacity-0'}`}>
                              <span className="bg-sunrise-orange/90 backdrop-blur-sm text-white text-xs md:text-sm font-bold uppercase px-4 py-1.5 rounded-full tracking-wider shadow-lg border border-white/20">{slide.badge}</span>
                              {slide.medium && <span className="bg-white/20 backdrop-blur-sm text-white text-xs md:text-sm font-bold px-3 py-1.5 rounded-full border border-white/20 shadow-md">{slide.medium}</span>}
                          </div>
                          <h1 className={`text-4xl md:text-6xl lg:text-7xl font-extrabold font-montserrat leading-tight drop-shadow-lg ${index === currentSlide ? 'animate-fade-in-up animation-delay-200' : 'opacity-0'}`}>{slide.headline}</h1>
                          <p className={`text-lg md:text-xl text-gray-200 font-medium leading-relaxed max-w-2xl drop-shadow-md ${index === currentSlide ? 'animate-fade-in-up animation-delay-400' : 'opacity-0'}`}>{slide.subheadline}</p>
                          <ul className={`hidden md:flex flex-wrap gap-4 ${index === currentSlide ? 'animate-fade-in-up animation-delay-600' : 'opacity-0'}`}>
                            {slide.points.map(point => (
                                <li key={point} className="flex items-center bg-white/10 backdrop-blur-md rounded-full px-4 py-1.5 border border-white/10">
                                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2"/><span className="text-sm font-semibold">{point}</span>
                                </li>
                            ))}
                          </ul>
                          <div className={`flex flex-wrap gap-3 pt-4 ${index === currentSlide ? 'animate-fade-in-up animation-delay-600' : 'opacity-0'}`}>
                              <CTAButton variant="primary" className="shadow-orange-500/30 shadow-lg" {...slide.cta1Link}>{slide.cta1}</CTAButton>
                              <CTAButton variant="secondary" className="backdrop-blur-sm hover:bg-white/10" {...slide.cta2Link}>{slide.cta2}</CTAButton>
                              <CTAButton {...slide.cta3Link} className="flex items-center font-montserrat font-semibold text-white/90 hover:text-sunrise-orange transition-colors px-4 py-3">{slide.cta3}<ChevronRightIcon className="w-4 h-4 ml-1" /></CTAButton>
                          </div>
                      </div>
                  </div>
              </div>
          ))}
            <button onClick={prevSlide} className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 p-2 md:p-3 bg-black/20 hover:bg-black/50 backdrop-blur-sm rounded-full text-white transition-all z-20 border border-white/10 group"><ArrowLeftIcon className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform"/></button>
            <button onClick={nextSlide} className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 p-2 md:p-3 bg-black/20 hover:bg-black/50 backdrop-blur-sm rounded-full text-white transition-all z-20 border border-white/10 group"><ArrowRightIcon className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform"/></button>
            <div className="absolute bottom-0 left-0 w-full z-20 bg-black/60 backdrop-blur-md border-t border-white/10">
                <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center py-3 text-xs md:text-sm text-gray-300">
                    <div className="flex space-x-6 mb-2 md:mb-0">
                        <div className="flex items-center"><UsersIcon className="w-4 h-4 mr-2 text-sunrise-orange"/><span><strong className="text-white">Trusted</strong> by Aspirants</span></div>
                        <div className="flex items-center"><AcademicCapIcon className="w-4 h-4 mr-2 text-sunrise-orange"/><span><strong className="text-white">50+</strong> Expert Faculty</span></div>
                        <div className="flex items-center hidden sm:flex"><GlobeAltIcon className="w-4 h-4 mr-2 text-sunrise-orange"/><span>Online & Offline</span></div>
                    </div>
                    <div className="flex space-x-2">
                        {carouselSlides.map((_, index) => (
                            <button key={index} onClick={() => setCurrentSlide(index)} className="relative h-1.5 w-10 md:w-12 bg-gray-600 rounded-full overflow-hidden hover:bg-gray-500 transition-colors focus:outline-none" aria-label={`Go to slide ${index + 1}`}>
                                <div className={`absolute top-0 left-0 h-full bg-sunrise-orange transition-all duration-300 ease-linear ${index === currentSlide ? 'w-full' : index < currentSlide ? 'w-full opacity-50' : 'w-0'}`} style={{ transitionDuration: index === currentSlide ? `${SLIDE_DURATION}ms` : '300ms' }}></div>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300 relative overflow-hidden">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-empower-blue/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-sunrise-orange/5 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16 relative">
                <div className="inline-flex items-center space-x-2 bg-sunrise-orange/10 dark:bg-orange-500/20 text-sunrise-orange text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest mb-4 border border-sunrise-orange/20 animate-pulse-soft">
                    <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sunrise-orange opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-sunrise-orange"></span></span>
                    <span>Admissions Open 2025</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-black font-montserrat text-charcoal-gray dark:text-white mb-6 tracking-tight">Our Flagship Programs</h2>
                <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto font-medium text-sm md:text-base px-2">Elite preparation strategies designed by former bureaucrats and subject domain experts.</p>
            </div>

            {/* Grid Container - Added pt-12 to fix tag visibility */}
            <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-4 px-4 pb-12 pt-12 sm:mx-0 sm:px-0 sm:pb-0 sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                {featuredPrograms.map((course, index) => (
                    <div key={index} className="relative flex-shrink-0 w-[290px] sm:w-auto snap-center">
                        {/* Status Tag - Re-styled for visibility */}
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20 whitespace-nowrap bg-white dark:bg-slate-800 px-5 py-2 rounded-full shadow-[0_4px_15px_rgba(0,0,0,0.1)] border border-gray-100 dark:border-gray-700">
                             <p className="text-[10px] font-black uppercase tracking-[0.15em] text-sunrise-orange">{course.tag}</p>
                        </div>
                        <CourseCard course={course} index={index} />
                    </div>
                ))}
            </div>
            
            <div className="text-center mt-16">
                <CTAButton to="/courses" variant="secondary-blue" className="text-xs px-12 py-4 uppercase font-black tracking-[0.2em] shadow-xl hover:shadow-empower-blue/20">
                    Explore All Our Courses
                </CTAButton>
            </div>
        </div>
      </section>

      {/* High-Velocity Exam Ticker Strip */}
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

      {/* Why Choose Encourage India? */}
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

      {/* Testimonials */}
      <section className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
         <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-empower-blue dark:text-blue-400">What Our Achievers Say</h2>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
                {testimonials.map((testimonial) => (
                    <div key={testimonial.name} className="bg-soft-gray dark:bg-slate-800 p-8 rounded-lg text-left relative transition-colors duration-300">
                        <QuoteIcon className="w-16 h-16 text-empower-blue/10 dark:text-white/10 absolute top-4 right-4" />
                        <p className="text-charcoal-gray/90 dark:text-gray-200 italic">"{testimonial.quote}"</p>
                        <div className="mt-6 flex items-center">
                            <img src={testimonial.image} alt={testimonial.name} className="w-14 h-14 rounded-full object-cover mr-4"/>
                            <div>
                                <h4 className="font-bold font-montserrat text-charcoal-gray dark:text-white">{testimonial.name}</h4>
                                <p className="text-sm text-sunrise-orange">{testimonial.achievement}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
         </div>
      </section>
      
      {/* Talk to a Mentor */}
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
                    <input type="text" placeholder="Your Name" className="flex-grow p-3 rounded-lg text-charcoal-gray focus:outline-none focus:ring-2 focus:ring-sunrise-orange disabled:bg-gray-200" value={mentorForm.name} onChange={(e) => setMentorForm({...mentorForm, name: e.target.value})} required disabled={mentorStatus === 'loading'} />
                    <input type="tel" placeholder="Phone Number" className="flex-grow p-3 rounded-lg text-charcoal-gray focus:outline-none focus:ring-2 focus:ring-sunrise-orange disabled:bg-gray-200" value={mentorForm.phone} onChange={(e) => setMentorForm({...mentorForm, phone: e.target.value})} pattern="[0-9]{10}" required disabled={mentorStatus === 'loading'} />
                    <CTAButton type="submit" variant="primary" className={`shrink-0 ${mentorStatus === 'loading' ? 'opacity-70 cursor-not-allowed' : ''}`}>{mentorStatus === 'loading' ? 'Sending...' : 'Request a Call'}</CTAButton>
                </form>
            )}
             {mentorStatus === 'error' && <p className="mt-2 text-red-300">Something went wrong. Please try again.</p>}
        </div>
      </section>

      {/* Advanced App Hub */}
      <section className="py-24 bg-[#0a0f1d] overflow-hidden relative transition-colors duration-300">
        <div className="absolute top-0 right-0 w-[50%] h-full bg-gradient-to-l from-empower-blue/20 to-transparent pointer-events-none"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-sunrise-orange/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
            <div className="grid lg:grid-cols-12 gap-16 items-center">
                <div className="lg:col-span-6 space-y-10">
                    <div className="space-y-6">
                        <div className="inline-flex items-center space-x-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sunrise-orange text-xs font-black uppercase tracking-[0.2em]"><span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sunrise-orange opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-sunrise-orange"></span></span><span>App Experience Hub</span></div>
                        <h2 className="text-4xl md:text-6xl font-extrabold font-montserrat text-white leading-[1.1]">Your Classroom, <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-sunrise-orange via-orange-400 to-yellow-300">Redefined.</span></h2>
                        <p className="text-lg text-gray-400 leading-relaxed max-w-xl">The <span className="text-white font-bold">encourageINDIAIAS</span> app is more than a tool—it's a high-performance environment designed to maximize every minute of your study time.</p>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {[
                            { icon: <DownloadIcon className="w-5 h-5" />, title: "Smart Downloads", desc: "Adaptive video quality for offline learning." },
                            { icon: <LightningBoltIcon className="w-5 h-5" />, title: "Live Doubt Engine", desc: "Ask questions during live streams directly." },
                            { icon: <RefreshIcon className="w-5 h-5" />, title: "Seamless Sync", desc: "Resume exactly where you left off on any device." },
                            { icon: <StarIcon className="w-5 h-5" />, title: "Performance AI", desc: "Analytics to identify your syllabus weak spots." }
                        ].map((feat, i) => (
                            <div key={i} className="group flex flex-col p-5 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl hover:bg-white/[0.07] hover:border-white/20 transition-all duration-300">
                                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-empower-blue to-blue-600 flex items-center justify-center text-white mb-4 shadow-lg group-hover:scale-110 transition-transform">{feat.icon}</div>
                                <h4 className="font-bold text-white mb-1">{feat.title}</h4>
                                <p className="text-xs text-gray-500 leading-relaxed">{feat.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="lg:col-span-6 relative">
                    <div className="relative z-20 flex justify-center items-center">
                        <div className="animate-float relative">
                            <div className="absolute inset-0 bg-blue-500/20 blur-[120px] rounded-full scale-150"></div>
                            <div className="relative border-[8px] border-[#1e2330] rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] bg-slate-900 overflow-hidden w-[280px] md:w-[320px]">
                                <img src="/app-mockup-playstore.png" alt="App Interface" className="w-full h-auto" />
                            </div>
                            <div className="absolute -right-12 top-[15%] hidden md:block animate-bounce animation-delay-200">
                                <div className="bg-[#161b2e]/90 backdrop-blur-md border border-white/10 p-4 rounded-2xl shadow-2xl flex items-center space-x-4">
                                    <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center"><div className="w-6 h-6 border-2 border-green-500 border-t-transparent rounded-full animate-spin"></div></div>
                                    <div><p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Current Score</p><p className="text-lg font-bold text-white">88% <span className="text-xs text-green-400">+12%</span></p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 md:gap-12 relative z-30">
                        <a href="https://play.google.com/store/apps/details?id=co.barney.yflbb" target="_blank" rel="noopener noreferrer" className="group relative inline-flex items-center bg-white text-charcoal-gray px-8 py-4 rounded-2xl hover:bg-soft-gray transition-all shadow-xl active:scale-95">
                            <GooglePlayIcon className="w-10 h-10 mr-4 text-black" />
                            <div className="flex flex-col items-start"><span className="text-[10px] uppercase font-black tracking-widest opacity-50">Download for</span><span className="text-xl font-bold font-sans rendering-tight">Android Device</span></div>
                        </a>
                        <div className="flex items-center space-x-5 bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-2xl">
                             <div className="relative">
                                <img src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=https://play.google.com/store/apps/details?id=co.barney.yflbb" alt="QR Code" className="w-20 h-20 rounded-lg p-1 bg-white"/>
                                <div className="absolute inset-0 w-full h-[2px] bg-sunrise-orange/60 animate-scan"></div>
                             </div>
                             <div className="max-w-[100px]"><p className="text-xs font-black text-white leading-tight uppercase mb-1">Instant Scan</p><p className="text-[10px] text-gray-500 leading-tight">Camera scan to download instantly</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-empower-blue text-white py-20">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat">Ready to Start Your Success Story?</h2>
            <p className="mt-4 max-w-2xl mx-auto">Join thousands of successful aspirants who trusted Encourage India to guide them.</p>
            <CTAButton requiresAuth variant="primary" className="mt-8 text-lg">Enroll in a Program Today</CTAButton>
        </div>
      </section>
    </div>
  );
};

export default HomePage;