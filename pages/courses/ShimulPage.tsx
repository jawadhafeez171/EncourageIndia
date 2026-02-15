import React from 'react';
import CTAButton from '../../components/CTAButton';
import { BriefcaseIcon, PencilAltIcon, UsersIcon, CheckCircleIcon, AcademicCapIcon, CalendarIcon } from '../../components/Icons';
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

const ShimulPage: React.FC = () => {
    return (
        <div className="bg-white dark:bg-slate-900 transition-colors duration-300">
            <SEO
                title="KMF SHIMUL Exam Coaching | Shivamogga Milk Federation Recruitment"
                description="Expert coaching for KMF SHIMUL recruitment. Specialized training for Extension Officer, Marketing Assistant, and Administrative roles in Karnataka's co-operative sector."
                url="https://encourageindiaias.in/courses/shimul-kmf"
            />
            <PageHeader title="KMF - SHIMUL Recruitment 2024" />
            <div className="py-20">
                <div className="container mx-auto px-8 max-w-4xl">
                    <Section title="About the SHIMUL Recruitment">
                        <p>The Shivamogga, Davanagere, and Chitradurga District Co-operative Milk Producers' Societies' Union (SHIMUL), a unit of the Karnataka Milk Federation (KMF), has announced a major recruitment drive for 194 vacancies. This is a golden opportunity for candidates seeking a stable and rewarding career in one of Karnataka's leading co-operative sector organizations. Our new flagship course is meticulously designed to help you excel in this examination.</p>
                    </Section>

                    <Section title="Overview of Posts">
                        <div className="flex items-start">
                            <BriefcaseIcon className="w-10 h-10 text-sunrise-orange mr-4 flex-shrink-0" />
                            <div>
                                <p>The recruitment covers a wide range of technical and non-technical positions, including:</p>
                                <ul className="list-disc list-inside mt-2 space-y-2">
                                    <li>Assistant Manager (A.H/A.I)</li>
                                    <li>Technical Officer (D.T)</li>
                                    <li>Marketing Officer / Public Relations Officer</li>
                                    <li>Extension Officer</li>
                                    <li>Administrative Assistant</li>
                                    <li>Junior System Operator / Clerk-Cum-Computer Operator</li>
                                    <li>Marketing Assistant / Chemist / Junior Technician</li>
                                </ul>
                            </div>
                        </div>
                    </Section>

                    <Section title="General Eligibility Criteria">
                        <div className="space-y-6">
                            <div className="flex items-start">
                                <AcademicCapIcon className="w-10 h-10 text-sunrise-orange mr-4 flex-shrink-0" />
                                <div>
                                    <h4 className="font-bold text-charcoal-gray text-lg">Educational Qualification</h4>
                                    <p>Eligibility varies by post, ranging from SSLC and PUC to specific Diplomas, Bachelor's degrees (B.Sc, B.Com, B.E.), and professional degrees (M.V.Sc, MBA) depending on the role's requirements.</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <CalendarIcon className="w-10 h-10 text-sunrise-orange mr-4 flex-shrink-0" />
                                <div>
                                    <h4 className="font-bold text-charcoal-gray text-lg">Age Limit</h4>
                                    <p>The general age limit is between 18 to 35 years. Age relaxations are applicable for various reserved categories as per government norms.</p>
                                </div>
                            </div>
                        </div>
                    </Section>

                    <Section title="Selection Process">
                        <p>The selection process primarily consists of a competitive written examination to assess the knowledge and aptitude of the candidates. For some higher-level posts, this may be followed by an interview.</p>
                        <div className="mt-8 p-6 bg-white border-2 border-soft-gray rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold font-montserrat text-empower-blue mb-2 flex items-center"><PencilAltIcon className="w-6 h-6 mr-2" />Written Examination</h3>
                            <p className="text-sm mb-4">The written test is an objective (MCQ) based examination. The syllabus is designed to evaluate the candidate's proficiency in relevant subjects.</p>
                            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
                                <div className="flex items-start"><CheckCircleIcon className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" /><span>General Knowledge & Current Affairs</span></div>
                                <div className="flex items-start"><CheckCircleIcon className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" /><span>General English & General Kannada</span></div>
                                <div className="flex items-start"><CheckCircleIcon className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" /><span>Computer & Co-operative Sector Knowledge</span></div>
                                <div className="flex items-start"><CheckCircleIcon className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" /><span>Subject-specific knowledge for technical posts</span></div>
                                <div className="flex items-start"><CheckCircleIcon className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" /><span>Quantitative Aptitude & Reasoning</span></div>
                            </div>
                        </div>
                    </Section>

                    <div className="text-center mt-16">
                        <CTAButton requiresAuth variant="primary" className="text-lg">Enroll in SHIMUL Course</CTAButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShimulPage;