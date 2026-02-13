import React from 'react';
import { QuoteIcon, StarIcon } from '../components/Icons';
import { achievers, mentors } from '../constants';
import CTAButton from '../components/CTAButton';
import SEO from '../components/SEO';

const PageHeader = ({ title, subtitle }: { title: string, subtitle: string }) => (
    <div className="bg-gradient-to-br from-empower-blue to-blue-900 py-16 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
        <div className="container mx-auto px-8 relative z-10">
            <h1 className="text-4xl md:text-6xl font-black font-montserrat uppercase tracking-tight">{title}</h1>
            <p className="text-xl mt-4 text-blue-100 font-medium italic">"{subtitle}"</p>
        </div>
    </div>
);

const ResultsPage: React.FC = () => {
    return (
        <div className="bg-white dark:bg-slate-900 transition-colors duration-300">
            <SEO
                title="Results & Reviews"
                description="See our hallmark of success. Read testimonials from our successful students and mentors who have cleared UPSC, KAS, and other competitive exams."
                url="https://encourageindia.com/results"
            />
            <PageHeader title="Our Hall of Fame" subtitle="Turning Aspirations into Bureaucratic Reality" />

            {/* Success Stories Grid */}
            <section className="py-20">
                <div className="container mx-auto px-8 max-w-7xl">
                    <div className="text-center mb-12">
                        <span className="text-xs font-black uppercase tracking-[0.3em] text-sunrise-orange mb-2 inline-block">Real Results</span>
                        <h2 className="text-3xl md:text-4xl font-extrabold font-montserrat text-empower-blue dark:text-blue-400">Voices of Mentors</h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {achievers.map((achiever: any, idx) => (
                            <div key={idx} className="flex flex-col group transition-all duration-500 hover:-translate-y-2">
                                <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700 h-full flex flex-col">
                                    <div className="relative flex-grow bg-gray-50 dark:bg-slate-900 flex items-center justify-center min-h-[300px]">
                                        <img
                                            src={achiever.photo}
                                            alt={achiever.name}
                                            className={`w-full h-full transition-all duration-700 ${achiever.isGraphic ? 'object-contain p-2' : 'object-cover object-top filter grayscale group-hover:grayscale-0'}`}
                                            loading="lazy"
                                        />
                                        {!achiever.isGraphic && (
                                            <>
                                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                                                <div className="absolute bottom-0 left-0 w-full p-6 text-white text-left">
                                                    <h3 className="text-xl font-black font-montserrat tracking-tight leading-tight">{achiever.name}</h3>
                                                    <div className="mt-1 inline-block bg-sunrise-orange/90 backdrop-blur-md px-3 py-1 rounded-full">
                                                        <p className="text-[10px] font-black uppercase tracking-widest">{achiever.rank}</p>
                                                    </div>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                    {!achiever.isGraphic && (
                                        <div className="p-6 text-center">
                                            <QuoteIcon className="w-8 h-8 text-empower-blue/10 dark:text-white/10 mx-auto mb-3" />
                                            <p className="text-charcoal-gray/80 dark:text-gray-300 italic text-sm leading-relaxed">"{achiever.quote}"</p>
                                        </div>
                                    )}
                                    {achiever.isGraphic && (
                                        <div className="p-4 bg-white dark:bg-slate-800 border-t border-gray-50 dark:border-gray-700 mt-auto">
                                            <h3 className="text-sm font-bold text-center text-charcoal-gray dark:text-gray-200">{achiever.name} <span className="text-sunrise-orange">|</span> {achiever.rank}</h3>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mentor Testimonials */}
            <section className="py-20 bg-gray-50 dark:bg-slate-800 transition-colors duration-300 border-t border-gray-200 dark:border-gray-700">
                <div className="container mx-auto px-8 max-w-6xl">
                    <div className="text-center mb-16">
                        <span className="text-xs font-black uppercase tracking-[0.3em] text-sunrise-orange mb-2 inline-block">Expert Perspectives</span>
                        <h2 className="text-3xl md:text-4xl font-extrabold font-montserrat text-empower-blue dark:text-blue-400">Endorsements from the Academy</h2>
                    </div>
                    <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-10">
                        {mentors.map((mentor: any, idx) => (
                            <div key={idx} className="bg-white dark:bg-slate-900 overflow-hidden rounded-[2.5rem] shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group hover:border-empower-blue/30 h-full flex flex-col">
                                {mentor.isGraphic ? (
                                    <div className="flex-grow flex items-center justify-center bg-white dark:bg-slate-900 p-4 min-h-[350px]">
                                        <img src={mentor.photo} alt={mentor.name} className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.02]" loading="lazy" />
                                    </div>
                                ) : (
                                    <div className="p-10 flex flex-col h-full">
                                        <div className="absolute -top-4 -right-4 p-4 bg-orange-50 dark:bg-orange-900/30 rounded-full">
                                            <StarIcon className="w-8 h-8 text-sunrise-orange animate-pulse" />
                                        </div>
                                        <QuoteIcon className="w-20 h-20 text-empower-blue/5 dark:text-white/5 absolute top-10 right-10 pointer-events-none" />

                                        <p className="text-charcoal-gray/80 dark:text-gray-300 italic mb-8 relative z-10 leading-relaxed text-lg">"{mentor.message}"</p>

                                        <div className="flex items-center pt-6 border-t border-gray-100 dark:border-gray-800 mt-auto">
                                            <img src={mentor.photo} alt={mentor.name} className="w-20 h-20 rounded-2xl object-cover mr-5 border-4 border-white dark:border-slate-800 shadow-lg" loading="lazy" />
                                            <div>
                                                <h4 className="font-black font-montserrat text-xl text-empower-blue dark:text-blue-400 leading-tight">{mentor.name}</h4>
                                                <p className="text-xs font-bold text-sunrise-orange uppercase tracking-wider mt-1">{mentor.role}</p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bottom Call to Action */}
            <section className="py-24 bg-empower-blue text-white text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-[100px] pointer-events-none -mr-48 -mt-48"></div>
                <div className="container mx-auto px-8 relative z-10">
                    <h2 className="text-3xl md:text-5xl font-black font-montserrat mb-8 uppercase tracking-tighter">Your Name Could Be <span className="text-sunrise-orange">Next.</span></h2>
                    <p className="text-xl text-blue-100/80 mb-10 max-w-2xl mx-auto">Join the league of successful civil servants who built their foundation with Encourage India IAS.</p>
                    <div className="inline-flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <CTAButton requiresAuth variant="primary" className="shadow-2xl text-sm px-12 py-4 !rounded-2xl">Join the 2026 Batch</CTAButton>
                        <CTAButton to="/courses" variant="secondary" className="shadow-2xl text-sm px-12 py-4 !rounded-2xl bg-white/10 hover:bg-white/20 backdrop-blur-md border-white/20">Browse Programs</CTAButton>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ResultsPage;