import React from 'react';
import CTAButton from '../../components/CTAButton';
import { ScaleIcon, BriefcaseIcon, PencilAltIcon, UsersIcon, CheckCircleIcon, ClipboardListIcon, BookOpenIcon, ClockIcon } from '../../components/Icons';

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

const DistrictJudgePage: React.FC = () => {
    return (
        <div className="bg-white dark:bg-slate-900 transition-colors duration-300">
            <PageHeader title="Higher Judicial Services (District Judge)" />
            
            <div className="py-20">
                <div className="container mx-auto px-8 max-w-5xl">
                    
                    <Section title="Role of a District Judge">
                        <div className="flex flex-col md:flex-row gap-10 items-center">
                            <div className="flex-1">
                                <p className="text-lg leading-relaxed mb-4">
                                    Recruitment to the cadre of <strong>District Judges</strong> (Direct Recruitment) is intended for seasoned legal practitioners. As the highest judicial officer in the district, the role demands exceptional legal mastery, impartiality, and leadership.
                                </p>
                                <p className="text-sm opacity-80">
                                    Our coaching program is specifically designed for practicing advocates, focusing on high-level legal analysis and complex judgment writing.
                                </p>
                            </div>
                            <div className="flex-shrink-0">
                                <div className="bg-soft-gray dark:bg-slate-800 p-8 rounded-full border-4 border-empower-blue/20">
                                    <ScaleIcon className="w-24 h-24 text-sunrise-orange" />
                                </div>
                            </div>
                        </div>
                    </Section>

                    <Section title="Eligibility Criteria">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                                <h4 className="font-bold text-empower-blue dark:text-blue-400 mb-2 flex items-center">
                                    <BriefcaseIcon className="w-5 h-5 mr-2" /> Practice Requirement
                                </h4>
                                <p className="text-sm">Must be a practicing Advocate for a continuous period of not less than <strong>seven years</strong> on the date of notification.</p>
                            </div>
                            <div className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                                <h4 className="font-bold text-empower-blue dark:text-blue-400 mb-2 flex items-center">
                                    <ClockIcon className="w-5 h-5 mr-2" /> Age Limit
                                </h4>
                                <p className="text-sm">Candidates must have attained <strong>35 years</strong> and must not have attained <strong>45 years</strong> (relaxations for SC/ST apply).</p>
                            </div>
                        </div>
                    </Section>

                    <Section title="Examination Pattern">
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="bg-empower-blue text-white w-10 h-10 rounded-full flex items-center justify-center shrink-0 font-bold">1</div>
                                <div className="flex-1">
                                    <h4 className="font-bold">Preliminary Exam (Objective)</h4>
                                    <p className="text-sm opacity-80">Screening test on Civil Law, Criminal Law, and General Knowledge.</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="bg-empower-blue text-white w-10 h-10 rounded-full flex items-center justify-center shrink-0 font-bold">2</div>
                                <div className="flex-1">
                                    <h4 className="font-bold">Main Written Exam (Descriptive)</h4>
                                    <p className="text-sm opacity-80">Includes Translation, Law Paper I (Civil), Law Paper II (Criminal), and Law Paper III (Judgments).</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="bg-empower-blue text-white w-10 h-10 rounded-full flex items-center justify-center shrink-0 font-bold">3</div>
                                <div className="flex-1">
                                    <h4 className="font-bold">Viva-Voce (Interview)</h4>
                                    <p className="text-sm opacity-80">Testing suitability, personality, and grasp of legal principles.</p>
                                </div>
                            </div>
                        </div>
                    </Section>

                    <Section title="Core Syllabus Highlights">
                        <div className="bg-soft-gray/30 dark:bg-slate-800 p-8 rounded-2xl border border-dashed border-gray-300 dark:border-gray-600">
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-bold mb-3 flex items-center">
                                        <BookOpenIcon className="w-5 h-5 mr-2 text-sunrise-orange" /> Substantive & Procedural Law
                                    </h4>
                                    <ul className="text-sm space-y-2">
                                        <li>• Constitution of India</li>
                                        <li>• CPC & CrPC (BNSS)</li>
                                        <li>• Evidence Act (BSA)</li>
                                        <li>• IPC (BNS) & Local Laws</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-bold mb-3 flex items-center">
                                        <PencilAltIcon className="w-5 h-5 mr-2 text-sunrise-orange" /> Judgment Writing
                                    </h4>
                                    <ul className="text-sm space-y-2">
                                        <li>• Framing of Issues & Charges</li>
                                        <li>• Analysis of Evidence</li>
                                        <li>• Writing Intermediate & Final Orders</li>
                                        <li>• Recent Landmark Judgments</li>
                                    </ul>
                                </div>
                            </div>
                            <p className="mt-6 text-xs text-center font-semibold text-encourage-red italic">
                                *All subjects updated as per the latest 2026-27 notification guidelines including New Criminal Laws.
                            </p>
                        </div>
                    </Section>

                    <div className="text-center mt-16">
                        <CTAButton requiresAuth variant="primary" className="text-lg px-12 shadow-orange-500/20">
                            Join HJS Specialized Batch for 2026-27
                        </CTAButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DistrictJudgePage;