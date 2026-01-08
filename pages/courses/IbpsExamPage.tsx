import React from 'react';
import CTAButton from '../../components/CTAButton';
import { AcademicCapIcon, BriefcaseIcon, PencilAltIcon, CheckCircleIcon, UsersIcon, GlobeAltIcon, ClockIcon } from '../../components/Icons';

const PageHeader = ({ title }: { title: string }) => (
    <div className="bg-gradient-to-br from-empower-blue to-blue-800 py-16 text-center text-white">
        <div className="container mx-auto">
            <h1 className="text-4xl md:text-5xl font-black font-montserrat uppercase tracking-tight">{title}</h1>
            <p className="text-xl mt-4 text-blue-100 font-medium">Your gateway to 11+ Public Sector Banks and Regional Rural Banks.</p>
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

const IbpsExamPage: React.FC = () => {
    return (
        <div className="bg-white dark:bg-slate-900 transition-colors duration-300">
            <PageHeader title="IBPS PO / Clerk / RRB" />
            <div className="py-20">
                <div className="container mx-auto px-8 max-w-5xl">
                    <Section title="Recruitment Verticals">
                        <p className="text-lg leading-relaxed">
                            Institute of Banking Personnel Selection (IBPS) conducts common recruitment processes for major participating banks. This includes the highly popular <strong>IBPS PO</strong>, <strong>IBPS Clerk</strong>, and <strong>IBPS RRB</strong> (Regional Rural Banks) for Scale I, II, III officers and Office Assistants.
                        </p>
                    </Section>

                    <Section title="Exam Features">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="flex items-start bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-md border border-gray-100 dark:border-gray-700">
                                <ClockIcon className="w-10 h-10 text-empower-blue mr-4 flex-shrink-0" />
                                <div>
                                    <h4 className="font-bold text-charcoal-gray dark:text-white">Time Management</h4>
                                    <p className="text-sm">Sectional timings in both Prelims and Mains require extreme speed and accuracy.</p>
                                </div>
                            </div>
                            <div className="flex items-start bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-md border border-gray-100 dark:border-gray-700">
                                <GlobeAltIcon className="w-10 h-10 text-empower-blue mr-4 flex-shrink-0" />
                                <div>
                                    <h4 className="font-bold text-charcoal-gray dark:text-white">Participating Banks</h4>
                                    <p className="text-sm">Canara Bank, PNB, Bank of Baroda, Indian Bank, and 7 others participate in this unified selection.</p>
                                </div>
                            </div>
                        </div>
                    </Section>

                    <Section title="Common Written Pattern">
                         <div className="overflow-x-auto shadow-xl rounded-2xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-slate-800">
                            <table className="min-w-full text-sm">
                                <thead className="bg-empower-blue text-white">
                                    <tr>
                                        <th className="py-4 px-6 text-left">Subject</th>
                                        <th className="py-4 px-6 text-center">Questions</th>
                                        <th className="py-4 px-6 text-center">Marks</th>
                                        <th className="py-4 px-6 text-center">Duration</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100 dark:divide-gray-700 font-medium">
                                    <tr><td className="py-3 px-6">Reasoning & Computer</td><td className="py-3 px-6 text-center">45</td><td className="py-3 px-6 text-center">60</td><td className="py-3 px-6 text-center">60 mins</td></tr>
                                    <tr><td className="py-3 px-6">General/Banking Awareness</td><td className="py-3 px-6 text-center">40</td><td className="py-3 px-6 text-center">40</td><td className="py-3 px-6 text-center">35 mins</td></tr>
                                    <tr><td className="py-3 px-6">English Language</td><td className="py-3 px-6 text-center">35</td><td className="py-3 px-6 text-center">40</td><td className="py-3 px-6 text-center">40 mins</td></tr>
                                    <tr><td className="py-3 px-6">Data Analysis & Interpretation</td><td className="py-3 px-6 text-center">35</td><td className="py-3 px-6 text-center">60</td><td className="py-3 px-6 text-center">45 mins</td></tr>
                                </tbody>
                            </table>
                         </div>
                    </Section>

                    <div className="text-center mt-20 bg-gradient-to-r from-blue-900 to-empower-blue p-12 rounded-[3rem] text-white shadow-2xl relative overflow-hidden">
                        <h3 className="text-3xl font-black mb-6">Join the IBPS Achievers Hub</h3>
                        <p className="mb-10 text-lg opacity-90 max-w-2xl mx-auto">
                            Special focus on RRB Kannada medium aspirants. Master the IBPS pattern with 50+ sectional mocks and personalized doubt clearing sessions.
                        </p>
                        <CTAButton requiresAuth variant="primary" className="text-xl px-16 py-4 bg-white !text-empower-blue border-none shadow-xl transform hover:-translate-y-1 transition-all">
                            Enroll in IBPS 2026-27 Batch
                        </CTAButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IbpsExamPage;