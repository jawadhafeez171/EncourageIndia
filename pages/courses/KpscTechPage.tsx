import React from 'react';
import CTAButton from '../../components/CTAButton';
import { AcademicCapIcon, CalendarIcon, ChatAlt2Icon, PencilAltIcon, CogIcon, CheckCircleIcon, ClipboardListIcon, UsersIcon, ClockIcon } from '../../components/Icons';
import SEO from '../../components/SEO';

const PageHeader = ({ title }: { title: string }) => (
    <div className="bg-empower-blue py-16 text-center text-white">
        <div className="container mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold font-montserrat">{title}</h1>
        </div>
    </div>
);

const Section: React.FC<{ title: string; children: React.ReactNode; }> = ({ title, children }) => (
    <div className="mb-12">
        <h2 className="text-3xl font-bold font-montserrat text-empower-blue mb-6 border-l-4 border-sunrise-orange pl-4">{title}</h2>
        <div className="space-y-4 text-charcoal-gray/80 dark:text-gray-300">
            {children}
        </div>
    </div>
);

const KpscTechPage: React.FC = () => {
    return (
        <div className="bg-white dark:bg-slate-900 transition-colors duration-300">
            <SEO
                title="KPSC AEE & AE Technical Exam Coaching | Karnataka Government Jobs"
                description="Specialized coaching for KPSC Assistant Executive Engineer (AEE) and Assistant Engineer (AE) exams. In-depth preparation for Civil, Mechanical, and Electrical branches."
                url="https://encourageindiaias.in/courses/kpsc-technical"
            />
            <PageHeader title="KPSC - Technical Exams (AEE/AE)" />
            <div className="py-20">
                <div className="container mx-auto px-8 max-w-5xl">
                    <Section title="About AEE/AE Exams">
                        <div className="flex items-start">
                            <CogIcon className="w-10 h-10 text-sunrise-orange mr-4 flex-shrink-0" />
                            <div>
                                <p className="mb-4">KPSC recruits Assistant Executive Engineers (AEE) and Assistant Engineers (AE) for various engineering departments of the Karnataka government, such as the Public Works Department (PWD), Water Resources Department (WRD), and Rural Development & Panchayat Raj (RDPR). These roles are critical for the planning, design, and execution of the state's infrastructure projects.</p>
                                <p className="text-sm italic">The AEE cadre is a Group-A post while AE is typically Group-B. Selection processes differ slightly in depth and structure.</p>
                            </div>
                        </div>
                    </Section>

                    <Section title="Eligibility Criteria">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <AcademicCapIcon className="w-8 h-8 text-sunrise-orange mr-3 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-charcoal-gray dark:text-white">Educational Qualification</h4>
                                        <p className="text-sm">Candidates must possess a B.E./B.Tech degree in the relevant engineering discipline (Civil, Mechanical, Electrical) from a recognized university.</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <CalendarIcon className="w-8 h-8 text-sunrise-orange mr-3 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-charcoal-gray dark:text-white">Age Limit</h4>
                                        <p className="text-sm">Minimum 21 years; Maximum 35 years (General Merit). Relaxations apply for SC/ST and OBC categories as per state rules.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-blue-50 dark:bg-blue-900/10 p-6 rounded-xl border border-blue-100 dark:border-blue-800">
                                <h4 className="font-bold mb-3 flex items-center text-empower-blue dark:text-blue-400">
                                    <ChatAlt2Icon className="w-5 h-5 mr-2" /> Language Proficiency
                                </h4>
                                <p className="text-sm">Knowledge of the Kannada language is mandatory. Candidates must usually clear a qualifying Kannada Language test if they haven't studied it up to SSLC.</p>
                            </div>
                        </div>
                    </Section>

                    {/* AE Section */}
                    <Section title="Assistant Engineer (AE) Pattern">
                        <p className="mb-6">The selection for AE posts is generally based on a competitive written examination consisting of two objective papers.</p>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="p-6 bg-white dark:bg-slate-800 border-2 border-soft-gray dark:border-gray-700 rounded-lg shadow-lg">
                                <h3 className="text-xl font-semibold font-montserrat text-empower-blue dark:text-blue-400 mb-2">Paper I: General Paper</h3>
                                <p className="font-bold text-sunrise-orange mb-3">200 Marks</p>
                                <ul className="space-y-2 text-sm opacity-90">
                                    <li className="flex items-start"><CheckCircleIcon className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" /><span>General Knowledge & Current Events</span></li>
                                    <li className="flex items-start"><CheckCircleIcon className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" /><span>Indian History & Geography</span></li>
                                    <li className="flex items-start"><CheckCircleIcon className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" /><span>General Mental Ability</span></li>
                                </ul>
                            </div>
                            <div className="p-6 bg-white dark:bg-slate-800 border-2 border-soft-gray dark:border-gray-700 rounded-lg shadow-lg">
                                <h3 className="text-xl font-semibold font-montserrat text-empower-blue dark:text-blue-400 mb-2">Paper II: Specific Paper</h3>
                                <p className="font-bold text-sunrise-orange mb-3">200 Marks</p>
                                <ul className="space-y-2 text-sm opacity-90">
                                    <li className="flex items-start"><CheckCircleIcon className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" /><span>Core Technical Syllabus</span></li>
                                    <li className="flex items-start"><CheckCircleIcon className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" /><span>In-depth questions from the chosen branch (Civil, Mech, etc.)</span></li>
                                </ul>
                            </div>
                        </div>
                    </Section>

                    {/* AEE Section */}
                    <Section title="Assistant Executive Engineer (AEE) Pattern">
                        <div className="space-y-8">
                            <div>
                                <p className="mb-4">The recruitment for Assistant Executive Engineer (Group-A) involves a more extensive evaluation process consisting of two main stages:</p>
                                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                                    <div className="bg-gray-50 dark:bg-slate-800 p-4 rounded-xl border border-gray-100 dark:border-gray-700">
                                        <h4 className="font-bold text-empower-blue dark:text-blue-400 mb-1 flex items-center">
                                            <PencilAltIcon className="w-5 h-5 mr-2" /> Stage 1: Written Exam
                                        </h4>
                                        <p className="text-xs">5 Merit Papers (5 × 100 = 500 Total Marks) + 2 Qualifying Papers.</p>
                                    </div>
                                    <div className="bg-gray-50 dark:bg-slate-800 p-4 rounded-xl border border-gray-100 dark:border-gray-700">
                                        <h4 className="font-bold text-empower-blue dark:text-blue-400 mb-1 flex items-center">
                                            <UsersIcon className="w-5 h-5 mr-2" /> Stage 2: Interview
                                        </h4>
                                        <p className="text-xs">Personality Test marks are fixed at 5% of the total written marks (25 Marks).</p>
                                    </div>
                                </div>
                            </div>

                            <div className="overflow-x-auto shadow-xl rounded-2xl border border-gray-100 dark:border-gray-700">
                                <table className="min-w-full bg-white dark:bg-slate-800 text-sm">
                                    <thead className="bg-empower-blue text-white">
                                        <tr>
                                            <th className="py-4 px-6 text-left font-bold uppercase tracking-wider">ಪತ್ರಿಕೆಗಳು / Papers</th>
                                            <th className="py-4 px-6 text-left font-bold uppercase tracking-wider">ವಿಷಯ / Subject</th>
                                            <th className="py-4 px-6 text-center font-bold uppercase tracking-wider">ಅಂಕಗಳು / Marks</th>
                                            <th className="py-4 px-6 text-center font-bold uppercase tracking-wider">ಅವಧಿ (ಗಂಟೆಗಳು) / Duration</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                                        <tr className="bg-gray-50 dark:bg-slate-700/50">
                                            <td colSpan={4} className="py-2 px-6 font-black text-[10px] text-gray-500 dark:text-gray-400 uppercase tracking-widest">
                                                ಅರ್ಹತಾಪೂರಕ ಪತ್ರಿಕೆಗಳು / Qualifying Papers
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="py-3 px-6 font-medium">Qualifying Paper-1</td>
                                            <td className="py-3 px-6">ಕನ್ನಡ / Kannada</td>
                                            <td className="py-3 px-6 text-center font-bold">100</td>
                                            <td className="py-3 px-6 text-center">1½ Hours</td>
                                        </tr>
                                        <tr>
                                            <td className="py-3 px-6 font-medium">Qualifying Paper-2</td>
                                            <td className="py-3 px-6">ಇಂಗ್ಲಿಷ್ / English</td>
                                            <td className="py-3 px-6 text-center font-bold">100</td>
                                            <td className="py-3 px-6 text-center">1½ Hours</td>
                                        </tr>
                                        <tr className="bg-gray-50 dark:bg-slate-700/50">
                                            <td colSpan={4} className="py-2 px-6 font-black text-[10px] text-empower-blue dark:text-blue-400 uppercase tracking-widest">
                                                ಕಡ್ಡಾಯ ಪತ್ರಿಕೆಗಳು / Compulsory Papers
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="py-3 px-6 font-medium">ಪತ್ರಿಕೆ – 1 / Paper – 1</td>
                                            <td className="py-3 px-6">ಸಾಮಾನ್ಯ ಜ್ಞಾನ / General Knowledge</td>
                                            <td className="py-3 px-6 text-center font-bold">100</td>
                                            <td className="py-3 px-6 text-center">1½ Hours</td>
                                        </tr>
                                        <tr>
                                            <td className="py-3 px-6 font-medium">ಪತ್ರಿಕೆ – 2 / Paper – 2</td>
                                            <td className="py-3 px-6">ತಾಂತ್ರಿಕ ವಿಷಯದ ಪತ್ರಿಕೆ – 1 / Technical Subject Paper – 1</td>
                                            <td className="py-3 px-6 text-center font-bold">100</td>
                                            <td className="py-3 px-6 text-center">3 Hours</td>
                                        </tr>
                                        <tr>
                                            <td className="py-3 px-6 font-medium">ಪತ್ರಿಕೆ – 3 / Paper – 3</td>
                                            <td className="py-3 px-6">ತಾಂತ್ರಿಕ ವಿಷಯದ ಪತ್ರಿಕೆ – 2 / Technical Subject Paper – 2</td>
                                            <td className="py-3 px-6 text-center font-bold">100</td>
                                            <td className="py-3 px-6 text-center">3 Hours</td>
                                        </tr>
                                        <tr>
                                            <td className="py-3 px-6 font-medium">ಪತ್ರಿಕೆ – 4 / Paper – 4</td>
                                            <td className="py-3 px-6">ತಾಂತ್ರಿಕ ವಿಷಯದ ಪತ್ರಿಕೆ – 3 / Technical Subject Paper – 3</td>
                                            <td className="py-3 px-6 text-center font-bold">100</td>
                                            <td className="py-3 px-6 text-center">3 Hours</td>
                                        </tr>
                                        <tr>
                                            <td className="py-3 px-6 font-medium">ಪತ್ರಿಕೆ – 5 / Paper – 5</td>
                                            <td className="py-3 px-6">ತಾಂತ್ರಿಕ ವಿಷಯದ ಪತ್ರಿಕೆ – 4 / Technical Subject Paper – 4</td>
                                            <td className="py-3 px-6 text-center font-bold">100</td>
                                            <td className="py-3 px-6 text-center">3 Hours</td>
                                        </tr>
                                    </tbody>
                                    <tfoot className="bg-gray-100 dark:bg-slate-700">
                                        <tr className="font-black text-empower-blue dark:text-blue-400">
                                            <td colSpan={2} className="py-4 px-6 text-right uppercase tracking-wider">ಒಟ್ಟು ಅಂಕಗಳು / Total Written Merit Marks</td>
                                            <td className="py-4 px-6 text-center text-xl">500</td>
                                            <td className="py-4 px-6"></td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>

                            <div className="bg-orange-50 dark:bg-orange-900/10 p-6 rounded-2xl border border-sunrise-orange/20">
                                <h4 className="font-bold text-sunrise-orange mb-3 flex items-center">
                                    <UsersIcon className="w-6 h-6 mr-2" /> Personality Test (Interview)
                                </h4>
                                <p className="text-sm mb-2">Candidates are called for interview based on the merit of written papers (Compulsory Papers 1-5).</p>
                                <p className="text-xs font-bold text-charcoal-gray dark:text-gray-200">
                                    Note: The maximum marks for personality test shall not exceed 5% (25 marks) of the marks fixed for competitive examination.
                                </p>
                            </div>
                        </div>
                    </Section>

                    <div className="text-center mt-20 bg-gradient-to-br from-empower-blue to-blue-900 p-10 rounded-3xl text-white shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-10">
                            <CogIcon className="w-48 h-48 animate-spin-slow" />
                        </div>
                        <h3 className="text-3xl font-extrabold font-montserrat mb-4 relative z-10">Ready to Ace KPSC Technical?</h3>
                        <p className="mb-10 text-blue-100 max-w-2xl mx-auto relative z-10">
                            Join our specialized batch for AEE/AE aspirants. We provide high-yield modules for Technical Subjects and comprehensive GS Paper-1 coverage with 500-mark format test series.
                        </p>
                        <CTAButton requiresAuth variant="primary" className="text-xl px-16 py-4 bg-white !text-empower-blue hover:bg-soft-gray border-none shadow-xl transform hover:-translate-y-1 transition-all">
                            Enroll Now for 2026-27
                        </CTAButton>
                    </div>
                </div>
            </div>
            <style>{`
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                .animate-spin-slow {
                    animation: spin-slow 12s linear infinite;
                }
            `}</style>
        </div>
    );
};

export default KpscTechPage;