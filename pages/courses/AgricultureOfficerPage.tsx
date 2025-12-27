
import React from 'react';
import CTAButton from '../../components/CTAButton';
import { AcademicCapIcon, CalendarIcon, PencilAltIcon, CheckCircleIcon, ClipboardListIcon, ClockIcon, ShieldCheckIcon } from '../../components/Icons';

const PageHeader = ({ title }: { title: string }) => (
    <div className="bg-empower-blue py-16 text-center text-white">
        <div className="container mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold font-montserrat">{title}</h1>
        </div>
    </div>
);

const Section: React.FC<{title: string; children: React.ReactNode;}> = ({title, children}) => (
    <div className="mb-12">
        <h2 className="text-3xl font-bold font-montserrat text-empower-blue mb-6 border-l-4 border-sunrise-orange pl-4">{title}</h2>
        <div className="space-y-4 text-charcoal-gray/80 dark:text-gray-300">
            {children}
        </div>
    </div>
);

const AgricultureOfficerPage: React.FC = () => {
    return (
        <div className="bg-white dark:bg-slate-900 transition-colors duration-300">
            <PageHeader title="KPSC - Agriculture Officer (AO/AAO)" />
            <div className="py-20">
                <div className="container mx-auto px-8 max-w-5xl">
                    <Section title="About the AO/AAO Exam">
                        <p>The Assistant Agriculture Officer (AAO) and Agriculture Officer (AO) recruitment by KPSC is a specialized selection process for graduates in Agriculture and Farm Sciences. Based on the latest notification, the selection is determined by a rigorous two-stage written examination process, ensuring only the most competent candidates enter the State Department of Agriculture.</p>
                    </Section>

                    <Section title="1. Kannada Language Qualifying Exam">
                        <div className="bg-blue-50 dark:bg-blue-900/10 p-6 rounded-xl border border-blue-100 dark:border-blue-800">
                            <div className="flex items-start">
                                <ShieldCheckIcon className="w-10 h-10 text-empower-blue mr-4 flex-shrink-0" />
                                <div>
                                    <h4 className="font-bold text-charcoal-gray dark:text-white text-lg mb-2">Mandatory Qualifying Paper</h4>
                                    <p className="text-sm mb-4">Every candidate must clear the Kannada Language Examination to be eligible for the main merit list selection.</p>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="bg-white dark:bg-slate-800 p-3 rounded shadow-sm">
                                            <p className="text-xs uppercase text-gray-500 font-bold">Maximum Marks</p>
                                            <p className="text-xl font-bold text-empower-blue">150 Marks</p>
                                        </div>
                                        <div className="bg-white dark:bg-slate-800 p-3 rounded shadow-sm">
                                            <p className="text-xs uppercase text-gray-500 font-bold">Minimum Passing</p>
                                            <p className="text-xl font-bold text-encourage-red">50 Marks</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Section>

                    <Section title="2. Competitive Examination Pattern">
                        <p className="mb-6">As per section 6.2 of the notification, the competitive exam consists of two papers. The marks from these papers are used to calculate the final percentage for recruitment.</p>
                         
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Paper 1 */}
                            <div className="p-6 bg-white dark:bg-slate-800 border-2 border-soft-gray dark:border-gray-700 rounded-2xl shadow-lg relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-10">
                                    <ClipboardListIcon className="w-16 h-16" />
                                </div>
                                <h3 className="text-xl font-extrabold font-montserrat text-empower-blue dark:text-blue-400 mb-2">Paper I: General Paper</h3>
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1 rounded-full">300 Marks</span>
                                    <span className="flex items-center text-xs text-gray-500 font-bold"><ClockIcon className="w-4 h-4 mr-1" /> 1.5 Hours</span>
                                </div>
                                <p className="text-sm opacity-90">Covers General Knowledge, National & International Importance, Geography, Indian History, and Mental Ability.</p>
                            </div>

                            {/* Paper 2 */}
                            <div className="p-6 bg-white dark:bg-slate-800 border-2 border-soft-gray dark:border-gray-700 rounded-2xl shadow-lg relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-10">
                                    <PencilAltIcon className="w-16 h-16" />
                                </div>
                                <h3 className="text-xl font-extrabold font-montserrat text-empower-blue dark:text-blue-400 mb-2">Paper II: Specific Paper</h3>
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1 rounded-full">300 Marks</span>
                                    <span className="flex items-center text-xs text-gray-500 font-bold"><ClockIcon className="w-4 h-4 mr-1" /> 2 Hours</span>
                                </div>
                                <p className="text-sm opacity-90">Technical paper focusing on core Agriculture subjects and B.Sc. (Agri) academic syllabus.</p>
                            </div>
                        </div>

                        {/* Critical Rules */}
                        <div className="mt-10 grid sm:grid-cols-2 gap-6">
                            <div className="flex items-start bg-soft-gray/30 dark:bg-slate-800/50 p-4 rounded-xl">
                                <CheckCircleIcon className="w-6 h-6 text-encourage-red mr-3 mt-1 shrink-0" />
                                <div>
                                    <h5 className="font-bold text-sm">Negative Marking (1/4)</h5>
                                    <p className="text-xs opacity-80">For every wrong answer, 0.25 marks will be deducted from the total score.</p>
                                </div>
                            </div>
                            <div className="flex items-start bg-soft-gray/30 dark:bg-slate-800/50 p-4 rounded-xl">
                                <CheckCircleIcon className="w-6 h-6 text-green-600 mr-3 mt-1 shrink-0" />
                                <div>
                                    <h5 className="font-bold text-sm">Minimum Merit Qualifying</h5>
                                    <p className="text-xs opacity-80">Candidates must secure a minimum aggregate of 35% across all papers in the competitive exam.</p>
                                </div>
                            </div>
                        </div>
                    </Section>

                    <Section title="Eligibility & Syllabus">
                        <div className="space-y-6">
                            <div className="flex items-start">
                                <AcademicCapIcon className="w-10 h-10 text-sunrise-orange mr-4 flex-shrink-0" />
                                <div>
                                    <h4 className="font-bold text-charcoal-gray dark:text-white text-lg">Degree Requirements</h4>
                                    <p className="text-sm">B.Sc. in Agriculture, Horticulture, or related Farm Sciences. Typically, 85% of posts are for B.Sc Agri and 15% for other Farm Science streams.</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <CalendarIcon className="w-10 h-10 text-sunrise-orange mr-4 flex-shrink-0" />
                                <div>
                                    <h4 className="font-bold text-charcoal-gray dark:text-white text-lg">Age Limit</h4>
                                    <p className="text-sm">Minimum 21 years; Maximum 35 years (General), 38 years (OBC), 40 years (SC/ST/Cat-I).</p>
                                </div>
                            </div>
                        </div>
                    </Section>

                    <div className="text-center mt-16 bg-gradient-to-br from-empower-blue to-blue-900 p-12 rounded-3xl text-white shadow-2xl">
                        <h3 className="text-3xl font-extrabold mb-4">Join our Specialized AO/AAO Batch</h3>
                        <p className="mb-10 opacity-90 max-w-2xl mx-auto">Master the technical B.Sc syllabus and clear the mandatory Kannada exam with Karnataka's top agriculture mentors. Complete Paper I & II coverage with 300-mark format test series.</p>
                        <CTAButton requiresAuth variant="primary" className="text-xl px-16 py-4 bg-white !text-empower-blue hover:bg-soft-gray border-none shadow-xl transform hover:-translate-y-1 transition-all">
                            Enroll Now for 2026-27
                        </CTAButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AgricultureOfficerPage;
