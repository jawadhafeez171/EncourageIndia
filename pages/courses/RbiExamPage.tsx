import React from 'react';
import CTAButton from '../../components/CTAButton';
import { AcademicCapIcon, ShieldCheckIcon, PencilAltIcon, CheckCircleIcon, UsersIcon, ScaleIcon, BookOpenIcon, ClockIcon, ClipboardListIcon } from '../../components/Icons';
import SEO from '../../components/SEO';

const PageHeader = ({ title }: { title: string }) => (
    <div className="bg-gradient-to-br from-empower-blue to-indigo-900 py-16 text-center text-white">
        <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-black font-montserrat uppercase tracking-tight">{title}</h1>
            <p className="text-xl mt-4 text-blue-100 font-medium">Joining the Reserve Bank of India - The Apex Regulator.</p>
        </div>
    </div>
);

const Section: React.FC<{ title: string; children: React.ReactNode; }> = ({ title, children }) => (
    <div className="mb-16">
        <h2 className="text-3xl font-black font-montserrat text-empower-blue dark:text-blue-400 mb-8 border-l-8 border-sunrise-orange pl-5 uppercase tracking-tighter">{title}</h2>
        <div className="space-y-6 text-charcoal-gray/80 dark:text-gray-300">
            {children}
        </div>
    </div>
);

