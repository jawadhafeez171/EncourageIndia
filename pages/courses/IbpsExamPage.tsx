import React from 'react';
import CTAButton from '../../components/CTAButton';
import { AcademicCapIcon, BriefcaseIcon, PencilAltIcon, CheckCircleIcon, UsersIcon, GlobeAltIcon, ClockIcon, BookOpenIcon, ShieldCheckIcon, ClipboardListIcon } from '../../components/Icons';

const PageHeader = ({ title }: { title: string }) => (
    <div className="bg-gradient-to-br from-empower-blue to-blue-800 py-16 text-center text-white">
        <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-black font-montserrat uppercase tracking-tight">{title}</h1>
            <p className="text-xl mt-4 text-blue-100 font-medium max-w-3xl mx-auto">National-level banking recruitment portal for Public Sector and Regional Rural Banks.</p>
        </div>
    </div>
);

const Section: React.FC<{title: string; children: React.ReactNode;}> = ({title, children}) => (
    <div className="mb-16">
        <h2 className="text-3xl font-black font-montserrat text-empower-blue dark:text-blue-400 mb-8 border-l-8 border-sunrise-orange pl-5 uppercase tracking-tighter">{title}</h2>
        <div className="space-y-6 text-charcoal-gray/80 dark:text-gray-300">
            {children}
        </div>
    </div>
);

