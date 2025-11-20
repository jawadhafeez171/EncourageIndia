
import React, { useState, useEffect } from 'react';
import CTAButton from '../components/CTAButton';
import { StarIcon, QuoteIcon, CheckCircleIcon, ArrowLeftIcon, ArrowRightIcon } from '../components/Icons';
import { testimonials } from '../constants';
import { submitToGoogleSheet } from '../services/googleSheetService';

const carouselSlides = [
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
        badge: "Civil Judge Mains",
        headline: <>Empower Your Judicial Journey — <span className="text-sunrise-orange">Civil Judge Mains</span></>,
        subheadline: "Comprehensive coaching with expert faculty and personalized mentorship.",
        points: ["In-depth Syllabus Coverage", "Answer Writing Practice", "Mock Interviews"],
        image: "https://picsum.photos/seed/judge/1920/1080",
        cta1: "Enroll Now",
        cta2: "Download Brochure",
        cta1Link: { requiresAuth: true },
        cta2Link: { to: '/courses/karnataka-judiciary' },
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
                  <div className="absolute inset-0 container mx-auto px-4 md:px-8 flex flex-col justify-center items-start text-left">
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
        Admissions Open for Civil Judge Mains
      </div>

      {/* Program Highlights */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-empower-blue">Our Flagship Programs</h2>
            <p className="mt-4 max-w-2xl mx-auto text-charcoal-gray/80">Tailored programs designed by experts to ensure your success in competitive exams.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mt-12 text-left">
                <div className="bg-white p-8 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-bold font-montserrat text-encourage-red">UPSC Civil Services Program</h3>
                    <p className="mt-4 text-charcoal-gray/80">A comprehensive program covering Prelims, Mains, and Interview stages with personalized mentorship and extensive test series.</p>
                    <CTAButton to="/courses/upsc-cse" variant="secondary-blue" className="mt-6">Learn More</CTAButton>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-bold font-montserrat text-encourage-red">Karnataka Civil Judge Program</h3>
                    <p className="mt-4 text-charcoal-gray/80">Specialized coaching for the Karnataka Judiciary exams, focusing on legal subjects, answer writing, and interview skills.</p>
                    <CTAButton to="/courses/karnataka-judiciary" variant="secondary-blue" className="mt-6">Learn More</CTAButton>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-bold font-montserrat text-encourage-red">KMF SHIMUL Recruitment</h3>
                    <p className="mt-4 text-charcoal-gray/80">A dedicated course for the 194 vacancies in SHIMUL, covering the complete syllabus, co-operative laws, and mock tests.</p>
                    <CTAButton to="/courses/kmf-shimul" variant="secondary-blue" className="mt-6">Learn More</CTAButton>
                </div>
                 <div className="bg-white p-8 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-bold font-montserrat text-encourage-red">KPSC Agriculture Officer</h3>
                    <p className="mt-4 text-charcoal-gray/80">Specialized coaching for AO & AAO exams, focusing on agricultural science, Karnataka-specific agronomy, and general studies.</p>
                    <CTAButton to="/courses/kpsc-ao-aao" variant="secondary-blue" className="mt-6">Learn More</CTAButton>
                </div>
            </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
         <div className="container mx-auto px-4 md:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-empower-blue">What Our Achievers Say</h2>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
                {testimonials.map((testimonial) => (
                    <div key={testimonial.name} className="bg-soft-gray p-8 rounded-lg text-left relative">
                        <QuoteIcon className="w-16 h-16 text-empower-blue/10 absolute top-4 right-4" />
                        <p className="text-charcoal-gray/90 italic">"{testimonial.quote}"</p>
                        <div className="mt-6 flex items-center">
                            <img src={testimonial.image} alt={testimonial.name} className="w-14 h-14 rounded-full object-cover mr-4"/>
                            <div>
                                <h4 className="font-bold font-montserrat">{testimonial.name}</h4>
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
        <div className="container mx-auto px-4 md:px-8 text-center">
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
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-10 items-center">
            <div>
                <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-empower-blue">Learn on the Go</h2>
                <p className="mt-4 text-charcoal-gray/80">Download our app for access to daily quizzes, current affairs, video lectures, and more, right at your fingertips.</p>
                <ul className="mt-6 space-y-2">
                    <li className="flex items-center"><CheckCircleIcon className="w-6 h-6 text-sunrise-orange mr-2"/> Daily Current Affairs Updates</li>
                    <li className="flex items-center"><CheckCircleIcon className="w-6 h-6 text-sunrise-orange mr-2"/> Interactive Quizzes & Tests</li>
                    <li className="flex items-center"><CheckCircleIcon className="w-6 h-6 text-sunrise-orange mr-2"/> High-Quality Video Lectures</li>
                </ul>
                <div className="mt-8 flex items-center gap-6">
                    <a href="#"><img src="/google-play-badge.png" alt="Get it on Google Play" className="h-14"/></a>
                    <img src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=https://play.google.com" alt="QR Code for App" />
                </div>
            </div>
            <div>
                <img src="/app-mockup-playstore.png" alt="Encourage India App Mockup" className="max-w-sm mx-auto"/>
            </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-empower-blue text-white py-20">
        <div className="container mx-auto px-4 md:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat">Ready to Start Your Success Story?</h2>
            <p className="mt-4 max-w-2xl mx-auto">Join thousands of successful aspirants who trusted Encourage India to guide them.</p>
            <CTAButton requiresAuth variant="primary" className="mt-8 text-lg">Enroll in a Program Today</CTAButton>
        </div>
      </section>

    </div>
  );
};

export default HomePage;
