import React from 'react';
import CTAButton from '../../components/CTAButton';
import { AcademicCapIcon, CalendarIcon, PencilAltIcon, CheckCircleIcon, UsersIcon, ClockIcon, BookOpenIcon } from '../../components/Icons';

const PageHeader = ({ title }: { title: string }) => (
    <div className="bg-gradient-to-br from-empower-blue to-indigo-900 py-16 text-center text-white">
        <div className="container mx-auto">
            <h1 className="text-4xl md:text-5xl font-black font-montserrat uppercase tracking-tight">{title}</h1>
            <p className="text-xl mt-4 text-blue-100 font-medium">Empowering your career with the largest public sector bank in India.</p>
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

const SbiExamPage: React.FC = () => {
    return (
        <div className="bg-white dark:bg-slate-900 transition-colors duration-300">
            <PageHeader title="SBI PO / Clerk / SO" />
            <div className="py-20">
                <div className="container mx-auto px-8 max-w-5xl">
                    <Section title="Overview of SBI Recruitments">
                        <p className="text-lg leading-relaxed">
                            State Bank of India (SBI) is the premiere banking institution in the country. Recruitment for Probationary Officers (PO), Junior Associates (Clerk), and Specialist Officers (SO) is highly competitive. SBI is known for its evolving exam patterns and high standards of selection.
                        </p>
                    </Section>

                    <Section title="Selection Stages (PO)">
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="p-6 bg-soft-gray/30 dark:bg-slate-800 rounded-2xl border border-gray-100 dark:border-gray-700">
                                <div className="bg-empower-blue text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mb-4">1</div>
                                <h4 className="font-bold text-empower-blue dark:text-blue-400 mb-2">Phase I: Prelims</h4>
                                <p className="text-xs">Objective test of 100 marks covering English, Quant, and Reasoning. Qualifying in nature.</p>
                            </div>
                            <div className="p-6 bg-soft-gray/30 dark:bg-slate-800 rounded-2xl border border-gray-100 dark:border-gray-700">
                                <div className="bg-empower-blue text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mb-4">2</div>
                                <h4 className="font-bold text-empower-blue dark:text-blue-400 mb-2">Phase II: Mains</h4>
                                <p className="text-xs">Descriptive + Objective. Covers GA, Data Analysis, and English Proficiency.</p>
                            </div>
                            <div className="p-6 bg-soft-gray/30 dark:bg-slate-800 rounded-2xl border border-gray-100 dark:border-gray-700">
                                <div className="bg-empower-blue text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mb-4">3</div>
                                <h4 className="font-bold text-empower-blue dark:text-blue-400 mb-2">Phase III: Interview</h4>
                                <p className="text-xs">Group Exercises (20 marks) and Interview (30 marks) for the final merit list.</p>
                            </div>
                        </div>
                    </Section>

                    <Section title="Syllabus Core">
                         <div className="bg-gray-50 dark:bg-slate-800 p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-700">
                            <div className="grid sm:grid-cols-2 gap-8">
                                <div>
                                    <h4 className="font-bold mb-4 flex items-center text-sunrise-orange">
                                        <BookOpenIcon className="w-5 h-5 mr-2" /> English & Aptitude
                                    </h4>
                                    <ul className="text-sm space-y-2">
                                        <li>• Reading Comprehension & Grammar</li>
                                        <li>• Quantitative Aptitude (DI Focused)</li>
                                        <li>• Logical & Analytical Reasoning</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-bold mb-4 flex items-center text-sunrise-orange">
                                        <PencilAltIcon className="w-5 h-5 mr-2" /> Banking & Finance
                                    </h4>
                                    <ul className="text-sm space-y-2">
                                        <li>• General & Banking Awareness</li>
                                        <li>• Economic Developments</li>
                                        <li>• Static GA & Current Affairs</li>
                                    </ul>
                                </div>
                            </div>
                         </div>
                    </Section>

                    <div className="text-center mt-16 bg-empower-blue p-12 rounded-[3rem] text-white shadow-2xl">
                        <h3 className="text-3xl font-black mb-4">Ace the SBI Challenge 2026-27</h3>
                        <p className="mb-8 opacity-90 max-w-2xl mx-auto">Join our intensive banking batch. We provide comprehensive shortcut techniques for Quant/Reasoning and in-depth Banking Awareness modules.</p>
                        <CTAButton requiresAuth variant="primary" className="text-xl px-16 py-4 bg-white !text-empower-blue border-none shadow-xl transform hover:-translate-y-1 transition-all">
                            Enroll in SBI Batch
                        </CTAButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SbiExamPage;