const RbiExamPage: React.FC = () => {
    return (
        <div className="bg-white dark:bg-slate-900 transition-colors duration-300">
            <SEO
                title="RBI Grade B & Assistant Exam Coaching | Central Bank Careers"
                description="Expert coaching for RBI Grade B Officers and RBI Assistant recruitment. Comprehensive guidance for ESI, Finance, and Management papers with central banking focus."
                url="https://encourageindiaias.in/courses/rbi-hub"
            />
            <PageHeader title="RBI Grade B / Assistant" />
            <div className="py-20">
                <div className="container mx-auto px-6 max-w-6xl">

                    <Section title="About RBI Examination">
                        <p className="text-lg md:text-xl leading-relaxed font-medium">
                            The RBI Grade B and RBI Assistant exams are national-level recruitment examinations conducted by the Reserve Bank of India to select officers and clerical staff for regulatory, policy, and operational roles in India’s central banking system.
                        </p>
                    </Section>

                    {/* RBI GRADE B SECTION */}
                    <Section title="RBI Grade B (DR)">
                        <div className="bg-gray-50 dark:bg-slate-800 p-8 rounded-3xl border border-gray-100 dark:border-gray-700 mb-10">
                            <h3 className="text-xl font-black text-empower-blue dark:text-blue-400 mb-4 flex items-center">
                                <AcademicCapIcon className="w-6 h-6 mr-2 text-sunrise-orange" />
                                Eligibility & Age Limit
                            </h3>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <p className="text-xs uppercase font-bold text-gray-400">Educational Qualification</p>
                                    <p className="text-sm font-medium">Bachelor’s degree with minimum 60% marks (50% for SC/ST/PwBD) OR Post-graduation with minimum 55%.</p>
                                </div>
                                <div className="space-y-2">
                                    <p className="text-xs uppercase font-bold text-gray-400">Age Limit</p>
                                    <p className="text-sm font-medium">21–30 years (upper age relaxation as per rules).</p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-12">
                            {/* Phase I */}
                            <div>
                                <h4 className="font-black text-lg text-charcoal-gray dark:text-white mb-4 flex items-center">
                                    <span className="w-8 h-8 bg-empower-blue text-white rounded-full flex items-center justify-center mr-3 text-sm">1</span>
                                    Phase-I: Objective Examination
                                </h4>
                                <div className="overflow-x-auto shadow-xl rounded-2xl border border-gray-100 dark:border-gray-800">
                                    <table className="min-w-full text-sm">
                                        <thead className="bg-empower-blue text-white">
                                            <tr>
                                                <th className="py-4 px-6 text-left">Section</th>
                                                <th className="py-4 px-6 text-center">No. of Questions</th>
                                                <th className="py-4 px-6 text-center">Marks</th>
                                                <th className="py-4 px-6 text-center">Duration</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                                            <tr><td className="py-3 px-6">General Awareness</td><td className="py-3 px-6 text-center">80</td><td className="py-3 px-6 text-center">80</td><td className="py-3 px-6 text-center">25 mins</td></tr>
                                            <tr><td className="py-3 px-6">English Language</td><td className="py-3 px-6 text-center">30</td><td className="py-3 px-6 text-center">30</td><td className="py-3 px-6 text-center">25 mins</td></tr>
                                            <tr><td className="py-3 px-6">Quantitative Aptitude</td><td className="py-3 px-6 text-center">30</td><td className="py-3 px-6 text-center">30</td><td className="py-3 px-6 text-center">25 mins</td></tr>
                                            <tr><td className="py-3 px-6">Reasoning Ability</td><td className="py-3 px-6 text-center">60</td><td className="py-3 px-6 text-center">60</td><td className="py-3 px-6 text-center">45 mins</td></tr>
                                            <tr className="bg-gray-100 dark:bg-slate-800 font-black"><td className="py-3 px-6">Total</td><td className="py-3 px-6 text-center">200</td><td className="py-3 px-6 text-center">200</td><td className="py-3 px-6 text-center">120 mins</td></tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* Phase II */}
                            <div>
                                <h4 className="font-black text-lg text-charcoal-gray dark:text-white mb-4 flex items-center">
                                    <span className="w-8 h-8 bg-empower-blue text-white rounded-full flex items-center justify-center mr-3 text-sm">2</span>
                                    Phase-II: Mains Examination
                                </h4>
                                <div className="overflow-x-auto shadow-xl rounded-2xl border border-gray-100 dark:border-gray-800">
                                    <table className="min-w-full text-sm">
                                        <thead className="bg-blue-800 text-white">
                                            <tr>
                                                <th className="py-4 px-6 text-left">Paper</th>
                                                <th className="py-4 px-6 text-left">Type</th>
                                                <th className="py-4 px-6 text-center">Marks</th>
                                                <th className="py-4 px-6 text-center">Duration</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-100 dark:divide-gray-800 font-medium">
                                            <tr><td className="py-4 px-6">Economic & Social Issues (ESI)</td><td className="py-4 px-6">Objective + Descriptive</td><td className="py-4 px-6 text-center">100</td><td className="py-4 px-6 text-center">120 mins</td></tr>
                                            <tr><td className="py-4 px-6">English (Writing Skills)</td><td className="py-4 px-6">Descriptive</td><td className="py-4 px-6 text-center">100</td><td className="py-4 px-6 text-center">90 mins</td></tr>
                                            <tr><td className="py-4 px-6">Finance & Management (FM)</td><td className="py-4 px-6">Objective + Descriptive</td><td className="py-4 px-6 text-center">100</td><td className="py-4 px-6 text-center">120 mins</td></tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="mt-6 flex items-center p-4 bg-orange-50 dark:bg-orange-900/10 rounded-xl border border-sunrise-orange/20">
                                    <UsersIcon className="w-6 h-6 text-sunrise-orange mr-3" />
                                    <p className="text-sm font-bold">Phase-III: Final Interview carries 75 Marks.</p>
                                </div>
                            </div>

                            {/* Grade B Syllabus */}
                            <div>
                                <h4 className="font-black text-lg text-charcoal-gray dark:text-white mb-4">Syllabus – RBI Grade B</h4>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {[
                                        { title: "General Awareness", content: "Banking & Economy, RBI Functions, Current Affairs" },
                                        { title: "Quant & Reasoning", content: "Arithmetic, DI, Puzzles, Logical Reasoning, Syllogism" },
                                        { title: "ESI", content: "Growth & Development, Poverty, Inflation, Social Structure" },
                                        { title: "Finance & Management", content: "Financial Markets, Accounting, HRM, Leadership, Ethics" }
                                    ].map((item, i) => (
                                        <div key={i} className="p-4 bg-white dark:bg-slate-800 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm">
                                            <p className="text-[10px] font-black uppercase text-sunrise-orange mb-1">{item.title}</p>
                                            <p className="text-xs font-bold text-gray-500 dark:text-gray-400">{item.content}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Section>

                    {/* RBI ASSISTANT SECTION */}
                    <Section title="RBI Assistant">
                        <div className="bg-gray-50 dark:bg-slate-800 p-8 rounded-3xl border border-gray-100 dark:border-gray-700 mb-10">
                            <h3 className="text-xl font-black text-empower-blue dark:text-blue-400 mb-4 flex items-center">
                                <ScaleIcon className="w-6 h-6 mr-2 text-sunrise-orange" />
                                Eligibility & Age Limit
                            </h3>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <p className="text-xs uppercase font-bold text-gray-400">Educational Qualification</p>
                                    <p className="text-sm font-medium">Bachelor’s degree with minimum 50% marks and knowledge of local language.</p>
                                </div>
                                <div className="space-y-2">
                                    <p className="text-xs uppercase font-bold text-gray-400">Age Limit</p>
                                    <p className="text-sm font-medium">20–28 years (relaxation as per category).</p>
                                </div>
                            </div>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-12">
                            {/* Prelims */}
                            <div>
                                <h4 className="font-black text-lg text-charcoal-gray dark:text-white mb-4">Preliminary Examination</h4>
                                <div className="overflow-x-auto shadow-lg rounded-2xl">
                                    <table className="min-w-full text-xs">
                                        <thead className="bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-200">
                                            <tr>
                                                <th className="py-3 px-4 text-left">Section</th>
                                                <th className="py-3 px-4 text-center">Marks</th>
                                                <th className="py-3 px-4 text-center">Duration</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-100 dark:divide-gray-800 font-medium">
                                            <tr><td className="py-2 px-4">English Language</td><td className="py-2 px-4 text-center">30</td><td className="py-2 px-4 text-center">20 mins</td></tr>
                                            <tr><td className="py-2 px-4">Numerical Ability</td><td className="py-2 px-4 text-center">35</td><td className="py-2 px-4 text-center">20 mins</td></tr>
                                            <tr><td className="py-2 px-4">Reasoning Ability</td><td className="py-2 px-4 text-center">35</td><td className="py-2 px-4 text-center">20 mins</td></tr>
                                            <tr className="bg-gray-50 dark:bg-slate-900 font-black"><td className="py-2 px-4">Total</td><td className="py-2 px-4 text-center">100</td><td className="py-2 px-4 text-center">60 mins</td></tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* Mains */}
                            <div>
                                <h4 className="font-black text-lg text-charcoal-gray dark:text-white mb-4">Main Examination</h4>
                                <div className="overflow-x-auto shadow-lg rounded-2xl">
                                    <table className="min-w-full text-xs">
                                        <thead className="bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-200">
                                            <tr>
                                                <th className="py-3 px-4 text-left">Section</th>
                                                <th className="py-3 px-4 text-center">Marks</th>
                                                <th className="py-3 px-4 text-center">Duration</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-100 dark:divide-gray-800 font-medium">
                                            <tr><td className="py-2 px-4">Reasoning & Numerical</td><td className="py-2 px-4 text-center">80</td><td className="py-2 px-4 text-center">60 mins</td></tr>
                                            <tr><td className="py-2 px-4">English & GA</td><td className="py-2 px-4 text-center">80</td><td className="py-2 px-4 text-center">55 mins</td></tr>
                                            <tr><td className="py-2 px-4">Computer Knowledge</td><td className="py-2 px-4 text-center">40</td><td className="py-2 px-4 text-center">20 mins</td></tr>
                                            <tr className="bg-gray-50 dark:bg-slate-900 font-black"><td className="py-2 px-4">Total</td><td className="py-2 px-4 text-center">200</td><td className="py-2 px-4 text-center">135 mins</td></tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <div className="mt-10 bg-soft-gray/30 dark:bg-slate-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700">
                            <h4 className="font-black text-lg text-charcoal-gray dark:text-white mb-4">Syllabus – RBI Assistant</h4>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs font-bold">
                                <div className="flex items-center"><CheckCircleIcon className="w-4 h-4 mr-2 text-green-500" /> Reasoning: Puzzles, Coding</div>
                                <div className="flex items-center"><CheckCircleIcon className="w-4 h-4 mr-2 text-green-500" /> Quant: Simplification, DI</div>
                                <div className="flex items-center"><CheckCircleIcon className="w-4 h-4 mr-2 text-green-500" /> English: RC, Vocabulary</div>
                                <div className="flex items-center"><CheckCircleIcon className="w-4 h-4 mr-2 text-green-500" /> GA: RBI Functions, Current Affairs</div>
                                <div className="flex items-center"><CheckCircleIcon className="w-4 h-4 mr-2 text-green-500" /> Computer: Internet, MS Office</div>
                            </div>
                        </div>
                    </Section>

                    {/* QUICK COMPARISON */}
                    <Section title="Quick Comparison">
                        <div className="overflow-x-auto shadow-2xl rounded-3xl border border-gray-100 dark:border-gray-800">
                            <table className="min-w-full text-sm">
                                <thead className="bg-gradient-to-r from-empower-blue to-blue-800 text-white">
                                    <tr>
                                        <th className="py-5 px-6 text-left">Exam</th>
                                        <th className="py-5 px-6 text-left">Selection Stages</th>
                                        <th className="py-5 px-6 text-center">Interview</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100 dark:divide-gray-800 font-black text-charcoal-gray dark:text-white">
                                    <tr>
                                        <td className="py-5 px-6">RBI Grade B</td>
                                        <td className="py-5 px-6">Phase-I + Phase-II + Interview</td>
                                        <td className="py-5 px-6 text-center text-green-600">YES</td>
                                    </tr>
                                    <tr>
                                        <td className="py-5 px-6">RBI Assistant</td>
                                        <td className="py-5 px-6">Prelims + Mains</td>
                                        <td className="py-5 px-6 text-center text-red-600">NO</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </Section>

                    <div className="text-center mt-16 bg-gradient-to-br from-empower-blue to-blue-900 p-12 rounded-[3rem] text-white shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-10">
                            <AcademicCapIcon className="w-48 h-48" />
                        </div>
                        <h3 className="text-3xl font-black mb-6">Master the RBI Curriculum</h3>
                        <p className="mb-10 text-lg opacity-90 max-w-2xl mx-auto">
                            Join our specialized batch for 2026-27. We provide comprehensive coverage for both Grade B (ESI/FM) and Assistant (Speed-based Prelims/Mains).
                        </p>
                        <CTAButton requiresAuth variant="primary" className="text-xl px-16 py-4 bg-white !text-empower-blue border-none shadow-xl transform hover:-translate-y-1 transition-all">
                            Enroll in RBI Program
                        </CTAButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RbiExamPage;