const IbpsExamPage: React.FC = () => {
    return (
        <div className="bg-white dark:bg-slate-900 transition-colors duration-300">
            <PageHeader title="IBPS Exams Hub" />
            <div className="py-20">
                <div className="container mx-auto px-6 max-w-6xl">
                    
                    <Section title="About IBPS Examinations">
                        <p className="text-lg md:text-xl leading-relaxed font-medium">
                            These are national-level banking recruitment examinations conducted by the Institute of Banking Personnel Selection (IBPS) to select officers and clerical staff for public sector banks and regional rural banks across India.
                        </p>
                    </Section>

                    {/* IBPS PO SECTION */}
                    <Section title="IBPS PO (Probationary Officer)">
                        <div className="grid md:grid-cols-2 gap-8 mb-10">
                            <div className="bg-gray-50 dark:bg-slate-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700">
                                <h3 className="text-xl font-bold text-empower-blue dark:text-blue-400 mb-4 flex items-center">
                                    <AcademicCapIcon className="w-6 h-6 mr-2 text-sunrise-orange" />
                                    Eligibility & Age
                                </h3>
                                <ul className="space-y-3 text-sm">
                                    <li><strong>Educational Qualification:</strong> Graduation in any discipline from a recognized university.</li>
                                    <li><strong>Age Limit:</strong> 20–30 years (category-wise relaxation applicable).</li>
                                </ul>
                            </div>
                            <div className="bg-gray-50 dark:bg-slate-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700">
                                <h3 className="text-xl font-bold text-empower-blue dark:text-blue-400 mb-4 flex items-center">
                                    <BookOpenIcon className="w-6 h-6 mr-2 text-sunrise-orange" />
                                    Key Syllabus Areas
                                </h3>
                                <div className="grid grid-cols-2 gap-2 text-xs font-bold">
                                    <span className="bg-white dark:bg-slate-900 p-2 rounded border border-gray-100 dark:border-gray-600">• Puzzles & Seating</span>
                                    <span className="bg-white dark:bg-slate-900 p-2 rounded border border-gray-100 dark:border-gray-600">• Arithmetic & DI</span>
                                    <span className="bg-white dark:bg-slate-900 p-2 rounded border border-gray-100 dark:border-gray-600">• Banking Awareness</span>
                                    <span className="bg-white dark:bg-slate-900 p-2 rounded border border-gray-100 dark:border-gray-600">• Grammar & RC</span>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div className="overflow-x-auto shadow-xl rounded-2xl border border-gray-100 dark:border-gray-800">
                                <table className="min-w-full text-sm">
                                    <thead className="bg-empower-blue text-white">
                                        <tr><th colSpan={5} className="py-3 px-6 text-left uppercase tracking-widest font-black bg-blue-900">IBPS PO Prelims Pattern</th></tr>
                                        <tr>
                                            <th className="py-4 px-6 text-left">Section</th>
                                            <th className="py-4 px-6 text-center">Questions</th>
                                            <th className="py-4 px-6 text-center">Marks</th>
                                            <th className="py-4 px-6 text-center">Duration</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                                        <tr><td className="py-3 px-6">English Language</td><td className="py-3 px-6 text-center">30</td><td className="py-3 px-6 text-center">30</td><td className="py-3 px-6 text-center">20 min</td></tr>
                                        <tr><td className="py-3 px-6">Quantitative Aptitude</td><td className="py-3 px-6 text-center">35</td><td className="py-3 px-6 text-center">35</td><td className="py-3 px-6 text-center">20 min</td></tr>
                                        <tr><td className="py-3 px-6">Reasoning Ability</td><td className="py-3 px-6 text-center">35</td><td className="py-3 px-6 text-center">35</td><td className="py-3 px-6 text-center">20 min</td></tr>
                                        <tr className="bg-gray-50 dark:bg-slate-800 font-bold"><td className="py-3 px-6">Total</td><td className="py-3 px-6 text-center">100</td><td className="py-3 px-6 text-center">100</td><td className="py-3 px-6 text-center">1 Hour</td></tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="overflow-x-auto shadow-xl rounded-2xl border border-gray-100 dark:border-gray-800">
                                <table className="min-w-full text-sm">
                                    <thead className="bg-empower-blue text-white">
                                        <tr><th colSpan={5} className="py-3 px-6 text-left uppercase tracking-widest font-black bg-blue-900">IBPS PO Mains Pattern</th></tr>
                                        <tr>
                                            <th className="py-4 px-6 text-left">Section</th>
                                            <th className="py-4 px-6 text-center">Questions</th>
                                            <th className="py-4 px-6 text-center">Marks</th>
                                            <th className="py-4 px-6 text-center">Duration</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                                        <tr><td className="py-3 px-6">Reasoning & Computer Aptitude</td><td className="py-3 px-6 text-center">45</td><td className="py-3 px-6 text-center">60</td><td className="py-3 px-6 text-center">60 min</td></tr>
                                        <tr><td className="py-3 px-6">Data Analysis & Interpretation</td><td className="py-3 px-6 text-center">35</td><td className="py-3 px-6 text-center">60</td><td className="py-3 px-6 text-center">45 min</td></tr>
                                        <tr><td className="py-3 px-6">General/Economy/Banking Awareness</td><td className="py-3 px-6 text-center">40</td><td className="py-3 px-6 text-center">40</td><td className="py-3 px-6 text-center">35 min</td></tr>
                                        <tr><td className="py-3 px-6">English Language</td><td className="py-3 px-6 text-center">35</td><td className="py-3 px-6 text-center">40</td><td className="py-3 px-6 text-center">40 min</td></tr>
                                        <tr><td className="py-3 px-6">Descriptive (Essay & Letter)</td><td className="py-3 px-6 text-center">2</td><td className="py-3 px-6 text-center">25</td><td className="py-3 px-6 text-center">30 min</td></tr>
                                        <tr className="bg-gray-50 dark:bg-slate-800 font-bold"><td className="py-3 px-6">Final Phase: Interview</td><td className="py-3 px-6 text-center">—</td><td className="py-3 px-6 text-center">100</td><td className="py-3 px-6 text-center">—</td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </Section>

                    {/* IBPS CLERK SECTION */}
                    <Section title="IBPS Clerk (Customer Service Associate)">
                        <div className="bg-orange-50 dark:bg-orange-900/10 p-8 rounded-3xl border border-sunrise-orange/20 mb-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-sunrise-orange mb-2">Clerk Eligibility</h3>
                                <p className="text-sm"><strong>Qualification:</strong> Graduation in any discipline. <br/><strong>Age Limit:</strong> 20–28 years.</p>
                            </div>
                            <div className="flex gap-4">
                                <div className="bg-white dark:bg-slate-800 p-4 rounded-xl text-center shadow-sm">
                                    <p className="text-[10px] uppercase font-bold text-gray-400">Total Mains Qs</p>
                                    <p className="text-2xl font-black text-empower-blue">190</p>
                                </div>
                                <div className="bg-white dark:bg-slate-800 p-4 rounded-xl text-center shadow-sm">
                                    <p className="text-[10px] uppercase font-bold text-gray-400">Total Marks</p>
                                    <p className="text-2xl font-black text-empower-blue">200</p>
                                </div>
                            </div>
                        </div>

                        <div className="overflow-x-auto shadow-xl rounded-2xl border border-gray-100 dark:border-gray-800 mb-8">
                             <table className="min-w-full text-sm">
                                <thead className="bg-blue-800 text-white">
                                    <tr><th colSpan={5} className="py-3 px-6 text-left uppercase tracking-widest font-black">IBPS Clerk Mains Pattern</th></tr>
                                    <tr>
                                        <th className="py-4 px-6 text-left">Section</th>
                                        <th className="py-4 px-6 text-center">Questions</th>
                                        <th className="py-4 px-6 text-center">Marks</th>
                                        <th className="py-4 px-6 text-center">Duration</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                                    <tr><td className="py-3 px-6">General/Financial Awareness</td><td className="py-3 px-6 text-center">50</td><td className="py-3 px-6 text-center">50</td><td className="py-3 px-6 text-center">35 min</td></tr>
                                    <tr><td className="py-3 px-6">General English</td><td className="py-3 px-6 text-center">40</td><td className="py-3 px-6 text-center">40</td><td className="py-3 px-6 text-center">35 min</td></tr>
                                    <tr><td className="py-3 px-6">Quantitative Aptitude</td><td className="py-3 px-6 text-center">50</td><td className="py-3 px-6 text-center">50</td><td className="py-3 px-6 text-center">45 min</td></tr>
                                    <tr><td className="py-3 px-6">Reasoning & Computer Aptitude</td><td className="py-3 px-6 text-center">50</td><td className="py-3 px-6 text-center">60</td><td className="py-3 px-6 text-center">45 min</td></tr>
                                    <tr className="font-bold bg-soft-gray/30 dark:bg-slate-800">
                                        <td className="py-3 px-6">Total</td><td className="py-3 px-6 text-center">190</td><td className="py-3 px-6 text-center">200</td><td className="py-3 px-6 text-center">160 min</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </Section>

                    {/* IBPS SO SECTION */}
                    <Section title="IBPS SO (Specialist Officer)">
                        <div className="grid lg:grid-cols-3 gap-8">
                            <div className="lg:col-span-1 space-y-4">
                                <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-2xl border-l-4 border-empower-blue">
                                    <h4 className="font-bold text-empower-blue dark:text-blue-400 mb-2 uppercase text-xs tracking-widest">SO Eligibility</h4>
                                    <p className="text-xs leading-relaxed">Graduation/Post-Graduation in relevant discipline (IT, Law, HR, Agriculture, Marketing, Finance). Age: 20–30 years.</p>
                                </div>
                                <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm">
                                    <h4 className="font-bold text-charcoal-gray dark:text-white mb-3 text-sm">Professional Domains</h4>
                                    <ul className="text-xs space-y-2 font-bold text-gray-500">
                                        <li className="flex items-center"><CheckCircleIcon className="w-4 h-4 mr-2 text-green-500"/> IT: DBMS, Networking</li>
                                        <li className="flex items-center"><CheckCircleIcon className="w-4 h-4 mr-2 text-green-500"/> LAW: Financial Laws</li>
                                        <li className="flex items-center"><CheckCircleIcon className="w-4 h-4 mr-2 text-green-500"/> HR: Labour Laws</li>
                                        <li className="flex items-center"><CheckCircleIcon className="w-4 h-4 mr-2 text-green-500"/> AGRI: Soil Science</li>
                                    </ul>
                                </div>
                            </div>
                            
                            <div className="lg:col-span-2 overflow-x-auto shadow-xl rounded-2xl border border-gray-100 dark:border-gray-800">
                                <table className="min-w-full text-sm">
                                    <thead className="bg-empower-blue text-white">
                                        <tr><th colSpan={4} className="py-3 px-6 text-left uppercase tracking-widest font-black bg-blue-900">SO Pattern (Prelims & Mains)</th></tr>
                                        <tr>
                                            <th className="py-4 px-6 text-left">Stage / Section</th>
                                            <th className="py-4 px-6 text-center">Questions</th>
                                            <th className="py-4 px-6 text-center">Marks</th>
                                            <th className="py-4 px-6 text-center">Duration</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                                        <tr><td className="py-3 px-6">Prelims: English Language</td><td className="py-3 px-6 text-center">50</td><td className="py-3 px-6 text-center">25</td><td className="py-3 px-6 text-center">40 min</td></tr>
                                        <tr><td className="py-3 px-6">Prelims: Reasoning Ability</td><td className="py-3 px-6 text-center">50</td><td className="py-3 px-6 text-center">50</td><td className="py-3 px-6 text-center">40 min</td></tr>
                                        <tr><td className="py-3 px-6">Prelims: Quant / GA*</td><td className="py-3 px-6 text-center">50</td><td className="py-3 px-6 text-center">50</td><td className="py-3 px-6 text-center">40 min</td></tr>
                                        <tr className="bg-gray-50 dark:bg-slate-800"><td className="py-3 px-6 font-bold">Mains: Professional Knowledge</td><td className="py-3 px-6 text-center font-bold">60</td><td className="py-3 px-6 text-center font-bold">60</td><td className="py-3 px-6 text-center font-bold">45 min</td></tr>
                                    </tbody>
                                </table>
                                <p className="p-3 text-[10px] text-gray-400 italic">* GA for Law Officer; Quant for other SO posts.</p>
                            </div>
                        </div>
                    </Section>

                    {/* IBPS RRB SECTION */}
                    <Section title="IBPS RRB – Scale-II & Scale-III">
                        <div className="grid md:grid-cols-2 gap-8 mb-8">
                             <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm">
                                <h4 className="font-bold text-empower-blue dark:text-blue-400 mb-4 flex items-center"><ShieldCheckIcon className="w-5 h-5 mr-2 text-sunrise-orange"/>Scale-II Officer</h4>
                                <p className="text-sm"><strong>Qualification:</strong> Graduation + Relevant Experience.<br/><strong>Age:</strong> 21–32 Years.</p>
                            </div>
                            <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm">
                                <h4 className="font-bold text-empower-blue dark:text-blue-400 mb-4 flex items-center"><ShieldCheckIcon className="w-5 h-5 mr-2 text-sunrise-orange"/>Scale-III Officer</h4>
                                <p className="text-sm"><strong>Qualification:</strong> Graduation + Min. 5 Years Experience.<br/><strong>Age:</strong> 21–40 Years.</p>
                            </div>
                        </div>

                        <div className="overflow-x-auto shadow-xl rounded-2xl border border-gray-100 dark:border-gray-800">
                             <table className="min-w-full text-sm">
                                <thead className="bg-blue-800 text-white">
                                    <tr><th colSpan={5} className="py-3 px-6 text-left uppercase tracking-widest font-black">Single Exam Pattern (Scale II & III)</th></tr>
                                    <tr>
                                        <th className="py-4 px-6 text-left">Section</th>
                                        <th className="py-4 px-6 text-center">Questions</th>
                                        <th className="py-4 px-6 text-center">Marks</th>
                                        <th className="py-4 px-6 text-center">Duration</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                                    <tr><td className="py-3 px-6">Reasoning</td><td className="py-3 px-6 text-center">40</td><td className="py-3 px-6 text-center">50</td><td className="py-3 px-6 text-center">30 min</td></tr>
                                    <tr><td className="py-3 px-6">Quantitative Aptitude</td><td className="py-3 px-6 text-center">40</td><td className="py-3 px-6 text-center">50</td><td className="py-3 px-6 text-center">30 min</td></tr>
                                    <tr><td className="py-3 px-6">Financial Awareness</td><td className="py-3 px-6 text-center">40</td><td className="py-3 px-6 text-center">40</td><td className="py-3 px-6 text-center">20 min</td></tr>
                                    <tr><td className="py-3 px-6">English/Hindi</td><td className="py-3 px-6 text-center">40</td><td className="py-3 px-6 text-center">40</td><td className="py-3 px-6 text-center">30 min</td></tr>
                                    <tr><td className="py-3 px-6">Computer Knowledge</td><td className="py-3 px-6 text-center">40</td><td className="py-3 px-6 text-center">20</td><td className="py-3 px-6 text-center">20 min</td></tr>
                                    <tr><td className="py-3 px-6">Professional Knowledge</td><td className="py-3 px-6 text-center">40</td><td className="py-3 px-6 text-center">40</td><td className="py-3 px-6 text-center">30 min</td></tr>
                                    <tr className="font-bold bg-soft-gray/30 dark:bg-slate-800">
                                        <td className="py-3 px-6">Total</td><td className="py-3 px-6 text-center">240</td><td className="py-3 px-6 text-center">200</td><td className="py-3 px-6 text-center">160 min</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </Section>

                    <div className="text-center mt-20 bg-gradient-to-r from-blue-900 to-empower-blue p-12 rounded-[3rem] text-white shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-10">
                            <ClipboardListIcon className="w-48 h-48" />
                        </div>
                        <h3 className="text-3xl font-black mb-6 relative z-10">Ace the IBPS Challenge 2026-27</h3>
                        <p className="mb-10 text-lg opacity-90 max-w-2xl mx-auto relative z-10">
                            Join our intensive coaching batch. We provide comprehensive coverage for PO, Clerk, and SO domains with daily practice mocks and shortcut-focused training.
                        </p>
                        <CTAButton requiresAuth variant="primary" className="text-xl px-16 py-4 bg-white !text-empower-blue border-none shadow-xl transform hover:-translate-y-1 transition-all relative z-10">
                            Enroll in IBPS Hub Now
                        </CTAButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IbpsExamPage;