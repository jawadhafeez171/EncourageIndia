import React from 'react';
import CTAButton from '../../components/CTAButton';
import { AcademicCapIcon, CalendarIcon, PencilAltIcon, CheckCircleIcon, UsersIcon, ClockIcon, BookOpenIcon, GlobeAltIcon } from '../../components/Icons';

const PageHeader = ({ title }: { title: string }) => (
    <div className="bg-gradient-to-br from-empower-blue to-indigo-900 py-16 text-center text-white">
        <div className="container mx-auto">
            <h1 className="text-4xl md:text-5xl font-black font-montserrat uppercase tracking-tight">{title}</h1>
            <p className="text-xl mt-4 text-blue-100 font-medium">National Bank for Agriculture and Rural Development.</p>
        </div>
    </div>
);

const Section: React.FC<{title: string; children: React.ReactNode;}> = ({title, children}) => (
    <div className="mb-12">
        <h2 className="text-3xl font-black font-montserrat text-empower-blue dark:text-blue-400 mb-6 border-l-4 border-sunrise-orange pl-4 uppercase tracking-tighter">{title}</h2>
        <div className="space-y-4 text-charcoal-gray/80 dark:text-gray-300">
            {children}
        </div>
    </div>
);

const NabardExamPage: React.FC = () => {
    return (
        <div className="bg-white dark:bg-slate-900 transition-colors duration-300">
            <PageHeader title="NABARD Grade A & B" />
            <div className="py-20">
                <div className="container mx-auto px-8 max-w-5xl">
                    <Section title="Focused Rural Development">
                        <p className="text-lg leading-relaxed">
                            NABARD Grade A (Assistant Manager) recruitment targets candidates with a passion for Rural Development and Agriculture. The exam is unique due to its inclusion of <strong>ARD (Agriculture & Rural Development)</strong> as a core subject.
                        </p>
                    </Section>

                    <Section title="Phase I Exam Pattern (Qualifying + Merit)">
                        <div className="bg-gray-50 dark:bg-slate-800 p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-700">
                            <div className="grid sm:grid-cols-2 gap-x-12 gap-y-6">
                                <div>
                                    <h4 className="font-bold text-empower-blue dark:text-blue-400 mb-3 uppercase text-xs tracking-widest">Merit Sections</h4>
                                    <ul className="text-sm space-y-2 font-bold">
                                        <li className="flex items-center"><CheckCircleIcon className="w-4 h-4 mr-2 text-sunrise-orange" /> General Awareness</li>
                                        <li className="flex items-center"><CheckCircleIcon className="w-4 h-4 mr-2 text-sunrise-orange" /> Economic & Social Issues</li>
                                        <li className="flex items-center"><CheckCircleIcon className="w-4 h-4 mr-2 text-sunrise-orange" /> Agri & Rural Development</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-400 dark:text-gray-500 mb-3 uppercase text-xs tracking-widest">Qualifying Sections</h4>
                                    <ul className="text-sm space-y-2 opacity-70">
                                        <li className="flex items-center"><CheckCircleIcon className="w-4 h-4 mr-2 text-gray-300" /> Reasoning & Quant</li>
                                        <li className="flex items-center"><CheckCircleIcon className="w-4 h-4 mr-2 text-gray-300" /> English Language</li>
                                        <li className="flex items-center"><CheckCircleIcon className="w-4 h-4 mr-2 text-gray-300" /> Computer & Decision Making</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Section>

                    <Section title="Specialized ARD Coaching">
                        <div className="flex items-start mb-8">
                            <GlobeAltIcon className="w-12 h-12 text-sunrise-orange mr-6 flex-shrink-0" />
                            <div>
                                <h4 className="font-bold text-lg mb-2">Comprehensive ARD Coverage</h4>
                                <p className="text-sm">Our mentors provide high-yield notes on Agronomy, Horticulture, Livestock, Fisheries, and latest Government schemes like PM-KISAN, e-NAM, etc., specifically curated for NABARD.</p>
                            </div>
                        </div>
                    </Section>

                    <div className="text-center mt-16 bg-gradient-to-r from-empower-blue to-blue-800 p-12 rounded-[3rem] text-white shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 left-0 p-8 opacity-10">
                            <BookOpenIcon className="w-48 h-48" />
                        </div>
                        <h3 className="text-3xl font-black mb-4">Start Your NABARD Journey 2026-27</h3>
                        <p className="mb-10 text-lg opacity-90 max-w-2xl mx-auto">
                            Don't let the technical subjects be a hurdle. Join the specialized batch for Agriculture and Rural Development modules.
                        </p>
                        <CTAButton requiresAuth variant="primary" className="text-xl px-16 py-4 bg-white !text-empower-blue border-none shadow-xl transform hover:-translate-y-1 transition-all">
                            Enroll in NABARD Batch
                        </CTAButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NabardExamPage;