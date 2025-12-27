
import React from 'react';
import CTAButton from '../../components/CTAButton';
import { AcademicCapIcon, CalendarIcon, BriefcaseIcon, ClipboardListIcon, PencilAltIcon, UsersIcon, ScaleIcon, ChevronRightIcon, DesktopComputerIcon, BookOpenIcon } from '../../components/Icons';

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

const CivilJudgePage: React.FC = () => {
    return (
        <div className="bg-white dark:bg-slate-900 transition-colors duration-300">
            <PageHeader title="Karnataka Civil Judge (Junior Division)" />
            
            <div className="py-20">
                <div className="container mx-auto px-8 max-w-5xl">
                    
                    {/* Recruitment Alert */}
                    <div className="mb-12 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-empower-blue p-6 rounded-r-xl">
                        <div className="flex items-center mb-2">
                            <ScaleIcon className="w-6 h-6 text-empower-blue dark:text-blue-400 mr-2" />
                            <h3 className="font-bold text-lg text-charcoal-gray dark:text-white">Notification No. HCRB/CJR-1/2024</h3>
                        </div>
                        <p className="text-sm">
                            Direct recruitment for 158 posts of Civil Judges. <strong>Last date for application: 12th March, 2025.</strong>
                            <br />
                            <strong>Scale of Pay:</strong> Rs. 77,840 – 1,36,520
                        </p>
                    </div>

                    <Section title="Eligibility Criteria">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <AcademicCapIcon className="w-10 h-10 text-sunrise-orange mr-4 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-charcoal-gray dark:text-white text-lg">Qualification</h4>
                                        <p className="text-sm">Must be a holder of a Degree in Law (LLB) and must have enrolled as an Advocate.</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <CalendarIcon className="w-10 h-10 text-sunrise-orange mr-4 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-charcoal-gray dark:text-white text-lg">Age Limit (Direct)</h4>
                                        <ul className="text-sm list-disc list-inside space-y-1">
                                            <li><strong>General:</strong> 35 Years</li>
                                            <li><strong>OBC (IIA/IIB/IIIA/IIIB):</strong> 38 Years</li>
                                            <li><strong>SC / ST / Category-I:</strong> 40 Years</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-soft-gray/30 dark:bg-slate-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700">
                                <h4 className="font-bold mb-3 flex items-center text-empower-blue dark:text-blue-400">
                                    <UsersIcon className="w-5 h-5 mr-2" /> In-service Candidates
                                </h4>
                                <p className="text-xs mb-2">For candidates working in High Court/District Judiciary or as Asst. Public Prosecutors:</p>
                                <ul className="text-xs list-disc list-inside space-y-1 opacity-80">
                                    <li>Max Age: 43 Years (SC/ST/Cat-1)</li>
                                    <li>Max Age: 40 Years (Others)</li>
                                </ul>
                            </div>
                        </div>
                    </Section>

                    <Section title="Selection Process">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            {[
                                { title: 'Prelims', sub: 'Objective', marks: '100', icon: <ClipboardListIcon className="w-6 h-6" /> },
                                { title: 'Mains', sub: 'Descriptive', marks: '400', icon: <PencilAltIcon className="w-6 h-6" /> },
                                { title: 'Viva-Voce', sub: 'Interview', marks: '100', icon: <UsersIcon className="w-6 h-6" /> },
                                { title: 'Computer', sub: 'Test', marks: '25', icon: <DesktopComputerIcon className="w-6 h-6" /> }
                            ].map((stage, idx) => (
                                <div key={idx} className="p-5 bg-white dark:bg-slate-800 border border-gray-100 dark:border-gray-700 rounded-xl text-center shadow-sm">
                                    <div className="text-sunrise-orange mx-auto mb-3 flex justify-center">{stage.icon}</div>
                                    <h4 className="font-bold text-sm">{stage.title}</h4>
                                    <p className="text-[10px] uppercase tracking-wider text-gray-500">{stage.sub}</p>
                                    <p className="mt-2 font-bold text-empower-blue dark:text-blue-400">{stage.marks} Marks</p>
                                </div>
                            ))}
                        </div>
                    </Section>

                    <Section title="Examination Syllabus">
                        <div className="space-y-6">
                            <div className="bg-soft-gray/20 dark:bg-slate-800/50 p-6 rounded-2xl">
                                <h3 className="text-xl font-bold text-encourage-red mb-4">1. Preliminary Syllabus (Objective)</h3>
                                <div className="grid sm:grid-cols-2 gap-6 text-sm">
                                    <div>
                                        <h4 className="font-bold text-empower-blue dark:text-blue-400 mb-2">Part A & B: Civil & Criminal Law</h4>
                                        <p className="opacity-90">CPC, NI Act, Transfer of Property, Contract Act, Specific Relief, Constitution, Karnataka Rent Act.</p>
                                        <p className="mt-2 font-bold text-xs text-sunrise-orange">Includes New Laws: BNS, BNSS, BSA (2023)</p>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-empower-blue dark:text-blue-400 mb-2">Part C: General Knowledge</h4>
                                        <p className="opacity-90">Test of reasoning and mental ability.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-soft-gray/20 dark:bg-slate-800/50 p-6 rounded-2xl">
                                <h3 className="text-xl font-bold text-encourage-red mb-4">2. Main Written Exam (4 Papers)</h3>
                                <div className="space-y-4">
                                    <div className="flex items-start">
                                        <div className="bg-empower-blue text-white p-2 rounded-lg mr-4 mt-1 font-bold text-xs">I</div>
                                        <div>
                                            <h4 className="font-bold">Translation Paper (100 Marks)</h4>
                                            <p className="text-sm">English to Kannada and Kannada to English translation of legal documents and depositions.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="bg-empower-blue text-white p-2 rounded-lg mr-4 mt-1 font-bold text-xs">II</div>
                                        <div>
                                            <h4 className="font-bold">Law Paper I (100 Marks)</h4>
                                            <p className="text-sm">CPC, CrPC (BNSS), Evidence (BSA), Principles of Pleading and the Constitution of India.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="bg-empower-blue text-white p-2 rounded-lg mr-4 mt-1 font-bold text-xs">III</div>
                                        <div>
                                            <h4 className="font-bold">Law Paper II (100 Marks)</h4>
                                            <p className="text-sm">Framing of Issues and Writing of Judgments in Civil Cases.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="bg-empower-blue text-white p-2 rounded-lg mr-4 mt-1 font-bold text-xs">IV</div>
                                        <div>
                                            <h4 className="font-bold">Law Paper III (100 Marks)</h4>
                                            <p className="text-sm">Framing of Charges and Writing of Judgments in Criminal Cases.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Section>

                    <div className="text-center mt-16 bg-empower-blue p-10 rounded-2xl text-white shadow-xl">
                        <h3 className="text-2xl font-bold mb-4">Start Your Judicial Journey</h3>
                        <p className="mb-8 opacity-90">Comprehensive batch covering the updated 2025 syllabus, including intensive training for Judgment Writing and Translation.</p>
                        <CTAButton requiresAuth variant="primary" className="text-lg px-12 bg-white !text-empower-blue hover:bg-soft-gray border-none shadow-lg">
                            Join Foundation Batch
                        </CTAButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CivilJudgePage;
