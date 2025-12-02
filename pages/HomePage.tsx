
import React, { useState, useEffect } from 'react';
import CTAButton from '../components/CTAButton';
import { StarIcon, QuoteIcon, CheckCircleIcon, ArrowLeftIcon, ArrowRightIcon, GooglePlayIcon, AcademicCapIcon, BookOpenIcon, LightningBoltIcon, ShieldCheckIcon } from '../components/Icons';
import { testimonials } from '../constants';
import { submitToGoogleSheet } from '../services/googleSheetService';

const carouselSlides = [
    {
        badge: "KPCL Recruitment",
        headline: <>Power Your Career: <span className="text-sunrise-orange">KPCL AE/JE</span> Recruitment</>,
        subheadline: "Comprehensive coaching for Assistant Engineer and Junior Engineer posts in Karnataka Power Corporation Limited.",
        points: ["Technical Syllabus Coverage", "General Awareness & Aptitude", "Expert Engineering Faculty"],
        image: "https://picsum.photos/seed/kpcl/1920/1080",
        cta1: "Enroll Now",
        cta2: "View Details",
        cta1Link: { requiresAuth: true },
        cta2Link: { to: '/courses/kpcl' },
    },
    {
        badge: "KPSC AO & AAO Recruitment",
        headline: <>Cultivate Your Career: <span className="text-sunrise-orange">KPSC Agriculture Officer</span> Recruitment!</>,
        subheadline: "Join our specialized program for Agriculture Officer (AO) and Assistant Agriculture Officer (AAO) roles.",
        points: ["In-depth Agriculture Science Syllabus", "Focus on Karnataka's Agronomy", "General Studies & Current Affairs"],
        image: "https://picsum.photos/seed/agriculture/1920/1080",
        cta1: "Enroll in AO/AAO Course",
        cta2: "Learn More",
        cta1Link: { requiresAuth: true },
        cta2Link: { to: '/courses/kpsc-ao-aao' },
    },
    {
        badge: "KMF SHIMUL Recruitment 2024",
        headline: <>Secure Your Future with <span className="text-sunrise-orange">KMF SHIMUL</span>: 194 Vacancies!</>,
        subheadline: "Join our new flagship course for Assistant Managers, Technical Officers, and more.",
        points: ["Comprehensive Syllabus Coverage", "Special Focus on Co-operative Laws", "Extensive Mock Test Series"],
        image: "https://picsum.photos/seed/kmf/1920/1080",
        cta1: "Enroll in SHIMUL Course",
        cta2: "View Details",
        cta1Link: { requiresAuth: true },
        cta2Link: { to: '/courses/kmf-shimul' },
    },
    {
        badge: "UPSC CSE 2026",
        headline: "Prepare for UPSC CSE — Foundation to Interview (2026 Batch)",
        subheadline: "An integrated program designed for holistic preparation from scratch.",
        points: ["Structured Curriculum", "Daily Current Affairs", "Personalized Mentorship"],
        image: "https://picsum.photos/seed/upsc/1920/1080",
        cta1: "Apply for UPSC Program",
        cta2: "View Course Details",
        cta1Link: { requiresAuth: true },
        cta2Link: { to: '/courses/upsc-cse' },
    },
];

// Data for Flagship Programs to ensure consistent beautiful styling
const flagshipPrograms = [
    {
        title: "UPSC Civil Services",
        description: "A premier foundation course designed to take aspirants from basics to advanced levels for IAS/IPS/IFS roles.",
        icon: <AcademicCapIcon className="w-8 h-8 text-white" />,
        tags: [
            { text: "English Medium", color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200" },
            { text: "Test Series Included", color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" }
        ],
        features: [
            "Integrated Prelims & Mains Preparation",
            "Daily Answer Writing & Evaluation",
            "1-on-1 Personalized Mentorship",
            "Current Affairs & Ethics Special Focus"
        ],
        link: "/courses/upsc-cse",
        color: "bg-empower-blue"
    },
    {
        title: "KPSC KAS Foundation",
        description: "Holistic coaching for Karnataka Administrative Service exams with a deep focus on state-specific subjects.",
        icon: <BookOpenIcon className="w-8 h-8 text-white" />,
        tags: [
            { text: "Bilingual (Kan & Eng)", color: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200" },
            { text: "Test Series Included", color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" }
        ],
        features: [
            "Prelims-Mains-Interview Coverage",
            "Karnataka Economic Survey & Budget",
            "State-Specific History & Geography",
            "Comprehensive Mock Test Series"
        ],
        link: "/courses/kas",
        color: "bg-encourage-red"
    },
    {
        title: "KPSC AC-SAAD",
        description: "Specialized program for Assistant Controller (State Accounts Dept) targeting Commerce & Management graduates.",
        icon: <LightningBoltIcon className="w-8 h-8 text-white" />,
        tags: [
            { text: "Bilingual (Kan & Eng)", color: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200" },
            { text: "Test Series Included", color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" }
        ],
        features: [
            "Expert Commerce & Mgmt Faculty",
            "Complete Coverage of Papers V-VIII",
            "Previous Year Question Analysis",
            "Exclusive Subject-Wise Test Series"
        ],
        link: "/courses/ac-saad",
        color: "bg-sunrise-orange"
    },
    {
        title: "PSI & PC Program",
        description: "Rigorous training for Police Sub-Inspector and Constable exams with equal focus on physical & written tests.",
        icon: <ShieldCheckIcon className="w-8 h-8 text-white" />,
        tags: [
            { text: "Bilingual (Kan & Eng)", color: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200" },
            { text: "Test Series Included", color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" }
        ],
        features: [
            "Translation & Essay Practice",
            "Mental Ability & Current Affairs",
            "Physical Standards Guidance",
            "Weekly Full-Length Mock Tests"
        ],
        link: "/courses/psi",
        color: "bg-charcoal-gray"
    }
];

const HomePage: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [mentorForm, setMentorForm] = useState({ name: '', phone: '' });
    const [mentorStatus, setMentorStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev === carouselSlides.length - 1 ? 0 : prev + 1));
        }, 5000);
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


  return (
    <div>
      {/* Hero Carousel Section */}
      <section className="relative h-[80vh] w-full overflow-hidden text-white">
          {carouselSlides.map((slide, index) => (
              <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}>
                  <img src={slide.image} alt={slide.badge} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/60"></div>
                  <div className="absolute inset-0 container mx-auto px-4 md:px-4 flex flex-col justify-center items-start text-left">
                      <span className="bg-sunrise-orange text-white text-sm font-bold uppercase px-4 py-1 rounded-full mb-4">{slide.badge}</span>
                      <h1 className="text-3xl md:text-6xl font-extrabold font-montserrat max-w-3xl leading-tight">{slide.headline}</h1>
                      <p className="text-base md:text-xl mt-4 max-w-2xl text-soft-gray">{slide.subheadline}</p>
                      <ul className="mt-6 space-y-2">
                        {slide.points.map(point => <li key={point} className="flex items-center text-sm md:text-base"><CheckCircleIcon className="w-5 h-5 md:w-6 md:h-6 text-sunrise-orange mr-2"/>{point}</li>)}
                      </ul>
                      <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
                          <CTAButton variant="primary" {...slide.cta1Link}>{slide.cta1}</CTAButton>
                          <CTAButton variant="secondary" {...slide.cta2Link}>{slide.cta2}</CTAButton>
                      </div>
                  </div>
              </div>
          ))}
            <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/20 rounded-full hover:bg-white/40 transition"><ArrowLeftIcon className="w-6 h-6"/></button>
            <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/20 rounded-full hover:bg-white/40 transition"><ArrowRightIcon className="w-6 h-6"/></button>
      </section>

      {/* Announcement Bar */}
      <div className="bg-sunrise-orange text-white text-center py-3 font-semibold font-montserrat text-lg px-4">
        Admissions Open for KPCL AE/JE Recruitment
      </div>

      {/* Flagship Programs - Beautified Section */}
      <section className="py-24 bg-gray-50 dark:bg-slate-900 transition-colors duration-300">
        <div className="container mx-auto px-4 md:px-4">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-extrabold font-montserrat text-empower-blue dark:text-blue-400">Our Flagship Programs</h2>
                <div className="h-1.5 w-24 bg-sunrise-orange mx-auto mt-4 rounded-full"></div>
                <p className="mt-6 max-w-2xl mx-auto text-charcoal-gray/80 dark:text-gray-300 text-lg">
                    Expert-led courses designed with a single goal: <span className="font-bold text-empower-blue dark:text-blue-300">Your Selection.</span>
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {flagshipPrograms.map((program, index) => (
                    <div key={index} className="group relative bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden flex flex-col transform hover:-translate-y-2">
                        {/* Card Header with Icon */}
                        <div className={`${program.color} p-6 flex justify-between items-start relative overflow-hidden`}>
                            <div className="relative z-10">
                                <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm inline-block mb-3">
                                    {program.icon}
                                </div>
                                <h3 className="text-xl font-bold font-montserrat text-white leading-tight">{program.title}</h3>
                            </div>
                            <div className="absolute -right-6 -top-6 w-24 h-24 bg-white/10 rounded-full"></div>
                        </div>

                        {/* Card Body */}
                        <div className="p-6 flex-grow flex flex-col">
                            {/* Badges */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                {program.tags.map((tag, i) => (
                                    <span key={i} className={`${tag.color} text-[10px] uppercase tracking-wide font-bold px-3 py-1 rounded-full`}>
                                        {tag.text}
                                    </span>
                                ))}
                            </div>

                            <p className="text-charcoal-gray/80 dark:text-gray-300 text-sm mb-6 leading-relaxed">
                                {program.description}
                            </p>

                            <div className="space-y-3 mb-8 flex-grow">
                                {program.features.map((feature, idx) => (
                                    <div key={idx} className="flex items-start">
                                        <CheckCircleIcon className="w-5 h-5 text-sunrise-orange mr-3 mt-0.5 flex-shrink-0" />
                                        <span className="text-sm font-medium text-charcoal-gray dark:text-gray-200">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-auto">
                                <CTAButton to={program.link} variant="secondary-blue" className="w-full text-sm py-3 border-empower-blue text-empower-blue hover:bg-empower-blue hover:text-white dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-white">
                                    View Program Details
                                </CTAButton>
                            </div>
                        </div>
                    </div>
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
