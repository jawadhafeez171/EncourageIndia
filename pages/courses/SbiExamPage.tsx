import React from 'react';
import CTAButton from '../../components/CTAButton';
import { AcademicCapIcon, CalendarIcon, PencilAltIcon, CheckCircleIcon, UsersIcon, ClockIcon, BookOpenIcon, ShieldCheckIcon, ClipboardListIcon, StarIcon, LightBulbIcon } from '../../components/Icons';
import SEO from '../../components/SEO';

const PageHeader = ({ title }: { title: string }) => (
    <div className="bg-gradient-to-br from-empower-blue to-indigo-900 py-16 text-center text-white">
        <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-black font-montserrat uppercase tracking-tight">{title}</h1>
            <p className="text-xl mt-4 text-blue-100 font-medium">Your Comprehensive Guide to SBI PO, SO, and Clerk Recruitments.</p>
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

const SbiExamPage: React.FC = () => {
    return (
        <div className="bg-white dark:bg-slate-900 transition-colors duration-300">
            <SEO
                title="SBI PO, Clerk & SO Exam Coaching | State Bank of India Careers"
                description="Join our specialized SBI coaching for Probationary Officer (PO), Junior Associate (Clerk), and Specialist Officer (SO) exams. Expert guidance for Prelims, Mains & Interviews."
                url="https://encourageindiaias.in/courses/sbi-hub"
            />
            <PageHeader title="SBI PO / Clerk / SO" />
            <div className="py-20">
                <div className="container mx-auto px-6 max-w-6xl">

                    {/* New Requested Section */}
                    <Section title="About SBI Examination">
                        <p className="text-lg md:text-xl leading-relaxed font-medium border-b border-gray-100 dark:border-gray-800 pb-8">
                            The SBI PO (Probationary Officer), SBI SO (Specialist Officer), and SBI Clerk (Junior Associate) exams are competitive recruitment exams conducted by the State Bank of India (SBI) to hire officers and clerical staff across branches in India.
                        </p>
                    </Section>

                    {/* Eligibility Overview Section */}
                    <Section title="Exam Eligibility & Pattern Overview">
                        <div className="overflow-x-auto shadow-xl rounded-2xl border border-gray-100 dark:border-gray-800">
                            <table className="min-w-full text-sm">
                                <thead className="bg-empower-blue text-white">
                                    <tr>
                                        <th className="py-4 px-6 text-left font-bold">Exam</th>
                                        <th className="py-4 px-6 text-left font-bold">Educational Qualification</th>
                                        <th className="py-4 px-6 text-left font-bold">Age Limit (General)</th>
                                        <th className="py-4 px-6 text-left font-bold">Exam Pattern (Stages)</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100 dark:divide-gray-800 font-medium">
                                    <tr className="hover:bg-blue-50/50 dark:hover:bg-blue-900/10">
                                        <td className="py-5 px-6 font-black text-empower-blue">SBI PO</td>
                                        <td className="py-5 px-6">Graduate degree in any discipline; final-year students can apply.</td>
                                        <td className="py-5 px-6">21-30 yrs (Relaxations for SC/ST/OBC apply)</td>
                                        <td className="py-5 px-6 text-xs">Prelims (Obj), Mains (Obj + Desc), Interview/Group Exercise.</td>
                                    </tr>
                                    <tr className="hover:bg-blue-50/50 dark:hover:bg-blue-900/10">
                                        <td className="py-5 px-6 font-black text-empower-blue">SBI SO</td>
                                        <td className="py-5 px-6">Graduation; specific roles prefer post-grad/prof. qualifications & experience.</td>
                                        <td className="py-5 px-6">Varies by post (e.g., VP: ~26-42 yrs; Manager: ~23-35 yrs).</td>
                                        <td className="py-5 px-6 text-xs">Shortlisting/Written Test (Aptitude + Prof. Knowledge), Interview.</td>
                                    </tr>
                                    <tr className="hover:bg-blue-50/50 dark:hover:bg-blue-900/10">
                                        <td className="py-5 px-6 font-black text-empower-blue">SBI Clerk</td>
                                        <td className="py-5 px-6">Graduate degree in any discipline; final-year students may apply.</td>
                                        <td className="py-5 px-6">20-28 yrs (Relaxations for SC/ST/OBC apply)</td>
                                        <td className="py-5 px-6 text-xs">Prelims (Obj), Mains (Obj - Financial Awareness, Quant, Reasoning).</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </Section>

                    {/* Detailed PO Selection Section */}
                    <Section title="SBI PO Selection Procedure">
                        <p className="text-lg leading-relaxed mb-8">
                            The selection for Probationary Officers is a comprehensive three-phase process designed to evaluate candidates across academic, analytical, and professional personality benchmarks.
                        </p>

                        {/* Phase I */}
                        <div className="bg-gray-50 dark:bg-slate-800/50 p-8 rounded-[2.5rem] border-2 border-dashed border-empower-blue/20 mb-10">
                            <h3 className="text-2xl font-black text-empower-blue mb-6 flex items-center">
                                <ClipboardListIcon className="w-8 h-8 mr-3 text-sunrise-orange" />
                                Phase-I: Preliminary Examination
                            </h3>
                            <p className="mb-6 text-sm">Objective Test of 100 marks conducted online. <strong>Note:</strong> There is no sectional cut-off in Prelims.</p>
                            <div className="overflow-x-auto">
                                <table className="min-w-full text-xs md:text-sm">
                                    <thead className="bg-gray-200 dark:bg-slate-700">
                                        <tr>
                                            <th className="py-3 px-4 text-left">Section</th>
                                            <th className="py-3 px-4 text-center">No. of Questions</th>
                                            <th className="py-3 px-4 text-center">Marks</th>
                                            <th className="py-3 px-4 text-center">Duration</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                                        <tr><td className="py-3 px-4">1. English Language</td><td className="py-3 px-4 text-center">40</td><td className="py-3 px-4 text-center">30</td><td className="py-3 px-4 text-center">20 mins</td></tr>
                                        <tr><td className="py-3 px-4">2. Quantitative Aptitude</td><td className="py-3 px-4 text-center">30</td><td className="py-3 px-4 text-center">35</td><td className="py-3 px-4 text-center">20 mins</td></tr>
                                        <tr><td className="py-3 px-4">3. Reasoning Ability</td><td className="py-3 px-4 text-center">30</td><td className="py-3 px-4 text-center">35</td><td className="py-3 px-4 text-center">20 mins</td></tr>
                                        <tr className="font-bold bg-soft-gray/30 dark:bg-slate-800"><td className="py-3 px-4">Total</td><td className="py-3 px-4 text-center">100</td><td className="py-3 px-4 text-center">100</td><td className="py-3 px-4 text-center">1 Hour</td></tr>
                                    </tbody>
                                </table>
                            </div>
                            <p className="mt-4 text-[10px] text-gray-500 uppercase tracking-widest font-black">Selection Criteria: Candidates numbering ~10 times the vacancies are shortlisted for Mains.</p>
                        </div>

                        {/* Phase II */}
                        <div className="bg-white dark:bg-slate-800 p-8 rounded-[2.5rem] shadow-xl border border-gray-100 dark:border-gray-700 mb-10">
                            <h3 className="text-2xl font-black text-empower-blue mb-6 flex items-center">
                                <PencilAltIcon className="w-8 h-8 mr-3 text-sunrise-orange" />
                                Phase-II: Main Examination
                            </h3>
                            <p className="mb-6 text-sm">Combined Objective (200 marks) and Descriptive (50 marks) tests.</p>

                            <h4 className="font-bold text-sm uppercase text-gray-400 mb-4 tracking-widest">Part (i): Objective Test (3 Hours)</h4>
                            <div className="overflow-x-auto mb-8">
                                <table className="min-w-full text-xs md:text-sm">
                                    <thead className="bg-gray-100 dark:bg-slate-700">
                                        <tr>
                                            <th className="py-3 px-4 text-left">Test</th>
                                            <th className="py-3 px-4 text-center">Questions</th>
                                            <th className="py-3 px-4 text-center">Max Marks</th>
                                            <th className="py-3 px-4 text-center">Duration</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                                        <tr><td className="py-3 px-4">I. Reasoning & Computer Aptitude</td><td className="py-3 px-4 text-center">40</td><td className="py-3 px-4 text-center">60</td><td className="py-3 px-4 text-center">50 mins</td></tr>
                                        <tr><td className="py-3 px-4">II. Data Analysis & Interpretation</td><td className="py-3 px-4 text-center">30</td><td className="py-3 px-4 text-center">60</td><td className="py-3 px-4 text-center">45 mins</td></tr>
                                        <tr><td className="py-3 px-4">III. General/Economy/Banking Awareness</td><td className="py-3 px-4 text-center">50</td><td className="py-3 px-4 text-center">60</td><td className="py-3 px-4 text-center">45 mins</td></tr>
                                        <tr><td className="py-3 px-4">IV. English Language</td><td className="py-3 px-4 text-center">40</td><td className="py-3 px-4 text-center">40</td><td className="py-3 px-4 text-center">40 mins</td></tr>
                                        <tr className="font-bold bg-soft-gray/30"><td className="py-3 px-4">Total</td><td className="py-3 px-4 text-center">170</td><td className="py-3 px-4 text-center">200</td><td className="py-3 px-4 text-center">3 Hours</td></tr>
                                    </tbody>
                                </table>
                            </div>

                            <h4 className="font-bold text-sm uppercase text-gray-400 mb-4 tracking-widest">Part (ii): Descriptive Paper (30 Mins)</h4>
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border-l-4 border-empower-blue">
                                <p className="text-sm font-bold text-empower-blue mb-2">Communication Skills: 50 Marks</p>
                                <ul className="text-xs space-y-2 opacity-80">
                                    <li>• Emails: Compulsory (1 out of 2 options)</li>
                                    <li>• Reports: Compulsory (1 out of 2 options)</li>
                                    <li>• Situation Analysis OR Precis Writing (Choose one)</li>
                                </ul>
                            </div>
                        </div>

                        {/* Phase III */}
                        <div className="grid md:grid-cols-2 gap-8 mb-10">
                            <div className="bg-soft-gray/30 dark:bg-slate-800 p-8 rounded-[2rem] border border-gray-100 dark:border-gray-700">
                                <h3 className="text-xl font-black text-empower-blue mb-4 flex items-center">
                                    <UsersIcon className="w-6 h-6 mr-2 text-sunrise-orange" />
                                    Phase-III: Assessment
                                </h3>
                                <div className="space-y-4">
                                    <div className="p-3 bg-white dark:bg-slate-900 rounded-lg">
                                        <h5 className="font-bold text-xs uppercase text-sunrise-orange">Psychometric Test</h5>
                                        <p className="text-xs">Personality profiling for Interview panel perspective.</p>
                                    </div>
                                    <div className="flex justify-between items-center p-3 bg-white dark:bg-slate-900 rounded-lg">
                                        <span className="font-bold text-xs">Group Exercise</span>
                                        <span className="font-black text-empower-blue">20 Marks</span>
                                    </div>
                                    <div className="flex justify-between items-center p-3 bg-white dark:bg-slate-900 rounded-lg">
                                        <span className="font-bold text-xs">Personal Interview</span>
                                        <span className="font-black text-empower-blue">30 Marks</span>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-orange-50 dark:bg-orange-900/10 p-8 rounded-[2rem] border border-sunrise-orange/20">
                                <h3 className="text-xl font-black text-sunrise-orange mb-4 flex items-center">
                                    <ShieldCheckIcon className="w-6 h-6 mr-2" />
                                    Important Guidelines
                                </h3>
                                <ul className="text-xs space-y-4 font-medium text-charcoal-gray dark:text-gray-300">
                                    <li className="flex items-start">
                                        <span className="text-encourage-red font-black mr-2">!</span>
                                        <div><strong>Negative Marking:</strong> 1/4th of assigned marks deducted for wrong answers in Objective Tests.</div>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-encourage-red font-black mr-2">!</span>
                                        <div><strong>Sectional Cut-offs:</strong> Candidates must score minimum qualifying marks in each section of the Main Exam.</div>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-encourage-red font-black mr-2">!</span>
                                        <div><strong>Descriptive Admin:</strong> Administered immediately after Objective test; typed on computer.</div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Final Selection & Normalization */}
                        <div className="mt-12 bg-gray-50 dark:bg-slate-800/40 border border-gray-200 dark:border-gray-700 rounded-[3rem] p-8 md:p-12 shadow-inner">
                            <div className="text-center mb-10">
                                <h3 className="text-2xl md:text-3xl font-black text-charcoal-gray dark:text-white uppercase tracking-wider">Final Selection Normalization</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 max-w-2xl mx-auto">The final merit list is calculated by converting the 300 marks from Phase-II & III into a normalized 100-mark scale.</p>
                            </div>

                            <div className="grid md:grid-cols-3 gap-8 items-center">
                                {/* Component 1 */}
                                <div className="bg-white dark:bg-slate-800 p-6 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-700 text-center relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-bl-3xl text-empower-blue dark:text-blue-400 font-black text-[10px]">75% WEIGHTAGE</div>
                                    <h4 className="font-bold text-gray-400 dark:text-gray-500 uppercase text-xs tracking-widest mb-4">Main Examination</h4>
                                    <div className="space-y-1">
                                        <p className="text-gray-400 text-xs">Max Raw Marks: 250</p>
                                        <div className="text-4xl font-black text-empower-blue dark:text-blue-400">75</div>
                                        <p className="text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase">Normalized Marks</p>
                                    </div>
                                </div>

                                {/* Component 2 */}
                                <div className="bg-white dark:bg-slate-800 p-6 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-700 text-center relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 p-4 bg-orange-50 dark:bg-orange-900/20 rounded-bl-3xl text-sunrise-orange font-black text-[10px]">25% WEIGHTAGE</div>
                                    <h4 className="font-bold text-gray-400 dark:text-gray-500 uppercase text-xs tracking-widest mb-4">Interview & GE</h4>
                                    <div className="space-y-1">
                                        <p className="text-gray-400 text-xs">Max Raw Marks: 50</p>
                                        <div className="text-4xl font-black text-sunrise-orange">25</div>
                                        <p className="text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase">Normalized Marks</p>
                                    </div>
                                </div>

                                {/* Total Result */}
                                <div className="bg-gradient-to-br from-empower-blue to-blue-900 p-8 rounded-3xl shadow-2xl text-center text-white relative overflow-hidden">
                                    <div className="absolute inset-0 bg-white/5 opacity-0 hover:opacity-100 transition-opacity"></div>
                                    <h4 className="font-bold text-blue-200 uppercase text-xs tracking-widest mb-4">Final Merit Base</h4>
                                    <div className="space-y-1">
                                        <p className="text-blue-300/60 text-xs">Combined Score</p>
                                        <div className="text-6xl font-black text-white drop-shadow-md">100</div>
                                        <p className="text-[10px] font-black text-sunrise-orange uppercase tracking-tighter">Total Normalized Marks</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12 bg-white dark:bg-slate-900/40 p-4 rounded-2xl flex items-center justify-center border border-gray-100 dark:border-gray-700">
                                <LightBulbIcon className="w-5 h-5 text-sunrise-orange mr-3 shrink-0" />
                                <p className="text-xs md:text-sm font-medium text-charcoal-gray dark:text-gray-300">
                                    <strong>Critical Note:</strong> Prelims (Phase-I) marks are used <strong>only for screening</strong> and are never added to the final merit list.
                                </p>
                            </div>
                        </div>
                    </Section>

                    <div className="text-center mt-16">
                        <CTAButton requiresAuth variant="primary" className="text-xl px-16 py-4 bg-encourage-red hover:bg-red-700 border-none shadow-xl transform hover:-translate-y-1 transition-all">
                            Enroll in SBI Banking Hub
                        </CTAButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SbiExamPage;