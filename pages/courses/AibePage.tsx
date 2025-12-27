
import React from 'react';
import CTAButton from '../../components/CTAButton';
import { ScaleIcon, BriefcaseIcon, CheckCircleIcon, DocumentTextIcon, UsersIcon, CalendarIcon, ClipboardListIcon, ClockIcon } from '../../components/Icons';

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

const AibePage: React.FC = () => {
    const syllabus = [
        { topic: "Constitutional law", questions: 10 },
        { topic: "I.P.C. (Indian Penal Code) & (New) Bharatiya Nyaya Sanhita", questions: 8 },
        { topic: "Cr. P. C. (Criminal Procedure Code) & (New) Bharatiya Nagarik Suraksha Sanhita", questions: 10 },
        { topic: "C. P. C. (Code of Civil Procedure)", questions: 10 },
        { topic: "Evidence Act & (New) Bharatiya Sakshya Adhiniyam", questions: 8 },
        { topic: "Alternative Dispute Redressal including Arbitration Act", questions: 4 },
        { topic: "Family Law", questions: 8 },
        { topic: "Public Interest Litigation", questions: 4 },
        { topic: "Administration Law", questions: 3 },
        { topic: "Professional Ethics & Cases of Professional Misconduct under Bar Council of India Rules", questions: 4 },
        { topic: "Company Law", questions: 2 },
        { topic: "Environmental Law", questions: 2 },
        { topic: "Cyber Law", questions: 2 },
        { topic: "Labour & Industrial Law", questions: 4 },
        { topic: "Law of Tort, including Motor Vehicle Act and Consumer Protection Law", questions: 5 },
        { topic: "Law related to Taxation", questions: 4 },
        { topic: "Law of Contract, Specific Relief, Property Laws, Negotiable Instrument Act", questions: 8 },
        { topic: "Land Acquisition Act", questions: 2 },
        { topic: "Intellectual Property Laws", questions: 2 }
    ];

    return (
        <div className="bg-white dark:bg-slate-900 transition-colors duration-300">
            <PageHeader title="AIBE-XX Preparation & Guidelines" />
            <div className="py-20">
                <div className="container mx-auto px-8 max-w-5xl">
                    
                    {/* Latest Notification Alert */}
                    <div className="mb-12 bg-orange-50 dark:bg-orange-900/20 border-l-4 border-sunrise-orange p-6 rounded-r-xl">
                        <div className="flex items-center mb-2">
                            <CalendarIcon className="w-6 h-6 text-sunrise-orange mr-2" />
                            <h3 className="font-bold text-lg text-charcoal-gray dark:text-white">Latest Update: AIBE-XX Notification</h3>
                        </div>
                        <p className="text-sm">
                            As per the BCI notification dated <strong>27.09.2025</strong>, registration for AIBE-XX begins on <strong>29th September 2025</strong>. The exam includes the new criminal laws (BNS, BNSS, BSA).
                        </p>
                    </div>

                    <Section title="Exam Pattern Highlights">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="p-4 bg-soft-gray/30 dark:bg-slate-800 rounded-lg text-center">
                                <DocumentTextIcon className="w-8 h-8 mx-auto text-empower-blue mb-2" />
                                <h4 className="font-bold text-xs uppercase">Questions</h4>
                                <p className="text-xl font-bold">100 MCQs</p>
                            </div>
                            <div className="p-4 bg-soft-gray/30 dark:bg-slate-800 rounded-lg text-center">
                                <ClockIcon className="w-8 h-8 mx-auto text-empower-blue mb-2" />
                                <h4 className="font-bold text-xs uppercase">Duration</h4>
                                <p className="text-xl font-bold">3.5 Hours</p>
                            </div>
                            <div className="p-4 bg-soft-gray/30 dark:bg-slate-800 rounded-lg text-center">
                                <ScaleIcon className="w-8 h-8 mx-auto text-empower-blue mb-2" />
                                <h4 className="font-bold text-xs uppercase">Mode</h4>
                                <p className="text-xl font-bold">Offline</p>
                            </div>
                            <div className="p-4 bg-soft-gray/30 dark:bg-slate-800 rounded-lg text-center">
                                <CheckCircleIcon className="w-8 h-8 mx-auto text-empower-blue mb-2" />
                                <h4 className="font-bold text-xs uppercase">Open Book</h4>
                                <p className="text-xl font-bold">Bare Acts</p>
                            </div>
                        </div>
                        <p className="text-sm mt-4 italic text-center">Available in 11-22 languages. No negative marking apply.</p>
                    </Section>

                    <Section title="AIBE-XX Detailed Syllabus & Weightage">
                        <div className="overflow-x-auto shadow-lg rounded-xl border border-gray-100 dark:border-gray-700">
                            <table className="min-w-full bg-white dark:bg-slate-800 text-sm">
                                <thead className="bg-empower-blue text-white">
                                    <tr>
                                        <th className="py-4 px-6 text-left font-montserrat uppercase tracking-wider">Sr. No.</th>
                                        <th className="py-4 px-6 text-left font-montserrat uppercase tracking-wider">Topic / Subject</th>
                                        <th className="py-4 px-6 text-center font-montserrat uppercase tracking-wider">Questions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 dark:divide-gray-700 font-medium">
                                    {syllabus.map((item, index) => (
                                        <tr key={index} className="hover:bg-gray-50 dark:hover:bg-slate-700/50 transition-colors">
                                            <td className="py-3 px-6 text-charcoal-gray dark:text-gray-400">{index + 1}</td>
                                            <td className="py-3 px-6 text-charcoal-gray dark:text-gray-200">{item.topic}</td>
                                            <td className="py-3 px-6 text-center font-bold text-empower-blue dark:text-blue-400">{item.questions}</td>
                                        </tr>
                                    ))}
                                    <tr className="bg-soft-gray/50 dark:bg-slate-700">
                                        <td colSpan={2} className="py-4 px-6 text-right font-bold text-charcoal-gray dark:text-white">Total Questions</td>
                                        <td className="py-4 px-6 text-center font-extrabold text-sunrise-orange text-lg">100</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </Section>

                    <Section title="Expanded Eligibility Criteria">
                        <p className="mb-4">In compliance with recent Supreme Court directions, the BCI has expanded eligibility:</p>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="p-5 bg-soft-gray/30 dark:bg-slate-800 rounded-xl border border-gray-100 dark:border-gray-700">
                                <h4 className="font-bold text-empower-blue dark:text-blue-400 mb-2">Final-Year Students</h4>
                                <p className="text-xs">Final semester students with no backlogs from previous semesters are now eligible.</p>
                            </div>
                            <div className="p-5 bg-soft-gray/30 dark:bg-slate-800 rounded-xl border border-gray-100 dark:border-gray-700">
                                <h4 className="font-bold text-empower-blue dark:text-blue-400 mb-2">Graduates Awaiting Degree</h4>
                                <p className="text-xs">Passed out candidates awaiting degree conferral can now register for AIBE-XX.</p>
                            </div>
                            <div className="p-5 bg-soft-gray/30 dark:bg-slate-800 rounded-xl border border-gray-100 dark:border-gray-700">
                                <h4 className="font-bold text-empower-blue dark:text-blue-400 mb-2">Non-Enrolled Graduates</h4>
                                <p className="text-xs">Graduates who haven't yet enrolled with a State Bar Council are also eligible.</p>
                            </div>
                        </div>
                    </Section>

                    <Section title="Mandatory Documentation">
                        <div className="overflow-x-auto">
                            <table className="min-w-full bg-white dark:bg-slate-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm">
                                <thead className="bg-gray-100 dark:bg-slate-700">
                                    <tr>
                                        <th className="py-3 px-4 text-left font-bold">Category</th>
                                        <th className="py-3 px-4 text-left font-bold">Required Marksheets (Scanned)</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                    <tr><td className="py-3 px-4">3-Year LL.B (Final Year)</td><td className="py-3 px-4">Semester-I to Semester-V</td></tr>
                                    <tr><td className="py-3 px-4">5-Year LL.B (Final Year)</td><td className="py-3 px-4">Semester-I to Semester-IX</td></tr>
                                    <tr><td className="py-3 px-4">3-Year LL.B (Graduates)</td><td className="py-3 px-4">Semester-I to Semester-VI</td></tr>
                                    <tr><td className="py-3 px-4">5-Year LL.B (Graduates)</td><td className="py-3 px-4">Semester-I to Semester-X</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </Section>

                    <div className="text-center mt-16 bg-empower-blue p-10 rounded-2xl text-white">
                        <h3 className="text-2xl font-bold mb-4">AIBE-XX Special Batch</h3>
                        <p className="mb-8 opacity-90">Master the new BNS, BNSS, and BSA laws with our crash course. Learn Bare Act navigation techniques to clear the open-book exam effortlessly.</p>
                        <CTAButton requiresAuth variant="primary" className="text-lg px-12 bg-white !text-empower-blue hover:bg-soft-gray border-none">
                            Enroll in AIBE-XX Course
                        </CTAButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AibePage;
