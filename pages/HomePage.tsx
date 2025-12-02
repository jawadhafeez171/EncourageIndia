
import React, { useState, useEffect, useRef } from 'react';
import CTAButton from '../components/CTAButton';
import { StarIcon, QuoteIcon, CheckCircleIcon, ArrowLeftIcon, ArrowRightIcon, GooglePlayIcon, AcademicCapIcon, BookOpenIcon, LightningBoltIcon, ShieldCheckIcon, CalendarIcon, ClockIcon, DesktopComputerIcon, DownloadIcon, ArrowRightIcon as SwipeIcon, UsersIcon, GlobeAltIcon, ChevronRightIcon } from '../components/Icons';
import { testimonials } from '../constants';
import { submitToGoogleSheet } from '../services/googleSheetService';

const carouselSlides = [
    {
        badge: "Recruitment Alert",
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
        badge: "Admissions Open",
        headline: <>Cultivate Success in <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">Agriculture (AO/AAO)</span></>,
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

// Data for Flagship Programs to ensure consistent beautiful styling
const flagshipPrograms = [
    {
        title: "UPSC Civil Services",
        description: "Premier foundation course covering Prelims to Interview with expert mentorship.",
        icon: <AcademicCapIcon className="w-6 h-6 text-white" />,
        meta: {
            duration: "12-15 Months",
            mode: "Offline & Online",
            batch: "June 2025"
        },
        tags: [
            { text: "English Medium", color: "bg-blue-500/20 text-blue-100" },
            { text: "Prelims + Mains", color: "bg-green-500/20 text-green-100" },
             { text: "Test Series", color: "bg-red-500/20 text-red-100" }
        ],
        features: [
            "Integrated Prep",
            "Daily Answer Writing",
            "1-on-1 Mentorship",
            "CSAT & Ethics Focus",
            "NCERT Foundation",
            "Comp. Test Series"
        ],
        link: "/courses/upsc-cse",
        syllabusUrl: "/downloads/upsc-mains-detailed-syllabus.pdf",
        gradient: "from-blue-600 to-blue-800",
        popular: true,
        live: true
    },
    {
        title: "KPSC KAS Foundation",
        description: "Holistic coaching with specific focus on Karnataka history, geography & economy.",
        icon: <BookOpenIcon className="w-6 h-6 text-white" />,
        meta: {
            duration: "10-12 Months",
            mode: "Offline & Online",
            batch: "July 2025"
        },
        tags: [
            { text: "Bilingual", color: "bg-purple-500/20 text-purple-100" },
            { text: "State Focus", color: "bg-yellow-500/20 text-yellow-100" },
            { text: "Test Series", color: "bg-red-500/20 text-red-100" }
        ],
        features: [
            "Prelims-Mains-Interview",
            "Economic Survey",
            "State History/Geog",
            "Essay Workshops",
            "Mental Ability",
            "Full Mock Tests"
        ],
        link: "/courses/kas",
        syllabusUrl: "/downloads/kpsc-prelims-syllabus.pdf",
        gradient: "from-red-600 to-red-800",
        popular: false,
        live: true
    },
    {
        title: "KPSC AC-SAAD",
        description: "Targeted preparation for Assistant Controller in State Accounts Department.",
        icon: <LightningBoltIcon className="w-6 h-6 text-white" />,
        meta: {
            duration: "5-6 Months",
            mode: "Online Live",
            batch: "Admissions Open"
        },
        tags: [
            { text: "Bilingual", color: "bg-purple-500/20 text-purple-100" },
            { text: "Commerce Special", color: "bg-orange-500/20 text-orange-100" },
            { text: "Test Series", color: "bg-red-500/20 text-red-100" }
        ],
        features: [
            "Commerce Expert Faculty",
            "Papers V-VIII Focus",
            "PYQ Analysis",
            "Accounts Terminology",
            "General Studies",
            "Subject Test Series"
        ],
        link: "/courses/ac-saad",
        syllabusUrl: "/downloads/kpsc-ac-saad-prelims-pattern-syllabus.pdf",
        gradient: "from-orange-500 to-orange-700",
        popular: false,
        live: true
    },
    {
        title: "PSI & PC Program",
        description: "Rigorous training for Police Sub-Inspector & Constable exams with physical guidance.",
        icon: <ShieldCheckIcon className="w-6 h-6 text-white" />,
        meta: {
            duration: "4-6 Months",
            mode: "Offline + Ground",
            batch: "New Batch Soon"
        },
        tags: [
            { text: "Bilingual", color: "bg-purple-500/20 text-purple-100" },
            { text: "Physical Training", color: "bg-teal-500/20 text-teal-100" },
            { text: "Test Series", color: "bg-red-500/20 text-red-100" }
        ],
        features: [
            "Translation & Essay",
            "Mental Ability",
            "Physical Guidance",
            "Dept Exam Focus",
            "Weekly Full Mocks",
            "Test Series Included"
        ],
        link: "/courses/psi",
        syllabusUrl: "/downloads/psi-pc-syllabus.pdf",
        gradient: "from-gray-700 to-gray-900",
        popular: false,
        live: true
    }
];

const HomePage: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [mentorForm, setMentorForm] = useState({ name: '', phone: '' });
    const [mentorStatus, setMentorStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [activeCardIndex, setActiveCardIndex] = useState(0);
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const SLIDE_DURATION = 6000;

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev === carouselSlides.length - 1 ? 0 : prev + 1));
        }, SLIDE_DURATION);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => {
      setCurrentSlide((prev) => (prev === carouselSlides.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
      setCurrentSlide((prev) => (prev === 0 ? carouselSlides.length - 1 : prev - 1));
    };

    const handleMentorSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setMentorStatus('loading');
        try {
            await submitToGoogleSheet({
                FormType: 'Talk to Mentor',
                ...mentorForm
            });
            setMentorStatus('success');
            setMentorForm({ name: '', phone: '' });
            setTimeout(() => setMentorStatus('idle'), 5000);
        } catch (error) {
            console.error(error);
            setMentorStatus('error');
        }
    };

    const handleScroll = () => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const scrollLeft = container.scrollLeft;
            const cardWidth = container.offsetWidth * 0.85; // Approximate card width for 85vw
            const index = Math.round(scrollLeft / cardWidth);
            setActiveCardIndex(Math.min(Math.max(index, 0), flagshipPrograms.length - 1));
        }
    };


  return (
    <div>
      {/* Inject global styles for this page to hide scrollbars cleanly and add animations */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        .scrollbar-hide {
            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;  /* Firefox */
        }
        @keyframes kenburns {
            0% { transform: scale(1); }
            100% { transform: scale(1.1); }
        }
        .animate-ken-burns {
            animation: kenburns 10s ease-out infinite alternate;
        }
        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
            animation: fadeInUp 0.8s ease-out forwards;
        }
        .animation-delay-200 { animation-delay: 0.2s; }
        .animation-delay-400 { animation-delay: 0.4s; }
        .animation-delay-600 { animation-delay: 0.6s; }
      `}</style>

      {/* Cinematic Hero Section */}
      <section className="relative h-[85vh] w-full overflow-hidden text-white bg-slate-900">
          {carouselSlides.map((slide, index) => (
              <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
                  {/* Background Image with Ken Burns Effect */}
                  <div className="absolute inset-0 overflow-hidden">
                      <img 
                        src={slide.image} 
                        alt={slide.badge} 
                        className={`w-full h-full object-cover transform origin-center ${index === currentSlide ? 'animate-ken-burns' : ''}`} 
                      />
                  </div>
                  
                  {/* Gradient Overlay - Better visibility for text */}
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/70 to-transparent"></div>
                  
                  {/* Content Container */}
                  <div className="absolute inset-0 container mx-auto px-4 md:px-8 flex flex-col justify-center h-full">
                      {/* Added pb-24 to prevent overlap with bottom bar on small screens */}
                      <div className="max-w-3xl space-y-6 pl-2 md:pl-0 pb-24 md:pb-0">
                          {/* Animated Badge */}
                          <div className={`inline-block ${index === currentSlide ? 'animate-fade-in-up' : 'opacity-0'}`}>
                              <span className="bg-sunrise-orange/90 backdrop-blur-sm text-white text-xs md:text-sm font-bold uppercase px-4 py-1.5 rounded-full tracking-wider shadow-lg border border-white/20">
                                  {slide.badge}
                              </span>
                          </div>

                          {/* Animated Headline */}
                          <h1 className={`text-4xl md:text-6xl lg:text-7xl font-extrabold font-montserrat leading-tight drop-shadow-lg ${index === currentSlide ? 'animate-fade-in-up animation-delay-200' : 'opacity-0'}`}>
                              {slide.headline}
                          </h1>

                          {/* Animated Subheadline */}
                          <p className={`text-lg md:text-xl text-gray-200 font-medium leading-relaxed max-w-2xl drop-shadow-md ${index === currentSlide ? 'animate-fade-in-up animation-delay-400' : 'opacity-0'}`}>
                              {slide.subheadline}
                          </p>

                          {/* Animated Bullet Points (Desktop only for cleanliness) */}
                          <ul className={`hidden md:flex flex-wrap gap-4 ${index === currentSlide ? 'animate-fade-in-up animation-delay-600' : 'opacity-0'}`}>
                            {slide.points.map(point => (
                                <li key={point} className="flex items-center bg-white/10 backdrop-blur-md rounded-full px-4 py-1.5 border border-white/10">
                                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2"/>
                                    <span className="text-sm font-semibold">{point}</span>
                                </li>
                            ))}
                          </ul>

                          {/* Animated Buttons - Flex Wrap for Mobile */}
                          <div className={`flex flex-wrap gap-3 pt-4 ${index === currentSlide ? 'animate-fade-in-up animation-delay-600' : 'opacity-0'}`}>
                              <CTAButton variant="primary" className="shadow-orange-500/30 shadow-lg" {...slide.cta1Link}>{slide.cta1}</CTAButton>
                              <CTAButton variant="secondary" className="backdrop-blur-sm hover:bg-white/10" {...slide.cta2Link}>{slide.cta2}</CTAButton>
                              <CTAButton 
                                {...slide.cta3Link}
                                className="flex items-center font-montserrat font-semibold text-white/90 hover:text-sunrise-orange transition-colors px-4 py-3"
                              >
                                {slide.cta3}
                                <ChevronRightIcon className="w-4 h-4 ml-1" />
                              </CTAButton>
                          </div>
                      </div>
                  </div>
              </div>
          ))}

            {/* Navigation Arrows */}
            <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/20 hover:bg-black/50 backdrop-blur-sm rounded-full text-white transition-all z-20 border border-white/10 group hidden md:block">
                <ArrowLeftIcon className="w-6 h-6 group-hover:scale-110 transition-transform"/>
            </button>
            <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/20 hover:bg-black/50 backdrop-blur-sm rounded-full text-white transition-all z-20 border border-white/10 group hidden md:block">
                <ArrowRightIcon className="w-6 h-6 group-hover:scale-110 transition-transform"/>
            </button>

            {/* Bottom Info Bar & Progress */}
            <div className="absolute bottom-0 left-0 w-full z-20 bg-black/60 backdrop-blur-md border-t border-white/10">
                <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center py-3 text-xs md:text-sm text-gray-300">
                    
                    {/* Quick Stats */}
                    <div className="flex space-x-6 mb-2 md:mb-0">
                        <div className="flex items-center">
                            <UsersIcon className="w-4 h-4 mr-2 text-sunrise-orange"/>
                            <span><strong className="text-white">Trusted</strong> by Aspirants</span>
                        </div>
                        <div className="flex items-center">
                            <AcademicCapIcon className="w-4 h-4 mr-2 text-sunrise-orange"/>
                            <span><strong className="text-white">50+</strong> Expert Faculty</span>
                        </div>
                        <div className="flex items-center hidden sm:flex">
                            <GlobeAltIcon className="w-4 h-4 mr-2 text-sunrise-orange"/>
                            <span>Online & Offline</span>
                        </div>
                    </div>

                    {/* Progress Indicators */}
                    <div className="flex space-x-2">
                        {carouselSlides.map((_, index) => (
                            <div key={index} className="relative h-1 w-12 bg-gray-600 rounded-full overflow-hidden">
                                <div 
                                    className={`absolute top-0 left-0 h-full bg-sunrise-orange transition-all duration-300 ease-linear ${
                                        index === currentSlide ? 'w-full' : index < currentSlide ? 'w-full opacity-50' : 'w-0'
                                    }`}
                                    style={{ transitionDuration: index === currentSlide ? `${SLIDE_DURATION}ms` : '300ms' }}
                                ></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
      </section>

      {/* Flagship Programs - Compact & Beautified */}
      <section className="py-20 bg-gray-50 dark:bg-slate-900 transition-colors duration-300">
        <div className="container mx-auto px-4 md:px-4">
            
            {/* Improved Header Section */}
            <div className="text-center mb-12 relative">
                 <span className="bg-empower-blue/10 dark:bg-blue-900/30 text-empower-blue dark:text-blue-300 text-xs font-extrabold px-4 py-1.5 rounded-full uppercase tracking-widest mb-4 inline-block border border-empower-blue/20">
                    Excellence in Education
                </span>
                
                <h2 className="text-4xl md:text-5xl font-extrabold font-montserrat text-transparent bg-clip-text bg-gradient-to-r from-empower-blue to-blue-700 dark:from-blue-400 dark:to-blue-200 mb-4">
                    Our Flagship Programs
                </h2>
                
                {/* Styled Divider */}
                <div className="flex items-center justify-center gap-3 mb-6">
                    <div className="h-0.5 w-12 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
                    <StarIcon className="w-5 h-5 text-sunrise-orange" />
                    <div className="h-0.5 w-12 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
                </div>

                <p className="max-w-3xl mx-auto text-lg text-charcoal-gray/80 dark:text-gray-300 leading-relaxed font-medium">
                    Join our <span className="text-empower-blue dark:text-blue-400 font-bold">high-yield courses</span> meticulously crafted by industry veterans. 
                    From foundation to final selection, we provide the edge you need.
                </p>
            </div>

            {/* Grid for Desktop, Horizontal Scroll for Mobile */}
            <div 
                ref={scrollContainerRef}
                onScroll={handleScroll}
                className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-8 md:grid md:grid-cols-2 lg:grid-cols-4 md:overflow-visible px-4 md:px-0 -mx-4 md:mx-0 scrollbar-hide"
            >
                {flagshipPrograms.map((program, index) => (
                    <div key={index} className="min-w-[85vw] md:min-w-0 snap-center group relative bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
                        {/* Live Batch Badge */}
                        {program.live && (
                             <div className="absolute top-4 left-4 z-20">
                                <span className="bg-green-500/90 backdrop-blur-sm text-white text-[10px] uppercase font-bold px-2.5 py-1 rounded-md flex items-center shadow-sm tracking-wide">
                                    <span className="w-2 h-2 bg-white rounded-full mr-1.5 animate-pulse"></span>
                                    Open
                                </span>
                            </div>
                        )}
                         {/* Popular Badge */}
                         {program.popular && (
                            <div className="absolute top-4 right-4 z-20">
                                <span className="bg-white/20 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-full border border-white/30 shadow-sm flex items-center tracking-wide">
                                    <StarIcon className="w-3 h-3 mr-1 text-yellow-300" /> Top
                                </span>
                            </div>
                        )}

                        {/* Enhanced Header */}
                        <div className={`bg-gradient-to-r ${program.gradient} p-5 relative`}>
                            <div className="flex items-start space-x-3 pt-6">
                                <div className="bg-white/20 p-2.5 rounded-xl backdrop-blur-sm shadow-inner flex-shrink-0 mt-1">
                                    {program.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold font-montserrat text-white leading-tight mb-2 shadow-sm">{program.title}</h3>
                                     {/* Inline Tags - Better spacing and readability */}
                                    <div className="flex flex-wrap gap-1.5">
                                        {program.tags.map((tag, i) => (
                                            <span key={i} className={`bg-black/30 backdrop-blur-sm text-white text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded shadow-sm`}>
                                                {tag.text}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Card Body */}
                        <div className="p-5 flex-grow flex flex-col">
                            
                            {/* Readability Improved Stats Row */}
                            <div className="flex items-center justify-between text-xs font-semibold text-charcoal-gray dark:text-gray-300 mb-4 pb-4 border-b border-gray-200 dark:border-gray-700">
                                <div className="flex items-center" title="Duration">
                                    <ClockIcon className="w-4 h-4 mr-1.5 text-empower-blue dark:text-blue-400" />
                                    <span>{program.meta.duration}</span>
                                </div>
                                <div className="flex items-center" title="Mode">
                                    <DesktopComputerIcon className="w-4 h-4 mr-1.5 text-empower-blue dark:text-blue-400" />
                                    <span>{program.meta.mode}</span>
                                </div>
                            </div>

                            <p className="text-gray-700 dark:text-gray-300 text-sm mb-5 leading-relaxed font-medium">
                                {program.description}
                            </p>

                            {/* 2-Column Feature Grid - Increased spacing and text size */}
                            <div className="grid grid-cols-2 gap-x-3 gap-y-3 mb-6 flex-grow">
                                {program.features.map((feature, idx) => (
                                    <div key={idx} className="flex items-start">
                                        <CheckCircleIcon className="w-4 h-4 text-sunrise-orange mr-2 mt-0.5 flex-shrink-0" />
                                        <span className="text-[13px] font-semibold text-charcoal-gray dark:text-gray-200 leading-snug">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-auto space-y-3">
                                <CTAButton to={program.link} variant="secondary-blue" className="w-full text-sm font-bold py-2.5 border-empower-blue text-empower-blue hover:bg-empower-blue hover:text-white dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-white transition-all duration-300 shadow-sm hover:shadow-md">
                                    View Details
                                </CTAButton>
                                <a 
                                    href={program.syllabusUrl} 
                                    download 
                                    className="flex items-center justify-center text-[11px] uppercase font-bold tracking-wide text-gray-500 dark:text-gray-400 hover:text-sunrise-orange dark:hover:text-sunrise-orange transition-colors group/link py-1"
                                >
                                    <DownloadIcon className="w-4 h-4 mr-1.5 group-hover/link:animate-bounce" />
                                    Download Syllabus
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Mobile Pagination Dots */}
            <div className="flex justify-center mt-4 md:hidden gap-2">
                {flagshipPrograms.map((_, index) => (
                    <div 
                        key={index} 
                        className={`h-2 rounded-full transition-all duration-300 ${activeCardIndex === index ? 'w-6 bg-sunrise-orange' : 'w-2 bg-gray-300 dark:bg-gray-700'}`}
                    />
                ))}
            </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
         <div className="container mx-auto px-4 md:px-4 text-center">
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
        <div className="container mx-auto px-4 md:px-4 text-center">
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
                    <input 
                        type="text" 
                        placeholder="Your Name" 
                        className="flex-grow p-3 rounded-lg text-charcoal-gray focus:outline-none focus:ring-2 focus:ring-sunrise-orange disabled:bg-gray-200"
                        value={mentorForm.name}
                        onChange={(e) => setMentorForm({...mentorForm, name: e.target.value})}
                        required
                        disabled={mentorStatus === 'loading'}
                    />
                    <input 
                        type="tel" 
                        placeholder="Phone Number" 
                        className="flex-grow p-3 rounded-lg text-charcoal-gray focus:outline-none focus:ring-2 focus:ring-sunrise-orange disabled:bg-gray-200"
                        value={mentorForm.phone}
                        onChange={(e) => setMentorForm({...mentorForm, phone: e.target.value})}
                        pattern="[0-9]{10}"
                        required
                        disabled={mentorStatus === 'loading'}
                    />
                    <CTAButton 
                        type="submit" 
                        variant="primary" 
                        className={`shrink-0 ${mentorStatus === 'loading' ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                        {mentorStatus === 'loading' ? 'Sending...' : 'Request a Call'}
                    </CTAButton>
                </form>
            )}
             {mentorStatus === 'error' && <p className="mt-2 text-red-300">Something went wrong. Please try again.</p>}
        </div>
      </section>

      {/* App Promotion */}
      <section className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
        <div className="container mx-auto px-4 md:px-4 grid md:grid-cols-2 gap-10 items-center">
            <div>
                <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-empower-blue dark:text-blue-400">Learn on the Go</h2>
                <p className="mt-4 text-charcoal-gray/80 dark:text-gray-300">Download our app for access to daily quizzes, current affairs, video lectures, and more, right at your fingertips.</p>
                <ul className="mt-6 space-y-2 text-charcoal-gray dark:text-gray-200">
                    <li className="flex items-center"><CheckCircleIcon className="w-6 h-6 text-sunrise-orange mr-2"/> Daily Current Affairs Updates</li>
                    <li className="flex items-center"><CheckCircleIcon className="w-6 h-6 text-sunrise-orange mr-2"/> Interactive Quizzes & Tests</li>
                    <li className="flex items-center"><CheckCircleIcon className="w-6 h-6 text-sunrise-orange mr-2"/> High-Quality Video Lectures</li>
                </ul>
                <div className="mt-8 flex items-center gap-6">
                    <a 
                        href="https://play.google.com/store/apps/details?id=co.barney.yflbb" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center bg-black text-white px-4 py-2 rounded-lg transition-transform hover:scale-105 border border-gray-700"
                    >
                        <GooglePlayIcon className="w-8 h-8 mr-3 text-white" />
                        <div className="flex flex-col items-start">
                            <span className="text-[10px] uppercase font-sans leading-none">Get it on</span>
                            <span className="text-xl font-bold font-sans leading-none">Google Play</span>
                        </div>
                    </a>
                    <img 
                        src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=https://play.google.com/store/apps/details?id=co.barney.yflbb" 
                        alt="QR Code for App"
                        className="hidden md:block rounded-lg bg-white p-1" 
                    />
                </div>
            </div>
            <div>
                <img src="/app-mockup-playstore.png" alt="Encourage India App Mockup" className="w-2/3 md:w-full md:max-w-sm mx-auto"/>
            </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-empower-blue text-white py-20">
        <div className="container mx-auto px-4 md:px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat">Ready to Start Your Success Story?</h2>
            <p className="mt-4 max-w-2xl mx-auto">Join thousands of successful aspirants who trusted Encourage India to guide them.</p>
            <CTAButton requiresAuth variant="primary" className="mt-8 text-lg">Enroll in a Program Today</CTAButton>
        </div>
      </section>

    </div>
  );
};

export default HomePage;
