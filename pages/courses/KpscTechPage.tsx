import React from 'react';
import CTAButton from '../../components/CTAButton';
import { AcademicCapIcon, CalendarIcon, ChatAlt2Icon, PencilAltIcon, CogIcon, CheckCircleIcon } from '../../components/Icons';

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
        <div className="space-y-4 text-charcoal-gray/80">
            {children}
        </div>
    </div>
);

const KpscTechPage: React.FC = () => {
    return (
        <div>
            <PageHeader title="KPSC - Technical Exams (AE/AEE)" />
            <div className="py-20">
                <div className="container mx-auto px-8 max-w-4xl">
                    <Section title="About AE/AEE Exams">
                         <div className="flex items-start">
                            <CogIcon className="w-10 h-10 text-sunrise-orange mr-4 flex-shrink-0" />
                            <p>KPSC recruits Assistant Engineers (AE) and Assistant Executive Engineers (AEE) for various engineering departments of the Karnataka government, such as the Public Works Department (PWD), Water Resources Department (WRD), and Rural Development & Panchayat Raj (RDPR). These roles are critical for the planning, design, and execution of the state's infrastructure projects.</p>
                        </div>
                    </Section>

                    <Section title="Eligibility Criteria">
                       <div className="space-y-6">
                            <div className="flex items-start">
                                <AcademicCapIcon className="w-10 h-10 text-sunrise-orange mr-4 flex-shrink-0" />
                                <div>
                                    <h4 className="font-bold text-charcoal-gray text-lg">Educational Qualification</h4>
                                    <p>Candidates must possess a B.E./B.Tech degree in the relevant engineering discipline (e.g., Civil, Mechanical, Electrical) from a recognized university.</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <CalendarIcon className="w-10 h-10 text-sunrise-orange mr-4 flex-shrink-0" />
                                <div>
                                    <h4 className="font-bold text-charcoal-gray text-lg">Age Limit</h4>
                                    <p>The typical age range is 21 to 35 years, with relaxations applicable for reserved categories.</p>
                                </div>
                            </div>
                             <div className="flex items-start">
                                <ChatAlt2Icon className="w-10 h-10 text-sunrise-orange mr-4 flex-shrink-0" />
                                <div>
                                    <h4 className="font-bold text-charcoal-gray text-lg">Kannada Knowledge</h4>
                                    <p>Candidates must have knowledge of the Kannada language.</p>
                                </div>
                            </div>
                        </div>
                    </Section>

                    <Section title="Exam Pattern">
                        <p>The selection is based on a competitive written examination with no interview stage. The exam is designed to test both general knowledge and domain-specific expertise through two objective papers.</p>
                        <div className="mt-8 grid md:grid-cols-2 gap-8">
                            <div className="p-6 bg-white border-2 border-soft-gray rounded-lg shadow-lg">
                                <h3 className="text-xl font-semibold font-montserrat text-empower-blue mb-2">Paper I: General Paper</h3>
                                <p className="font-bold text-sunrise-orange mb-3">200 Marks</p>
                                <p className="text-sm mb-4">This paper assesses the candidate's overall awareness and mental ability.</p>
                                <ul className="space-y-2 text-sm">
                                    <li className="flex items-start"><CheckCircleIcon className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" /><span>General Knowledge & Current Events</span></li>
                                    <li className="flex items-start"><CheckCircleIcon className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" /><span>Indian History & Geography</span></li>
                                    <li className="flex items-start"><CheckCircleIcon className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" /><span>General Mental Ability</span></li>
                                </ul>
                            </div>
                            <div className="p-6 bg-white border-2 border-soft-gray rounded-lg shadow-lg">
                                <h3 className="text-xl font-semibold font-montserrat text-empower-blue mb-2">Paper II: Specific Paper</h3>
                                <p className="font-bold text-sunrise-orange mb-3">200 Marks</p>
                                <p className="text-sm mb-4">This paper is dedicated to the candidate's core engineering discipline.</p>
                                <ul className="space-y-2 text-sm">
                                    <li className="flex items-start"><CheckCircleIcon className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" /><span>Core Technical Syllabus</span></li>
                                    <li className="flex items-start"><CheckCircleIcon className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" /><span>In-depth questions from the chosen branch (Civil, Mechanical, etc.)</span></li>
                                </ul>
                            </div>
                        </div>
                        <p className="mt-6 text-center font-semibold">The final merit list is prepared based on the total marks obtained in both papers.</p>
                    </Section>

                    <div className="text-center mt-16">
                        <CTAButton requiresAuth variant="primary" className="text-lg">Enroll in AE/AEE Coaching</CTAButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KpscTechPage;