import React from 'react';
import CTAButton from '../../components/CTAButton';
import { AcademicCapIcon, CalendarIcon, PencilAltIcon, BriefcaseIcon, ChevronRightIcon, UsersIcon, CheckCircleIcon } from '../../components/Icons';

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

const GroupBPage: React.FC = () => {
    return (
        <div>
            <PageHeader title="KPSC - Group B Posts" />
            <div className="py-20">
                <div className="container mx-auto px-8 max-w-4xl">
                    <Section title="About Group B Posts">
                        <div className="flex items-start">
                            <BriefcaseIcon className="w-10 h-10 text-sunrise-orange mr-4 flex-shrink-0" />
                            <p>The Karnataka Public Service Commission (KPSC) periodically recruits for various Group 'B' posts, both technical and non-technical, across different state government departments. These roles are essential for the mid-level administration and execution of government functions. Examples include posts like Commercial Tax Officer, Assistant Director in various departments, and other specialized roles.</p>
                        </div>
                    </Section>

                    <Section title="Eligibility Criteria">
                        <div className="space-y-6">
                            <div className="flex items-start">
                                <AcademicCapIcon className="w-10 h-10 text-sunrise-orange mr-4 flex-shrink-0" />
                                <div>
                                    <h4 className="font-bold text-charcoal-gray text-lg">Educational Qualification</h4>
                                    <p>Varies significantly based on the specific post. Non-technical posts generally require a Bachelor's degree, while technical posts require specific professional or technical degrees (e.g., B.E., B.Sc. in a relevant field).</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <CalendarIcon className="w-10 h-10 text-sunrise-orange mr-4 flex-shrink-0" />
                                <div>
                                    <h4 className="font-bold text-charcoal-gray text-lg">Age Limit</h4>
                                    <p>The general age limit is typically 21 to 35 years, with standard relaxations for reserved categories.</p>
                                </div>
                            </div>
                        </div>
                    </Section>

                    <Section title="Exam Pattern">
                        <p>The selection process for Group B posts usually involves a competitive written examination, which may be followed by an interview for certain posts.</p>
                         <div className="mt-8 flex flex-col md:flex-row items-stretch md:items-center justify-center gap-4 md:gap-0">
                            {/* Stage 1 */}
                            <div className="flex-1 text-center p-6 bg-white border-2 border-soft-gray rounded-lg shadow-lg w-full">
                                <div className="bg-empower-blue text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">1</div>
                                <h3 className="text-xl font-semibold font-montserrat text-empower-blue mb-2">Written Exam</h3>
                                <p className="text-sm">An objective MCQ test with General and Specific papers.</p>
                            </div>
                            
                            <ChevronRightIcon className="w-8 h-8 text-sunrise-orange mx-4 self-center rotate-90 md:rotate-0" />
                            
                            {/* Stage 2 */}
                            <div className="flex-1 text-center p-6 bg-white border-2 border-soft-gray rounded-lg shadow-lg w-full">
                                <div className="bg-empower-blue text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">2</div>
                                <h3 className="text-xl font-semibold font-montserrat text-empower-blue mb-2">Interview</h3>
                                <p className="text-sm">(For some posts) A final personality test for shortlisted candidates.</p>
                            </div>
                        </div>
                        <div className="mt-8 grid md:grid-cols-2 gap-8">
                            <div className="p-6 bg-soft-gray/50 rounded-lg">
                                <h3 className="text-lg font-semibold font-montserrat text-encourage-red mb-2 flex items-center"><PencilAltIcon className="w-5 h-5 mr-2"/>Paper I (General Paper)</h3>
                                <p className="text-sm">Covers General Knowledge of national and international importance, current affairs, Indian history, geography, polity, and general mental ability.</p>
                            </div>
                             <div className="p-6 bg-soft-gray/50 rounded-lg">
                                <h3 className="text-lg font-semibold font-montserrat text-encourage-red mb-2 flex items-center"><CheckCircleIcon className="w-5 h-5 mr-2"/>Paper II (Specific Paper)</h3>
                                <p className="text-sm">This paper tests knowledge related to the specific post. It includes subjects relevant to the role, such as commerce, economics, or a specific technical discipline.</p>
                            </div>
                        </div>
                    </Section>

                    <div className="text-center mt-16">
                        <CTAButton requiresAuth variant="primary" className="text-lg">Join Group B Exam Course</CTAButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GroupBPage;