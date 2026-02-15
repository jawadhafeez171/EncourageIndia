
import React from 'react';
import CTAButton from '../../components/CTAButton';
import { ShieldCheckIcon, PencilAltIcon, UsersIcon, ChevronRightIcon, CheckCircleIcon, LightningBoltIcon } from '../../components/Icons';
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
        <div className="space-y-4 text-charcoal-gray/80">
            {children}
        </div>
    </div>
);

const PsiPcPage: React.FC = () => {
    return (
        <div className="bg-white dark:bg-slate-900 transition-colors duration-300">
            <SEO
                title="PSI & PC Integrated Coaching | Karnataka Police Recruitment Prep"
                description="Excel in KSP recruitments with our integrated PSI & PC program. Expert academic classes for Paper I & II combined with physical training guidance."
                url="https://encourageindiaias.in/courses/psi-pc"
            />
            <PageHeader title="PSI & PC Integrated Program" />
            <div className="py-20">
                <div className="container mx-auto px-8 max-w-5xl">
                    <Section title="Uniformed Services Coaching">
                        <div className="flex items-start">
                            <ShieldCheckIcon className="w-12 h-12 text-sunrise-orange mr-4 flex-shrink-0" />
                            <p className="text-lg leading-relaxed">
                                Join the elite Karnataka State Police force with our integrated coaching program designed for both <strong>Police Sub-Inspector (PSI)</strong> and <strong>Police Constable (PC)</strong> aspirants. Our "Uniformed Services" batch focuses on holistic development—combining rigorous academic preparation with expert physical training guidance—to ensure you are ready for every stage of the selection process.
                            </p>
                        </div>
                    </Section>

                    <Section title="Why This Program?">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white border border-soft-gray p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                <h3 className="font-bold text-empower-blue text-xl mb-2 flex items-center">
                                    <LightningBoltIcon className="w-5 h-5 mr-2 text-sunrise-orange" />
                                    Dual Focus Strategy
                                </h3>
                                <p className="text-sm">Comprehensive syllabus coverage that caters to the depth required for PSI (Descriptive + Objective) and the speed required for PC (Objective).</p>
                            </div>
                            <div className="bg-white border border-soft-gray p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                <h3 className="font-bold text-empower-blue text-xl mb-2 flex items-center">
                                    <UsersIcon className="w-5 h-5 mr-2 text-sunrise-orange" />
                                    Physical Guidance
                                </h3>
                                <p className="text-sm">We don't just teach in the classroom. Our mentors provide guidance for the Physical Standard Test (PST) and Endurance Test (ET) ensuring you are field-ready.</p>
                            </div>
                            <div className="bg-white border border-soft-gray p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                <h3 className="font-bold text-empower-blue text-xl mb-2 flex items-center">
                                    <CheckCircleIcon className="w-5 h-5 mr-2 text-sunrise-orange" />
                                    Bilingual Classes
                                </h3>
                                <p className="text-sm">Classes conducted in both Kannada and English to help you master the translation paper in PSI and understand concepts clearly.</p>
                            </div>
                            <div className="bg-white border border-soft-gray p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                <h3 className="font-bold text-empower-blue text-xl mb-2 flex items-center">
                                    <PencilAltIcon className="w-5 h-5 mr-2 text-sunrise-orange" />
                                    Test Series Included
                                </h3>
                                <p className="text-sm">Regular full-length mock tests for both PSI and PC patterns to track progress and improve time management.</p>
                            </div>
                        </div>
                    </Section>

                    <Section title="Exam Overview & Patterns">
                        <div className="space-y-8">
                            {/* PSI Section */}
                            <div className="bg-soft-gray/30 p-6 rounded-xl border border-gray-200">
                                <h3 className="text-2xl font-bold font-montserrat text-charcoal-gray mb-4">Police Sub-Inspector (PSI)</h3>
                                <p className="mb-4 text-sm">A highly responsible Group-C post requiring leadership and legal knowledge.</p>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <h4 className="font-bold text-empower-blue mb-2">Selection Stages</h4>
                                        <ul className="list-disc list-inside text-sm space-y-1">
                                            <li>Physical Standard & Endurance Test (Qualifying)</li>
                                            <li>Written Exam (Paper I: Descriptive, Paper II: Objective)</li>
                                            <li>Medical Exam & Document Verification</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-empower-blue mb-2">Key Subjects</h4>
                                        <ul className="list-disc list-inside text-sm space-y-1">
                                            <li>Essay Writing, Translation (Eng-Kan)</li>
                                            <li>General Studies (History, Geo, Polity)</li>
                                            <li>Mental Ability & Current Affairs</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* PC Section */}
                            <div className="bg-soft-gray/30 p-6 rounded-xl border border-gray-200">
                                <h3 className="text-2xl font-bold font-montserrat text-charcoal-gray mb-4">Police Constable (PC)</h3>
                                <p className="mb-4 text-sm">The foundational role of the police force, requiring physical agility and general awareness.</p>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <h4 className="font-bold text-empower-blue mb-2">Selection Stages</h4>
                                        <ul className="list-disc list-inside text-sm space-y-1">
                                            <li>Written Exam (Objective MCQ)</li>
                                            <li>Physical Standard & Endurance Test (1:5 Ratio)</li>
                                            <li>Medical Exam</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-empower-blue mb-2">Key Subjects</h4>
                                        <ul className="list-disc list-inside text-sm space-y-1">
                                            <li>General Knowledge & Science</li>
                                            <li>Indian Constitution & History</li>
                                            <li>Psychology & Moral Education</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Section>

                    <div className="bg-gradient-to-r from-empower-blue to-blue-800 rounded-2xl p-8 text-white text-center mt-12 shadow-xl">
                        <h2 className="text-3xl font-bold font-montserrat mb-4">Ready to Wear the Khaki?</h2>
                        <p className="mb-8 text-lg opacity-90 max-w-2xl mx-auto">Start your physical and academic preparation today with the best faculty in Karnataka.</p>
                        <CTAButton requiresAuth variant="secondary" className="bg-white text-empower-blue border-white hover:bg-gray-100 px-8 py-3 text-lg">
                            Enroll in Integrated Batch
                        </CTAButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PsiPcPage;
