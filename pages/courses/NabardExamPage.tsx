import React from 'react';
import CTAButton from '../../components/CTAButton';
import { AcademicCapIcon, CalendarIcon, PencilAltIcon, CheckCircleIcon, UsersIcon, ClockIcon, BookOpenIcon, GlobeAltIcon, ShieldCheckIcon, ClipboardListIcon, StarIcon } from '../../components/Icons';
import SEO from '../../components/SEO';

const PageHeader = ({ title }: { title: string }) => (
    <div className="bg-gradient-to-br from-empower-blue to-indigo-900 py-16 text-center text-white">
        <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-black font-montserrat uppercase tracking-tight">{title}</h1>
            <p className="text-xl mt-4 text-blue-100 font-medium">National Bank for Agriculture and Rural Development.</p>
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

const NabardExamPage: React.FC = () => {
    return (
        <div className="bg-white dark:bg-slate-900 transition-colors duration-300">
            <SEO
                title="NABARD Grade A & B Coaching | Development Banking Prep"
                description="Expert coaching for NABARD Assistant Manager (Grade A) and Manager (Grade B) exams. Master ESI and ARD modules with our specialized rural finance training."
                url="https://encourageindiaias.in/courses/nabard-hub"
            />
            <PageHeader title="NABARD Grade A & B" />
            <div className="py-20">
                <div className="container mx-auto px-6 max-w-6xl">

                    <Section title="About NABARD Examination">
                        <p className="text-lg md:text-xl leading-relaxed font-medium">
                            The NABARD Grade A and Grade B exams are national-level recruitment examinations conducted by the National Bank for Agriculture and Rural Development to select officers for development banking, rural finance, and policy implementation roles in India.
                        </p>
                    </Section>

                    {/* NABARD GRADE A SECTION */}
                    <Section title="NABARD Grade A (Assistant Manager)">
                        <div className="bg-gray-50 dark:bg-slate-800 p-8 rounded-3xl border border-gray-100 dark:border-gray-700 mb-10">
                            <h3 className="text-xl font-black text-empower-blue dark:text-blue-400 mb-4 flex items-center">
                                <AcademicCapIcon className="w-6 h-6 mr-2 text-sunrise-orange" />
                                Eligibility & Age Limit
                            </h3>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <p className="text-[10px] uppercase font-black text-gray-400 tracking-widest">Educational Qualification</p>
                                    <p className="text-sm font-medium leading-relaxed">Bachelor’s degree in relevant discipline (Agriculture, Veterinary, Fisheries, Forestry, Economics, Statistics, Finance, IT, Management, etc.) with minimum 60% marks (55% for SC/ST/PwBD).</p>
                                </div>
                                <div className="space-y-2">
                                    <p className="text-[10px] uppercase font-black text-gray-400 tracking-widest">Age Limit</p>
                                    <p className="text-sm font-medium">21–30 years (age relaxation as per norms).</p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-12">
                            {/* Phase I Grade A */}
                            <div>
                                <h4 className="font-black text-lg text-charcoal-gray dark:text-white mb-4 flex items-center uppercase tracking-tight">
                                    <span className="w-8 h-8 bg-empower-blue text-white rounded-full flex items-center justify-center mr-3 text-sm">1</span>
                                    Phase-I: Preliminary Examination (Qualifying)
                                </h4>
                                <div className="overflow-x-auto shadow-xl rounded-2xl border border-gray-100 dark:border-gray-800">
                                    <table className="min-w-full text-sm">
                                        <thead className="bg-empower-blue text-white">
                                            <tr>
                                                <th className="py-4 px-6 text-left font-bold uppercase tracking-wider">Section</th>
                                                <th className="py-4 px-6 text-center font-bold uppercase tracking-wider">Questions</th>
                                                <th className="py-4 px-6 text-center font-bold uppercase tracking-wider">Marks</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-100 dark:divide-gray-800 font-medium">
                                            <tr><td className="py-3 px-6">Reasoning Ability</td><td className="py-3 px-6 text-center">20</td><td className="py-3 px-6 text-center">20</td></tr>
                                            <tr><td className="py-3 px-6">English Language</td><td className="py-3 px-6 text-center">30</td><td className="py-3 px-6 text-center">30</td></tr>
                                            <tr><td className="py-3 px-6">Computer Knowledge</td><td className="py-3 px-6 text-center">20</td><td className="py-3 px-6 text-center">20</td></tr>
                                            <tr><td className="py-3 px-6">General Awareness</td><td className="py-3 px-6 text-center">20</td><td className="py-3 px-6 text-center">20</td></tr>
                                            <tr><td className="py-3 px-6">Quantitative Aptitude</td><td className="py-3 px-6 text-center">20</td><td className="py-3 px-6 text-center">20</td></tr>
                                            <tr className="bg-blue-50/50 dark:bg-blue-900/10 font-bold"><td className="py-3 px-6">Economic & Social Issues (ESI)</td><td className="py-3 px-6 text-center">40</td><td className="py-3 px-6 text-center">40</td></tr>
                                            <tr className="bg-orange-50/50 dark:bg-orange-900/10 font-bold"><td className="py-3 px-6">Agriculture & Rural Development (ARD)</td><td className="py-3 px-6 text-center">40</td><td className="py-3 px-6 text-center">40</td></tr>
                                            <tr className="bg-gray-100 dark:bg-slate-800 font-black"><td className="py-3 px-6">Total</td><td className="py-3 px-6 text-center">190</td><td className="py-3 px-6 text-center">200</td></tr>
                                        </tbody>
                                    </table>
                                </div>
                                <p className="mt-4 text-xs font-bold text-gray-400 italic">Composite Duration: 120 Minutes.</p>
                            </div>

                            {/* Phase II & III Grade A */}
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="bg-white dark:bg-slate-800 p-8 rounded-[2rem] shadow-lg border border-gray-100 dark:border-gray-700">
                                    <h4 className="font-black text-lg text-empower-blue dark:text-blue-400 mb-6 flex items-center uppercase tracking-tight">
                                        <PencilAltIcon className="w-6 h-6 mr-2 text-sunrise-orange" />
                                        Phase-II: Main Exam
                                    </h4>
                                    <div className="space-y-4">
                                        <div className="p-4 bg-gray-50 dark:bg-slate-900 rounded-xl">
                                            <p className="text-xs font-black text-gray-400 uppercase mb-1">Paper-I: ESI</p>
                                            <p className="text-sm font-bold">Obj + Desc | 100 Marks | 120 Min</p>
                                        </div>
                                        <div className="p-4 bg-gray-50 dark:bg-slate-900 rounded-xl">
                                            <p className="text-xs font-black text-gray-400 uppercase mb-1">Paper-II: ARD / Professional</p>
                                            <p className="text-sm font-bold">Obj + Desc | 100 Marks | 120 Min</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gradient-to-br from-sunrise-orange to-orange-600 p-8 rounded-[2rem] shadow-lg text-white">
                                    <h4 className="font-black text-lg mb-6 flex items-center uppercase tracking-tight">
                                        <UsersIcon className="w-6 h-6 mr-2" />
                                        Phase-III: Interview
                                    </h4>
                                    <div className="flex items-center justify-between">
                                        <p className="text-sm font-bold opacity-90">Personal Assessment Marks</p>
                                        <span className="text-4xl font-black">50</span>
                                    </div>
                                    <div className="mt-6 pt-6 border-t border-white/20">
                                        <p className="text-xs font-medium opacity-80 leading-relaxed">Focuses on communication, problem-solving, and domain awareness for rural banking.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Syllabus Grade A */}
                            <div className="bg-soft-gray/30 dark:bg-slate-800/50 p-8 rounded-3xl border border-gray-100 dark:border-gray-700">
                                <h4 className="font-black text-lg text-charcoal-gray dark:text-white mb-6 uppercase tracking-tight">Syllabus – NABARD Grade A</h4>
                                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {[
                                        { t: "ESI", c: "Indian Economy, Poverty, Inflation, Sustainable Development" },
                                        { t: "ARD", c: "Agriculture, Cropping, Soil & Water, Rural Credit, Govt Schemes" },
                                        { t: "Reasoning & Quant", c: "Puzzles, Logical Reasoning, Arithmetic, Data Interpretation" },
                                        { t: "GA", c: "Banking, NABARD functions, Current National Events" },
                                        { t: "English", c: "Grammar, Reading Comprehension, Writing Skills (Précis/Essay)" }
                                    ].map((item, i) => (
                                        <div key={i} className="p-4 bg-white dark:bg-slate-800 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm">
                                            <p className="text-[10px] font-black uppercase text-sunrise-orange mb-1">{item.t}</p>
                                            <p className="text-xs font-bold text-gray-500 dark:text-gray-400">{item.c}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Section>

                    <div className="h-px bg-gray-100 dark:bg-gray-800 my-20"></div>

                    {/* NABARD GRADE B SECTION */}
                    <Section title="NABARD Grade B (Manager)">
                        <div className="bg-gray-50 dark:bg-slate-800 p-8 rounded-3xl border border-gray-100 dark:border-gray-700 mb-10">
                            <h3 className="text-xl font-black text-empower-blue dark:text-blue-400 mb-4 flex items-center">
                                <AcademicCapIcon className="w-6 h-6 mr-2 text-sunrise-orange" />
                                Eligibility & Age Limit
                            </h3>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <p className="text-[10px] uppercase font-black text-gray-400 tracking-widest">Educational Qualification</p>
                                    <p className="text-sm font-medium leading-relaxed">Bachelor’s degree in relevant discipline with minimum 60% marks OR Post-graduation with relevant specialization.</p>
                                </div>
                                <div className="space-y-2">
                                    <p className="text-[10px] uppercase font-black text-gray-400 tracking-widest">Age Limit</p>
                                    <p className="text-sm font-medium">25–35 years (age relaxation as per norms).</p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-12">
                            {/* Phase I Grade B */}
                            <div>
                                <h4 className="font-black text-lg text-charcoal-gray dark:text-white mb-4 flex items-center uppercase tracking-tight">
                                    <span className="w-8 h-8 bg-empower-blue text-white rounded-full flex items-center justify-center mr-3 text-sm">1</span>
                                    Phase-I: Preliminary Examination
                                </h4>
                                <div className="overflow-x-auto shadow-xl rounded-2xl border border-gray-100 dark:border-gray-800">
                                    <table className="min-w-full text-sm">
                                        <thead className="bg-empower-blue text-white">
                                            <tr>
                                                <th className="py-4 px-6 text-left font-bold uppercase tracking-wider">Section</th>
                                                <th className="py-4 px-6 text-center font-bold uppercase tracking-wider">Questions</th>
                                                <th className="py-4 px-6 text-center font-bold uppercase tracking-wider">Marks</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-100 dark:divide-gray-800 font-medium">
                                            <tr><td className="py-3 px-6">Reasoning, Quant, English, Computer, GA</td><td className="py-3 px-6 text-center">110</td><td className="py-3 px-6 text-center">120</td></tr>
                                            <tr className="bg-blue-50/50 dark:bg-blue-900/10 font-bold"><td className="py-3 px-6">Economic & Social Issues (ESI)</td><td className="py-3 px-6 text-center">40</td><td className="py-3 px-6 text-center">40</td></tr>
                                            <tr className="bg-orange-50/50 dark:bg-orange-900/10 font-bold"><td className="py-3 px-6">Agriculture & Rural Development (ARD)</td><td className="py-3 px-6 text-center">40</td><td className="py-3 px-6 text-center">40</td></tr>
                                            <tr className="bg-gray-100 dark:bg-slate-800 font-black"><td className="py-3 px-6">Total</td><td className="py-3 px-6 text-center">190</td><td className="py-3 px-6 text-center">200</td></tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* Phase II & III Grade B */}
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="bg-white dark:bg-slate-800 p-8 rounded-[2rem] shadow-lg border border-gray-100 dark:border-gray-700">
                                    <h4 className="font-black text-lg text-empower-blue dark:text-blue-400 mb-6 flex items-center uppercase tracking-tight">
                                        <PencilAltIcon className="w-6 h-6 mr-2 text-sunrise-orange" />
                                        Phase-II: Main Exam (3 Papers)
                                    </h4>
                                    <div className="space-y-4">
                                        <div className="p-3 bg-gray-50 dark:bg-slate-900 rounded-xl flex justify-between items-center">
                                            <span className="text-xs font-bold">Paper-I: ESI (Descriptive)</span>
                                            <span className="font-black text-empower-blue">100</span>
                                        </div>
                                        <div className="p-3 bg-gray-50 dark:bg-slate-900 rounded-xl flex justify-between items-center">
                                            <span className="text-xs font-bold">Paper-II: ARD (Descriptive)</span>
                                            <span className="font-black text-empower-blue">100</span>
                                        </div>
                                        <div className="p-3 bg-gray-50 dark:bg-slate-900 rounded-xl flex justify-between items-center border border-dashed border-empower-blue/20">
                                            <span className="text-xs font-bold">Paper-III: Finance & Management</span>
                                            <span className="font-black text-empower-blue">100</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gradient-to-br from-empower-blue to-indigo-900 p-8 rounded-[2rem] shadow-lg text-white">
                                    <h4 className="font-black text-lg mb-6 flex items-center uppercase tracking-tight">
                                        <UsersIcon className="w-6 h-6 mr-2" />
                                        Phase-III: Interview
                                    </h4>
                                    <div className="flex items-center justify-between">
                                        <p className="text-sm font-bold opacity-90">Personal Assessment Marks</p>
                                        <span className="text-4xl font-black">75</span>
                                    </div>
                                    <div className="mt-10 pt-6 border-t border-white/20">
                                        <div className="flex items-center space-x-2 text-[10px] font-black text-sunrise-orange uppercase tracking-widest">
                                            <StarIcon className="w-3 h-3" />
                                            <span>Higher Responsibility Assessment</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Syllabus Grade B */}
                            <div className="bg-soft-gray/30 dark:bg-slate-800/50 p-8 rounded-3xl border border-gray-100 dark:border-gray-700">
                                <h4 className="font-black text-lg text-charcoal-gray dark:text-white mb-6 uppercase tracking-tight">Syllabus – NABARD Grade B</h4>
                                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {[
                                        { t: "ESI", c: "Growth & Development, Social Justice, Global Institutions" },
                                        { t: "ARD", c: "Advanced Agriculture, Rural Infrastructure, Tech in Farming" },
                                        { t: "Finance", c: "Financial System, Banking, Risk Management, Capital Markets" },
                                        { t: "Management", c: "Leadership, HRM, Organizational Behaviour, Ethics" },
                                        { t: "English", c: "Essay, Précis, Analytical Writing, Comprehensive Reasoning" }
                                    ].map((item, i) => (
                                        <div key={i} className="p-4 bg-white dark:bg-slate-800 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm">
                                            <p className="text-[10px] font-black uppercase text-sunrise-orange mb-1">{item.t}</p>
                                            <p className="text-xs font-bold text-gray-500 dark:text-gray-400">{item.c}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Section>

                    {/* QUICK COMPARISON */}
                    <Section title="Quick Comparison">
                        <div className="overflow-x-auto shadow-2xl rounded-3xl border border-gray-100 dark:border-gray-800">
                            <table className="min-w-full text-sm">
                                <thead className="bg-gradient-to-r from-empower-blue to-blue-800 text-white">
                                    <tr>
                                        <th className="py-5 px-6 text-left font-bold uppercase tracking-widest">Feature</th>
                                        <th className="py-5 px-6 text-center font-bold uppercase tracking-widest">Grade A</th>
                                        <th className="py-5 px-6 text-center font-bold uppercase tracking-widest">Grade B</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100 dark:divide-gray-800 font-bold text-charcoal-gray dark:text-white">
                                    <tr>
                                        <td className="py-5 px-6">Post Level</td>
                                        <td className="py-5 px-6 text-center text-gray-500 dark:text-gray-400">Assistant Manager</td>
                                        <td className="py-5 px-6 text-center text-gray-500 dark:text-gray-400">Manager</td>
                                    </tr>
                                    <tr>
                                        <td className="py-5 px-6">Phase-II Papers</td>
                                        <td className="py-5 px-6 text-center">2 Papers</td>
                                        <td className="py-5 px-6 text-center">3 Papers</td>
                                    </tr>
                                    <tr>
                                        <td className="py-5 px-6">Interview Marks</td>
                                        <td className="py-5 px-6 text-center font-black text-empower-blue dark:text-blue-400">50</td>
                                        <td className="py-5 px-6 text-center font-black text-empower-blue dark:text-blue-400">75</td>
                                    </tr>
                                    <tr>
                                        <td className="py-5 px-6">Difficulty Level</td>
                                        <td className="py-5 px-6 text-center text-sunrise-orange">HIGH</td>
                                        <td className="py-5 px-6 text-center text-sunrise-orange">HIGH (Professional)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </Section>

                    <div className="text-center mt-20 bg-gradient-to-r from-empower-blue to-blue-800 p-12 rounded-[3rem] text-white shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-10">
                            <GlobeAltIcon className="w-48 h-48" />
                        </div>
                        <h3 className="text-3xl font-black mb-6 relative z-10">Master the Rural Development Hub</h3>
                        <p className="mb-10 text-lg opacity-90 max-w-2xl mx-auto relative z-10">
                            Our mentors specialize in ESI and ARD modules which form the core of the NABARD merit list. Join the specialized batch for 2026-27 today.
                        </p>
                        <CTAButton requiresAuth variant="primary" className="text-xl px-16 py-4 bg-white !text-empower-blue border-none shadow-xl transform hover:-translate-y-1 transition-all relative z-10">
                            Enroll in NABARD Batch
                        </CTAButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NabardExamPage;